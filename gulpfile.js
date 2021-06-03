global.$ = require('./gulp.config')
$.path.tasks.forEach(task => require(task)())
if($.dev) $.gulp.series($.gulp.parallel('css', 'html', 'js', 'img', 'font', 'icons', 'watch', 'server'))()
else {
    $.gulp.src($.path.serverDir, { read: false })
    .pipe($.GP.clean({ force: true }))
    .pipe($.gulp.dest('./app/')
        .on('end', $.gulp.series($.gulp.parallel('css', 'html', 'js', 'img', 'font', 'icons')))
    )
}