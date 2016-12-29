//using below require would lead to some "mount" error
//which require render function and some other stuff
//maybe a new modern way to load Vue.
//but for now, just change to require('vue/dist/vue.js')
//var Vue = require('vue');

var Vue = require('vue/dist/vue.js');
var $ = require('jquery');
window.jQuery = $;
require('bootstrap');

new Vue({
	el:'#app',
	data:{
		"shortenUrl": null
	},
	methods:{

	}
});