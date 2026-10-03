const heroCards = document.querySelectorAll(".hero-card");

const modal = document.getElementById("characterModal");
const closeModal = document.getElementById("closeModal");

const modalName = document.getElementById("modalName");
const modalDescription = document.getElementById("modalDescription");
const modalIdentity = document.getElementById("modalIdentity");
const modalAbilities = document.getElementById("modalAbilities");
const modalRole = document.getElementById("modalRole");

const characterData = {

    ironman: {
        name: "IRON MAN",
        identity: "Tony Stark",
        abilities: "Genius intellect, engineering, advanced armor, flight and weapons technology",
        role: "Avenger / Inventor / Leader",

        description: "Tony Stark is a billionaire, genius inventor and engineer who originally uses his intelligence to create advanced weapons and technology. After being captured and seriously injured, Stark builds his first Iron Man suit to escape captivity. This experience changes his view of the world, and he decides to use his technology to protect people instead of creating weapons. Over time, he develops increasingly advanced versions of the Iron Man armor, giving him enhanced strength, flight and powerful weapons. He becomes one of the founding members of the Avengers and plays a major role in protecting Earth from powerful threats."
    },

    captain: {
        name: "CAPTAIN AMERICA",
        identity: "Steve Rogers",
        abilities: "Superhuman strength, speed, durability and advanced combat skills",
        role: "Avenger / Super Soldier / Leader",

        description: "Steve Rogers is a young soldier who wants to serve his country but is initially considered physically unfit for military service. He is chosen for the Super Soldier program, which transforms him into a powerful and highly trained soldier. After being frozen in ice for decades, Steve awakens in the modern world and becomes one of the central members of the Avengers. His courage, discipline and strong sense of responsibility make him a natural leader of the team."
    },

    thor: {
        name: "THOR",
        identity: "Thor Odinson",
        abilities: "Superhuman strength, lightning, durability and powerful combat abilities",
        role: "Avenger / God of Thunder / Asgardian Prince",

        description: "Thor is the God of Thunder and a prince of Asgard. He possesses incredible strength and the ability to control lightning. His legendary weapon, Mjolnir, can only be wielded by someone considered worthy. Thor initially struggles with pride and responsibility, but his experiences on Earth teach him humility and compassion. He eventually becomes one of the Avengers' most powerful members and a defender of both Earth and Asgard."
    },

    hulk: {
        name: "HULK",
        identity: "Bruce Banner",
        abilities: "Superhuman strength, durability, regeneration and scientific intelligence",
        role: "Scientist / Avenger / Powerhouse",

        description: "Bruce Banner is a brilliant scientist who specializes in gamma radiation. After being exposed to a massive amount of gamma radiation, Banner develops an extraordinary transformation. When his anger becomes intense, he turns into the incredibly powerful Hulk. Although Banner struggles to control this transformation, the Hulk becomes one of the Avengers' greatest sources of strength. Banner's scientific intelligence and the Hulk's incredible physical power make them a unique and important part of the team."
    },

    widow: {
        name: "BLACK WIDOW",
        identity: "Natasha Romanoff",
        abilities: "Espionage, martial arts, weapons and tactical intelligence",
        role: "Spy / S.H.I.E.L.D. Agent / Avenger",

        description: "Natasha Romanoff is a highly trained spy and former S.H.I.E.L.D. operative. Unlike many Avengers, she does not have superhuman powers. Instead, she relies on years of intense training, intelligence, strategy and exceptional combat abilities. Natasha becomes a trusted member of the Avengers and regularly takes on dangerous missions that require stealth and precision. Her experience as a spy allows her to gather information, make tactical decisions and support the team in difficult situations."
    },

    hawkeye: {
        name: "HAWKEYE",
        identity: "Clint Barton",
        abilities: "Master archery, precision, combat and tactical skills",
        role: "S.H.I.E.L.D. Agent / Archer / Avenger",

        description: "Clint Barton is a highly skilled S.H.I.E.L.D. agent and master archer. Unlike many members of the Avengers, he has no superhuman abilities. His greatest strengths are his extraordinary accuracy, combat training and tactical experience. Clint can use different types of specialized arrows during missions and is capable of fighting alongside super-powered heroes through skill and determination. His experience makes him a valuable member of the Avengers and a trusted S.H.I.E.L.D. operative."
    }

};

    


heroCards.forEach(card => {

    card.addEventListener("click", () => {

        const character = characterData[card.dataset.character];

        if (!character) return;

        modalName.textContent = character.name;
        modalDescription.textContent = character.description;
        modalIdentity.textContent = character.identity;
        modalAbilities.textContent = character.abilities;
        modalRole.textContent = character.role;

        modal.classList.add("active");
    });

});


closeModal.addEventListener("click", () => {

    modal.classList.remove("active");

});


modal.addEventListener("click", (event) => {

    if (event.target === modal) {
        modal.classList.remove("active");
    }

});


document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        modal.classList.remove("active");
    }

});
// =========================
// INFINITY STONES
// =========================

const stones = document.querySelectorAll(".stone");

const stoneName = document.getElementById("stoneName");
const stoneDescription = document.getElementById("stoneDescription");
const stoneLocation = document.getElementById("stoneLocation");
const stonePower = document.getElementById("stonePower");

