document.getElementById("login-btn").addEventListener("click",function(){
    const mobileNo = 1729744000;
    const pin = 1234;
    let numberInput =document.getElementById('number-input');
    let newNumber = parseInt(numberInput.value);

    let pinInput =document.getElementById('pin-input');
    let newpin = parseInt(pinInput.value);


    if(mobileNo === newNumber && pin===newpin){
        window.location.href="./home.html";
    }
    else{
        alert("invalid");
    }
})