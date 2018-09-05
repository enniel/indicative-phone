import { isValidNumber, getNumberType } from 'libphonenumber-js'

const TYPES = [
  'premium_rate',
  'toll_free',
  'shared_cost',
  'voip',
  'personal_number',
  'pager',
  'uan',
  'voicemail',
  'fixed_line_or_mobile',
  'fixed_line',
  'mobile'
]

/**
 * @description validate phone number.
 * @method phone
 * @param  {Mixed} input
 * @return {Boolean}
 * @public
 */
export const phone = (input, ...args) => {
  let country = 'US'
  let type = null
  if (args instanceof Array && args.length) {
    if (TYPES.includes(args[0])) {
      type = args[0]
    } else if (args[1]) {
      country = args[0]
      type = args[1]
    } else {
      country = args[0]
    }
  }
  const isValid = isValidNumber(input, country)
  if (isValid && type) {
    if (getNumberType(input, country).toLowerCase() === type) {
      return true
    }
    return false
  }
  return isValid
}

export default {
  phone
}
