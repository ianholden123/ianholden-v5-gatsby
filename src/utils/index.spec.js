import { htmlDecode } from './index'

describe('htmlDecode', () => {
  test('it should convert the "&" ASCII string into a human-readable character', () => {
    expect(htmlDecode('&amp;')).toEqual('&')
    expect(htmlDecode('&')).toEqual('&')
  })
})
