//using below require would lead to some "mount" error
//which require render function and some other stuff
//maybe a new modern way to load Vue.
//but for now, just change to require('vue/dist/vue.js')
//var Vue = require('vue');

var Vue = require('vue/dist/vue.js');
var $ = require('jquery');
window.jQuery = $;
require('bootstrap');

var vueResource = require('vue-resource');

Vue.use(vueResource);

new Vue({
	el:'#app',
	data:{
		"longUrl": null,
		"tinyUrl": null
	},
	methods:{
		shrinkLongUrl : function(){
			if(this.longUrl){
				this.$http.post('/api', {url: this.longUrl})
					.then(function(response){
						var base62ID = response.data.id;

						this.tinyUrl = window.location.host + '/' + base62ID;

						this.longUrl = null;
					})
					.catch(function(){
						console.error("error occured when send long url.");
					});
			}
		}
	}
});