

module.exports = function(grunt) {

    var path = require('path');
    var fullPath = path.resolve('../../../').split(path.sep);
    var packageKey = fullPath[fullPath.length-1];
    var compressableImageFormats = 'jpg,gif,svg,jpeg,png';


    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),


        // SASS compiler job w/o compass
        sass: {
            main: {
                options: {
                    sourcemap: true,
                    unixNewlines: true
                },
                files: {
                    'css/app.css': 'sass/app.scss'
                }
            }
        },


        // SASS compiler job w/ compass
        compass: {
            main: {
                options: {
                    raw:'unixNewlines =:true\n',
                    force: true,
                    relativeAssets: false,
                    httpPath: '/typo3conf/ext/'+ packageKey +'/Resources/Public/Template/',
                    imagesDir:'images',
                    fontsDir:'fonts',
                    sassDir:'sass',
                    cssDir:'css'
                }
            }
        },


        // Compress images job
        imagemin: {
            imageAssets: {
                files: [{
                    expand: true,
                    cwd: 'images/',
                    dest: 'images/',
                    src: ['**/*.{'+ compressableImageFormats +'}', '!**/*.min.*'],
                    rename: function(destinationPath, filename){
                        var dotPosition = filename.lastIndexOf('.');
                        var fileExtension = '';
                        if (dotPosition > -1) {
                            fileExtension = filename.substr(dotPosition+1);
                            filename = filename.substr(0, dotPosition);
                        }
                        return destinationPath + '/' + filename +'.min.'+ fileExtension;
                    }
                }]
            }
        },



        // Re-structure scss files
        // Only on current level & 1 level down!
        csscomb: {
            combSCSS: {
                expand: true,
                cwd: 'sass/',
                src: ['_*.scss', '*/_*.scss'],
                dest: 'sass/',
                options: {
                    config: 'grunt-csscomb.options.json'
                }
            }
        },


        // File change watcher
        watch: {
            grunt: {
                files: ['Gruntfile.js']
            },
            sass: {
                files: 'sass/**/*.scss',
                tasks: ['buildCSS'],
                options: {livereload:true}
            },
            images: {
                files: ['images/**/*.{'+ compressableImageFormats +'}', '!**/*.min.*'],
                tasks: ['compressImageAssets'],
                options: {
                    event: ['changed', 'added']
                }
            }
        }

    });

    // Load node modules
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-csscomb');

    // Define tasks
    grunt.registerTask('buildCSSWithCompass', ['compass']);
    grunt.registerTask('buildCSSWithoutCompass', ['sass']);
    grunt.registerTask('buildCSS', ['buildCSSWithCompass']);
    grunt.registerTask('compressImageAssets', ['imagemin:imageAssets']);
    grunt.registerTask('combSCSS', ['csscomb:combSCSS']);

    // Define default task
    grunt.registerTask('default', ['combSCSS', 'buildCSS', 'compressImageAssets', 'watch']);

}