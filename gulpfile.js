const { src, dest, task, series, watch, parallel } = require("gulp");
const rm = require('gulp-rm');
const sass = require('gulp-sass');
const scss = require('gulp-scss');
const sassGlob = require('gulp-sass-glob');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const pug = require('gulp-pug');
const svgo = require('gulp-svgo');
const svgSprite = require('gulp-svg-sprite');
const px2rem = require('gulp-smile-px2rem');
const autoprefixer = require('gulp-autoprefixer');
const gcmq = require('gulp-group-css-media-queries');
const sourcemaps = require('gulp-sourcemaps');
let cleanCSS = require('gulp-clean-css');
const reload = browserSync.reload;


task('clean', () => {
	return src("dist/*", { read: false })
		.pipe(rm())
});


task("pug", () => {
	return src("src/index.pug")
		.pipe(concat('index.html'))
		.pipe(pug({ pretty: '\t' }))
		.pipe(dest('./dist'))
		.pipe(reload({ stream: true }));
});

const news = [
	"src/news/news-page.pug",
	"src/news/news-detail.pug",
	"src/opinions/opinions-page.pug",
	"src/opinions/opinions-detail.pug",
];

task("pug-news", () => {
	return src(news)
		//   return src("src/news-page.pug")
		//   .pipe(concat('index.html'))
		.pipe(pug({ pretty: '\t' }))
		.pipe(dest('./dist/news'))
		.pipe(reload({ stream: true }));
});

const persons = [
	"src/persons/persons-page.pug",
	"src/persons/persons-detail.pug",
];

task("pug-persons", () => {
	return src(persons)
		//   return src("src/news-page.pug")
		//   .pipe(concat('index.html'))
		.pipe(pug({ pretty: '\t' }))
		.pipe(dest('./dist/persons'))
		.pipe(reload({ stream: true }));
});
// task("pug-calendar", () => {
// 	return src("src/calendar/calendar-page.pug")
// 		.pipe(concat('index.html'))
// 		.pipe(pug({ pretty: '\t' }))
// 		.pipe(dest('./dist/calendar'))
// 		.pipe(reload({ stream: true }));
// });
task("pug-organizations", () => {
	return src("src/organizations/*")
		.pipe(pug({ pretty: '\t' }))
		.pipe(dest('./dist/organizations'))
		.pipe(reload({ stream: true }));
});
task("pug-services", () => {
	return src("src/services/*")
		.pipe(pug({ pretty: '\t' }))
		.pipe(dest('./dist/services'))
		.pipe(reload({ stream: true }));
});
task("pug-account", () => {
	return src("src/account/*")
		.pipe(pug({ pretty: '\t' }))
		.pipe(dest('./dist/account'))
		.pipe(reload({ stream: true }));
});
task("pug-structure", () => {
	return src("src/structure/*")
		.pipe(pug({ pretty: '\t' }))
		.pipe(dest('./dist/structure'))
		.pipe(reload({ stream: true }));
});
task("pug-expertices", () => {
	return src("src/expertise and specification/*")
		.pipe(pug({ pretty: '\t' }))
		.pipe(dest('./dist/expertise'))
		.pipe(reload({ stream: true }));
});

const styles = [
	'node_modules/normalize.css/normalize.css',
	// 'node_modules/simplebar/dist/simplebar.min.css',
	// 'node_modules/animate.css/animate.min.css',
	// 'src/vendors/**/*.css',
	'src/styles/main.scss',
];

task("styles", () => {
	return src(styles)
		// .pipe(sourcemaps.init())
		.pipe(concat('main.scss'))
		.pipe(sassGlob())
		.pipe(sass().on('error', sass.logError))
		// .pipe(concat('main.scss'))
		.pipe(px2rem({
			dpr: 1,
			rem: 16,
			one: false
		}))
		.pipe(autoprefixer({
			cascade: false,
			overrideBrowserslist: ["last 5 versions"],
		}))
		.pipe(gcmq())
		.pipe(cleanCSS())
		// .pipe(sourcemaps.write())
		.pipe(dest('./dist'))
		.pipe(reload({ stream: true }));
});
// task("stylesCalendar", () => {
// 	return src("./stylesForCalendar/*.scss")
// 		.pipe(sourcemaps.init())
// 		.pipe(concat('style.scss'))
// 		.pipe(sassGlob())
// 		.pipe(sass().on('error', sass.logError))
// 		.pipe(px2rem({
// 			dpr: 1,
// 			rem: 16,
// 			one: false
// 		}))
// 		.pipe(autoprefixer({
// 			cascade: false
// 		}))
// 		//   .pipe(gcmq())
// 		.pipe(cleanCSS())
// 		.pipe(dest('./dist'))
// });


