module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-umd');
    grunt.loadNpmTasks('grunt-package-modules');
    grunt.loadNpmTasks('grunt-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-browserify');

    grunt.initConfig({
        clean: {
            dist: "dist"
        },
        browserify: {
            all: {
                src: ['index.js'],
                dest: 'dist/lambda-core.js',
                options: {
                    browserifyOptions: {
                        standalone: 'lambdacore'
                    }
                }
            }
        }
    });

    grunt.registerTask('default', ['clean','browserify']);
};
