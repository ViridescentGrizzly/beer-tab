module.exports = function(grunt) {

  grunt.initConfig({
    //-----------------------------------------------------
    jshint: {     // Validate .js file syntax
      all: [
        'server/**/*.js',   // server files
        'client/**/*.js'    // client files
      ],
      options: {
        force: 'true',
        jshintrc: '.jshintrc',
        ignores: [
          'client/dist/**/*.js'
        ]
      }
    },
    //-----------------------------------------------------
    mochaTest: {  // Run spec tests
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/**/*.js']
      }
    },
    //-----------------------------------------------------
    concat: {     // Join .js files
      src: {
        src: 'client/app/**/*.js',
        dest: 'client/dist/src.js',
      },
      lib: {
        src: [
          'bower_components/angular/angular.min.js',
          'bower_components/angular-route/angular-route.min.js',
          'bower_components/jquery/dist/jquery.min.js',
          'bower_components/ng-table/dist/ng-table.min.js',
          'bower_components/angular-jwt/dist/angular-jwt.min.js',
          'bower_components/angular-ui-router/release/angular-ui-router.min.js',
          'bower_components/bootstrap/dist/js/bootstrap.min.js'
        ],
        dest: 'client/dist/lib.min.js',
      }
    },
    //-----------------------------------------------------
    uglify: {     // Minify .js files
      options: {
          mangle: false
        },
        js_files: {
          files: {
            'client/dist/src.min.js': ['client/dist/src.js']
          }
        }
    },
    //-----------------------------------------------------
    cssmin: {     // Minify .css files
      target: {
        files: [{
          expand: true,
          cwd: 'bower_components/bootstrap/dist/css/',
          src: ['bootstrap.css', '!*.min.css'],
          dest: 'client/dist/',
          ext: '.min.css'
        }]
      },
      stylesheet: {
        files: [{
          expand: true,
          cwd: 'client/styles/',
          src: ['styles.css', '!*.min.css'],
          dest: 'client/dist/',
          ext: '.min.css'
        }]
      },
      ngTable: {
        files: [{
          expand: true,
          cwd: 'bower_components/ng-table/dist/',
          src: ['ng-table.css', '!*.min.css'],
          dest: 'client/dist/',
          ext: '.min.css'
        }]
      }
    },
    //-----------------------------------------------------
    nodemon: {    // Start server
      dev: {
        script: 'server/server.js'
      }
    },
    //-----------------------------------------------------
    shell: {
      delsrc: {
        command: 'rm ./client/dist/src.js'
      }
    },
    //-----------------------------------------------------
    watch: {
      scripts: {
        files: [
          'server/**/*.js',   // server files
          'client/**/*.js'    // client files
        ],
        tasks: ['build']
      },
      css: {
        files: 'client/styles/*.css',
        tasks: ['cssmin']
      }
    }
  });

  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('server-dev', function (target) {
    // Running nodejs in a different process and displaying output on the main console
    var nodemon = grunt.util.spawn({
         cmd: 'grunt',
         grunt: true,
         args: 'nodemon'
    });
    nodemon.stdout.pipe(process.stdout);
    nodemon.stderr.pipe(process.stderr);

    grunt.task.run(['watch']);
  });

  ////////////////////////////////////////////////////
  // Main grunt tasks
  ////////////////////////////////////////////////////

  grunt.registerTask('test', [
    'jshint',
    'mochaTest'
  ]);

  grunt.registerTask('build', [
    'test',
    'concat',
    'uglify',
    'shell:delsrc',
    'cssmin'
  ]);

  // grunt.registerTask('upload', function(n) {
  //   if(grunt.option('git')) {
  //     // add support for git push
  //   } else {
  //     grunt.task.run([ 'server-dev' ]);
  //   }
  // });

  // grunt.registerTask('deploy', [
  //     'build',
  //     'upload'
  // ]);
};