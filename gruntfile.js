module.exports = function(grunt) {

  grunt.initConfig({
    
    jshint: {     // Validate .js file syntax
      all: [
        '*.js',             // server files
        'app/**/*.js',      // server routing files & database files
        'config/**/*.js',   // database auth files 
        'public/**/*.js'    // angular files
      ],
      options: {
        force: 'true',
        jshintrc: '.jshintrc',
        ignores: [
          'public/lib/**/*.js',
          'public/dist/**/*.js'
        ]
      }
    },

    mochaTest: {  // Run spec tests
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/**/*.js']
      }
    },

    concat: {     // Join .js files
      options: { 
        separator: ';', 
      },
      dist: {
        src: 'public/client/*.js',      // update this
        dest: 'public/dist/src.js',
      }
    },

    uglify: {     // Minify .js files
      options: {
          mangle: false
        },
        js_files: {
          files: {
            'public/dist/src.min.js': ['public/dist/src.js']
          }
        }
    },

    cssmin: {     // Minify .css files
      target: {
        files: [{
          expand: true,
          cwd: 'public/',
          src: ['*.css', '!*.min.css'],
          dest: 'public/dist/',
          ext: '.min.css'
        }]
      }
    },

    nodemon: {    // Start server
      dev: {
        script: 'server.js'
      }
    },

    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
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

    grunt.task.run([ 'watch' ]);
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
    'cssmin',
    'concat',
    'uglify'
  ]);

  grunt.registerTask('upload', function(n) {
    if(grunt.option('git')) {
      // add support for git push
    } else {
      grunt.task.run([ 'server-dev' ]);
    }
  });

  grunt.registerTask('deploy', [
      'build',
      'upload'
  ]);
};