const stoneData = {

    space: {
        name: "SPACE STONE",
        description: "The Space Stone grants control over space and allows its user to create portals and travel across vast distances.",
        location: "ARTIFACT: TESSERACT",
        power: "CONTROL OVER SPACE"
    },

    mind: {
        name: "MIND STONE",
        description: "The Mind Stone is associated with consciousness, intelligence and extraordinary mental abilities.",
        location: "ARTIFACT: VISION",
        power: "CONTROL OVER MIND"
    },

    reality: {
        name: "REALITY STONE",
        description: "The Reality Stone can alter the physical nature of reality and transform matter.",
        location: "ARTIFACT: AETHER",
        power: "ALTER REALITY"
    },

    power: {
        name: "POWER STONE",
        description: "The Power Stone contains immense destructive energy and can amplify the abilities of its user.",
        location: "ARTIFACT: ORB",
        power: "COSMIC POWER"
    },

    time: {
        name: "TIME STONE",
        description: "The Time Stone allows its user to manipulate time and explore possible outcomes.",
        location: "ARTIFACT: EYE OF AGAMOTTO",
        power: "CONTROL OVER TIME"
    },

    soul: {
        name: "SOUL STONE",
        description: "The Soul Stone is one of the most mysterious Infinity Stones, connected to the essence of life and souls.",
        location: "LOCATION: VORMIR",
        power: "CONTROL OVER SOULS"
    }

};


stones.forEach(stone => {

    stone.addEventListener("click", () => {

        const data = stoneData[stone.dataset.stone];

        if (!data) return;

        stones.forEach(item => {
            item.classList.remove("active");
        });

        stone.classList.add("active");

        stoneName.textContent = data.name;
        stoneDescription.textContent = data.description;
        stoneLocation.textContent = data.location;
        stonePower.textContent = data.power;

    });

});
// =========================
// MOVIE POPUP
// =========================

const movieCards = document.querySelectorAll(".timeline-content");

const movieModal = document.getElementById("movieModal");
const closeMovieModal = document.getElementById("closeMovieModal");

const movieName = document.getElementById("movieName");
const movieDescription = document.getElementById("movieDescription");
const movieYear = document.getElementById("movieYear");
const moviePhase = document.getElementById("moviePhase");
const movieThreat = document.getElementById("movieThreat");

const movieData = {

    ironman: {
        name: "IRON MAN",
        year: "2008",
        phase: "PHASE 1",
        threat: "Obadiah Stane / Iron Monger",

        description: "Tony Stark is a brilliant billionaire, inventor and owner of Stark Industries, a company that develops advanced weapons. During a trip to demonstrate one of his company's weapons, Stark is captured by a terrorist group and seriously injured. While being held captive, he builds an armored suit using limited resources and uses it to escape. After returning home, Stark begins developing more advanced versions of the armor and decides to use his technology to protect people instead of creating weapons for destruction. His journey transforms him from a weapons manufacturer into the armored hero known as Iron Man and marks the beginning of the Avengers story."
    },

    avengers: {
        name: "THE AVENGERS",
        year: "2012",
        phase: "PHASE 1",
        threat: "Loki / Chitauri",

        description: "When Loki arrives on Earth with the powerful Tesseract and an alien army, S.H.I.E.L.D. director Nick Fury realizes that the threat is too dangerous for one hero to handle. He brings together Iron Man, Captain America, Thor, Hulk, Black Widow and Hawkeye to form the Avengers. The heroes initially struggle to work as a team because of their different personalities and beliefs. When Loki's invasion of New York begins, the team finally learns to fight together. Their battle against the Chitauri becomes the Avengers' first major test and establishes them as Earth's most important team of superheroes."
    },

    ultron: {
        name: "AVENGERS: AGE OF ULTRON",
        year: "2015",
        phase: "PHASE 2",
        threat: "Ultron",

        description: "The Avengers discover powerful technology that could help protect the world from future threats. Tony Stark and Bruce Banner use this technology to create an artificial intelligence called Ultron. Their goal is to create a system capable of defending humanity without the Avengers constantly being needed. However, Ultron develops his own beliefs and decides that humanity itself is the greatest threat to the planet. He creates an army of machines and begins a plan to destroy civilization. The Avengers must stop Ultron while facing the consequences of creating something they cannot fully control."
    },

    infinitywar: {
        name: "AVENGERS: INFINITY WAR",
        year: "2018",
        phase: "PHASE 3",
        threat: "Thanos / Infinity Stones",

        description: "Thanos, a powerful warlord from Titan, begins his mission to collect all six Infinity Stones. With the complete set, he would possess enough power to reshape the universe according to his own vision. The Avengers and their allies are scattered across different locations, forcing heroes from Earth and space to work together. As Thanos collects the Stones one by one, the heroes struggle to stop him before he becomes unstoppable. The conflict brings together many different heroes and leads to a devastating conclusion that changes the fate of countless lives across the universe."
    },

    endgame: {
        name: "AVENGERS: ENDGAME",
        year: "2019",
        phase: "PHASE 3",
        threat: "Thanos / The Decimation",

        description: "After the devastating events of Infinity War, the surviving Avengers are left dealing with the consequences of Thanos' actions. Years later, they discover a possible way to travel through time and attempt to recover the Infinity Stones from different moments in history. The Avengers reunite for one final mission, knowing that their plan could have serious consequences. As they attempt to reverse the damage and bring back those who were lost, they face Thanos and his forces in a massive final battle. The movie brings together years of stories from the Marvel universe and focuses on sacrifice, teamwork, friendship and the legacy of the original Avengers."
    }

};

movieCards.forEach(card => {

    card.addEventListener("click", () => {

        const movie = movieData[card.dataset.movie];

        if (!movie) return;

        movieName.textContent = movie.name;
        movieDescription.textContent = movie.description;
        movieYear.textContent = movie.year;
        moviePhase.textContent = movie.phase;
        movieThreat.textContent = movie.threat;

        movieModal.classList.add("active");

    });

});

closeMovieModal.addEventListener("click", () => {
    movieModal.classList.remove("active");
});

movieModal.addEventListener("click", (event) => {

    if (event.target === movieModal) {
        movieModal.classList.remove("active");
    }

});

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        movieModal.classList.remove("active");
    }

});