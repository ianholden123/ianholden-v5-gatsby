import config from '../config'

export const createLocalLink = url => {
  if (url === '#') return null

  const urlWithoutDomain = url.replace(config.wordPressURL, '')
  return url ? urlWithoutDomain : url
}

export const getRandomInt = (max = 1, min = 0) => {
  return (Math.floor(Math.random() * Math.floor(max + 1))) + min
}
