
var validateUserName = (event) => {
    console.log(event);
     if ((event.keyCode >= 65 &&  event.keyCode <= 90) || (event.keyCode >= 97 &&  event.keyCode <= 122)) {
         return true;
     } else {
         return false;
     }
  }

var validateMobNumber = (event) => {
    console.log(event);
     if (event.keyCode >= 48 &&  event.keyCode <= 57) {
         return true;
     } else {
         return false;
     }
  } 

//   var validateAccPass = (event) => {
//     console.log(event);
//     validateAccPwd();
//   } 


var signupDetails = {};
var validateSignupDetails = () =>{

     //console.log("I am here -1");
     document.querySelector(".userNameError").style.display = 'none';
     document.querySelector(".userPwdError").style.display = 'none';
     document.querySelector(".confirmPwdError").style.display = 'none';
     document.querySelector(".mobileNoError").style.display = 'none';

    try {
    //console.log("I am here -2");

    signupDetails.userName = document.querySelector("#userName").value;
    if (!signupDetails.userName) {
        throw 'USERNAMEERROR';
    }

    //console.log("I am here -3");
    signupDetails.userPwd = document.querySelector("#userPwd").value;
    if(!signupDetails.userPwd){
        throw 'USERPWDERROR';
    }
    validateUserPwd();

    //console.log("I am here -4");
    signupDetails.confirmPwd = document.querySelector("#confirmPwd").value;
    if(signupDetails.confirmPwd != signupDetails.userPwd){
        throw 'CONFIRMPWDERROR';
    }

    //console.log("I am here -5");
    signupDetails.mobNo = document.querySelector("#mobileNo").value;
    if(!signupDetails.mobNo || signupDetails.mobNo.length != 10  || signupDetails.mobNo.charCodeAt(0) == 48){
        throw 'MOBNUMBERERROR';
    }
    signupDetails.mobNo = parseInt(signupDetails.mobNo);

    
    //console.log("I am here -6");
    signupDetails.email = document.querySelector("#emailID").value;
    if(!signupDetails.email){
        throw 'EMAILERROR';
    }
    validateEmail();


    }
 
    catch (error) {
         //console.log("I am here -7");

        switch (error){
            case 'USERNAMEERROR':
                document.querySelector(".userNameError").style.display = 'block';
                 console.log("I am here -8");
                break;
                
            case 'USERPWDERROR':
                document.querySelector(".userPwdError").style.display = 'block';
                 console.log("I am here -9");
                break;

            case 'CONFIRMPWDERROR':
                    document.querySelector(".confirmPwdError").style.display = 'block';
                     console.log("I am here -10");
                    break;    

            case 'MOBNUMBERERROR':
                document.querySelector(".mobileNoError").style.display = 'block';
                console.log("I am here -11");
                break;

            case 'EMAILERROR':
                document.querySelector(".emailError").style.display = 'block';
                console.log("I am here -12");
                break;


        }

    }
console.log(signupDetails);
}



var validateUserPwd = ()=>{
    var pwdstr = document.querySelector("#userPwd").value;
    pwdstr = pwdstr.trim();
    
    var pwdcharacters = /[a-zA-Z]/g;
    var numbers = /[0-9]/g;
    var specialcase = /[-’/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/g;

    document.querySelector("#condtn1").style.color="red";
    document.querySelector("#condtn2").style.color="red";
    document.querySelector("#condtn3").style.color="red";
    document.querySelector("#condtn4").style.color="red";
    document.querySelector("#condtn5").style.color="red";    
    document.querySelector("#condtn6").style.color="red"; 

    if (pwdstr) {
    console.log("I am here -12");

    if(pwdstr.length==8){
        document.querySelector("#condtn1").style.color = "green";
  
    }
    else{
        document.querySelector("#condtn1").style.color="red";
        document.querySelector(".userPwdError").style.display = 'block';           
    }

    if(pwdstr.charCodeAt(0)>= 65 && pwdstr.charCodeAt(0)<= 90){
        document.querySelector("#condtn2").style.color = "green";         
    }
    else{
        document.querySelector("#condtn2").style.color="red"; 
        document.querySelector(".userPwdError").style.display = 'block';          
    }  

    if(pwdstr.match(pwdcharacters).length>=3){
        document.querySelector("#condtn3").style.color = "green";           
    }
    else{
        document.querySelector("#condtn3").style.color="red";
        document.querySelector(".userPwdError").style.display = 'block';           
    }  

    if(pwdstr.match(specialcase).length>=2){
        document.querySelector("#condtn4").style.color = "green";        
    }
    else{
        document.querySelector("#condtn4").style.color="red";
        document.querySelector(".userPwdError").style.display = 'block';           
    }  

    if(pwdstr.match(numbers).length>=1)
    {
        document.querySelector("#condtn5").style.color = "green";          
    }
    else{
        document.querySelector("#condtn5").style.color="red";
        document.querySelector(".userPwdError").style.display = 'block';           
    } 

    if ( (pwdstr.charCodeAt(pwdstr.length-1))>= 48 && (pwdstr.charCodeAt(pwdstr.length-1))<= 57 )
    {
        document.querySelector("#condtn6").style.color = "red"; 
        document.querySelector(".userPwdError").style.display = 'block';            
    }
    else{
        document.querySelector("#condtn6").style.color="green";        
    } 
}
}

var validateEmail = ()=> {

    //console.log("I am here -13");

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var emailstr = document.querySelector("#emailID").value;
    emailstr = emailstr.trim();

    if(emailstr.match(mailformat))
    {
        //console.log("I am here -14");
        document.querySelector(".emailError").style.display = 'none';
    }
    else
    {
       // console.log("I am here -15");
        document.querySelector(".emailError").style.display = 'block';  
    }
}