'use strict'

class Movie {
    constructor(title, director) {
        this.title = title;
        this.director = director;
        this.stars = [];
    }
    addStar(star) {
        this.stars.push(star);
        return this;
    }

    getStars() {
        return this.stars;
    }
}    
class StaffMember{
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }
}

const topThree = [
    new Movie('title1', 'director1'),
    new Movie('title2', 'director2'),
    new Movie('title3', 'director3'),
];

const howIMetYourMother = new Movie('How I met your mother', 'Pamilar Fryman');
const clintEastwood = new StaffMember('Clint Eastwood', 'actor');
const angelinaJolie = new StaffMember('Angelina Jolie', 'actor');

howIMetYourMother.addStar(clintEastwood);
howIMetYourMother.addStar(angelinaJolie);
console.log(howIMetYourMother.getStars());

topThree.forEach(movie => {
    movie.addStar(clintEastwood);
    movie.addStar(angelinaJolie);
});
console.log(topThree);
