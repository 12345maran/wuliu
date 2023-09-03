document.querySelector('.img__btn').addEventListener('click', function() {
	document.querySelector('.content').classList.toggle('s--signup')
})

	var username = "admin"
	var password = "123456"
		// 登录事件
		function login(){
			
			if($("#username").val() == username && $("#password").val() == password ){
				window.location.href="home.html";
			}else{
				layer.open({
				  title: '登录信息'
				  ,content: '用户名或密码错误！请重新输入！'
				  ,icon: 2
				});     
			}
			
		}
		
		
		// 手机登录事件
		function userphonelogin(){
			
			
				layer.open({
				  title: '登录信息'
				  ,content: '手机登录模块尚未开发！'
				  ,icon: 0
				});     
			
		}
		
		// 注册事件
		function register(){
			
			if($("#register_username").val()!="" && $("#register_password").val()!=""
			 && $("#register_email").val()!=""){
				 username =$("#register_username").val()
				 password = $("#register_password").val()
				 layer.open({
				   title: '注册信息'
				   ,content: '注册成功！返回登录界面！'
				   ,icon: 1
				 });   
				 // 返回登录界面
				document.querySelector('.content').classList.toggle('s--signup')
			}else{
				layer.open({
				  title: '注册信息'
				  ,content: '输入信息错误！请重新输入！'
				  ,icon: 2
				});     
			}
		}
	
	// 忘记密码事件
	function forget_password(){
		// 初始化登录信息
		username = "admin"
		password = "123456"
		layer.open({
		  title: '登录信息'
		  ,content: '初始化账号：admin</br>初始化密码：123456'
		}); 
	}