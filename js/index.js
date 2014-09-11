var a = b = 1,c=0;
var name,tablename//tablename == undefined;
var index = {
	list : function (){
			$(this).css("color","#fff");
			$(this).siblings().css("color","#000");
	},
	db  :  function (){
			var s = $(this).html();
			var duifang = s.substring(s.lastIndexOf("=")+7,s.lastIndexOf("<"));
			var zhaopian = s.substring(s.lastIndexOf("src=")+5,s.lastIndexOf("alt")-2);
			$.ajax({
				type : "POST",
				url  : "tiaoshi.php",
				data : {"name" : name , "duifang" : duifang},
				success : function (data){
						if(data != 0)
							tablename = data;
						else
							{
								tablename = name+duifang;
											$.ajax({
												type : "POST",
												url  : "makeTable.php",
												data : {"tablename" : tablename},
												success : function (data){

												},
												dataType : "json"
											});
											$.ajax({
												type : "POST",
												url  : "change.php",
												data : {"name" : name , "duifang" : duifang ,"tablename" : tablename},
												success : function (data){

												},
												dataType : "json"
											})
							}
				},
				dataType : "json"
			})	
			var pop = $("<div class='win'><div class='header'><div class='img-frame img-circular img-selected left'><img src='"+zhaopian+"' alt='Yours'></div><h1 class='name_win'>"+duifang+"</h1></div></div>");
			var p = $("<div class='meun'></div>");
			pop.append(p);
			var contest = $("<div class='contest'></div>");
			p.after(contest);
			var biao = $("<div class='biao'></div>");
			contest.after(biao);
			var oo = $("<div id='color'></div>");
			biao.append(oo);
			oo.bind("click",function (){
				if(a == 1){
					$('#picker').farbtastic('#color');
					var s = pop.css("left");
					var left1 = s.substring(0,s.indexOf("p"));
					var k = pop.css("top");
					var top1 = k.substring(0,k.indexOf("p"));
					top1 = Number(top1)+130;
					$("#picker").animate({top:top1,left:left1},100);
					$("#picker").fadeIn();
					a=0;
				}
				else{
					$("#picker").fadeOut();
					a=1;
				}
			});
			var biaoqing = $("<div class='biaoqing'></div>");
			oo.after(biaoqing);
			biaoqing.bind("click",function (){

				if(b == 1){
					var s = pop.css("left");
					var left1 = s.substring(0,s.indexOf("p"));
					var k = pop.css("top");
					var top1 = k.substring(0,k.indexOf("p"));
					top1 = Number(top1)+25;
					$("#biaoqing").animate({top:top1,left:left1},100);
					$("#biaoqing").fadeIn();
					b=0;
				}
				else{
					$("#biaoqing").fadeOut();
					b=1;
				}

			});
			var clear = $("<h1 class='clear'>清屏</h1>");
			biao.after(clear);
			clear.bind('click',function (){
				$('.contest').html("");
			});
			var text = $("<div class='text'></div>");
			clear.after(text);
			var area = $("<textarea class='area' autofocus='autofocus'></textarea>")
			text.append(area);
			area.bind("click",function (){
				var cor = $("#color").css('backgroundColor');
				area.css("color",cor);
			});
			area.bind('input',function (){
				if(area.val() != '')
					$('.submit').css("color","#000");
				else
					$('.submit').css("color","#aaa");
			});
			var submit = $("<div class='submit'>发送</div>");
			area.after(submit);
			submit.bind("click",function(){
				var co = submit.css("color");
				if(co == 'rgb(0, 0, 0)'){
					var s = $('.area').val();
					var d = new Date();
					var vYear = d.getFullYear()+"/";
					var vMon = d.getMonth() + 1+"/";
					var vDay = d.getDate()+"/  ";
					var h = d.getHours()+":"; 
					var m = d.getMinutes()+":"; 
					var se = d.getSeconds(); 
					var time = vYear+vMon+vDay+h+m+se;
					$.ajax({
						type 		: "POST",
						url       	: "insertInfor.php",
						data 		: {"name" : name , "contest" : s , "time" : time, "tablename" : tablename},
						success : function (data){
											
						},
						dataType 	: "json"
					});
					$('.area').val('');
				}
			});
			setInterval(jilu,300);
			function jilu(){
					$.ajax({
						type 		: "POST",
						url       	: "GetIfo.php",
						data 		: {"tablename" : tablename},
						success : function (data){
										$('.contest').html("");
										var s = data.length/3;
										for(var i = 0; i < s ; i++){
											var time = data.pop();
											var contest = data.pop();
											var name = data.pop();
											$(".contest").append("<li class='tab'>"+name+""+"    "+time+"</li><li class='jilu'>"+contest+"</li>")
											$(".jilu").css("color",$("#color").css('backgroundColor'));
										}
						},
						dataType 	: "json"
					});
			}
			var s = $("<div class='little'>一</div>");
			p.append(s);
			var l = $("<div class='big'>口</div>");
			s.after(l);
			var mm = $("<div class='no'>X</div>");
			l.after(mm);
			pop.bind('mouseover',function (){
				pop.draggable();
			});
			s.bind("click",function (){
				var s = $(this).parent().parent();
				s.animate({width:"300",height:"100"},500);
				$(".contest").fadeOut(100);
				$(".submit").fadeOut(100);
				$(".text").fadeOut(100);
				$("#color").fadeOut(100);
				$('.clear').fadeOut(100);
			});
			l.bind("click",function (){
				var s = $(this).parent().parent();
				s.animate({width:"600",height:"450"},500);
				$(".contest").fadeIn(100);
				$(".submit").fadeIn(100);
				$(".text").fadeIn(100);
				$("#color").fadeIn(100);
				$('.clear').fadeIn(100);
			});
			mm.bind("click",function (){
				var s = $(this).parent().parent();
				s.remove();
				var l = 0;
							$.ajax({
								type : "POST",
								url  : "change.php",
								data : {"name" : name , "duifang" : duifang ,"tablename" : l,"tab" : tablename},
								success : function (data){

								},
								dataType : "json"
							})
			});
			$('html').append(pop);
	},
	load : function (){
			$('.list').fadeIn(500);
			$('.list').draggable();
			 var pl = ["biaoqing/bzmh/","biaoqing/gnl/","biaoqing/lxh/","biaoqing/mr/"];
			   for(var ll = 0 ; ll < pl.length;ll++){
                       $.ajax({             
                              type : 'GET',
                              url: "scan.php",
                              data:{"url" : pl[ll]}, 
                              success :function(data){
                                                      for(var i = 0 ; i < data.length ;i++ )
                                                           $("#biaoqing").append("<img class='img' src='"+pl[c]+data[i]+"'>");
                                                      $("#biaoqing").append("<hr>");
                                                      c++;
                                 },
                              dataType : 'json'
                     });
                }
                var strCookie=document.cookie;
                var arrCookie=strCookie.split("; ");
                var userId; 
                for(var i=0;i<arrCookie.length;i++){ 
						var arr=arrCookie[i].split("=");  
						if("username"==arr[0]) {
							userId=arr[1];
							name = userId;
							$('.name').html(name);
		            }
	            }
	            function a(){
	            	$.ajax({             
                              type : 'POST',
                              url: "search.php",
                              data:{"url" : name}, 
                              success :function(data){
                                                      $('.upload').attr("src",data);
                                 },
                              dataType : 'json'
                     });
	            $.ajax({
	            	type : "POST",
	            	url  : "loginGetIn.php",
	            	data : {"user" : name},
	            	success : function (data){
	            		$('.list-ul').html("");
	            		for(var i = 0 ; i < data.length ; i+=3){
	            			if(data[i+2] != 0)
	            				var lll = $('<li class="list-li"><div class="img-frame img-circular img-selected photo"><img src="'+data[i+1]+'" alt=""></div><span class="bbb">'+data[i]+'</span></li>');
	            			else
	            				var lll = $('<li class="list-li"><div class="img-frame img-circular img-selected photo"><img src="'+data[i+1]+'" alt=""></div><span class="aaa">'+data[i]+'</span></li>');
	            			$('.list-ul').append(lll);
	            		}
	            	},
	            	dataType : "json"
	            });
	            }
	            setInterval(a,1000);

	},
	exit : function (){
		location.href="sign.html";
	},
	upload : function (){
		var fade = $("#dropbox").css('display');
		if(fade == 'none')
			$("#dropbox").fadeIn();
		else
			$("#dropbox").fadeOut();
	},
	sea : function(){
			var s = $(this).val();
			if(s != ''){
				;
			}
	},
	init : function (){
			this.load();
			$('.list-li').live('click',this.list);
			$('.list-li').live('dblclick',this.db);
			$('#biaoqing').delegate("img","click",function (){
				var name = $(this).attr("src");
	            $('.area').append(name);
	        });
	        $('.exit').click(this.exit);
	        $('.upload').click(this.upload);
	        $('.bottom').delegate("p","click",function (){
				var po = $("<div class='adduser'></div>");
				po.bind('mouseover',function(){
						po.draggable();
				});
				var head = $("<h1 class='head'>添加朋友</h1>");
				po.append(head);
				var input = $("<input type='text' class='friend' placeholder='请输入要查找的用户名'>");
				head.after(input);
				var div = $("<div class='infor'></div>");
				input.after(div);
				var cancel = $("<div class='cancel'>取消</div>");
				cancel.bind('click',function (){
					po.remove();
				});
				input.after(cancel);
				var sure = $("<div class='sure'>确定</div>");
				cancel.after(sure);
				sure.bind('click',function (){
					$('.infor').html("<div class='box animate'><span style='width: 100%'><span></span></span></div>");
					var neori = $('.sure').html();
					if(neori == '确定'){
						var contest = $('.friend').val();
						$.ajax({
							type : "post",
							url  : "find.php",
							data : {"friendname" : contest},
							success : function (data){
									if(data == 'false')
										$('.infor').html("<div class='box animate'>查无此人</div>");
									else
										{
											$('.infor').html("<div class='img-frame img-circular img-selected photo'><img src='"+data[1]+"' alt=''></div><div class='namea'>"+data[0]+"</div>");
											$('.sure').html("加为好友");
											$('.sure').unbind();
											$('.sure').bind('click',function(){
												$('.infor').html("<div class='box animate'><span style='width: 100%'><span></span></span></div>");
												$.ajax({
													type : "POST",
													url  : "ins.php",
													data : {"name" : name , "fri" : data[0], "photo" : data[1]},
													success : function (data){
															if(data == 'true'){
																$('.infor').html("<div class='box animate'>添加成功</div>");
																$('.sure').html("确定");
																$('.sure').unbind();
															}
													},
													dataType : "json" 
												});
											});
										}
										$('.friend').val("");
							},
							dataType : 'json'
						});
					}
				});
				$('body').append(po);
	        });
			$(".search").bind('input',this.sea);
	}
}
$(document).ready(function(){
	index.init();
});