function fib(n){
    if(n < 2){
        return n;
    }
    else{
        return fib(n-1) + fib(n-2);
    }
}
function pell(n){
    if(n<2){
        return n;
    }
    else{
        return 2*pell(n-1) + pell(n-2);
    }
}
function trib(n){
    if(n < 2){
        return 0;
    }
    else if (n == 2){
        return 1;
    }
    else{
        return trib(n-1) + trib(n-2) + trib(n-3);
    }
}

document.write("Fib(11): " + fib(11) + " Pell(11): " + pell(11)+" Trib(10): "+trib(11));