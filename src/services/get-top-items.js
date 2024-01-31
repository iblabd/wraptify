import fetchWebApi from './fetch-web-api'

async function getTopItems(token, type, timeRange, limit) {
  return (
    await fetchWebApi(
      token,
      `v1/me/top/${type}?time_range=${timeRange}&limit=${limit}`,
      'GET',
      3600,
    )
  ).items
}

export default getTopItems
