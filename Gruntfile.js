'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    sass: {                                 // Task
        dist: {                             // Target
            files: {                        // Dictionary of files
                'site/metro.css': 'sass/MetroBootstrap.scss'   // 'destination': 'source'
            }
        }
    },

    watch: {
      sass: {
        files: ['sass/*.scss'],
        tasks: ['sass']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['sass']);

};