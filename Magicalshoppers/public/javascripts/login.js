var validateCapchaText = () => {
    var value = $(".userCapchaText").val();
    console.log(value);
    if (value.length){
        $("#loginBtn").removeAttr('disabled');
    }
    else{
        $("#loginBtn").attr('disabled', true);
    }
}

var getCaptcha = ()=> {

    $("#loginBtn").attr('disabled', true);
    $(".userCapchaText").val('');

    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var captcha = '';
    for (var i=0;i<=5;i++) {
        captcha = captcha + a.charAt(Math.random() * a.length)
    }
    document.querySelector(".captchBox").innerHTML = captcha;
}

var validateUserDetails = () => {


var uData = {};
uData.accountid = $("#uid").val();
uData.password = $("#accountPwd").val();
console.log(uData);

$.ajax({
    url: '/validate/userCredentials',
    method: 'POST',
    data: uData,
    dataType: 'JSON',
    success: (response) => {
      console.log(response);
      if (response.msg == 'valid') {
        loadSelectedPage('pdetails');
      }
      else {
        $(".invalidCredential").show();
      }
    },
    error: (error) => {
      console.log(error);
    }

})


}
