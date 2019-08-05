var number1;
var number2;
var character = " ";
var nextCharacter;
$(function(){
    var flag = true;
    $('.number').click(function(){
        let result = getResult();
        let text = $(this).text();
        if(flag == false){
            displayResult(text);
            flag = true;
        }else{
            if(text=="."){
                displayResult(result + text);
            }else{
                if(result == "0"){
                    displayResult(text);
                }else{
                    displayResult(result + text);
                }
            }
        }
    });
    $('#ce').click(ce);
    $('#c').click(c);
    $('#del').click(del);

    $('#divide').click(function(){
        flag = false;
        nextCharacter = "divide";
        compute('#divide');
    });
    $('#times').click(function(){
        flag = false;
        nextCharacter = "times";
        compute('#times');
    });
    $('#reduce').click(function(){
        flag = false;
        nextCharacter = "reduce";
        compute('#reduce');
    });
    $('#plus').click(function(){
        flag = false;
        nextCharacter = "plus";
        compute('#plus');
    });
    $('#equal').click(function(){
        flag = false;
        displayProcess("");
        equal();
    });
    $('#converse').click(function(){
        let text = getResult();
        displayResult(-text);
    });
    $('#percentage').click(function(){
        let text = getResult();
        text = text * 0.01;
        displayResult(text);
    });
    $('#square-root').click(function(){
        let text = getResult();
        text = Math.sqrt(text);
        displayResult(text);
    });
    $('#square').click(function(){
        let text = getResult();
        text = text*text;
        displayResult(text);
    });
    $('#quarter').click(function(){
        let text = getResult();
        text = 1/text;
        displayResult(text);
    });
});

function compute(t){
    let process = getProcess();
    let result = getResult();
    number2 = result;
    let text = $(t).text();
    displayProcess(process + " " + result +" " + text);
    equal();
}

function equal(){
    var result;
    if(character == " "){
        number1 = getResult();
    }else{
        if(character == "divide"){
            result = number1/number2;
        }else if(character == "times"){
            result = number1*number2;
        }else if(character == "reduce"){
            result = number1 - number2;
        }else if(character == "plus"){
            result = number1 + number2;
        }
        number1 = result;
        displayResult(result);
    }
    character = nextCharacter;
}

function ce(){
    displayResult(0);
}
function c(){
    number1 = number2 = 0;
    character = " ";
    displayProcess("");
    displayResult(0);
}
function del(){
    let result = getResult();
    if(result.length == 1){
        displayResult(0);
    }else{
        result = result.substring(0,result.length-1);
        displayResult(result);
    }
}

function displayProcess(text){
    $('#process').text(text);
}
function getProcess(){
    return $('#process').text();
}

function displayResult(text){
    $('#result').text(text);
}
function getResult(){
    return $('#result').text();
}