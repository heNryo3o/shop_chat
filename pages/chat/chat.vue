<template>
	<view>
		<view class="cu-chat" id="chatlist">
			<view class="cu-item" :class="item.from_id==username?'self':''" v-for="(item,index) in Chat_Record" :key="index" :id="(item)">
				<view v-if="item.from_id==chater_info.username" class="cu-avatar round" :style="{backgroundImage:'url('+chater_info.avatar+')'}"></view>
				<view class="main">
					<view class="content shadow" :class="item.from_id==username?'bg-green':''">
						<text v-if="item.msg_body.text">{{item.msg_body.text}}</text>
						<image v-if="item.msg_body.media_src" :src="item.msg_body.media_src" mode="widthFix" style="max-width: 400rpx;"></image>
					</view>
				</view>
				<view v-if="item.from_id==username" class="cu-avatar round" :style="{backgroundImage:'url('+my_avatar+')'}"></view>
				<view class="date ">{{item.timess}}</view>
			</view>
		</view>

		<view class="cu-bar foot input" :style="[{bottom:InputBottom+'px'}]">
			<view class="action">
				<text class="cuIcon-picfill text-grey" @tap="chooseImage"></text>
			</view>
			<input class="solid-bottom" :adjust-position="false" :focus="false" maxlength="300" cursor-spacing="10" @focus="InputFocus"
			 @blur="InputBlur" v-model="my_say_text"></input>
			<button class="cu-btn bg-green shadow" @click="to_send()">发送</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username: uni.getStorageSync('username'),
				msgss: [],
				my_avatar: uni.getStorageSync('avatar'),
				chater_info: null,
				Chat_Record: [],
				my_say_text: '',
				InputBottom: 0,
				Time_now: {
					Date: '',
					Y: '',
					M: '',
					D: '',
					h: '',
					m: '',
					s: ''
				}
			};
		},
		onLoad() {
			uni.showLoading({
				title: '加载中'
			})
			this.init()
			this.Times_now();
			this.to_bottom()
		},
		onShow() {
			this.to_bottom()
		},
		methods: {
			get_image(media_id, msg_data) {
				var that = this;
				this.JIM.getResource({
					'media_id': media_id,
				}).onSuccess(function(data) {
					//data.code 返回码
					//data.message 描述
					//data.url 资源临时访问路径，具体超时时间expire time会包含在url中
					console.log(data.url)
					//头像：data.user_info.avatar
					//that.$data.my_avatar=data.url
					msg_data.msg_body.media_src = data.url
					that.$data.Chat_Record.push(msg_data)
				}).onFail(function(data) {
					//data.code 返回码
					//data.message 描述
				});
			},
			chooseImage() {
				var that = this
				uni.chooseImage({
					success(res) {
						console.log(res.tempFilePaths[0])
						that.JIM.sendSinglePic({
							'target_username': that.$data.chater_info.username,
							'appkey': 'b7ce35a8335c8ab76c58dfd0',
							'image': res.tempFilePaths[0] //构造好的 FormData
						}).onSuccess(function(data, msg) {
							console.log('success:' + JSON.stringify(data))
							console.log(msg)
							var msgss = that.$data.Chat_Record
							msg.content.timess = that.$data.Time_now.h + that.$data.Time_now.m
							msg.content.msg_body.media_src = res.tempFilePaths[0]
							msgss.push(msg.content)
							that.to_bottom()
						}).onFail(function(data) {
							console.log('error:' + JSON.stringify(data))
						});
					}
				})
			},
			init() {
				// let userinfo = uni.getStorageSync('userInfo')
				// this.username = 'user_' + userinfo.id
				// this.my_avatar = userinfo.avatar
				this.jLogin(this.username)
			},
			jLogin(username) {
				let that = this;
				let un = username;
				let pw = '123456';
				console.log(username)
				this.JIM.login({
					'username': un,
					'password': pw
				}).onSuccess(function(data) {
					console.log(data)
					that.load_chater_info()
					that.get_msg_ol()
				}).onFail(function(data) {
					that.load_chater_info()
					that.get_msg_ol()
				});
			},
			rRegister() {
				var that = this
				uni.request({
					url: getApp().globalData.api + 'user/j-register',
					method: 'POST',
					header: {
						'content-type': 'application/json'
					},
					data: {
						open_id: uni.getStorageSync('open_id')
					},
					success(res) {
						that.jLogin(res.data.data.username)
					}
				})
			},
			load_chater_info() {
				console.log(this.username)
				var that = this;
				var chater_info;
				chater_info = uni.getStorageSync('chater_info')
				that.$data.chater_info = chater_info
				console.log(chater_info)
				uni.setNavigationBarTitle({
					title: chater_info.nickName
				})

				var Chat_Record
				var Chat_Record_ol = []
				uni.request({
					url: getApp().globalData.api + 'system/chat-log',
					method: 'GET',
					header: {
						'content-type': 'application/json' //自定义请求头信息
					},
					data: {
						username: that.username
					},
					success(res) {
						console.log(res.data)
						that.my_avatar = res.data.data.avatar
						var lszs = res.data.data.messages
						console.log(res.data.data.messages)
						for (var i = 0; i < res.data.data.messages.length; i++) {
							if (res.data.data.messages[i].from_id == that.$data.chater_info.username && res.data.data.messages[i].target_id ==
								that.$data
								.username || res.data.data.messages[i].from_id == that.$data.username && res.data.data.messages[i].target_id ==
								that.$data
								.chater_info.username) {
								console.log(res.data.data.messages[i]);
								// res.data.messages[i].create_time=that.get_message_time(res.data.messages[i].create_time,i)
								Chat_Record_ol.push(res.data.data.messages[i])
							}
						}
						console.log(Chat_Record_ol)
						that.$data.Chat_Record = Chat_Record_ol
						for (var e = 0; e < Chat_Record_ol.length; e++) {
							that.get_message_time(Chat_Record_ol[e].msg_ctime, e)
						}
						that.to_bottom()
						uni.hideLoading()
					}
				})
				//更新会话未读消息数   填对方的username，不要填自己的
				this.JIM.resetUnreadCount({
					'username': that.$data.chater_info.username
				});
			},
			to_bottom() {
				setTimeout(function() {
					uni.pageScrollTo({
						scrollTop: 300000
					})
				}, 1000);
			},
			Times_now() {
				var that = this;
				var date = new Date();
				var Y = date.getFullYear() + '-';
				var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
				var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
				var h = (date.getHours() < 10 ? '0' + (date.getHours()) : date.getHours()) + ':';
				var m = (date.getMinutes() < 10 ? '0' + (date.getMinutes()) : date.getMinutes()) + '';
				var s = (date.getSeconds() < 10 ? '0' + (date.getSeconds()) : date.getSeconds());
				// console.log(date)
				that.$data.Time_now.Date = date;
				that.$data.Time_now.Y = Y;
				that.$data.Time_now.M = M;
				that.$data.Time_now.D = D;
				that.$data.Time_now.h = h;
				that.$data.Time_now.m = m;
				that.$data.Time_now.s = s;
			},
			get_message_time(timestamp, msg_ids) {
				let that = this;
				let Time_now = that.$data.Time_now;

				var date = new Date(timestamp);
				var Y = date.getFullYear() + '-';
				var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
				var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
				var h = (date.getHours() < 10 ? '0' + (date.getHours()) : date.getHours()) + ':';
				var m = (date.getMinutes() < 10 ? '0' + (date.getMinutes()) : date.getMinutes()) + '';
				var s = (date.getSeconds() < 10 ? '0' + (date.getSeconds()) : date.getSeconds());
				if (Y == Time_now.Y && M == Time_now.M && D == Time_now.D) {
					that.$data.Chat_Record[msg_ids].timess = h + m;
				} else {
					that.$data.Chat_Record[msg_ids].timess = M + D;
				}
				// return Y + M + D + h + m + s;
			},
			to_send() {
				var that = this;
				var my_say_text = that.$data.my_say_text
				if (!my_say_text || my_say_text == '') {
					//无内容直接跳出
					return;
				}
				console.log('send')
				console.log(that.$data.chater_info.username)
				this.JIM.sendSingleMsg({
					'target_username': that.$data.chater_info.username,
					'target_nickname': that.$data.chater_info.nickName,
					'content': my_say_text,
					'appkey': 'b7ce35a8335c8ab76c58dfd0'
				}).onSuccess(function(data, msg) {
					console.log(data)
					//data.code 返回码
					//data.message 描述
					//data.msg_id 发送成功后的消息 id
					//data.ctime_ms 消息生成时间,毫秒
					//data.appkey 用户所属 appkey
					//data.target_username 用户名
					//msg.content 发送成功消息体,见下面消息体详情
					if (data.code == 0) {
						//发送成功了
						that.Times_now();
						var msgss = that.$data.Chat_Record
						msg.content.timess = that.$data.Time_now.h + that.$data.Time_now.m
						msgss.push(msg.content)
						that.$data.my_say_text = ''
						that.to_bottom()
					} else {
						uni.showToast({
							title: '发送失败'
						})
					}
					console.log(data)
					console.log(msg)
				}).onFail(function(data) {
					console.log(data)
					//data.code 返回码
					//data.message 描述
				});
			},
			get_msg_ol() {
				var that = this;
				uni.$on('msg_ol', function(data) {
					console.log('收到消息，收到消息，收到消息')
					if (data.from_id == that.chater_info.username) {
						that.Times_now();
						var msgss = that.$data.Chat_Record
						data.timess = that.$data.Time_now.h + that.$data.Time_now.m
						if (data.msg_body.media_id) {
							that.get_image(data.msg_body.media_id, data)
							// console.log(data.msg_body.media_src,data)
						} else {
							msgss.push(data)
						}
						that.to_bottom()
						this.JIM.resetUnreadCount({
							'username': that.$data.chater_info.username
						});
					}
				})
			},

			//编辑框事件
			InputFocus(e) {
				this.InputBottom = e.detail.height
			},
			InputBlur(e) {
				this.InputBottom = 0
			}
		}
	}
</script>

<style>
	@import "../../colorui/icon.css";
	@import "../../colorui/main.css";

	page {
		padding-bottom: 100upx;
	}
</style>
