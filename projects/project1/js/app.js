console.log('Sanity Check')
// User click 'easy' 'medium' 'hard' and the level starts 
const startButton = document.querySelector("#start")
const h2 = document.querySelector('h2')
const p = document.querySelector('p')
const button1 = document.querySelector('#button1')
const button2 = document.querySelector('#button2')
    //bear image appears w optional choice buttons
const gameMap = {
    scene1: { 
        title: "Phase 1: Nature's Deadliest Mission", 
        desc: "Following noise of a commotion, you are startled to find a bear going for its next meal", 
        choices: 
        [ 
            { text: "run to cover", scene: "scene3"}, 
            { text: "save child", scene: "levelAdv"}
        ]
    },     
    scene2: { 
        title: "Phase 2: Galactic Mission", 
        desc: "You're a hero! Bring the child to her parents in the village nearby", 
        choices:
        [ 
            { text: "Enter hyperdrive to new star system", scene: " "}
        ],
    },  
    scene3: {
        title: "blah blah blah",
        desc: "That was close! Luckily your ship is nearby. Make it off this horrifying planet!",
        choices: 
        [
            {text: "In the distance, a mysterious figure approaches...", scene: "You're in unknown territory, but wait! What's this?"}
        ],
        
    },
    scene4: {
        title: "Phase 3: True Love",
        desc: "The apprentice informs you that you both skilled under the same master, and that she knows where he's located",
        choices:
        [
            {text: "Take me to my master!", scene: " "},
            {text: "I just want to go home, get off my ship", scene: " "}
        ]
    },
    scene5: {
        title: " ",
        desc: "TBA",
        choices: 
        [
            {text: "You got Paid!", scene: " "}
        ]
    },
    scene6: {
        title: "Game Over",
        desc: "Back at base",
        choices:
        [
            {text: "You returned to your homeworld and became an assassin", scene: " "},
            {text: "reset", scene: " "}

        ]
    }
}
let registerOptionsButtons = () => {

    
    let runTitle = () => {
        // button1 in tier2
        h2.innerHTML = gameMap.scene2.title 
        p.innerHTML = gameMap.scene3.desc
        bear.style.display = 'none'
        
        
        button1.innerHTML = gameMap.scene2.choices[0].text
        button2.style.display = 'none'
        startButton.style.display = 'none'
        registerTierTwoButtons()
    }
    
    let runAdv = () => {

        //button2
        h2.innerHTML = gameMap.scene2.title
        p.innerHTML = gameMap.scene2.desc

        button2.innerHTML = gameMap.scene5.choices[0].text
        button1.style.display = 'none'
        startButton.style.display = 'none'

        // registerAdvButtons()
    }
    
    button1.addEventListener('click', runTitle)
    button2.addEventListener('click', runAdv)
}

// runTitle from register tiertwobuttons
let registerTierTwoButtons = () => {
    
    let runTier = () => {

        h2.innerHTML = gameMap.scene4.title
        p.innerHTML = gameMap.scene3.choices[0].scene
        
        //button 1
        button1.innerHTML = gameMap.scene3.choices[0].text
        button2.style.display = 'none'
        startButton.style.display = 'none'

        registerTierThreeButtons()
    }
    button1.addEventListener('click', runTier)
}

let registerTierThreeButtons = () => {

    let runTTwo = () => {

        h2.innerHTML = gameMap.scene4.title
        p.innerHTML = gameMap.scene4.desc

        button2.style.display = 'inline' // ---------------
        button1.innerHTML = gameMap.scene4.choices[0].text
        button2.innerHTML = gameMap.scene4.choices[1].text
        startButton.style.display = 'none'
        
        registerTierTPartOneButtons()
    }  
    button1.addEventListener('click', runTTwo) // -----------
}

let registerTierTPartOneButtons = () => {

    let runTAlternate = () => {

         h2.innerHTML = gameMap.scene6.title
         p.innerHTML = gameMap.scene5.desc

         button1.innerHTML = gameMap.scene6.choices[1].text
         button2.style.display = 'none'
         startButton.style.display = 'none'
         
         registerResetGameButtons()
    }
    let runTThreeEnd = () => {

        h2.innerHTML = gameMap.scene4.title
        p.innerHTML = gameMap.scene6.desc
        
        button1.innerHTML = gameMap.scene6.choices[0].text
        button1.style.display = 'inline'
        button2.style.display = 'none'
        startButton.style.display = 'none'

        registerResetTwoGameButtons()
    }
    button1.addEventListener('click', runTAlternate)
    button2.addEventListener('click', runTThreeEnd)
}
   
let registerResetGameButtons = () => {

    let startOver = () => {
        h2.innerHTML = gameMap.scene5.title
        p.innerHTML = gameMap.scene5.title
        button1.innerHTML = gameMap.scene5.title
        button2.innerHTML = gameMap.scene5.title
        button2.style.display = 'inline-block'
        startButton.style.display = 'inline-block'
    }
    button1.addEventListener('click', startOver)
}

let registerResetTwoGameButtons = () => {

    let newGame = () => {
        h2.innerHTML = gameMap.scene5.title
        p.innerHTML = gameMap.scene5.title
        button1.innerHTML = gameMap.scene5.title
        button2.innerHTML = gameMap.scene5.title
        button2.style.display = 'inline-block'
        startButton.style.display = 'inline-block'
        startButton.addEventListener('click', startLevel)
    }
    button1.addEventListener('click', newGame)
}

//let
// levelAdv
// let registerAdvButtons = (button2) => {

// }
// ------------------- All runAdv endings complete


let startLevel = (event) => {
   
    document.getElementById("bear").style.display = "block"
 

    h2.innerHTML = gameMap.scene1.title

    
    p.innerHTML = gameMap.scene1.desc

    // let option1 = document.createElement('button')
    button1.innerHTML = gameMap.scene1.choices[0].text
    // document.querySelector('body').appendChild(option1)

   // let option2 = document.createElement('button')
    button2.innerHTML = gameMap.scene1.choices[1].text
    // document.querySelector('body').appendChild(option2)


    event.target.style.display = 'none'

    registerOptionsButtons() 
}
startButton.addEventListener('click', startLevel)
document.querySelector("img").style.display = 'none'
















