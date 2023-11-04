// webpack.mix.js

let mix = require('laravel-mix');

mix.js('js/app.js', 'dist').setPublicPath('static');
