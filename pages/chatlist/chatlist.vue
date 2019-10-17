<template>
	<view>
		<view class="cu-list menu-avatar">
			<view class="cu-item" v-for="(item,index) in Conversation" :key="index" :id="(item)" @click="to_chat(index)">
				<view class="cu-avatar round lg" :style="{backgroundImage:'url('+item.avatar+')'}">
					<view v-if="item.unread_msg_count !=0" class="cu-tag badge">{{item.unread_msg_count}}</view>
				</view>
				<view class="content">
					<view class="text-grey">
						<view class="text-cut">{{item.nickName}}</view>
						<!-- <view class="cu-tag round bg-orange sm">战士</view> -->
					</view>
					<!-- <view class="text-gray text-sm flex">
						<view class="text-cut">
							塔里克是保护者星灵，用超乎寻常的力量守护着符文之地的生命、仁爱以及万物之美。塔里克由于渎职而被放逐，离开了祖国德玛西亚，前去攀登巨神峰寻找救赎，但他找到的却是来自星界的更高层的召唤。现在的塔里克与古代巨神族的神力相融合，以瓦洛兰之盾的身份，永不疲倦地警惕着阴险狡诈的虚空腐化之力。
						</view>
					</view> -->
				</view>
				<view class="action">
					<view class="text-grey text-xs">{{item.timess}}</view>
					<view class="cuIcon-notice_forbid_fill text-gray"></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				Conversation: null,
				username:uni.getStorageSync("username"),
				Time_now:{
					Date:'',
					Y:'',
					M:'',
					D:'',
					h:'',
					m:'',
					s:''
				}
			}
		},
		onLoad() {
			uni.showLoading({
				title:'加载中'
			})
		},
		onShow() {
			this.Times_now();
			this.getConversation();
		},
		methods: {
			getConversation() {
				var that = this;
				this.JIM.getConversation().onSuccess(function(data) {
					console.log('消息列表：')
					console.log(data.conversations)
					that.$data.Conversation=data.conversations.reverse()
					//data.code 返回码
					//data.message 描述
					//data.conversations[] 会话列表，属性如下示例
					//data.conversations[0].extras 附加字段
					//data.conversations[0].unread_msg_count 消息未读数
					//data.conversations[0].name  会话名称
					//data.conversations[0].appkey  appkey(单聊)
					//data.conversations[0].username  用户名(单聊)
					//data.conversations[0].nickname  用户昵称(单聊)
					//data.conversations[0].avatar  头像 media_id 
					//data.conversations[0].mtime 会话最后的消息时间戳
					//data.conversations[0].gid 群 id(群聊)
					//data.conversations[0].type  会话类型(3 代表单聊会话类型，4 代表群聊会话类型)

					//console.log(that.get_message_time(data.conversations[0].mtime))
					
					
					
					for (var i = 0; i < data.conversations.length; i++) {
						that.get_message_time(data.conversations[i].mtime,i)
						that.get_avatar(data.conversations[i].avatar,i)
					}
					uni.hideLoading()
					
				}).onFail(function(data) {
					//data.code 返回码
					//data.message 描述
					uni.hideLoading()
				});
				
				
				
				this.JIM.onSyncConversation(function(data) { //离线消息同步监听
					console.log('离线消息:');
					console.log(data)
					
				});
				this.JIM.onEventNotification(function(data) {
					console.log(data)
				});
				
				this.JIM.onUserInfUpdate(function(data) {
					console.log('onUserInfUpdate : ')
					console.log(data);
				});
				
				

			},
			get_message_time(timestamp,msg_ids) {
				let that=this;
				let Time_now=that.$data.Time_now;
				
				var date = new Date(timestamp);
				var Y = date.getFullYear() + '-';
				var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
				var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
				var h = (date.getHours() < 10 ? '0' + (date.getHours()) : date.getHours()) + ':';
				var m = (date.getMinutes() < 10 ? '0' + (date.getMinutes()) : date.getMinutes()) + '';
				var s = (date.getSeconds() < 10 ? '0' + (date.getSeconds()) : date.getSeconds());
				if (Y==Time_now.Y && M==Time_now.M && D==Time_now.D) {
					that.$data.Conversation[msg_ids].timess=h+m;
				} else{
					that.$data.Conversation[msg_ids].timess=M+D;
				}
				// return Y + M + D + h + m + s;
			},
			test() {
				con = {
					'version': '1.4.0',
					'target_type': 'single',
					'target_id': 'moxiyu',
					'from_type': 'user',
					'from_id': 'test3',
					'from_name': 'test3',
					'create_time': '时间戳，精确到秒',
					'msg_type': 'text, voice, image, file, video, location, custom',
					'msg_body': ''
				}
			},
			Times_now(){
				var that=this;
				var date = new Date();
				var Y = date.getFullYear() + '-';
				var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
				var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
				var h = (date.getHours() < 10 ? '0' + (date.getHours()) : date.getHours()) + ':';
				var m = (date.getMinutes() < 10 ? '0' + (date.getMinutes()) : date.getMinutes()) + ':';
				var s = (date.getSeconds() < 10 ? '0' + (date.getSeconds()) : date.getSeconds());
				// console.log(date)
				that.$data.Time_now.Date=date;
				that.$data.Time_now.Y=Y;
				that.$data.Time_now.M=M;
				that.$data.Time_now.D=D;
				that.$data.Time_now.h=h;
				that.$data.Time_now.m=m;
				that.$data.Time_now.s=s;
			},
			get_avatar(media_id,msg_ids){
				var that=this;
				this.JIM.getResource({
					'media_id': media_id,
				}).onSuccess(function(data) {
					//data.code 返回码
					//data.message 描述
					//data.url 资源临时访问路径，具体超时时间expire time会包含在url中
					console.log(data)
					//头像：data.user_info.avatar
					//that.$data.my_avatar=data.url
					that.$data.Conversation[msg_ids].avatar=data.url
				}).onFail(function(data) {
					//data.code 返回码
					//data.message 描述
				});
			},
			to_chat(list_id){
				var that=this;
				var chater_info=that.$data.Conversation[list_id]
				uni.setStorage({
					key:'chater_info',
					data:chater_info
				})
				uni.navigateTo({
					url:'../chat/chat',
					animationDuration:300
				})
				
			}
			
		}
	}
</script>

<style>

</style>
