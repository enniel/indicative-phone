# Indivative Phone Validator and Sanitizor

[![Greenkeeper badge](https://badges.greenkeeper.io/enniel/indicative-phone.svg)](https://greenkeeper.io/)

Easy phone number validation, parsing and formatting for [indicative](http://indicative.adonisjs.com/).

## Installation

```bash
$ npm i indicative-phone --save
```
or

```bash
$ yarn add indicative-phone
```

## Validation example

See [examples/validations.js](https://github.com/enniel/indivative-phone/tree/master/examples/validations.js)

Supported types:
 - premium_rate
 - toll_free
 - shared_cost
 - voip
 - personal_number
 - pager
 - uan
 - voicemail
 - fixed_line_or_mobile
 - fixed_line
 - mobile

For more information about supported types see [libphonenumber-js](https://github.com/halt-hammerzeit/libphonenumber-js).

## Sanitization example

See [examples/sanitizors.js](https://github.com/enniel/indivative-phone/tree/master/examples/sanitizors.js)

## Credits

- [Evgeni Razumov](https://github.com/enniel)

## Support

Having trouble? [Open an issue](https://github.com/enniel/indicative-phone/issues/new)!

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
