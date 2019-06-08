module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify-es');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-css-import');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-browser-sync');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      ui: {
        src: ['js/index.js'],
        dest: "dist/js/ui.js"
      }
    },
    uglify: {
      ui: {
        src: ['dist/js/ui.js'],
        dest: 'dist/js/ui.min.js'
      }
    },
    css_import: {
      ui: {
        options: {},

        files: {
          'dist/css/ui.css': ['css/index.css']
        }
      }
    },
    cssmin: {
      ui: {
        files: [{
          src: ['dist/css/ui.css'],
          dest: 'dist/css/ui.min.css',
        }]
      }
    },

    browserSync: {
      dev: {
        options: {
          watchTask: true,
          server: './'
        }
      }
    }
  });

  grunt.registerTask('default', ['browserify', 'css_import']);
  grunt.registerTask('build', ['browserify', 'uglify', 'css_import', 'cssmin']);
  grunt.registerTask('serve', ['build', 'browserSync']);

};
