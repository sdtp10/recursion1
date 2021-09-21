//今日の目的
//vscodeに慣れる　gitの使い方慣れる
//再帰の練習

function number(x,y){

    let answer = 0;
    let a = Math.abs(x);
    let b = Math.abs(y);


    for(let i = 1;i<=b;i++){
        answer = answer +a;
    }

    if(y<0 && x>0||y>0&&x<0){
        return answer*-1;
    }else{
        return answer;
    }
}

console.log(number(5,4))