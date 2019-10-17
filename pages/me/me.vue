<template>
	<view>
		<!-- <text>帐号：{{info_me.username}}\n</text> -->
		<view class="cu-card dynamic">
			<view class="cu-item shadow bg-gradual-green" style="height: 400upx; background-image: url(../../static/whales.png);background-repeat: no-repeat;background-size: 100% 100%;">
				<view class="ava-wbk">
					<image class="ava-img shadow-warp" :src="my_avatar" @click="choice_avatar()"></image>
				</view>
				<view class="flex justify-center margin-top">
					<text class="text-bold" style="font-size: 38upx;">{{info_me.nickname}}
						<text class="cuIcon-male text-blue" v-if="info_me.gender==1" style="font-size: 38upx;"></text>
						<text class="cuIcon-female text-red" v-if="info_me.gender==2" style="font-size: 38upx;"></text>
						<text class="cuIcon-question text-red" v-if="info_me.gender==0" style="font-size: 38upx;"></text>
					</text>
				</view>
			</view>
			<view class="cu-bar bg-white">
				<view class="action">
					<text class="cuIcon-title text-green "></text> 修改信息
				</view>
			</view>
			<view>
				<input type="text" v-model="set_nickname" placeholder="昵称" />
				<input type="number" v-model="set_gender" placeholder="性别 0未知 1男 2女" />
				<button type="primary" @click="set_userinfo">确定</button>
			</view>
		</view>
	</view>
</template>

<script>
	import md5 from 'js_sdk/js-md5/src/md5.js'
	export default {
		data() {
			return {
				username: uni.getStorageSync("username"),
				info_me: null,
				set_nickname: null,
				set_gender: null,
				my_avatar:null
			}
		},
		onLoad() {

		},
		onShow() {
			this.getinfo()
		},
		methods: {
			getinfo() {
				let that = this;
				let userid = this.userid;
				let appkey = this.appkey;
				let username = this.$data.username
				this.JIM.getUserInfo({
					'username': username,
					'appkey': '69e776bb51c3a264cf364a97'
				}).onSuccess(function(data) {
					console.log(data)
					that.$data.info_me = data.user_info
					that.get_avatar_me()
					//data.code 返回码
					//data.message 描述
					//data.user_info.username
					//data.user_info.appkey
					//data.user_info.nickname
					//data.user_info.avatar 头像
					//data.user_info.birthday 生日，默认空
					//data.user_info.gender 性别 0 - 未知， 1 - 男 ，2 - 女
					//data.user_info.signature 用户签名
					//data.user_info.region 用户所属地区
					//data.user_info.address 用户地址
					//data.user_info.mtime 用户信息最后修改时间
					//data.extras 自定义json字段
				}).onFail(function(data) {
					//data.code 返回码
					//data.message 描述
				});


				// 此处示范如何获取头像真实地址
				// 获取的用户头像不能直接使用,那只是个文件id,得再次获取真实地址
				// 与其这样费事不如直接用extras开一个avatar字段来保存自己服务器上面的头像链接
			},
			get_avatar_me(){
				var that=this;
				this.JIM.getResource({
					'media_id': this.$data.info_me.avatar,
				}).onSuccess(function(data) {
					//data.code 返回码
					//data.message 描述
					//data.url 资源临时访问路径，具体超时时间expire time会包含在url中
					console.log(data)
					//头像：data.user_info.avatar
					that.$data.my_avatar=data.url
					uni.setStorage({
						key:'my_avatar',
						data:data.url
					})
				}).onFail(function(data) {
					//data.code 返回码
					//data.message 描述
				});
			},
			set_userinfo() {
				var that = this
				var nickname = that.$data.set_nickname
				var gender = that.$data.set_gender

				var appkey = '69e776bb51c3a264cf364a97';
				var key = '4f7f3575a6910c9560f3d966';
				var timestamp = (new Date()).getTime();
				var signature = md5("appkey=69e776bb51c3a264cf364a97&timestamp=" + timestamp +
					"&random_str=022cd9fd995849b66666&key=4f7f3575a6910c9560f3d966");

				if (nickname && gender) {
					this.JIM.updateSelfInfo({
						'nickname': nickname,
						'signature': signature,
						'gender': gender
					}).onSuccess(function(data) {
						//data.code 返回码
						//data.message 描述
						console.log(data)
						that.getinfo()
					}).onFail(function(data) {
						//同上
					});



				} else {

				}
			},
			choice_avatar() {
				var that = this
				var tempFilePaths = null
				uni.chooseImage({
					count: 1,
					success(res) {
						var tempFilePaths = res.tempFilePaths[0];
						console.log(tempFilePaths)
						that.JIM.updateSelfAvatar({
							'avatar': tempFilePaths
						}).onSuccess(function(data) {
							//data.code 返回码
							console.log(data)
							//data.message 描述
							
							//重新获取信息
							that.getinfo()
						}).onFail(function(data) {
							//同上
						});
					}


				})

			}

		}
	}
</script>

<style>
	page {
		background-color: white;
	}

	.ava-wbk {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 50upx;
	}

	.ava-img {
		width: 180upx;
		height: 180upx;
		border-radius: 100%;
	}
</style>
