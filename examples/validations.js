const indicative = require('indicative')
const { Validations, RawValidations } = require('../')

indicative.validations['phone'] = Validations.phone
indicative.is['phone'] = RawValidations.phone

// schema validation
const rules = {
  phone: 'phone:RU,mobile'
}

const data = {
  phone: '+7 (915) 000 00 00'
}

indicative
  .validate(data, rules)
  .then(function () {
    console.log('schema validation passed')
  })

// raw validation
const isMobilePhone = indicative.is.phone('+7 (915) 000 00 00', 'RU', 'mobile')
console.log('phone +7 (915) 000 00 00 is mobile?', isMobilePhone)
