import config from '../config'

export const createLocalLink = url => {
  if (!url || url === '#') return '/'
  return url.replace(config.wordPressURL, '')
}

export const getRandomInt = (max = 1, min = 0) => {
  return (Math.floor(Math.random() * Math.floor(max + 1))) + min
}

export const setCookie = (key, value) => {
  // Requiring function causes error during builds as the code tries to reference document
  if (typeof document !== 'undefined') {
    document.cookie = `${key}=${value}`
    return true
  }
  return false
}

export const hasCookie = (key) => {
  // Requiring function causes error during builds as the code tries to reference document
  if (typeof document !== 'undefined') {
    return document.cookie.split(';').some((item) => item.trim().startsWith(key))
  }
  return false
}
