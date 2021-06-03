module.exports = () => 
    $.gulp.task('css', () =>
    $.gulp.src($.path.src.css)
          .pipe($.GP.plumber())
          .pipe($.GP.sourcemaps.init())
          .pipe($.GP.sass({ outputStyle: 'expanded' }))
          .pipe($.GP.autoprefixer())
          .pipe($.GP.groupCssMediaQueries())
          .pipe($.GP.sass({ outputStyle: 'compressed' }))
          .pipe($.GP.rename('main.min.css'))
          .pipe($.GP.sourcemaps.write('/'))
          .pipe($.gulp.dest($.path.prod.css))
          .on('end', $.bs.reload)
    ) 