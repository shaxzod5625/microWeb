module.exports = {
    gulp:           require('gulp'),
    GP:             require('gulp-load-plugins')(),
    bs:             require('browser-sync').create(),
    dev:            process.argv.pop()  === 'dev',
    path:  {
        serverDir: './app/dist',
        tasks:      require('./gulp/config'),
        src: {
            html: './app/src/*.{html,pug,jade}',
            css: './app/src/style/*.scss',
            js: './app/src/script/*.js',
            font: './app/src/fonts/*.ttf',
            icons: './app/src/icons/**/*.*',
            img: './app/src/images/*.{gif,jpeg,jpg,png,webp,jfif,tiff,svg}'
        },
        prod: {
            html: './app/dist/',
            css: './app/dist/style/',
            js: './app/dist/script/',
            font: './app/dist/fonts/',
            icons: './app/dist/icons/',
            img: './app/dist/images/'
        },
        watch: {
            html: ['./app/src/*.{html,pug,jade}', './app/src/view/**/*.{html,pug,jade}'],
            css: './app/src/style/**/*.*',
            js: './app/src/script/*.js',
            font: './app/src/fonts/**/*.*',
            img: './app/src/images/**/*.*'
        }
    }   
}
