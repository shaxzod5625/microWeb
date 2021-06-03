module.exports = () => 
        $.gulp.task('html', () =>
            $.gulp.src($.path.src.html)
                .pipe($.GP.plumber())
                .pipe($.GP.pug())
                .pipe($.gulp.dest($.path.prod.html))
                .on('end', $.bs.reload)
        )