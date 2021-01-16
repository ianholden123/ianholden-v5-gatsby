import {
  stripHtmlFromString
} from './index'

describe('stripHtmlFromString', () => {
  test('it should remove any HTML from a string', () => {
    const htmlString = '<div><p>This is some <strong>strong</strong> HTML. <br />Try and strip the HTML from this one!</p></div>'
    const outputString = 'This is some strong HTML. Try and strip the HTML from this one!'
    expect(stripHtmlFromString(htmlString)).toEqual(outputString)
  })
})
