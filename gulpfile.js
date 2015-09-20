var gulp = require('gulp')
var webserver = require('gulp-webserver')
var stylus = require('gulp-stylus')
var browserify = require('browserify')
var babelify = require('babelify')
var source = require('vinyl-source-stream')
var nib = require('nib')
var minify = require('gulp-minify-css')
var del = require('del')

gulp.task('server', function() {
  gulp.src('./build')
    .pipe(webserver({
      host: '0.0.0.0',
      port: 8080,
      fallback: 'index.html',
      livereload: true
    }))
})

gulp.task('stylus', function() {
  gulp.src('./src/assets/**/*')
    .pipe(gulp.dest('./build/assets'))
})

gulp.task('build', function() {
  browserify({
    entries: './src/app/app.js',
    extensions: ['.jsx'],
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('./build')),

  gulp.src('./src/index.html')
  .pipe(gulp.dest('./build')),
  gulp.src('./src/app/**/*.jsx')
  .pipe(gulp.dest('./build/app')),
  gulp.src('./src/assets/**/*')
  .pipe(gulp.dest('./build/assets'));

})

gulp.task('clean', function (){
   del('./build/**/*');
})

gulp.task('watch', function() {
  gulp.watch(['./src/index.html', './src/app/**/*.jsx', './src/app/**/*.js'], ['build'])
  gulp.watch('./src/assets/**/*', ['stylus'])
})

gulp.task('default', ['server', 'watch'])

gulp.task('run', ['build', 'server', 'watch'])
