window.onload=function(){

	/*1距离本场倒计时*/
	function countDown(){
		var now=new Date();
		var end=new Date(2017,11,11,24,00,00);
		var time=(end-now)/1000;
		if(time>0){
			var days=Math.floor(time/86400);
			/*剩余一天的秒数*/
			time%=86400;
			var hours=Math.floor(time/3600);
			time%=3600;
			var minutes=Math.floor(time/60);
			var seconds=Math.floor(time%60);
			document.getElementById("countDown").innerHTML="本场还剩<i>"+hours+"</i>小时"+"<i>"+minutes+"</i>分"+"<i>"+seconds+"</i>秒结束";
		}else{
			clearInterval(countDown);
		}
	}
	setInterval(countDown,1000);

	/*2..1  ajax 智能提示*/
	function reminder() {
		var text = document.getElementById("topSearch");
			text.onkeydown = function () {
			var xhr = null;
			if (window.XMLHttpRequest) {
				xhr = new XMLHttpRequest();
			} else {
				xhr = new ActiveXObject("Microsoft.XMLHTTP");
			}
			xhr.onreadystatechange=function(){
				if(xhr.readyState===4){
					if(xhr.status===200){
					    var	jsonText =	JSON.parse( xhr.responseText );
						for(var i=0;i<jsonText.length;i++){
							  searchUl=document.getElementById("searchList");
							  li=document.createElement("li");
							searchUl.appendChild(li);
							li.innerHTML=jsonText[i];
						}
					}
				}
			};
			xhr.open("get", "kaolaJS/service.php?text="+text.value,true);
			xhr.send(null);
			/*  2.2 点击其他部分 提示框消失*/
			document.onclick=function(event){
				var e=event||window.event;
				var aim=e.target||e.srcElement;
				if(aim!=li&&aim!=searchUl) {
					searchUl.style.display = "none"
				}else{
					searchUl.style.display="block";
				}
			}
		};
	}
	reminder();


	/*3轮播 */
	function homeSlider(){
		var leftBtn=document.getElementById("prev");
		var rightBtn=document.getElementById("next");
		var list=document.getElementById("list");
		function move(offset){
			var newLeft = parseInt(list.style.left) + offset;
			list.style.left = newLeft + 'px';
			if(newLeft<-7680){
				list.style.left=-1920+"px";
			}
			if(newLeft>0){
				list.style.left=-7680+"px";
			}
		}
		/*图片自动播放和鼠标移入停止*/
		var timer;
		function autoMove(){
			timer = setInterval(function(){rightBtn.onclick()}, 1000);
		}
		autoMove();
		var container=document.getElementById("container");
		function stopMove(){
			clearInterval(timer);
		}
		container.onmouseover=stopMove;
		container.onmouseout=autoMove;
		/*轮播下方 数字*/
		var sliderNum=document.getElementById("buttons").getElementsByTagName("span");
		var index=0;
		function sliderBtn(){
			for(var j= 0;j<sliderNum.length;j++){
                    if(sliderNum[j].className=='on'){
                        sliderNum[j].className='';
                    }
                    sliderNum[index].className = 'on';
			}

		}
		leftBtn.onclick=function(){
			index--;
			if(index<0){
				index=4;
			}
			sliderBtn();
			move(1920);
		}
		rightBtn.onclick=function(){
			index++;
			if(index>4){
				index=0;
			}
			sliderBtn();
			move(-1920);
		}
        for (var j = 0; j < sliderNum.length; j++) {
            sliderNum[j].onclick = function () {

				/* 偏移量获取：这里获得鼠标移动到小圆点的位置，用this把index绑定到对象sliderNum[i]上，去谷歌  this的用法  */
				/* 由于这里的index是自定义属性，需要用到getAttribute()这个DOM2级方法，去获取自定义index的属性*/
                var clickIndex = parseInt(this.getAttribute('index'));
                var offset = 1920 * (index - clickIndex);
                move(offset); //存放鼠标点击后的位置，用于小圆点的正常显示
                index = clickIndex;
                sliderBtn();
            }
        }
	}
	homeSlider();
	/*顶部 菜单变化以及侧边栏楼层导航*/
	var leftNav=document.getElementById("leftAside");
	var rightNav=document.getElementById("rightCar");
	var topSearch=document.getElementById("LogoSearch");
	var body=document.getElementsByTagName("body")[0];
	window.onscroll=function(){
		var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
		var changeTop=topSearch.querySelectorAll('ul>li.changeTop');
		if(scrollTop>=110){
			topSearch.className="topSearch";
			document.getElementById("cart").style.display="none";
			document.getElementById("suggestList").style.display="none";
			changeTop[0].style.margin="5px 0";
			changeTop[1].style.margin="5px 0";
			topSearch.querySelector('ul>li.changeTop img');
			document.getElementById("logo").src="wphImg/logo.png";
		}
		else{
			topSearch.className="";
			changeTop[0].style.margin="30px";
			changeTop[1].style.margin="30px";
			document.getElementById("logo").src="wphImg/264271ddbec447288f17aef71119b1f4.png";
		}

		if(scrollTop>=650){
			leftNav.className="fixSidebar";
			rightNav.className="fixSidebar";
		}else{
			leftNav.className="";
			rightNav.className="";
		}
		if(body.offsetHeight-leftNav.clientHeight-scrollTop<700){
			leftNav.className="";
			rightNav.className="";
		}
	}

}
