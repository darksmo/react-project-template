/*global module:false*/
module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    meta: {
      version: '1.0.1',
      projectTitle: 'My Project',
      website: 'http://www.savio.dimatteo.it',
      author: 'Savio Dimatteo'
    },
    banner: '/*! <%= meta.projectTitle %> - v<%= meta.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '* <%= meta.website %>\n' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> - <%= meta.author %>\n' +
      '*/\n',
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      prod: {
        src: [
            'assets/vendor/html5shiv/html5shiv.js',
            'assets/vendor/console-polyfill/index.js',
            'assets/vendor/es5-shim/js/es5-shim.js',
            'assets/vendor/es5-shim/js/es5-sham.js',
            'assets/vendor/jquery/jquery.js',
            'assets/vendor/underscore/underscore.js',
            'assets/vendor/backbone/backbone.js'
        ],
        dest: 'public/js/main.js'
      },
      dev: {
        src: [
            'assets/js/inject_livereload.js',
            '<%= concat.prod.src %>',
            'build/main.js'
        ],
        dest: 'public/js/main.js'
      }
    },
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: [ '<%= concat.prod.src %>', 'build/main.js' ],
        dest: 'public/js/main.js'
      }
    },
    clean: {
        options: {
            force: true
        },
        css: 'public/css',
        js: 'public/js'
    },
    less: {
        prod : {
            src: 'assets/less/style.less',
            dest: 'public/css/style.css'
        }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        es3: true,
        latedef: true,
        newcap: false,
        noarg: true,
        sub: true,
        undef: true,
        unused: false,
        boss: true,
        eqnull: true,
        globals: {
            "Backbone": true,
            "React": true,
            "window" : true,
            "jQuery" : true,
            "$": true,
            "cached_response" : true,
            "_": true,
            "require": true,
            "module": true
        }
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      build: {
        src: 'assets/js/**/*.js'
      }
    },
    copy: {
        images: {
            files: [
                {
                    expand: true, flatten: true, 
                    src: ['assets/images/*'],
                    dest: 'public/img/',
                    filter: 'isFile'
                }
            ]
        }
    },
    watch: {
      options: {
        livereload: true
      },
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile', 'concat']
      },
      javascripts: {
        files: 'assets/**/*.js?',
        tasks: ['dev']
      },
      less: {
        files: 'assets/less/**/*.less',
        tasks: ['less']
      }
    },
    bower: {
        install: {
            options: {
                targetDir: './assets/vendor',
                cleanTargetDir: true,
                cleanBowerDir: true,
                layout: 'byComponent'
            }
        }
    },
    browserify: {
        client: {
            options: {
                debug: true,
                transform: [
                    'reactify'
                ],
                extensions: ['.jsx']
            },
            src: 'assets/js/app.jsx',
            dest: 'build/main.js'
        }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-browserify');

  // Default task.
  grunt.registerTask('prod', ['jshint', 'browserify', 'copy', 'uglify', 'less']);
  grunt.registerTask('dev', ['jshint', 'browserify', 'concat:dev', 'copy', 'less']);

};
