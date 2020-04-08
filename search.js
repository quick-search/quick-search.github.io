/*
 * @Author: 阎杰
 * @Date:   2020-04-01 21:15:43
 * @Last Modified by:   Your name
 * @Last Modified time: 2020-04-07 11:12:56
 */
'use strict';

$(document).ready(function () {
    dataA();
    dataB();
    dataC();
    dataD();
    dataE();
    dataF();
    dataG();
    dataH();
    dataI();
    dataJ();
    dataL();
    dataM();
    dataN();
    dataO();
    dataP();
    dataR();
    dataS();
    dataT();
    dataU();
    dataW();
});

document.addEventListener("keydown",function(event){  //按下回车也相当于查找键
    if(event.keyCode == 13)
        downButton();
})

function downButton(){
    // getbackD();
    BeginSearch();
}

function BeginSearch(){
    let content = document.getElementById('search-bar').value;
    // console.log(content);
    compare(content);
}

function compare(value){
    let initials;   //搜索内容的首字母（数字）(dataAll的one)
    let initialsY;  //(dataAll的two)
    let arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    for(let x = 0; x < arr.length; x++){
        if(value.substring(0,1).toLowerCase() == arr[x]){
            // console.log(x); 
            initials = x;  //搜索内容的首字母(数字)(dataAll的one)
            break;
        }
    }
    for(let y = 0; y < data[initials].length; y++){
        if(value.substring(0).toLowerCase() == data[initials][y].toLowerCase()){
            initialsY = y;//(dataAll的two)
            console.log(initialsY);
            $("#chuangkou").text(dataAll(initials,initialsY));
            $("#chuangkou").css("border","1px solid #E9E9E9");
            break;
        }
        else{
            $("#chuangkou").text("查询不到您需要的词组，请检查后重新输入");
            $("#chuangkou").css("border","0px");
        }
    }
}



