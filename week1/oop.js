'use strict'

class Movie {
    constructor(title, director) {
        //assigning each constructor method to 'this' pointing to an empty object/array for now
        this.title = title;
        this.director = director;
        //create empty arrays before the functions.
        this.stars = [];
        this.writers = [];
        this.ratings = [];
    }

    getTitle() {
        return this.title;
    }

    //when these 2 functions are called,it should return title and director from the virtual array 'this'!
    getDirector() {
        return this.director;
    }

    addStar(star) {
        this.stars.push(star);
        //once add functions called, we start filling in the empty arrays earlier created
    }

    getStars() {
        return this.stars;
    }

    addWriter(writer) {
        this.writers.push(writer);
    }

    getWriters() {
        return this.writer;
    }

    addRating(rating) {
        this.ratings.push(rating);
    }

    getAverageRating() {
        return this.ratings.reduce(function (p, c) { return p + c; }) / this.ratings.length;
    }
}

class StaffMember {
    constructor(name, role, dateOfBirth) {
        this.name = name;
        this.role = role;
        this.dateOfBirth = dateOfBirth;
        this.movies = [];
    }

    addMovie(movie) {
        this.movies.push(movie);
    }

    getName() {
        return this.name;
    }

    getRole() {
        return this.role;
    }

    getAge() {
        let now = new Date();
        let age = now.getFullYear() - this.dateOfBirth;
        return age;
    }
}

const myMovie = new Movie('The Matrix', new StaffMember('Lana Wachowski', 'director', 1965));

const firstActor = new StaffMember('Keanu Reeves', 'star', 1964);
myMovie.addStar(firstActor);
const secondActor = new StaffMember('Laurence Fishburne', 'star', 1961);
myMovie.addStar(secondActor);
const actress = new StaffMember('Carrie-Anne Moss', 'star', 1967);
myMovie.addStar(actress);
const firstWriter = new StaffMember('Lilly Wachowski', 'writer', 1967);
myMovie.addWriter(firstWriter);
const secondWriter = new StaffMember('Lana Wachowski', 'writer', 1965);
myMovie.addWriter(secondWriter);

myMovie.addRating(10.0);
myMovie.addRating(9.0);
myMovie.addRating(8.0);
myMovie.addRating(7.0);
myMovie.addRating(9.0);
myMovie.addRating(9.2);

myMovie.getAverageRating();

console.log(myMovie.getTitle());

console.log(myMovie.getStars().map(actor => `${actor.getName()} ${actor.getAge()}`));

const director = myMovie.getDirector();

console.log(`Director: ${director.getName()}`);

console.log(`${myMovie.getTitle()} movie has scored an average of: ${(myMovie.getAverageRating()).toFixed(1)} scores on IMDB.`);
