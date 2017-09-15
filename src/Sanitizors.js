'use strict'

/**
 * indicative-phone
 * Copyright(c) 2017 Evgeny Razumov
 * MIT Licensed
 */

const libPhoneNumber = require('libphonenumber-js')
const _ = require('lodash')

const FORMATS = {
  '!i': 'International',
  '!n': 'National',
  '!ip': 'International_plaintext'
}

/**
 * @module Sanitizors
 * @description List of sanitizors
 * @type {Object}
 */
let Sanitizors = exports = module.exports = {}

/**
 * @description parse a phone number
 * @method parsePhone
 * @param  {String}       value
 * @param  {Array}       args
 * @return {String}
 * @public
 */
Sanitizors.parsePhone = function (value, args) {
  let country = 'US'

  if (args instanceof Array && args.length) {
    country = args[0]
  }

  if (typeof (value) !== 'string') {
    return value
  }

  const { phone } = libPhoneNumber.parse(value, country)

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
Sanitizors.formatPhone = function (value, args) {
  const options = {
    country: 'US',
    format: 'International'
  }

  if (args instanceof Array && args.length) {
    let country = 'US'
    let format = '!i'
    if (_.includes(_.keys(FORMATS), args[0])) {
      format = args[0]
    } else if (args[1]) {
      country = args[0]
      format = args[1]
    } else {
      country = args[0]
    }
    options.country = country
    if (_.includes(_.keys(FORMATS), format)) {
      options.format = FORMATS[format]
    }
  }

  if (typeof (value) !== 'string') {
    return value
  }

  return libPhoneNumber.format(value, options.country, options.format)
}
