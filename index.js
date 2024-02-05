const display = document.getElementById('display');

function appendtodisplay(input){
    display.value=display.value+input;
}
function deletefromdisplay(){
    let x = display.value;
    x=x.slice(0,x.length-1);
    display.value=x;
}
function cleardisplay(){
    display.value='';
}
function factorial(){
    let x = Math.floor(Number(display.value));
    let result=1;
    for(let i = x; i>0; i--){
        result=result*i;
    }
    display.value=result;
}
function calculate(){
    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value='Error';
    }
}
function info(){
    faces=['ヾ(•ω•`)o','(* ￣3)(ε￣ *)','（＾∀＾●）ﾉｼ','(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧','ヾ(⌐■_■)ノ♪','( ﾉ ﾟｰﾟ)ﾉ'];
    index=Math.floor(Math.random()*6);
    face=faces[index];
    display.value=face;
}