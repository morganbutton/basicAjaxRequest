function replaceText(){
    let target = document.getElementById("main");
    let xhr = new XMLHttpRequest();
    /* Getting information from ajax.txt*/
    /*true === asychcronous request*/
    xhr.open('GET', 'ajax.txt', true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 2){
            target.innerHTML = "Loading...";
        } 
        if(xhr.readyState == 4 && xhr.status == 200){
           
            target.innerHTML = xhr.responseText;
        }
    }
    xhr.send();
}

let button = document.getElementById('btn');
button.addEventListener("click", replaceText);






