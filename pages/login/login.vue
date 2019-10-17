<template>
	<view>
		<text>登录</text>
		<input type="text" placeholder="帐号" v-model="username"/>
		<input type="text" placeholder="密码" v-model="password" password="true"/>
		<button type="primary" @click="login_in()">登录</button>
		<br>
		<text>注册</text>
		<input type="text" placeholder="帐号" v-model="re_un"/>
		<input type="text" placeholder="密码" v-model="re_pw"/>
		<input type="text" placeholder="昵称" v-model="re_nickname"/>
		<button type="primary" @click="register()">注册</button>
	</view>
</template>

<script>
	import md5 from '../../js_sdk/js-md5/src/md5.js'
	export default {
		data() {
			return {
				username:'moxiyu',
				password:'weiaini',
				re_un:'',
				re_pw:'',
				re_nickname:''
			}
		},
		onLoad() {
			
		},
		methods: {
			
			login_in(){
				let that=this;
				let un=that.$data.username;
				let pw=that.$data.password;
				if (!un || !pw) {
					uni.showToast({
						title:'输入不完整'
					})
					return;
				}
				this.JIM.login({
					'username':un,
					'password':pw
				}).onSuccess(function(data){
					console.log("%c%s","color: red; font-size: 24px;","登录成功");
					console.log(data)
					uni.showToast({
						title:'登录成功'
					})
					
					
					uni.setStorage({
						key:'username',
						data:that.$data.username,
						success() {
							uni.reLaunch({
								url:'../index/index'
							})
						}
					})
					
				}).onFail(function(data){
					console.log('JIM -登录失败')
					uni.showToast({
						title:'登录失败'
					})
				});
				
				
				
			},
			
			register(){
				let that=this;
				let un=that.$data.re_un;
				let pw=that.$data.re_pw;
				let nn=that.$data.re_nickname;
				
				if (!un || !pw || !nn) {
					uni.showToast({
						title:'输入不完整'
					})
					return;
				}
				
				this.JIM.register({
					'username' : un,
					'password' : pw,
					'nickname' : nn,
					'is_md5' : false,
					'address' : '江苏',
					'extras':{
						'avatar':'https://img-cdn-qiniu.dcloud.net.cn/uniapp/doc/github.svg'
					},
					'media_id': 'qiniu/image/j/4A70699BFF43CC1CE992DD3070AD0909.png'
				}).onSuccess(function(data) {
					console.log("%c%s","color: red; font-size: 24px;","注册成功");
					uni.showToast({
						title:'注册成功'
					})
				  }).onFail(function(data) {
					console.log('JIM -注册失败')
					console.log(data)
					uni.showToast({
						title:'注册失败'
					})
				});
			}
		}
	}
</script>

<style>
	input{
		width: 100%;
		height: 60upx;
		border-radius: 30upx;
		border: #8F8F94 solid 3upx;
	}
</style>