const scripts = [
	//   'node_modules/jquery/dist/jquery.min.js',
	//   'node_modules/wow.js/dist/wow.min.js',
	//   'node_modules/simplebar/dist/simplebar.min.js',
	// 'src/vendors/**/*.js',
	'src/scripts/*.js',
];
const stylesAccount = [
	//   'node_modules/jquery/dist/jquery.min.js',
	//   'node_modules/wow.js/dist/wow.min.js',
	//   'node_modules/simplebar/dist/simplebar.min.js',
	// 'src/vendors/**/*.js',
	'src/styles/blocks/account-info-list.scss',
	'src/styles/blocks/account-organization-certificate.scss',
	'src/styles/blocks/account-organizations.scss',
	'src/styles/blocks/account.scss',
	'src/styles/blocks/dropzone-file.scss',
];

const stylesAccountPage = [
	'src/styles/blocks/account-info-list.scss',
]

task("stylesAccount", () => {
	return src(stylesAccount)
		// .pipe(sourcemaps.init())
		.pipe(concat('account-organizations.scss'))
		.pipe(sassGlob())
		.pipe(sass().on('error', sass.logError))
		.pipe(px2rem({
			dpr: 1,
			rem: 16,
			one: false
		}))
		.pipe(autoprefixer({
			cascade: false
		}))
		  .pipe(gcmq())
		.pipe(cleanCSS())
		// .pipe(sourcemaps.write())
		.pipe(dest('./dist'))
		.pipe(reload({ stream: true }));
});


task('scripts', () => {
	return src(scripts)
		.pipe(concat('main.js'))
		.pipe(dest('./dist'))
		.pipe(reload({ stream: true }));
})
task('server', () => {
	browserSync.init({
		server: {
			baseDir: "./dist"
		},
		open: false
	});
});

task('icons', () => {
	return src('src/images/icons/*.svg')
		.pipe(svgo({
			plugins: [
				{
					removeAttrs: {
						attrs: '(fill|stroke|style|width|height|data.*)'
					}
				}
			]
		}))
		.pipe(svgSprite({
			mode: {
				symbol: {
					sprite: './sprite.svg'
				}
			}
		}))
		.pipe(dest('dist/images/icons'));
});
task('file-icons', () => {
	return src('src/images/icons/file-icons/*.svg')
		.pipe(svgo({
			plugins: [
				// {
					// removeAttrs: {
					// 	attrs: '(fill|stroke|style|width|height|data.*)'
					// }
				// }
			]
		}))
		.pipe(svgSprite({
			mode: {
				symbol: {
					sprite: './file-icons.svg'
				}
			}
		}))
		.pipe(dest('dist/images/icons'));
});
task('icons-0692', () => {
	return src('src/images/icons-0692/*.svg')
		.pipe(svgo({
			plugins: [
				{
					removeAttrs: {
						attrs: '(fill|stroke|style|width|height|data.*)'
					}
				}
			]
		}))
		.pipe(svgSprite({
			mode: {
				symbol: {

					sprite: './icons-0692.svg'
				}
			}
		}))
		.pipe(dest('dist/images/icons'));
});


watch('./src/styles/**/*.scss', series('styles'));
// watch('./src/**/*.pug', series('pug', 'pug-services', 'pug-persons', 'pug-news', 'pug-calendar', "pug-organizations", "pug-private-office"));
watch('./src/**/*.pug', series('pug', 'pug-news', "pug-account", "pug-services", "pug-expertices", "pug-organizations", "pug-structure", 'pug-persons'));
watch('./src/scripts/*.js', series('scripts'));
watch('./src/images/icons/*.svg', series('icons'));


// task('default', series('clean', parallel('pug', 'pug-services', 'pug-persons', 'pug-news', 'pug-calendar', 'pug-organizations', "pug-private-office", 'styles', 'scripts', 'icons'), 'server'));

task('default', series('clean', parallel('pug', "pug-account", 'pug-news', "pug-services", "pug-expertices", 'styles', 'scripts', 'icons', "pug-organizations", "pug-structure", 'pug-persons'), 'server'));