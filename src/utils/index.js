import config from '../config'

export const createLocalLink = url => {
  if (url === '#') return null

  const urlWithoutDomain = url.replace(config.wordPressURL, '')
  return url ? urlWithoutDomain : url
}
