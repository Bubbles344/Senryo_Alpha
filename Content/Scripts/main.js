var pArr;
var pd;


function main(){
    console.log("initialized");
    pArr = new Array();
    pd = new PDollarRecognizer;
}

function push(x,y,stroke){
    pArr.push(new Point(x,y,stroke));
    console.log("added new point to array: ("+ x +", "+y+") stroke id: " + stroke);
}

function clear(){
    pArr.clear();
    console.log("array cleared");
}

function rec(){
    console.Log(pd.Recognize(pArr));
    return pd.Recognize(pArr);
}



main();

