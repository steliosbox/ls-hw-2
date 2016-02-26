var gulp        = require('gulp'),
    browserSync = require('browser-sync').create(),
    spritesmith = require('gulp.spritesmith'),
    $ = require('gulp-load-plugins')();

var publicFolder = './public',
    jadeFolder   = './src/jade',
    scssFolder   = './src/scss',
    cssFolder    = publicFolder + '/css',
    imagesFolder = publicFolder + '/img',
    cssFormat = 'scss';

// Static Server + watching scss/html files
gulp.task('server', ['jade', 'sass'], function() {

    browserSync.init({
        server: publicFolder
    });

    gulp.watch('./src/**/*.jade', ['jade']);
    gulp.watch('./src/**/*.scss', ['sass']);
    gulp.watch(publicFolder + '/*.html').on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src('./src/*.scss')
        .pipe($.plumber())
        .pipe($.sourcemaps.init())
        .pipe($.sass())
        .pipe($.sourcemaps.write('./maps')) // Путь до файл указывается относительно папки стилей
        .pipe(gulp.dest(cssFolder))
        .pipe(browserSync.stream())
});

// Compile JADE into HTML & auto-inject into browsers
gulp.task('jade', function() {
    return gulp.src('./src/*.jade')
        .pipe($.plumber())
        .pipe($.jade({
            pretty: true
        }))
        .pipe(gulp.dest(publicFolder))
        .pipe(browserSync.stream());
});

// Таск запускающийся по умолчанию (если после gulp не указать имя задачи)
gulp.task('default', ['server']);

// SPRITES
gulp.task('sprite', function () {
    var spriteData = gulp.src('./src/icons/*.png')
        .pipe($.plumber())
        .pipe(spritesmith({
            imgName: 'spritesheet.png',
            cssName: '_spritesheet.' + cssFormat,
            cssFormat: cssFormat,
            padding: 5,
//            cssTemplate: 'sprites.css.handlebars'
        }))
    spriteData.img.pipe(gulp.dest(imagesFolder))
    spriteData.css.pipe(gulp.dest(scssFolder));
});