import { decode } from 'html-entities'

export const htmlDecode = (input) => {
  return decode(input)
}
