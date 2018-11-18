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

var arr_jade_pc_build = ['!src/pc/jade/shared/*.jade', '!src/pc/jade/shared/*/*.jade','src/pc/jade/*.jade', 'src/pc/jade/*/*.jade', 'src/pc/jade/*/*/*.jade'];
var arr_jade_pc_watch = ['src/pc/jade/*.jade', 'src/pc/jade/*/*.jade', 'src/pc/jade/*/*/*.jade','src/pc/jade/*/*/*/*.jade'];
var arr_scss_pc_build = ['src/pc/scss/app.scss'];
var arr_scss_pc_watch = ['src/pc/scss/*.scss','src/pc/scss/*/*.scss'];
var arr_js_pc_watch = ['src/pc/js/*.js','src/pc/js/*/*.js'];
var arr_js_pc = ['src/pc/js/app.js'];
var arr_scss_pc_build_2 = ['src/v1/scss/app.scss'];
var arr_scss_pc_watch_2 = ['src/v1/scss/*.scss','src/v1/scss/*/*.scss'];
var arr_js_pc_watch_2 = ['src/v1/js/*.js','src/v1/js/*/*.js'];
var arr_js_pc_2 = ['src/v1/js/app.js'];

var output_css = 'dist/css/onb/2019/';
var output_css_2 = 'dist/css/v1/';
var output_js = 'dist/js/onb/2019/';
var output_js_2 = 'dist/js/v1/';
var output_image = 'dist/images/onb/2019';
var output_image_2 = 'dist/images/v1';

// Lint Task
gulp.task('lint_pc', function () {
	return gulp.src(arr_js_pc)
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

gulp.task('lint_v1', function () {
	return gulp.src(arr_js_pc_2)
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass_pc', function () {
	return gulp.src(arr_scss_pc_build)
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(sourcemaps.write())
		.pipe(rename('style.css'))
		.pipe(gulp.dest(output_css))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('sass_v1', function () {
	return gulp.src(arr_scss_pc_build_2)
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(sourcemaps.write())
		.pipe(rename('style.css'))
		.pipe(gulp.dest(output_css_2))
		.pipe(browserSync.reload({
			stream: true
		}));
});

// Concatenate & Minify JS
gulp.task('scripts_pc', function () {

	return gulp.src(arr_js_pc)
		.pipe(concat('app.js'))
		.pipe(rename('common.js'))
		.pipe(browserify())
		// .pipe(uglify())
		.on('error', function (err) { console.log( err ) })
		.pipe(gulp.dest(output_js))
		.pipe(browserSync.stream());
});

gulp.task('scripts_v1', function () {

	return gulp.src(arr_js_pc_2)
		.pipe(concat('app.js'))
		.pipe(rename('common.js'))
		.pipe(browserify())
		// .pipe(uglify())
		.on('error', function (err) { console.log( err ) })
		.pipe(gulp.dest(output_js_2))
		.pipe(browserSync.stream());
});

gulp.task('jade_pc', function () {

	return gulp.src(arr_jade_pc_build)
		.pipe(jade({
			pretty: true
		}))
		.pipe(gulp.dest('dist/pc'))
});

gulp.task('images_pc', function () {
	gulp.src(['src/pc/images/*', 'src/pc/images/*/*'])
		// .pipe(gulp.dest('dist/pc/images'));
		.pipe(gulp.dest(output_image));
	gulp.src(['src/v1/images/*', 'src/v1/images/*/*'])
		.pipe(gulp.dest(output_image_2));
});

gulp.task('browserSync_pc', function () {
	browserSync.init({
		server: {
			baseDir: 'dist/'
		},
	})
})
// Watch Files For Changes
gulp.task('watch_pc', ['browserSync_pc', 'sass_pc'], function () {
	gulp.watch(arr_js_pc_watch, ['lint_pc', 'scripts_pc']);
	gulp.watch(arr_scss_pc_watch, ['sass_pc']);
	gulp.watch(arr_jade_pc_watch, ['jade_pc']);
	gulp.watch(arr_js_pc_watch_2, ['lint_v1', 'scripts_v1']);
	gulp.watch(arr_scss_pc_watch_2, ['sass_v1']);
});

gulp.task('sprite_pc', function () {
	// Generate our spritesheet
	var spriteData = gulp.src('src/pc/images/icon/*.png').pipe(spritesmith({
		imgName: '/images/sprite.png',
		cssName: 'sprite.css'
	}));

	// Pipe image stream through image optimizer and onto disk
	var imgStream = spriteData.img
	// DEV: We must buffer our stream into a Buffer for `imagemin`
		.pipe(buffer())
		.pipe(imagemin())
		.pipe(gulp.dest('dist/pc/'));

	// Pipe CSS stream through CSS optimizer and onto disk
	var cssStream = spriteData.css
		.pipe(sass())
		.pipe(gulp.dest('src/pc/scss/'));

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
gulp.task('pc', ['lint_pc', 'sass_pc', 'scripts_pc', 'jade_pc', 'watch_pc', 'lib_css_js', 'jquery_lib', 'lint_v1', 'sass_v1', 'scripts_v1',]);