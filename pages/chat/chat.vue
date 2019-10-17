<template>
	<view>
		<view class="cu-chat" id="chatlist">
			<!-- <view class="cu-item self">
				<view class="main">
					<view class="content bg-green shadow">
						<text>喵喵喵！喵喵喵！喵喵喵！喵喵！喵喵！！喵！喵喵喵！</text>
					</view>
				</view>
				<view class="cu-avatar round" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg);"></view>
				<view class="date">2018年3月23日 13:23</view>
			</view>
			<view class="cu-item">
				<view class="cu-avatar radius" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big143004.jpg);"></view>
				<view class="main">
					<view class="content shadow">
						<text>喵喵喵！喵喵喵！</text>
					</view>
				</view>
				<view class="date "> 13:23</view>
			</view> -->
			<view class="cu-item" :class="item.from_id==username?'self':''" v-for="(item,index) in Chat_Record" :key="index" :id="(item)">
				<view v-if="item.from_id==chater_info.username" class="cu-avatar round" :style="{backgroundImage:'url('+chater_info.avatar+')'}"></view>
				<view class="main">
					<view class="content shadow" :class="item.from_id==username?'bg-green':''">
						<text>{{item.msg_body.text}}</text>
					</view>
				</view>
				<view v-if="item.from_id==username" class="cu-avatar round" :style="{backgroundImage:'url('+my_avatar+')'}"></view>
				<view class="date ">{{item.timess}}</view>
			</view>
		</view>

		<view class="cu-bar foot input" :style="[{bottom:InputBottom+'px'}]">
			<view class="action">
				<text class="cuIcon-sound text-grey"></text>
			</view>
			<input class="solid-bottom" :adjust-position="false" :focus="false" maxlength="300" cursor-spacing="10" @focus="InputFocus"
			 @blur="InputBlur" v-model="my_say_text"></input>
			<view class="action">
				<text class="cuIcon-emojifill text-grey"></text>
			</view>
			<button class="cu-btn bg-green shadow" @click="to_send()">发送</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username: uni.getStorageSync("username"),
				msgss: null,
				my_avatar: uni.getStorageSync("my_avatar"),
				chater_info: null,
				Chat_Record: null,
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
			this.Times_now();
			this.load_chater_info()
			this.to_bottom()
			this.get_msg_ol()

		},
		onShow() {
			this.to_bottom()

		},
		methods: {
			load_chater_info() {
				var that = this;
				var chater_info;
				chater_info = uni.getStorageSync('chater_info')
				that.$data.chater_info = chater_info
				console.log(chater_info)
				uni.setNavigationBarTitle({
					title: chater_info.nickName
				})

				//下方初始化聊天记录
				var Chat_Record

				var Chat_Record_ol = []
				uni.request({
					url: 'https://report.im.jpush.cn/v2/users/' + that.$data.username +
						'/messages?count=1000&begin_time=2019-06-09%2023:59:59&end_time=2019-06-15%2023:59:59',
					header: {
						"Authorization": 'Basic NjllNzc2YmI1MWMzYTI2NGNmMzY0YTk3OjRmN2YzNTc1YTY5MTBjOTU2MGYzZDk2Ng=='
					},
					success(res) {
						console.log(res.data)
						var lszs = res.data.messages
						console.log(res.data.messages)
						for (var i = 0; i < res.data.messages.length; i++) {
							if (res.data.messages[i].from_id == that.$data.chater_info.username && res.data.messages[i].target_id == that.$data
								.username || res.data.messages[i].from_id == that.$data.username && res.data.messages[i].target_id == that.$data
								.chater_info.username) {
								console.log(res.data.messages[i]);
								// res.data.messages[i].create_time=that.get_message_time(res.data.messages[i].create_time,i)
								Chat_Record_ol.push(res.data.messages[i])
							}
						}
						console.log(Chat_Record_ol)
						that.$data.Chat_Record = Chat_Record_ol
						for (var e = 0; e < Chat_Record_ol.length; e++) {
							that.get_message_time(Chat_Record_ol[e].msg_ctime, e)
						}
					}
				})
				that.to_bottom()
				uni.hideLoading()
				//更新会话未读消息数   填对方的username，不要填自己的
				this.JIM.resetUnreadCount({
					'username': that.$data.chater_info.username
				});
			},
			to_bottom() {
				setTimeout(function() {
					uni.pageScrollTo({
						scrollTop: 3000
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

				this.JIM.sendSingleMsg({
					'target_username': that.$data.chater_info.username,
					'target_nickname': that.$data.chater_info.nickName,
					'content': my_say_text,
					'appkey': '69e776bb51c3a264cf364a97'
				}).onSuccess(function(data, msg) {
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
						msgss.push(data)
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
	page {
		padding-bottom: 100upx;
	}
</style>
