import { useRouter } from "next/navigation";
import Link from "next/link";
import { Provider } from "react-redux";
import { store } from "./store/ConfigureStore";

export default function App() {
  return (
    
    <Provider store={store}>
      <nav>
        <Link href="/home">Home</Link>
      </nav>
    </Provider>
  );
}
