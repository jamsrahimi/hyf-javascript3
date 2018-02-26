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

    let xhrContributor = new XMLHttpRequest();
    xhrARepo.open("GET", 'https://api.github.com/repos/HackYourFuture/' + document.getElementById('input').value, true);

    xhrContributor.open("GET", 'https://api.github.com/repos/HackYourFuture/' + document.getElementById('input').value + '/contributors', true);

    xhrARepo.onload = function () {
        const loadedRepo = JSON.parse(xhrARepo.responseText);

        const loadedContributors = JSON.parse(xhrContributor.responseText);

        console.log(loadedRepo);
        console.log(loadedContributors.login);
        let repoName = "";
        repoName += '<ul>' + '<li><a target="_blank" href=' + loadedRepo.html_url + '>' + loadedRepo.name + '</a></li>' + '</ul>';
        document.getElementById('div2').innerHTML = "";
        document.getElementById('div2').innerHTML = repoName;
        let contributor = "";
        loadedContributors.forEach(element => {
            console.log(element.login);

            contributor += '<ul>' + '<li><a target="_blank" href=' + element.html_url + '>'
                + element.login + '<img src="' + element.avatar_url + "'>" + '</a></li>' + '</ul>';
            document.getElementById('div3').innerHTML = contributor;
        });
    }
    xhrContributor.send();
    xhrARepo.send();

}
