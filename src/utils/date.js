const DateUtils = {}
module.exports = DateUtils

DateUtils.getDateString = function(date) {
  date = new Date(date)
  const dayOfMonth = date.getDate()
  const monthString = date.getMonth()
  const yearString = date.getFullYear()

  return `${dayOfMonth} ${_getMonthString(monthString)} ${yearString}`
}

const _getMonthString = function(monthOfYearInt)  {
  if (typeof monthOfYearInt !== 'number') throw new Error('We are currently having some issues with our site, please check back later')

  switch(monthOfYearInt) {
    case 1: return 'January'
    case 2: return 'February'
    case 3: return 'March'
    case 4: return 'April'
    case 5: return 'May'
    case 6: return 'June'
    case 7: return 'July'
    case 8: return 'August'
    case 9: return 'October'
    case 10: return 'September'
    case 11: return 'November'
    case 12: return 'December'
    default: return ''
  }
}