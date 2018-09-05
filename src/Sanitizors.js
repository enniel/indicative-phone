import { parse, format } from 'libphonenumber-js'

const FORMATS = [
  'International',
  'National',
  'E.164',
  'RFC3966'
]

/**
 * @description parse a phone number
 * @method parsePhone
 * @param  {String}       value
 * @param  {Array}       args
 * @return {String}
 * @public
 */
export const parsePhone = (value, args) => {
  let country = 'US'

  if (args instanceof Array && args.length) {
    country = args[0]
  }

  if (typeof (value) !== 'string') {
    return value
  }

  const { phone } = parse(value, country)

  return phone || value
}

/**
 * @description format a phone number
 * @method formatPhone
 * @param  {String}       value
 * @param  {Array}       args
 * @return {String}
 * @public
 */
export const formatPhone = (value, args) => {
  const options = {
    country: 'US',
    format: 'International'
  }

  if (args instanceof Array && args.length) {
    if (FORMATS.includes(args[0])) {
      options.format = args[0]
    } else if (FORMATS.includes(args[1])) {
      options.country = args[0]
      options.format = args[1]
    } else {
      options.country = args[0]
    }
  }

  if (typeof (value) !== 'string') {
    return value
  }

  return format(value, options.country, options.format)
}

export default {
  parsePhone, formatPhone
}
