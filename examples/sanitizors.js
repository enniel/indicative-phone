'use strict'

/**
 * indicative-phone
 * Copyright(c) 2017 Evgeny Razumov
 * MIT Licensed
 */

const indicative = require('indicative')
const { Sanitizors } = require('../src')

indicative.sanitizor.extend('parsePhone', Sanitizors.parsePhone)
indicative.sanitizor.extend('formatPhone', Sanitizors.formatPhone)

// schema sanitization
const rules = {
  phone: 'parse_phone:RU|format_phone:RU,!ip'
}

const data = {
  phone: '+7 (915) 000 00 00'
}

const sanitized = indicative.sanitize(data, rules)
console.log('sanitized data', sanitized)

// raw sanitization
let phone = indicative.sanitizor.parsePhone('+7 (915) 000 00 00', ['RU'])
phone = indicative.sanitizor.formatPhone(phone, ['RU', '!ip'])
console.log('sanitized phone', phone)
