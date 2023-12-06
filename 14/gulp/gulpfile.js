const {series, parallel} = require('gulp');


function hello(cb){
    console.log('Hello gulp');
    cb();
}
exports.default = hello;

// old syntax
// gulp.task('css', () =>
//   gulp.src(path.css)
//     // .other plugins
//     .pipe(gulp.dest(path.buildStyle))
// );
// New syntax
// function css(){
//     return src(path.css)
//     // other plugins
//     .pipe(dest(path.buildStyle));
// }

function publick(cb){
    console.log('Hello publick fn');
    cb();
}

exports.publick = publick;

function privat(cb){
    console.log('privat');
    cb();
}

exports.multi = parallel(publick, privat, hello);