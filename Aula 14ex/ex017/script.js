function calcular(){
    const vlr = window.document.getElementById("txtvlr").value;
    const res = window.document.getElementById("res");
    let out = "";

    for(let i = 1; i < 11; i++){
        out = out + i + " * " + vlr + " = " + i * vlr + "<br/>";

    }
     res.innerHTML = out;
    }
