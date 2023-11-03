export async function getResponse({ method, uri }: { method: string; uri: string }) {
  const response = await fetch(uri, {
    method: method,
    credentials: "include",
    headers: {
        'X-RapidAPI-Key': '36b699d282msh70fb07552811068p116a52jsne2b2100a6415',
        'X-RapidAPI-Host': 'asos10.p.rapidapi.com'
    }
  });

  return response;
}

export async function getCategories() {
  const response = await getResponse({
    method: "GET",
    uri: "https://asos10.p.rapidapi.com/api/v1/getCategories",
  });

  if (response) {
    return response.json();
  }
  return null;

}
