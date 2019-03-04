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
                    nextLevel: "lose",
                },
                
                ]
                
     },
        sright: {
          message: "The goalie went left. YOU SCORED!!!",
            choices: [
                {
                  nextLevel: "win",
                },
                  
                ]
                
     }, 
 moveback: {
          message: " The goalie went right. You missed. Better luck next time.",
            choices: [
                {
               nextLevel: "lose",
                },
                
                ]
                
     },
     
     