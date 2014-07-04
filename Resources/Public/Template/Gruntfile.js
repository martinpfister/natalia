

module.exports = function(grunt) {

  var path = require('path');
  var fullPath = path.resolve('../../../').split(path.sep);
  var packageKey = fullPath[fullPath.length-1];

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),


    sass: {
      dist: {
        options: {
          sourcemap: true
        },
        files: {
          'css/app.css': 'sass/app.scss'
        }        
      }
    },

    compass: {
      dist: {
        options: {
          force: true,
          relativeAssets: false,
          httpPath: '/typo3conf/ext/'+ packageKey +'/Resources/Public/Template/',
          imagesDir:'images',
          fontsDir:'fonts',
          cssDir:'css'
        }
      }
    },

    watch: {
      grunt: {
        files: ['Gruntfile.js']
      },
      sass: {
        files: 'sass/**/*.scss',
        tasks: ['scssChange'],
        options: {livereload:true}
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('buildWithCompass', ['compass']);
  grunt.registerTask('buildWithoutCompass', ['sass']);

  grunt.registerTask('scssChange', ['buildWithCompass']);
  grunt.registerTask('default', ['buildWithCompass','watch']);

}