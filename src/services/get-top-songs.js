import fetchWebApi from './fetch-web-api'

async function getTopSongs(token, timeRange) {
  return (
    await fetchWebApi(
      token,
      `v1/me/top/tracks?time_range=${timeRange}&limit=5`,
      'GET',
      3600,
    )
  ).items
}

export default getTopSongs
