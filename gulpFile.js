import gulp from 'gulp';
import terser from 'gulp-terser';
import rename from 'gulp-rename';
import replace from 'gulp-replace';
import { minify } from 'html-minifier-terser';
import cleanCSS from 'gulp-clean-css';

// Función para ofuscar scripts JavaScript y actualizar importaciones
const scripts = async () => {
  return gulp.src(['src/**/*.js', 'index.js'])
    .pipe(terser())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist'))
    .pipe(replace(/from\s+(['"])(.*)\1/g, (match, p1, p2) => {
      if (!p2.endsWith('.min.js')) {
        return `from ${p1}${p2.replace(/\.js$/, '.min.js')}${p1}`;
      }
      return match;
    }))
    .pipe(gulp.dest('dist'));
};

// Función para ofuscar archivos HTML
const html = async () => {
  return gulp.src(['src/**/*.html', 'index.html']) // Ruta a tus archivos HTML originales
    .pipe(gulp.dest('dist')) // Carpeta destino intermedia
    .pipe(gulp.src('dist/*.html')) // Vuelve a cargar los archivos en la carpeta destino
    .pipe(gulp.dest('dist', {
      transform: function(content, file) {
        const minified = minify(content.toString(), {
          collapseWhitespace: true,
          removeComments: true,
        });
        return Buffer.from(minified);
      }
    }));
};

// Función para ofuscar archivos CSS
const styles = async () => {
  return gulp.src('src/**/*.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist'));
};

// Función para copiar index.min.js a la raíz y renombrarlo a index.js
const copyIndex = async () => {
  return gulp.src('dist/index.min.js')
    .pipe(rename('index.js'))
    .pipe(gulp.dest('.'));
};

// Definir tareas de Gulp
gulp.task('scripts', scripts);
gulp.task('html', html);
gulp.task('styles', styles);
gulp.task('copyIndex', copyIndex);

// Tarea por defecto
gulp.task('default', gulp.series('scripts', 'html', 'styles', 'copyIndex'));
