import fetchWebApi from './fetch-web-api'

async function getTopTracks(token) {
  return (
    await fetchWebApi(
      token,
      'v1/me/top/tracks?time_range=long_term&limit=5',
      'GET',
    )
  ).items
}

export default getTopTracks
