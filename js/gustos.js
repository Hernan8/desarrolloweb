var flag = 1;
    function t() {
    if(flag == 1) {
    N.style.top = "600px";
    N.style.left = "900px";
    }
    if(flag == 2) {
    N.style.top = "700px";
    N.style.left = "1000px";
    }
    if(flag == 3) {
    N.style.top = "700px";
    N.style.left = "800px";
    }
    flag = flag + 1;
    if(flag == 4) {
    flag = 1;
    }
    }
    function al() {
    alert("Correcto!");
    }