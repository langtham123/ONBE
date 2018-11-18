var gulp = require('gulp');

// And our Packages
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var jade = require('gulp-jade');
var rjs = require('gulp-requirejs');
var browserSync = require('browser-sync').create();
var browserify = require('gulp-browserify');
var spritesmith = require('gulp.spritesmith');
var buffer = require('vinyl-buffer');
var imagemin = require('gulp-imagemin');
var merge = require('merge-stream');
var terser = require('gulp-terser');
var sourcemaps = require('gulp-sourcemaps');

var arr_jade_sp_build = ['!src/sp/jade/shared/*.jade', '!src/sp/jade/shared/*/*.jade','src/sp/jade/*.jade', 'src/sp/jade/*/*.jade', 'src/sp/jade/*/*/*.jade'];
var arr_jade_sp_watch = ['src/sp/jade/*.jade', 'src/sp/jade/*/*.jade','src/sp/jade/*/*/*.jade','src/sp/jade/*/*/*/*.jade', ];
var arr_scss_sp_build = ['src/sp/scss/app.scss'];
var arr_scss_sp_watch = ['src/sp/scss/*.scss','src/sp/scss/*/*.scss'];
var arr_js_sp_watch = ['src/sp/js/*.js','src/sp/js/*/*.js'];
var arr_js_sp = ['src/sp/js/app.js'];
var arr_scss_sp_build_2 = ['src/v1/sp/scss/app.scss'];
var arr_scss_sp_watch_2 = ['src/v1/sp/scss/*.scss','src/v1/sp/scss/*/*.scss'];
var arr_js_sp_watch_2 = ['src/v1/sp/js/*.js','src/v1/sp/js/*/*.js'];
var arr_js_sp_2 = ['src/v1/sp/js/app.js'];

var output_css_sp = 'dist/css/onb/2019/sp/';
var output_js_sp = 'dist/js/onb/2019/sp/';
var output_image_sp = 'dist/images/onb/2019/sp';
var output_css_sp_2 = 'dist/css/v1/sp/';
var output_js_sp_2 = 'dist/js/v1/sp/';
var output_image_sp_2 = 'dist/images/v1/sp';

// Lint Task
gulp.task('lint_sp', function () {
    return gulp.src(arr_js_sp)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});
gulp.task('lint_sp_v1', function () {
    return gulp.src(arr_js_sp_2)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});
// Compile Our Sass
gulp.task('sass_sp', function () {
    return gulp.src(arr_scss_sp_build)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(rename('style.css'))
        .pipe(gulp.dest(output_css_sp))
        .pipe(browserSync.reload({
            stream: true
        }));
});
gulp.task('sass_sp_v1', function () {
    return gulp.src(arr_scss_sp_build_2)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(rename('style.css'))
        .pipe(gulp.dest(output_css_sp_2))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// Concatenate & Minify JS
gulp.task('scripts_sp', function () {

    return gulp.src(arr_js_sp)
        .pipe(concat('app.js'))
        .pipe(rename('common.js'))
        .pipe(browserify())
        // .pipe(uglify())
        .on('error', function (err) { console.log( err ) })
        .pipe(gulp.dest(output_js_sp))
        .pipe(browserSync.stream());
});

gulp.task('scripts_sp_v1', function () {

    return gulp.src(arr_js_sp_2)
        .pipe(concat('app.js'))
        .pipe(rename('common.js'))
        .pipe(browserify())
        // .pipe(uglify())
        .on('error', function (err) { console.log( err ) })
        .pipe(gulp.dest(output_js_sp_2))
        .pipe(browserSync.stream());
});

gulp.task('jade_sp', function () {

    return gulp.src(arr_jade_sp_build)
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('dist/sp'))
});

gulp.task('images_sp', function () {
    gulp.src(['src/sp/images/*','!src/sp/images/*/*'])
        // .pipe(gulp.dest('dist/sp/images'));
        .pipe(gulp.dest(output_image_sp));
    gulp.src(['src/v1/sp/images/*','!src/v1/sp/images/*/*'])
        .pipe(gulp.dest(output_image_sp_2));
});

gulp.task('browserSync_sp', function() {
    browserSync.init({
        server: {
            baseDir: 'dist/'
        },
    })
})
// Watch Files For Changes
gulp.task('watch_sp',['browserSync_sp', 'sass_sp'], function () {
    gulp.watch(arr_js_sp_watch, ['lint_sp', 'scripts_sp']);
    gulp.watch(arr_scss_sp_watch, ['sass_sp']);
    gulp.watch(arr_jade_sp_watch, ['jade_sp']);
    gulp.watch(arr_js_sp_watch_2, ['lint_sp_v1', 'scripts_sp_v1']);
    gulp.watch(arr_scss_sp_watch_2, ['sass_sp_v1']);
});

gulp.task('sprite_sp', function () {
    // Generate our spritesheet
    var spriteData = gulp.src('src/sp/images/icon/*.png').pipe(spritesmith({
        imgName: '/images/sprite.png',
        cssName: 'sprite.css'
    }));

    // Pipe image stream through image optimizer and onto disk
    var imgStream = spriteData.img
    // DEV: We must buffer our stream into a Buffer for `imagemin`
        .pipe(buffer())
        .pipe(imagemin())
        .pipe(gulp.dest('dist/sp/'));

    // Pipe CSS stream through CSS optimizer and onto disk
    var cssStream = spriteData.css
        .pipe(sass())
        .pipe(gulp.dest('src/sp/scss/'));

    // Return a merged stream to handle both `end` events
    return merge(imgStream, cssStream);

});

//library css & js
gulp.task('lib_css_js', [], function() {
    gulp.src(["src/lib/css/**.*","src/lib/css/*/**.*", "src/lib/css/*/*/**.*"])
      .pipe(gulp.dest('dist/css/onb/2019/lib'));
    gulp.src(["src/lib/js/**.*","src/lib/js/*/**.*", "src/lib/js/*/*/**.*"])
      .pipe(gulp.dest('dist/js/onb/2019/lib'));
});

//jquery
gulp.task('jquery_lib', function () {
    return gulp.src("src/lib/bpcommon_js/**.*")
        .pipe(gulp.dest('dist/js/bpcommon'))
});

// Default Task
gulp.task('sp', ['lint_sp', 'sass_sp', 'scripts_sp', 'jade_sp','watch_sp', 'lib_css_js', 'jquery_lib','lint_sp_v1', 'sass_sp_v1', 'scripts_sp_v1']);