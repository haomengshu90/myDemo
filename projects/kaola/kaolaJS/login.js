$(function(){
    $(".top li").click(function(){
        $(this).addClass('head2').siblings().removeClass('head2');
        console.log($(this).index());
        $('.loginwraps .bannercont').eq($(this).index()).show().siblings().hide();
    });
    /*手机登录验证*/
    //jquery验证手机号码
    $('#submitBtn').on('click',function(){
        function checkSubmitMobil(){
            var tel=$('#tel').val();
            if(tel==""){
                /*alert("手机号码不能为空！");*/
                $("#tel_msg").html("<font  class='error'><i></i>手机号不能为空</font>");
                $("#tel").focus();
                return false;
            }
            else if(!$("#tel").val().match(/^(((13[0-9]{1})|159|153)+\d{8})$/)){
                /*alert("手机号码格式不正确！");*/
                $("#tel_msg").html("<font  class='error'><i></i>手机号码格式不正确！请重新输入！</font>");
                $("#tel").focus();
                return false;
            }else{
                $("#tel_msg").hide();
            }
            return true;
        }

        function checkSubmitEmail() {
            var pwd1 = $("#password").val();
            if (pwd1 == '') {
                $("#password_msg").html("<font  class='error'><i></i>密码不能为空</font>");
                $("#password_msg").focus();
                return false;
            } else if (pwd1.length < 6) {
                $("#password_msg").html("<font  class='error'><i></i>密码不能少于6位</font>");
                $("#password_msg").focus();
                return false;
            } else if (pwd1.length > 15) {
                $("#password_msg").html("<font  class='error'><i></i>密码不能大于15位</font>");
                $("#password_msg").focus();
                return false;
            } else {
                $("#password_msg").hide();
            }
            return true;
         }
            if(!checkSubmitMobil()||!checkSubmitEmail()){
                return false;
            }else if(checkSubmitMobil()&&checkSubmitEmail()){
                window.location.href='kaola.html';
            }

        })

     /* 邮箱验证*/
    $('#emailSubmit').on('click',function(){
        function checkEmail() {
            if ($("#email").val() == "") {
                $("#email_msg").html("<font  class='error'><i></i>邮箱地址不能为空！</font>");
                /*alert("邮箱不能为空!")*/
                $("#email").focus();
                return false;
            }
             else if (!$("#email").val().match( /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/)) {
                /*alert("邮箱格式不正确");*/
                $("#email_msg").html("<font  class='error'><i></i>邮箱格式不正确！请重新输入！</font>");
                $("#email").focus();
                return false;
             }else{
                 $("#email_msg").hide();
             }

            return true;
        }

        function checkpassEmail() {
            var pwd = $("#emailpassword").val();
            if (pwd == '') {
                $("#emailpassword_msg").html("<font  class='error'><i></i>密码不能为空</font>");
                $("#emailpassword_msg").focus();
                return false;
            } else if (pwd.length < 6) {
                $("#emailpassword_msg").html("<font  class='error'><i></i>密码不能少于6位</font>");
                $("#emailpassword_msg").focus();
                return false;
            } else if (pwd.length > 15) {
                $("#emailpassword_msg").html("<font  class='error'><i></i>密码不能大于15位</font>");
                $("#emailpassword_msg").focus();
                return false;
            } else {
                $("#emailpassword_msg").hide();
            }
            return true;
        }
        if(!checkEmail()||!checkpassEmail()){
            return false;
        }else if(checkEmail()&&checkpassEmail()){
            window.location.href='kaola.html';
        }
    })

})



