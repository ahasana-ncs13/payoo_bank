// add money 
document.getElementById('addmoney-btn').addEventListener('click',function(){
    let pin=1234;
    let BankAccountNumber=document.getElementById('Bank-Account-Number');
    let bankAccountNumber1= BankAccountNumber.value;
    if(bankAccountNumber1.length < 11){
        alert("please enter valid account number");
        return;
    }

    let AmountToAdd=document.getElementById('Amount-to-Add');
    let amountTAdd1= parseInt(AmountToAdd.value);
    console.log(amountTAdd1);

    let PinNumber=document.getElementById('Pin-Number');
    let pinNumber1= parseInt(PinNumber.value);
    console.log(pinNumber1);
    if(pin!== pinNumber1){
        alert("please enter valid pin number");
        return;
    }

    let availMoney =document.getElementById('avail-money');
    let availMoney1=parseInt(availMoney.innerText);
    let totalMoney=availMoney1 + amountTAdd1;
    console.log(totalMoney);

    availMoney.innerText=totalMoney;
})

// cash out 
document.getElementById('Cashout-btn').addEventListener('click',function(){
    console.log('clicked');
    let pin=1234;
    let agentNumber =document.getElementById('agent-Number');
    let agentNumber1= agentNumber.value;
    if(agentNumber1.length < 11){
        alert("please enter valid account number");
        return;
    }

    let AmountToWithdraw=document.getElementById('amount');
    let AmountToWithdraw1= parseInt(AmountToWithdraw.value);
    console.log(AmountToWithdraw1);

    let PinNumber=document.getElementById('Pin-Number1');
    let pinNumber1= parseInt(PinNumber.value);
    if(pin!== pinNumber1){
        alert("please enter valid pin number");
        return;
    }

     let availMoney =document.getElementById('avail-money');
    let availMoney1=parseInt(availMoney.innerText);
    let totalMoney=availMoney1 - AmountToWithdraw1;
    console.log(AmountToWithdraw1);

    availMoney.innerText=totalMoney;

})

// toggle 
document.getElementById('cash-out-form').style.display='none';
document.getElementById('add-money-form').style.display='none';
document.getElementById('transfer-money-form').style.display='none';
document.getElementById('get-bonus-form').style.display='none';
document.getElementById('pay-bill-form').style.display='none';
document.getElementById('transaction-form').style.display='none';
    
document.getElementById('addmoney-card').addEventListener('click',function(){
    
    document.getElementById('add-money-form').style.display='block';

     document.getElementById('cash-out-form').style.display='none';
     document.getElementById('transfer-money-form').style.display='none';
    document.getElementById('get-bonus-form').style.display='none';
    document.getElementById('pay-bill-form').style.display='none';
    document.getElementById('transaction-form').style.display='none';
    
})

document.getElementById('cashout-card').addEventListener('click',function(){
   
    document.getElementById('cash-out-form').style.display='block';

    document.getElementById('add-money-form').style.display='none';
    document.getElementById('transfer-money-form').style.display='none';
    document.getElementById('get-bonus-form').style.display='none';
    document.getElementById('pay-bill-form').style.display='none';
    document.getElementById('transaction-form').style.display='none';

})

document.getElementById('transfermoney-card').addEventListener('click',function(){
   
    document.getElementById('transfer-money-form').style.display='block';

    document.getElementById('cash-out-form').style.display='none';
    document.getElementById('get-bonus-form').style.display='none';
    document.getElementById('add-money-form').style.display='none';
    document.getElementById('pay-bill-form').style.display='none';
    document.getElementById('transaction-form').style.display='none';

})

document.getElementById('getbonus-card').addEventListener('click',function(){
   
    document.getElementById('get-bonus-form').style.display='block';

    document.getElementById('transfer-money-form').style.display='none';
    document.getElementById('add-money-form').style.display='none';
    document.getElementById('cash-out-form').style.display='none';
    document.getElementById('pay-bill-form').style.display='none';
    document.getElementById('transaction-form').style.display='none';

})

document.getElementById('paybill-card').addEventListener('click',function(){
   
    document.getElementById('pay-bill-form').style.display='block';
    
    document.getElementById('transfer-money-form').style.display='none';
    document.getElementById('add-money-form').style.display='none';
    document.getElementById('cash-out-form').style.display='none';
    document.getElementById('get-bonus-form').style.display='none';
    document.getElementById('transaction-form').style.display='none';

})

document.getElementById('transaction-card').addEventListener('click',function(){
   
    document.getElementById('transaction-form').style.display='block';
    
    document.getElementById('transfer-money-form').style.display='none';
    document.getElementById('add-money-form').style.display='none';
    document.getElementById('cash-out-form').style.display='none';
    document.getElementById('get-bonus-form').style.display='none';
     document.getElementById('pay-bill-form').style.display='none';

})

