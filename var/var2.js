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
    
    if(one.value == "4"){
        yesotvet = yesotvet + 1;
    }
    if(tow.value == "3"){
        yesotvet = yesotvet + 1;
    }
    if(three.value == "2"){
        yesotvet = yesotvet + 1;
    }
    if(four.value == "3"){
        yesotvet = yesotvet + 1;
    }
    if(five.value == "3"){
        yesotvet = yesotvet + 1;
    }
    if(six.value == "4"){
        yesotvet = yesotvet + 1;
    }
    if(seven.value == "РИТА"){
        yesotvet = yesotvet + 1;
    }
    if(eight.value == "21"){
        yesotvet = yesotvet + 1;
    }
     if(nine.value == "52"){
        yesotvet = yesotvet + 1;
    } 
    if(ten.value == "41"){
        yesotvet = yesotvet + 1;
    }
    if(eleven.value == "7"){
        yesotvet = yesotvet + 1;
    }
    if(twelve.value == "9"){
        yesotvet = yesotvet + 1;
    }
     if(thirteen.value == "99"){
        yesotvet = yesotvet + 1;
    }
     if(fourteen.value == "12111"){
        yesotvet = yesotvet + 1;
    }
     if(fifteen.value == "6"){
        yesotvet = yesotvet + 1;
    }
     if(sixteen.value == "МТВР"){
        yesotvet = yesotvet + 1;
    }
     if(seventeen.value == "БВЕДАЖГ"){
        yesotvet = yesotvet + 1;
    }
     if(eighteen.value == "ВАБГ"){
        yesotvet = yesotvet + 1;
    }
    document.getElementById('yesotvet').div = yesotvet;
}