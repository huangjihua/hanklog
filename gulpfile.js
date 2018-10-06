let ghpages = require("gh-pages");
let gulp = require('gulp');
gulp.task('deploy', function () {
    ghpages.publish('./dist', {
        branch: 'gh-pages',
    }, function (err) {
        console.log('docs同步完成!');
    });
})
