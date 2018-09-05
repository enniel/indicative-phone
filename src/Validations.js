import RawValidations from './RawValidations'

const existy = (input) => {
  if (typeof (input) === 'string') {
    return input.trim().length > 0
  }
  return (input !== null && input !== undefined)
}

/**
 * @description validate phone number.
 * @method phone
 * @param  {Object} data
 * @param  {String} field
 * @param  {String} message
 * @param  {Array} args
 * @param  {Function} get
 * @return {Object}
 * @public
 */
export const phone = function (data, field, message, args, get) {
  return new Promise((resolve, reject) => {
    const fieldValue = get(data, field)
    if (!existy(fieldValue)) {
      resolve('validation skipped')
      return
    }
    if (typeof fieldValue === 'string' && RawValidations.phone(fieldValue, ...args)) {
      resolve('validation passed')
    } else {
      reject(message)
    }
  })
}

export default {
  phone
}
