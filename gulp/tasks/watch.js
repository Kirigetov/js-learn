var gulp   = require('gulp');
var config = require('../config');

gulp.task('watch', 
    ['copy:watch',
    
    'iconfont:watch',
    'sprite:svg:watch',
    'sprite:png:watch',
    'list-pages:watch',
    'js:watch',
    'sass:watch'
]);
