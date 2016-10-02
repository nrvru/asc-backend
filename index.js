require('babel-register')({
  plugins: [
    'transform-es2015-modules-commonjs',
    'transform-async-to-generator',
  ],
  presets: ['es2015'],
});
require('babel-polyfill');

require('./server');
