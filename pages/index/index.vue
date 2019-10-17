<template>
	<view>
		<view class="cu-list menu-avatar">
			<view class="cu-item" v-for="(item,index) in FrindList" :key="index" :id="(item)" @click="to_chat(index)">
				<view class="cu-avatar round lg" :style="{backgroundImage:'url('+item.avatar+')'}">
					<view v-if="item.unread_msg_count !=0" class="cu-tag badge">{{item.unread_msg_count}}</view>
				</view>
				<view class="content">
					<view class="text-grey">
						<view class="text-cut">{{item.nickName}}</view>
						<!-- <view class="cu-tag round bg-orange sm">战士</view> -->
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username: uni.getStorageSync("username"),
				FriendList:null,
				info_me: null
			}
		},
		onLoad() {
			this.get_info_me()
			this.get_my_friends()
		},
		onShow() {
			var username = this.$data.username
			console.log('我的帐号：' + username)
			this.JIM.onSyncConversation(function(data) { //离线消息同步监听,可以不要
				console.log('离线消息:');
				console.log(data)
				uni.$emit('onSyncConversation', data)

			});
		},
		methods: {
			get_info_me() {
				let that = this;
				let username = this.$data.username
				this.JIM.getUserInfo({
					'username': username,
					'appkey': '69e776bb51c3a264cf364a97'
				}).onSuccess(function(data) {
					console.log(data)
					that.$data.info_me = data.user_info
					that.get_avatar_me()
				}).onFail(function(data) {
					//data.code 返回码
					//data.message 描述
				});
			},
			get_avatar_me() {
				var that = this;
				this.JIM.getResource({
					'media_id': this.$data.info_me.avatar,
				}).onSuccess(function(data) {
					//data.code 返回码
					//data.message 描述
					//data.url 资源临时访问路径，具体超时时间expire time会包含在url中
					console.log(data)
					//头像：data.user_info.avatar
					that.$data.my_avatar = data.url
					uni.setStorage({
						key: 'my_avatar',
						data: data.url
					})
				}).onFail(function(data) {
					//data.code 返回码
					//data.message 描述
				});
			},
			get_my_friends() {
				this.JIM.getFriendList().onSuccess(function(data) {
					console.log(data)
					//data.code 返回码
					//data.message 描述
					//data.friend_list[] 好友列表，示例如下
					//data.friend_list[0].username
					//data.friend_list[0].appkey
					//data.friend_list[0].nickname
					//data.friend_list[0].avatar 头像
					//data.friend_list[0].memo_nam 好友备注
					//data.friend_list[0].memo_others 其他备注
					//data.friend_list[0].birthday 生日，默认空
					//data.friend_list[0].gender 性别 0 未知， 1 男 ，2 女
					//data.friend_list[0].signature 用户签名
					//data.friend_list[0].region 用户所属地区
					//data.friend_list[0].address 用户地址
					//data.friend_list[0].mtime 用户信息最后修改时间
				}).onFail(function(data) {
					//data.code 返回码
					//data.message 描述
				});
			}
		}
	}
</script>

<style>

</style>
