function take(){
    let deppoText = parseInt(document.getElementById('inputDepo').value);
    let deposit = parseInt(document.getElementById('deposit').innerText);
    //for updating balance
    let balanceText = parseInt(document.getElementById('balance').innerText); 

    document.getElementById('deposit').innerText = deposit + deppoText;

    
    document.getElementById('balance').innerText = deppoText + balanceText;
    
    document.getElementById('inputDepo').value =''; 
   
}

function give(){
    let withText = parseInt(document.getElementById('inputWith').value);
    let withdraw = parseInt(document.getElementById('withdraw').innerText);
    //for updating balance
    let balanceText = parseInt(document.getElementById('balance').innerText); 

    document.getElementById('withdraw').innerText = withdraw + withText;

    
    document.getElementById('balance').innerText =  balanceText - withText;
    
    document.getElementById('inputWith').value =''; 
   
}



document.getElementById('btnDepo').addEventListener('click',function(){
    let check = document.getElementById('inputDepo').value;
    if(check > 0 || !isNaN){
        take();
    }
    else{
        document.getElementById('inputDepo').value = '';
        alert('Vai Number Den');
    }
     console.log('num den vai');
})

document.getElementById('btnWith').addEventListener('click',function(){
    let check = document.getElementById('inputWith').value;
    if(check > 0 || !isNaN){
        give();
    }
    else{
        document.getElementById('inputDepo').value = '';
        alert('Vai Number Den');
    }
     console.log('num den vai');
})