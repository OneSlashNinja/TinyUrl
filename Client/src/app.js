//using below require would lead to some "mount" error
//which require render function and some other stuff
//maybe a new modern way to load Vue.
//but for now, just change to require('vue/dist/vue.js')
//var Vue = require('vue');

var Vue = require('vue/dist/vue.js');

new Vue({
	el:'#app',
	data:{
		"message": "This is tiny Url message"
	},
	methods:{

	}
});