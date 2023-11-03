import { auth } from "../utils/FireBase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  UserCredential,
  User,
} from "firebase/auth";

export async function SignIn({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<UserCredential | null> {
  const result = await signInWithEmailAndPassword(auth, email, password);
  if (result) {
    console.log('a');
    const user = result.user;
    const token = await user.getIdToken(true);
    console.log(`User is ${token}`);
  }
  return result;
}

export async function SignUp({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<UserCredential | null> {
  const result = await createUserWithEmailAndPassword(auth, email, password);
  if (result) {
    const user = result.user;
    const token = await user.getIdToken(true);
    console.log(`User is ${token}`);
  }
  return result;
}

export async function SignOut(): Promise<void> {
    await auth.signOut();
}

export async function CheckAuth(): Promise<boolean> {
  return new Promise((resolve) => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const token = await user.getIdToken(true);
        console.log('authenticated');
        resolve(true);
      } else {
        console.log('not authenticated');
        resolve(false);
      }
      unsubscribe();
    });
  });
  
}