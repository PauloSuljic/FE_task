const sass = require('node-sass');

module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      options: {
            implementation: sass,
            sourceMap: false
        },
      build: {
        files: [{
          src: "css/sass/styles.scss",
          dest: "css/styles.css"
        }]
      }
    }
  });

	grunt.loadNpmTasks('grunt-sass');
}