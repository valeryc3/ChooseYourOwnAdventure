// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            message: "The soccer game is about to start do you want to",
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
            background_image: "soccer1.jpeg",
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
                      text: "Start Over",
                    nextLevel: "start",
                },
            ]
        },
        //goalie
     goalie: {
          message: "You have to kick the ball in. Do you...",
            choices: [
                {
                    text: "Kick it short",
                    nextLevel: "short", 
                },
                {
                    text: "Kick it far",
                    nextLevel: "far", 
                }
                ]
                
     },
         short: {
          message: "A player on the other team managed to stop the ball. The player is running towards the goalie to shoot. Do you...",
            choices: [
                {
                  text: "Step out of the goal and get the ball",
                    nextLevel: "out",
                },
                
                ]
                
     },
  far: {
          message: "They kick the ball to you. You are running towards the goalie do you...",
            choices: [
                {
                    text: "Shoot left",
                    nextLevel:"sleft" 
                },
                  {
                    text: "Shoot right",
                    nextLevel:"sright", 
                }
                ]
                
     }, 
     
     //forward
        forward: {
          message: "The ball gets to you, do you...",
            choices: [
                {
                    text: "Kick it to the middle",
                    nextLevel:"kicktomiddle" 
                },
                  {
                    text: "Push forward",
                    nextLevel:"goforward", 
                }
                ]
                
     },
     kicktomiddle: {
          message: "Your teammate in middle has the ball now, do you...",
            choices: [
                {
                    text: "Move forward",
                    nextLevel:"moveforward" 
                },
                  {
                    text: "Move back",
                    nextLevel:"moveback", 
                }
                ]
                
     }, 
     goforward: {
          message: "The ball gets taken away from you. The other team scores",
            choices: [
                {
                  text: "Start over",
                    nextLevel: "start",
                },
                
                ]
                
     },
    moveforward: {
          message: "They kick the ball to you. You are running towards the goalie do you...",
            choices: [
                {
                    text: "Shoot left",
                    nextLevel:"sleft" 
                },
                  {
                    text: "Shoot right",
                    nextLevel:"sright", 
                }
                ]
                
     }, 
 moveback: {
          message: "The other team gets the ball. They shoot. They score. ",
            choices: [
                {
                    text: "Start Over",
                    nextLevel: "start",
                },
                
                ]
                
     },
        sright: {
             background_image: "soccer2.jpg",
          message: "The goalie went left. YOU SCORED!!!",
            choices: [
                {
                  text: "Start Over",
                    nextLevel: "start",
                },
                  
                ]
                
     }, 
 moveback: {
          message: " The goalie went right. You missed. Better luck next time.",
            choices: [
                {
               text: "Start Over",
                    nextLevel: "start",
                },
                
                ]
                
     },
     
     //middle
     
        middle: {
          message: "The ball gets to you, do you...",
            choices: [
                {
                  text: "Kick it to forward",
                    nextLevel:"kickup",    
                },
                 {
                  text: "Kick it to defence",
                    nextLevel:"kickback",    
                }
                ]
                
     },
      kickup: {
          message: "Forward now has the ball do you...",
            choices: [
                {
                  text: "Move up",
                    nextLevel:"mu",    
                },
                 {
                  text: "Move back",
                    nextLevel:"mb",    
                },
                {
                  text: "Stay",
                    nextLevel:"s",    
                }
                ]
                
     },
       kickback: {
          message: "Defence now has the ball do you...",
            choices: [
                {
                  text: "Follow the ball",
                    nextLevel:"follow",    
                },
                 {
                  text: "Say in the middle",
                    nextLevel:"stay",    
                }
                ]
                
     },
        follow: {
          message: "The ball was kicked back to the middle. Unfortunately there was no one in middle. They scored",
            choices: [
                {
                 text: "Start Over",
                    nextLevel: "start",
                },
            
                ]
                
     },
       stay: {
          message: "The ball was kicked back to the middle. You where there to get the ball. Do you...",
            choices: [
                {
                  text: "run with the ball",
                    nextLevel:"runwithball",    
                },
                 {
                  text: "Kick it to forward",
                    nextLevel:"kicktoforward",    
                }
                ]
                
     },
     
      mu: {
          message: "The ball was kicked back to the middle. Unfortunately there was no one in middle. They scored",
            choices: [
                {
                
                 text: "Start Over",
                    nextLevel: "start",
              
                },
                 
                ]
                
     },
       mb: {
          message: "The ball was kicked back to the middle. You have the ball again. Do you...",
            choices: [
                {
                 text: "kick it  back to defence",
                    nextLevel: "btd",
                },
                    {
                 text: "Move forward and kick it to Forward",
                    nextLevel: "mf",
                },
            
                ]
                
     },
       s: {
         background_image: "soccer2.jpg",
          message: "The ball was kicked back to the middle. You were able to get the ball and kick it to forward. Your team scored!!",
            choices: [
                {
                
                 text: "Start Over",
                    nextLevel: "start",
               
                },
               
                ]
                
     },
      mf: {
          background_image: "soccer2.jpg",
          message: "The ball was kicked back to the middle. You were able to get the ball and kick it to forward. Your team scored!!",
            choices: [
                {
                
                 text: "Start Over",
                    nextLevel: "start",
               
                },
               
                ]
                
     },
      btd: {
          message: "The other team took the ball and were able to score",
            choices: [
                {
                
                 text: "Start Over",
                    nextLevel: "start",
               
                },
               
                ]
                
     },
     runwithball: {
          message: "There was no one to help you and you were not able to take the ball all the way to goal.",
            choices: [
                {
                     text: "Start Over",
                    nextLevel: "start",  
                },
               
                ]
                
     },
       kicktoforward: {
       background_image: "soccer2.jpg",
          message: "Your forward was free and was able to score your your team!!",
            choices: [
                {
                     text: "Start Over",
                    nextLevel: "start",  
                },
               
                ]
                
     },
     //defence
        defence: {
          message: "The ball gets to you, do you...",
            choices: [
                {
                    
                }
                ]
                
     },
    }
};
