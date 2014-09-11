var index = {
	load : function (){
		$('.img-frame').animate({left:"42%",opacity:"1"},800);
		document.addEventListener('keydown',caps,false);
		function caps(e){
			var s = e.keyCode;
			if(s == 20){
				var fade = $('.big').css('display');
				if(fade == 'none')
					$('.big').animate({right:"27%",top:"65%"},100).fadeIn();
				else
					$('.big').fadeOut();
				var fadeTwo = $('.bigTwo').css('display');
				if(fadeTwo == 'none')
					$('.bigTwo').animate({right:"27%",top:"50%"},100).fadeIn();
				else
					$('.bigTwo').fadeOut();
			}
		}
	},
	scale : function (){
		$('html').animate({scale:"0.8"},300);
		$('.cover').css("display","block");
		$('.loginphoto').fadeIn();
		$('.img-frame').css("display","none");
		$(".sing").addClass("can");
		$('.login').css("display","none");
		$('.class').css("display","none");
	},
	fade  : function (){
		$('html').animate({scale:"1"},300);
		$('.cover').css("display","none");
		$('.img-frame').fadeIn();
		$(".sing").removeClass("can");
		$('.login').css("display","block");
		$('.class').css("display","block");	
	},
	key   : function (e){
		var code = e.keyCode;
		if(code == 27){
			$('html').animate({scale:"1"},300);
		$('.cover').css("display","none");
		$('.img-frame').fadeIn();
		$(".sing").removeClass("can");
		$('.login').css("display","block");
		$('.class').css("display","block");				
		}
	},
	submit : function (){
		var name = $('.name').val();
		var pass = $('.pass').val();
		if((name == '')||(pass == '')){
			$('.remide').html("用户名或密码不能为空");
			$('input[name=name]').css("border","1px solid #f00");
			$('input[name=pass]').css("border","1px solid #f00");
		}
		else{

			$('.remide').html("	<div class='box animate'><span style='width: 100%'><span></span></span></div>");
		}
		if((name != '')||(pass != '')){
			$.ajax({
				type : "POST",
				url  : "sign.php",
				data : {"name" : name , "pass" : pass},
				success : function (data){
						if(data == 'true'){
								location.href="index.html";
								document.cookie="username="+name; 
							}
						else
							$('.remide').html("用户名或密码错误");
				},
				dataType : 'json'
			})
		}
		return false;
	},
	login : function (){
							var name = $('input[name=username]').val();
							var pass = $('input[name=userpass]').val();
							var passaga = $('input[name=userpassag]').val();
							if(Number(pass.length) > Number(9) ){
								$('.remideTwo').html("密码长度为9");
								return false;
							}else{
								if((name == '')|| (pass == '') ||(passaga == '')||(pass != passaga))
									$('.remideTwo').html("输入信息有误,请重新输入");
								else{
									$('.remideTwo').html("	<div class='box animate'><span style='width: 100%'><span></span></span></div>");
									$.ajax({
										type : "POST",
										url  : "login.php",
										data : {"name" : name , "pass" : pass },
										success : function (data){
												if(data == 'true'){
														$('.remideTwo').html("注册成功,跳转页面中");
														location.href="sign.html";
														document.cookie="username="+name; 
													}
												else
													$('.remideTwo').html("用户名已被注册");
												console.log(data);
										},
										dataType : 'json'
									})
								}
							}
							return false;
	},
	init  : function (){
		this.load();
		$('.login').click(this.scale);
		document.addEventListener('keydown',this.key);
		$('.close').click(this.fade);
		$('#sign').click(this.submit);
		$('#login').click(this.login);
	}
}
$(document).ready(function (){
	index.init();
});