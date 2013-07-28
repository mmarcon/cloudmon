module.exports = function(grunt) {
    grunt.initConfig({
        jasmine_node: {
            specNameMatcher: "spec",
            projectRoot: ".",
            forceExit: true,
            captureExceptions: true,
            jUnit: {
                report: false,
                savePath: "./tests/reports/jasmine/",
                useDotNotation: true,
                consolidate: true
            }
        },
        shell: {
            website: {
                command: 'git subtree push --prefix website/dist origin gh-pages',
                options: {
                    stdout: true
                }
            },
            websitebuild: {
                command: 'grunt',
                options: {
                    stdout: true,
                    execOptions: {
                        cwd: './website'
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-jasmine-node');
    grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask('test', 'jasmine_node');
    grunt.registerTask('webbuild', 'shell:websitebuild');
    grunt.registerTask('webdeploy', 'shell:website');
};