import config from '../config'

export const createLocalLink = url => {
  if (url === '#') return null
  return url.replace(config.wordPressURL, '')
}

export const getRandomInt = (max = 1, min = 0) => {
  return (Math.floor(Math.random() * Math.floor(max + 1))) + min
}

export const setCookie = (key, value) => {
  document.cookie = `${key}=${value}`
  return true
}

export const hasCookie = (key) => {
  return document.cookie.split(';').some((item) => item.trim().startsWith(key))
}
