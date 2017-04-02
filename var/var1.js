function check(){
    var one = document.getElementById("one");
    var tow = document.getElementById("tow");
    var three = document.getElementById("three");
    var four= document.getElementById("four");
    var five = document.getElementById("five");
    var six = document.getElementById("six");
    var seven = document.getElementById("seven");
    var eight = document.getElementById("eight");
    var nine = document.getElementById("nine");
    var ten = document.getElementById("ten");
    var eleven = document.getElementById("eleven");
    var twelve = document.getElementById("twelve");
    var thirteen = document.getElementById("thirteen");
    var fourteen = document.getElementById("fourteen");
    var fifteen = document.getElementById("fifteen");
    var sixteen = document.getElementById("sixteen");
    var seventeen = document.getElementById("seventeen");
    var eighteen = document.getElementById("eighteen");
    
    var yesotvet = 0;
    
    if(one.value == "1"){
        yesotvet = yesotvet + 1;
    }
    if(tow.value == "4"){
        yesotvet = yesotvet + 1;
    }
    if(three.value == "1"){
        yesotvet = yesotvet + 1;
    }
    if(four.value == "1"){
        yesotvet = yesotvet + 1;
    }
    if(five.value == "4"){
        yesotvet = yesotvet + 1;
    }
    if(six.value == "2"){
        yesotvet = yesotvet + 1;
    }
    if(seven.value == "ВЕТЕР"){
        yesotvet = yesotvet + 1;
    }
    if(eight.value == "12"){
        yesotvet = yesotvet + 1;
    }
     if(nine.value == "12"){
        yesotvet = yesotvet + 1;
    } 
    if(ten.value == "21"){
        yesotvet = yesotvet + 1;
    }
    if(eleven.value == "10"){
        yesotvet = yesotvet + 1;
    }
    if(twelve.value == "3"){
        yesotvet = yesotvet + 1;
    }
     if(thirteen.value == "2"){
        yesotvet = yesotvet + 1;
    }
     if(fourteen.value == "21122"){
        yesotvet = yesotvet + 1;
    }
     if(fifteen.value == "3"){
        yesotvet = yesotvet + 1;
    }
     if(sixteen.value == "ГВТ"){
        yesotvet = yesotvet + 1;
    }
     if(seventeen.value == "БЕДГВАЖ"){
        yesotvet = yesotvet + 1;
    }
     if(eighteen.value == "БВГА"){
        yesotvet = yesotvet + 1;
    }
    
    if(yesotvet > 0 && yesotvet < 5){
        yesotvet = 2;
    }
    if(yesotvet > 5 && yesotvet < 12){
        yesotvet = 3;
    }
    if(yesotvet > 12 && yesotvet < 18){
        yesotvet = 4;
    }
    if(yesotvet > 18 && yesotvet < 23){
        yesotvet = 5;
    }
    
    alert("Ваша оценка! " + yesotvet);
    
}
    document.getElementById('otvet').innerHTML = yesotvet;
