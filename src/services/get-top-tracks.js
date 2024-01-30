import fetchWebApi from './fetch-web-api'

async function getTopTracks(token, timeRange) {
  return (
    await fetchWebApi(
      token,
      `v1/me/top/tracks?time_range=${timeRange}&limit=5`,
      'GET',
    )
  ).items
}

export default getTopTracks
