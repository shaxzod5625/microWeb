module.exports = () =>
    $.gulp.task('icons', () =>
        $.gulp.src($.path.src.icons)
        .pipe($.gulp.dest($.path.prod.icons))
        .on('end', $.bs.reload)
    )