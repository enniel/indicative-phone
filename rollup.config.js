import nodeResolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import json from 'rollup-plugin-json'
import commonjs from 'rollup-plugin-commonjs'

const env = process.env.NODE_ENV
const config = {
  input: 'src/index.js',
  plugins: []
}

if (env === 'es' || env === 'cjs') {
  config.output = { format: env, indent: false }
  config.external = ['symbol-observable']
  config.plugins.push(
    babel({
      plugins: ['external-helpers']
    })
  )
}

if (env === 'development' || env === 'production') {
  config.output = { format: 'umd', name: 'indicative-phone', indent: false }
  config.plugins.push(
    commonjs(),
    json({
      preferConst: true,
      include: 'node_modules/**'
    }),
    nodeResolve({
      modules: true
    }),
    babel({
      exclude: 'node_modules/*',
      plugins: ['external-helpers']
    })
  )
}

if (env === 'production') {
  config.plugins.push(
    terser({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false
      }
    })
  )
}

export default config
