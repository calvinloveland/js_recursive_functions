var css = document.createElement("style");
css.type = "text/css";
css.innerHTML = 
".fibDiv { display: inline-block; width: 50%; vertical-align: top; text-align:center; font-size:50%}"+
".pellDiv { display: inline-block; width: 50%; vertical-align: top; text-align:center; font-size:50%}";
document.body.appendChild(css);



function fibDom(n){
    var result;
    if(n < 2){
        return createSpan("fib("+n+") =" + n,"fibDiv")
    }
    else{
        var newSpan = createSpan("fib("+n+") =","fibDiv")
        newSpan.appendChild(createDiv("","newline"))
        newSpan.appendChild(fibDom(n-1))
        var secondFib = fibDom(n-2)
        secondFib.innerHTML = " + " + secondFib.innerHTML;
        newSpan.appendChild(secondFib)
        return newSpan
    }
}

function pellDom(n){
    var result;
    if(n < 2){
        return createSpan("pell("+n+") =" + n,"pellDiv")
    }
    else{
        var newSpan = createSpan("pell("+n+") =","pellDiv")
        newSpan.appendChild(createDiv("","newline"))
        var firstPell = pellDom(n-1)
        firstPell.innerHTML = "2 * " + firstPell.innerHTML;
        newSpan.appendChild(firstPell)
        var secondPell = pellDom(n-2)
        secondPell.innerHTML = " + " + secondPell.innerHTML;
        newSpan.appendChild(secondPell)
        return newSpan
    }
}

function fib(n){
    if(n < 2){
        return  n;
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

function createDiv(text, className){
    var div = document.createElement("div");
    div.innerHTML = text;
    div.className = className;
    return div;
}

function createSpan(text, className){
    var span = document.createElement("span");
    span.innerHTML = text;
    span.className = className;
    return span;
}

//document.write("Fib(11): " + fib(11) + " Pell(11): " + pell(11)+" Trib(11): "+trib(11));
document.title = "THIS IS A TITLE!";

var fibContainer = fibDom(11)
fibContainer.setAttribute("style","width:100%;font-size:100px")
document.body.appendChild(fibContainer)

var pellContainer = pellDom(11)
pellContainer.setAttribute("style","width:100%;font-size:100px")
document.body.appendChild(pellContainer)