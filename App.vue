<script>
	import Vue from 'vue'
	import JMessage from 'js_sdk/wxmp-jiguang/jmessage-wxapplet-sdk-1.4.0/jmessage-wxapplet-sdk-1.4.0.min.js'
	export default {
		globalData: {
			// api: 'http://127.0.0.1:8000/weapp/'
			api: 'https://api.jiangsulezhong.com/weapp/'
		},
		onLaunch: function(e) {
			Vue.prototype.JIM = new JMessage({});
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import "colorui/icon.css";
	@import "colorui/main.css";
</style>
