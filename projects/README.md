# Project Mode!!

## *This is my game*, **AiXmachine7earn XVII**

#### In a far away, adventure themed player-choice based action game, I wanted to showcase elements of DOM manipulation and efficiency of code while engaging the player in a sort of moral based reward system. The player can choose the decisions of a robot, the titular character, and progress through a story that unfolds based on how the player thinks the machine should react. --If you knew there wasn't much time, would you go that distance and risk losing what you held most dear? 

### **Instructions**
#### i. The user clicks start and the level starts
#### ii. When the user hits an option button the story advances

#### Making a solid MVP was a top priority given the timeframe, and my story doesn't include the proper character images given the continuity problem of different scenes. Maybe I will create the character **AiXmachine7earn** as an original piece while I complete the story at a later, less hectic time. That said, the story paths lead to a TBA (ending), a cut short explanation (ending), and a user feedback event listener that should provide a "CHA-CHING" sound (ending). This is in no way the end of the original story, which is outlined below (wireframe included) :

![Image of AiXmachine7earn XXVII wireframe](https://octodex.github.com/assets/aixmachine.jpeg) 

#### Link to wireframe: 
https://wireframe.cc/V0OxBq - automatic!
[wireframe](https://wireframe.cc/V0OxBq)










#### This is a list of code I wanted to add but either ran into trouble or didn't have enough time during project week:
 
### **effects** --------------  
 
####   **Visual**
#### 1. background cascades down, image of scared child, 
#### then bear, then robot appears w buttons 
   
    ```
    document.getElementById('#image').animate(keyframes: [
      { delay: ' ',
        
    }
    ])
    ```

#### 2. image of ship leaving planet w BUTTON "enter hyperdrive to new star system"
#### user feedback causes shaky screen image of "under attack" alarm in-ship view w 
#### system message "Space pirates! You became a prisoner!" -shifts to next image   
    ```
    document.getElementById('someId')
    ```

####  **Sound**
####  1. Light-speed travel sound as response to button "enter hyperdrive to new star system" 
      
    ```
    balloon pop: new Audio('assets/file.name')
  
    gameOverSound: new Audio('assets/file.name')
    ```
