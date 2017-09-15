'use strict'

/**
 * indicative-phone
 * Copyright(c) 2017 Evgeny Razumov
 * MIT Licensed
 */

const libPhoneNumber = require('libphonenumber-js')
const _ = require('lodash')

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
 * @module Validations
 * @description List of schema validations
 * @type {Object}
 */
let RawValidations = exports = module.exports = {}

/**
 * @description validate phone number.
 * @method phone
 * @param  {Mixed} input
 * @return {Boolean}
 * @public
 */
RawValidations.phone = function (input, ...args) {
  let country = 'US'
  let type = null
  if (args instanceof Array && args.length) {
    if (_.includes(TYPES, args[0])) {
      type = args[0]
    } else if (args[1]) {
      country = args[0]
      type = args[1]
    } else {
      country = args[0]
    }
  }
  const isValid = libPhoneNumber.isValidNumber(input, country)
  if (isValid && type) {
    if (_.snakeCase(libPhoneNumber.getNumberType(input, country)) === type) {
      return true
    }
    return false
  }
  return isValid
}
