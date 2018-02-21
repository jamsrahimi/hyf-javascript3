'use strict'
// const h1 = document.createElement('h1');
// document.body.appendChild(h1);
// h1.innerHTML = 'HYF Repository';

// const div = document.createElement('div');
// div.id = 'main';
// document.body.appendChild(div);


document.getElementById('button').addEventListener('click', loadRepos);
function loadRepos() {
    console.log('You clicked me!');
    let xhr = new XMLHttpRequest();
    //    console.log(xhr);
    xhr.open('GET', 'https://api.github.com/orgs/HackYourFuture/repos', true);
    xhr.onload = function () {
        if (this.status == 200) {
            let repos = JSON.parse(this.responseText);
            let repoNames = "";
            for (let i in repos) {
                repoNames +=
                    '<div class="namesOnly">' +
                    '<ul>' + '<li>' + repos[i].name + '</li>' +
                    '</ul>' +
                    '</div>';
    }
            document.getElementById('text').innerHTML = repoNames;
            // console.log(repos);
        }
    }
    xhr.send();

}

//for (let i in )
