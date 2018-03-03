'use strict'

//ref: https://www.youtube.com/watch?v=82hnvUYY6QA

document.getElementById('button1').addEventListener('click', () => {
    console.log('You clicked me!');
    const xhrGetRepos = new XMLHttpRequest();

    xhrGetRepos.open('GET', 'https://api.github.com/orgs/HackYourFuture/repos', true);
    xhrGetRepos.onload = ()=> {
        if (this.status === 200) {
            const repos = JSON.parse(this.responseText);
            let repoNames = "";
            for (const i in repos) {
                repoNames +=
                    '<ul>' + '<li>' + repos[i].name + '</li>' +
                    '</ul>';
            }
            document.getElementById('div1').innerHTML = repoNames;
        }
    };
    xhrGetRepos.send();
});

//Question 6-9:
document.getElementById('button2').addEventListener("click", () => {
    return new Promise((resolve, reject) => {
        const xhrARepo = new XMLHttpRequest();

        const xhrContributor = new XMLHttpRequest();
        xhrARepo.open("GET", 'https://api.github.com/repos/HackYourFuture/' + document.getElementById('input').value, true);

        xhrContributor.open("GET", 'https://api.github.com/repos/HackYourFuture/' + document.getElementById('input').value + '/contributors', true);

        xhrARepo.onload =  ()=> {
            if (xhrARepo.status < 400) {
                resolve(xhrARepo.response);
            } else {
                reject(new Error(xhrARepo.statusText));
            }
            const loadedRepo = JSON.parse(xhrARepo.responseText);

            const loadedContributors = JSON.parse(xhrContributor.responseText);

            let repoName = "";
            repoName += '<ul>' + '<li><a target="_blank" href=' + loadedRepo.html_url + '>' + loadedRepo.name + '</a></li>' + '</ul>';
            document.getElementById('div2').innerHTML = "";
            document.getElementById('div2').innerHTML = repoName;
            let contributor = "";
            loadedContributors.forEach(element => {
                console.log(element.login);
                contributor += '<ul>' + "<li><a target='_blank' href='" + element.html_url + "'>"
                    + element.login + '<img src="' + element.avatar_url + "'>" + '</a></li>' + '</ul>';
                document.getElementById('div3').innerHTML = contributor;
            });
        };
        xhrContributor.send();
        xhrContributor.onerror = () => reject(new Error(xhrContributor.statusText));

        xhrARepo.send();
        xhrARepo.onerror = () => reject(new Error(xhrARepo.statusText));
    });
});
