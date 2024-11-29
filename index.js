function success(){
    var a=document.querySelector("#username").value;
    if(a===""){
        alert("Vui lòng nhập tên!");
    }else{
        window.open("product.html");
    }
}