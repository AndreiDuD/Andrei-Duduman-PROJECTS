var string = "This is Javascript";
var list = ["item", "other", "test"];

document.getElementById('test').innerHTML = string;

for(var i=0; i < 10; i++) {
    console.log(i)
}

for(var i=0; i < list.length; i++) {
    console.log(list[i])
}


function listG() {
    for(var i=0; i < list.length; i++) {
        console.log(list[i])
    }
}

listG();

document.getElementById("test").addEventListener("click", function(){
    alert("click")
})