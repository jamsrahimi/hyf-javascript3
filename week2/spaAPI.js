'use strict'
// const h1 = document.createElement('h1');
// document.body.appendChild(h1);
// h1.innerHTML = 'HYF Repository';

// const div = document.createElement('div');
// div.id = 'main';
// document.body.appendChild(div);

//Question 1-5:
document.getElementById('button1').addEventListener('click', loadRepos);
function loadRepos() {
    console.log('You clicked me!');
    let xhrGetRepos = new XMLHttpRequest();
    //    console.log(xhr);
    xhrGetRepos.open('GET', 'https://api.github.com/orgs/HackYourFuture/repos', true);
    xhrGetRepos.onload = function () {
        if (this.status == 200) {
            let repos = JSON.parse(this.responseText);
            let repoNames = "";
            for (let i in repos) {
                repoNames +=
                    // '<div class="namesOnly">' +
                    '<ul>' + '<li>' + repos[i].name + '</li>' +
                    '</ul>';
                // '</div>';
            }
            document.getElementById('div1').innerHTML = repoNames;
            // console.log(repos);
        }
    }
    xhrGetRepos.send();
}

//Question 6-9:
document.getElementById('button2').addEventListener("click", aRepo);
function aRepo() {

    let xhrARepo = new XMLHttpRequest();
    xhrARepo.open("GET", 'https://api.github.com/repos/HackYourFuture/' + document.getElementById('input').value, true);

    xhrARepo.onload = function () {
        let loadedRepo = JSON.parse(xhrARepo.responseText);
        console.log(loadedRepo);
        let repoName = "";
        repoName += '<ul>' + '<li><a target="_blank" href=' + loadedRepo.html_url + '>' + loadedRepo.name + '</a></li>' + '</ul>';
        document.getElementById('div2').innerHTML = "";
        document.getElementById('div2').innerHTML = repoName;
    }
    xhrARepo.send();
}
