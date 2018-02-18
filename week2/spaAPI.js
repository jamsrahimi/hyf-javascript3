'use strict'

document.getElementById('button').addEventListener('click', loadText);
function loadText() {
    console.log('You clicked me!');
    let xhr = new XMLHttpRequest();
    //    console.log(xhr);
    xhr.open('GET', 'https://api.github.com/orgs/HackYourFuture/repos', true);
    xhr.onload = function () {
        if (this.status == 200) {
            document.getElementById('text').innerHTML = this.responseText;
            //console.log(this.responseText);
        }
    }
    xhr.send();

}
