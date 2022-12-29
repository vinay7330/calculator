let ind=1;
function display(val) {
    if(ind==0){
        clr();
        ind=1;
    }
    document.getElementById("result").value += val;
}
function solve() {
    let x = document.getElementById("result").value;
    let y = eval(x);
    document.getElementById("result").value = y;
    ind=0;
}
function clr() {
    document.getElementById("result").value = "";
}
