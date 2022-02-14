function generatePin(){
    const pin = Math.round(Math.random() * 1000000);
    const pinString = pin + '';
    if(pinString.length == 6){
        return pin;
    }else{
        return generatePin();
    }
}

function getPin(){
    const pin = generatePin();
    const pinNumberShow =document.getElementById('pin-input');
    pinNumberShow.value = pin;
}

document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById('calc-input');
    if(isNaN(number)){
        if(number == 'C'){
            calcInput.value = '';
        }
    }else{ 
    
    const previousInput = calcInput.value;
    const newInput = previousInput + number;
    calcInput.value = newInput;
}
})

//pin match and show notify messege 
function matchPin(){
    const pin =document.getElementById('pin-input');
    const typeInput = document.getElementById('calc-input');
    const failedNotify = document.getElementById('notify-failed');
    const successNotify = document.getElementById('notify-success');
    if(pin == typeInput){
        successNotify.style.display = 'none'
        failedNotify.style.display = 'block'
        

    }else{
        failedNotify.style.display = 'none'
        successNotify.style.display = 'block'
        
    }
}