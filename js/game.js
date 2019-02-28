// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            message: "The soccer game is about to start do you",
            choices: [
                {
                    text: "Play",
                    nextLevel: "play",
                },

                {
                    text: "sit on the bench",
                    nextLevel: "bench",
                },
            ]
        },

        play: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "what position do you want to play?",
            choices: [
                {
                    text: "Goalie",
                    nextLevel: "goalie",
                },
                 {
                    text: "Forward",
                    nextLevel: "forward",
                },
                 {
                    text: "Middle",
                    nextLevel: "middle",
                },
                 {
                    text: "Defence",
                    nextLevel: "defence",
                }
            ]
        },

        bench: {
            message: "You watched your team lose",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },
     
    }
};
