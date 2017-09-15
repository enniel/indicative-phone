'use strict'

/**
 * indicative-phone
 * Copyright(c) 2017 Evgeny Razumov
 * MIT Licensed
 */

const { Sanitizors } = require('../src')
const chai = require('chai')
const expect = chai.expect

describe('Sanitizers', function () {
  it('should parse phone number', function () {
    const sanitized = Sanitizors.parsePhone('+1-213-373-4253')
    expect(sanitized).to.equal('2133734253')
  })

  it('should parse phone number with country code', function () {
    const sanitized = Sanitizors.parsePhone('+7 (800) 555-35-35', ['RU'])
    expect(sanitized).to.equal('8005553535')
  })

  it('should format phone number', function () {
    const sanitized = Sanitizors.formatPhone('2133734253')
    expect(sanitized).to.equal('+1 213 373 4253')
  })

  it('should format phone number with country code', function () {
    const sanitized = Sanitizors.formatPhone('8005553535', ['RU'])
    expect(sanitized).to.equal('+7 800 555 35 35')
  })

  it('should format phone number with country code and international format', function () {
    const sanitized = Sanitizors.formatPhone('8005553535', ['RU', '!i'])
    expect(sanitized).to.equal('+7 800 555 35 35')
  })

  it('should format phone number with country code and national format', function () {
    const sanitized = Sanitizors.formatPhone('8005553535', ['RU', '!n'])
    expect(sanitized).to.equal('800 555-35-35')
  })

  it('should format phone number with country code and international plaintext (E.164) format', function () {
    const sanitized = Sanitizors.formatPhone('8005553535', ['RU', '!ip'])
    expect(sanitized).to.equal('+78005553535')
  })

  it('should format phone number without country code and with international format', function () {
    const sanitized = Sanitizors.formatPhone('2133734253', ['!i'])
    expect(sanitized).to.equal('+1 213 373 4253')
  })

  it('should format phone number without country code and national format', function () {
    const sanitized = Sanitizors.formatPhone('2133734253', ['!n'])
    expect(sanitized).to.equal('(213) 373-4253')
  })

  it('should format phone number with country code and international plaintext (E.164) format', function () {
    const sanitized = Sanitizors.formatPhone('2133734253', ['!ip'])
    expect(sanitized).to.equal('+12133734253')
  })

  it('should return value if parsed value is not phone', function () {
    const sanitized = Sanitizors.parsePhone('foo')
    expect(sanitized).to.equal('foo')
  })
})
