const {series, parallel, src, dest} = require('gulp');
let rename = require("gulp-rename");

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

function moveFile(){
    // return src('site/index.html').pipe(dest('final/'));
    // return src('site/script/*.js').pipe(dest('final/script/'));
    // return src('site/script/**/*.js').pipe(dest('final/script/'));
    // return src(['site/script/**/*.js', 'site/*.html', 'site/style/*.css']).pipe(dest('final/'));
    return src(['site/script/**/*.js', 'site/*.html', 'site/style/*.css', '!site/style/disabled.css']).pipe(dest('final/'));
}

function renamestyle(){
    return src('site/style/disabled.css').pipe(rename('undisabled.css')).pipe(dest('final/new/'));
}

exports.multi = parallel(publick, privat, hello);
exports.movefile = moveFile;
exports.renamestyle = renamestyle;