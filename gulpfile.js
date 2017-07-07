const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')

gulp.task('uglify', function() {
    // 1. 找到文件
    gulp.src('./src/*.js')
      .pipe(babel({
        presets: ['es2015']
      }))
    // 2. 压缩文件
      .pipe(uglify())
    // 3. 另存压缩后的文件
      .pipe(gulp.dest('./dist'))
})

gulp.task('build', ['uglify'])
