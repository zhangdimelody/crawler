module.exports = function(grunt) {
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json')
		,watch: {
			options: {
				livereload: false
			}
			,jst: {
				files: [
					'*.html'
				]
				,tasks: 'jst'
			}
		}
		,jst: {
			options: {
				prettify: true,
				// namespace: 'jst',
				// processName: function(filename) {
				// 	var index = filename.lastIndexOf('/');
				// 	return filename.replace("app/templates/","").split(".")[0];
				// },
				amd: true
			}
			,common: {
				src: ["*.html"],
				dest: "templates/common.js"
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-jst');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['watch']);

	require('load-grunt-tasks')(grunt);
}