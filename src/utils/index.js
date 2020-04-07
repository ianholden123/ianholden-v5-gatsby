import config from '../config'

export const createLocalLink = url => {
  if (url === '#') return null

  const urlWithoutDomain = url.replace(config.wordPressURL, '')
  return url ? urlWithoutDomain : url
}

export const createRelativeLink = url => {
  if (!url) return null
  if (url.substr(0, 1) === '/') return url.substr(1)
  return url
}
