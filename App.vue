<script>
	import Vue from 'vue'
	import JMessage from 'js_sdk/wxmp-jiguang/jmessage-wxapplet-sdk-1.4.0/jmessage-wxapplet-sdk-1.4.0.min.js'
	import md5 from 'js_sdk/js-md5/src/md5.js'
	export default {
		onLaunch: function() {
			Vue.prototype.JIM=new JMessage({});
			console.log('App Launch');
			var appkey='69e776bb51c3a264cf364a97';
			var key='4f7f3575a6910c9560f3d966';
			var timestamp = (new Date()).getTime();
			var signature=md5("appkey=69e776bb51c3a264cf364a97&timestamp="+timestamp+"&random_str=022cd9fd995849b66666&key=4f7f3575a6910c9560f3d966");
			console.log(signature)
			this.JIM.init({
				"appkey"    : appkey,
				"random_str": "022cd9fd995849b66666",
				"signature" : signature,
				"timestamp" : timestamp,
				"flag":1
			}).onSuccess(function(data) {
			  console.log(data)
			}).onFail(function(data) {
			  //TODO
			});  
			//
			this.JIM.onDisconnect(function(){
				console.log('JIM断开链接')
			});
			
			this.JIM.onMsgReceive(function(data) {
				// 接受在线消息
				console.log('在线接受消息')
				console.log(data)
				uni.$emit('msg_ol',data.messages[0].content)
			});
			
			//this.JIM.isInit();// 无回调函数，调用则成功
			Vue.prototype.onSyncConversation=null
			uni.$once('onSyncConversation',function(data){
				this.onSyncConversation=data
				console.log('离线传递：')
				console.log(data)
				uni.$off()
			})
			
			
			
			
			
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
