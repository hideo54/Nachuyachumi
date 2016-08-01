const gulp = require('gulp');
const pug = require('gulp-pug');

gulp.task('pug', () => {
    return gulp.src(['pug/*.pug', '!pug/_*.pug'])
        .pipe(pug())
        .pipe(gulp.dest('web/'));
});

gulp.task('watch', ['pug'], () => {
    gulp.watch('pug/*.pug', ['pug']);
});
