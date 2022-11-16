//YOUR CODE COMES HERE

let favoriteBooks = [
    {
        title: "The Lord of the Rings"
        , author: "J. R. R. Tolkien"
        , year: 1954
        , isNewerThan2000: false
        , age: 2022 - 1954
        , characters: ["Frodo", "Gollum", "Gandalf", "Legolas"]
    },
    {
        title: "Harry Potter and the Philosopher's Stone"
        , author: "J. K. Rowling"
        , year: 1997
        , isNewerThan2000: false
        , age: 2022 - 1997
        , characters: ["Harry Potter", "Albus Dumbledore", "Hermiona Granger", "Lord Voldemort"]
    }
];

let favMovies = [
    {
        title: "Luca"
        , year: 2021
        , rating: 7.4
        , description: "On the Italian Riviera, an unlikely but strong friendship grows between a human being and a sea monster disguised as a human."
        , directors: "Enrico Casarosa"
        , writers: ["Enrico Casarosa", "Jesse Andrews", "Simon Stephenson"]
        , stars: ["Jacob Tremblay", "Jack Dylan Grazer", "Emma Berman"]
        , genres: ["Animation", "Adventure", "ComedyFamily", "Fantasy"]
    },
    {
        title: "Zootopia"
        , year: 2016
        , rating: 8
        , description: "In a city of anthropomorphic animals, a rookie bunny cop and a cynical con artist fox must work together to uncover a conspiracy."
        , directors: ["Byron Howard", "Rich MooreJared Bush"]
        , writers: ["Byron Howard", "Rich Moore", "Jared Bush"]
        , stars: ["Ginnifer Goodwin", "Jason Bateman"]
        , genres: ["Animation", "Adventure", "Comedy", "Crime", "Family", "Mystery"]
    },
    {
        title: "Vaiana"
        , year: 2016
        , rating: 7.6
        , description: "In Ancient Polynesia, when a terrible curse incurred by the Demigod Maui reaches Moana's island, she answers the Ocean's call to seek out the Demigod to set things right."
        , directors: ["Ron Clements", "John Musker", "Don Hall"]
        , writers: ["Ron Clements", "John Musker", "Don Hall"]
        , stars: ["Auli'i Cravalho", "Dwayne Johnson"]
        , genres: ["Animation", "Adventure", "Comedy", "Family", "Fantasy", "Musical"]
    },
    {
        title: "Frozen"
        , year: 2013
        , rating: 7.4
        , description: "When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition."
        , directors: ["Chris Buck", "Jennifer Lee"]
        , writers: ["Jennifer Lee", "Chris Buck"]
        , stars: ["Kristen Bell", "Indina Menzel"]
        , genres: ["Animation", "Adventure", "Comedy", "Family", "Fantasy", "Musical"]
    }
];

let bestSellingAlbums = [
    {
        artist: "Michael Jackson",
        title: "Thriller",
        year: 1982,
        genres: ["pop", "post-disco", "funk", "rock"],
        sale: 70000000,
    },
    {
        artist: "AC/DC",
        title: "Back in Black",
        year: 1980,
        genres: ["hard rock"],
        sale: 50000000,
    },
    {
        artist: "Whitney Houston",
        title: "The Bodyguard",
        year: 1992,
        genres: ["r&b", "soul", "pop", "soundtrack"],
        sale: 45000000,
    },
    {
        artist: "Pink Floyd",
        title: "The Dark Side of the Moon",
        year: 1973,
        genres: ["progressive rock"],
        sale: 45000000,
    },
    {
        artist: "Eagles",
        title: "Their Greatest Hits (1971 - 1975)",
        year: 1976,
        genres: ["country rock", "soft rock", "folk rock"],
        sale: 44000000,
    },
    {
        artist: "Eagles",
        title: "Hotel California",
        year: 1976,
        genres: ["soft rock"],
        sale: 42000000,
    },
    {
        artist: "Shania Twain",
        title: "Come On Over",
        year: 1997,
        genres: ["country", "pop"],
        sale: 40000000,
    },
    {
        artist: "Fleetwood Mac",
        title: "Rumours",
        year: 1977,
        genres: ["soft rock"],
        sale: 40000000,
    },
];

function averageAge(tableOfElements) {
    let average = 0;
    for (let element of tableOfElements) {
        average += element.year
    }
    average = Math.round(average / tableOfElements.length);
    return average;
}
console.log(averageAge(favoriteBooks));
console.log(averageAge(favMovies));
console.log(averageAge(bestSellingAlbums));

// Show the average of different properties

function average(tableOfElements, keyName) {
    let average = 0;
    let keysOfTableOfElements = Object.keys(tableOfElements[0]);
    if (!Number.isInteger(keyName) && keysOfTableOfElements.includes(keyName)) {
        for (let element of tableOfElements) {
            average += element[keyName]
        }
        average = Math.round(average / tableOfElements.length);
        return average;
    } else {
        return average;
    }
}
console.log('This is average rating of favorite movies: ' + average(favMovies, "rating"));
console.log('This is average rating of best selling albums: ' + average(bestSellingAlbums, "sale"));

// Show the latest and the oldest objects

function latestOrOldest(tableOfElements, isLatest) {
    let titleElement = "";
    let latestElement = tableOfElements[0];
    let oldestElement = tableOfElements[0];
    if (isLatest === true) {
        for (let element of tableOfElements) {
            if (latestElement.year <= element.year) {
                latestElement = element;
                titleElement = element.title;
            }
        }
    } else {
        for (let element of tableOfElements) {
            if (oldestElement.year >= element.year) {
                oldestElement = element;
                titleElement = element.title;
            }
        }
    }
    return titleElement;
}

console.log('This is the lastest book: ' + latestOrOldest(favoriteBooks, true));
console.log('This is the oldest book: ' + latestOrOldest(favoriteBooks, false));
console.log('This is the lastes movie: ' + latestOrOldest(favMovies, true));
console.log('This is the oldest movie: ' + latestOrOldest(favMovies, false));
console.log('This is the lastest album: ' + latestOrOldest(bestSellingAlbums, true));
console.log('This is the oldest album: ' + latestOrOldest(bestSellingAlbums, false));

// DON'T MODIFY THE CODE BELOW THIS LINE

let toExport;

try {
    toExport = [
        { name: "favoriteBooks", content: favoriteBooks, type: "array" },
        { name: "favMovies", content: favMovies, type: "array" },
        { name: "bestSellingAlbums", content: bestSellingAlbums, type: "array" },
        { name: "averageAge", content: averageAge, type: "function" },
        { name: "average", content: average, type: "function" },
        { name: "latestOrOldest", content: latestOrOldest, type: "function" },

    ]
} catch (error) {
    toExport = { error: error.message }
}

export { toExport };
