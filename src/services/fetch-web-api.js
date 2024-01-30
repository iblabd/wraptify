async function fetchWebApi(token, endpoint, method, revalidate, body) {
  const res = await fetch(
    `https://api.spotify.com/${endpoint}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method,
      body: JSON.stringify(body),
    },
    { next: { revalidate: revalidate } },
  )
  return await res.json()
}

export default fetchWebApi
