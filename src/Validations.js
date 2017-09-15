'use strict'

/**
 * indicative-phone
 * Copyright(c) 2017 Evgeny Razumov
 * MIT Licensed
 */

const Modes = require('indicative/src/Modes')
const Raw = require('indicative/src/Raw')
const RawValidations = require('./RawValidations')

/**
 * @module Validations
 * @description List of schema validations
 * @type {Object}
 */
let Validations = exports = module.exports = {}

/**
 * @description figures out whether value can be skipped
 * or not from validation, as non-existing values
 * should be validated using required.
 * @method skippable
 * @param  {Mixed}  value
 * @return {Boolean}
 * @private
 */
const skippable = function (value) {
  return Modes.get() === 'strict' ? typeof value === 'undefined' : !Raw.existy(value)
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
Validations.phone = function (data, field, message, args, get) {
  return new Promise((resolve, reject) => {
    const fieldValue = get(data, field)
    if (skippable(fieldValue)) {
      resolve('validation skipped')
      return
    }
    const isValid = RawValidations.phone(fieldValue, ...args)
    if (isValid) {
      resolve('validation passed')
    } else {
      reject(message)
    }
  })
}
