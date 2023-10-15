import { decode } from 'html-entities'

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
    return document.cookie
      .split(';')
      .some((item) => item.trim().startsWith(key))
  }
  return false
}

export const htmlDecode = (input) => {
  return decode(input)
}
