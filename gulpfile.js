var gulp = require('gulp');
var penthouse = require('penthouse');
var fs = require('fs');
var cleanCSS = require('clean-css');
var minifyCss = require('gulp-minify-css');

gulp.task('penthouse', function() {
    penthouse({
        url : [ 'http://localhost:4000/2015/07/07/maintain-a-blog-for-a-long-time/index.html',
        	'http://localhost:4000/index.html', 'http://localhost:4000/2014/10/16/how-to-manage-my-password/index.html',
        'http://localhost:4000/archive/index.html',
        'http://localhost:4000/tag/index.html' ],
        css : '_site/css/pixyll.css',
        width: 1280, // viewport width
        height: 1024 // viewport height
    }, function(err, criticalCss) {
        console.log(criticalCss);
        console.log(err);
		var clean = new cleanCSS().minify(criticalCss);
        fs.writeFile('_includes/critical-css.html', criticalCss); // Write the contents to a jekyll include
    });
});