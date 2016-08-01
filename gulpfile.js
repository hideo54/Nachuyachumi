const gulp = require('gulp');
const pug = require('gulp-pug');
const copy = require('gulp-copy');

gulp.task('pug', () => {
    return gulp.src(['pug/*.pug', '!pug/_*.pug'])
        .pipe(pug())
        .pipe(gulp.dest('web/'));
});

gulp.task('watch', ['pug', 'chartjs'], () => {
    gulp.watch('pug/*.pug', ['pug']);
});
