if(navigator.platform=='Win32'){
    logodown = document.querySelector("#logodown");
    console.log(logodown);
    logodown.textContent="INSPACE📡";
}
function passwordPattern(){
    pw = document.getElementById("passwordform");
    cpw = document.getElementById("confirmpasswordform");
    pwText = pw.value;
    cpw.pattern = pwText;
}