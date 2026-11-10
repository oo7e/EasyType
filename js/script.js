// Variables
let targetWord = "nation"
let userInput = ""

// DOM Elements
let input = document.querySelector("#input")
let currentWord = document.querySelector("#currentWord")



function checkCorrectness(targetWord, userInput) {
    let arr = []
    targetWord.split("").forEach((element, index) => {
        // console.log(element, index);
        if (element === userInput[index]) {
            arr = [...arr, { letter: element, correct: true }]


        }
        else if (!userInput[index]) {
            arr = [...arr, { letter: element, correct: "untyped" }]
        }
        else {
            arr = [...arr, { letter: element, correct: false }]
        }







    })

    return arr

}


function renderUI(array, uiParent) {
    uiParent.innerHTML = ``
    array.forEach(element => {
        let HTMLElement = document.createElement("span")
        HTMLElement.innerText = `${element.letter}`
        HTMLElement.setAttribute("class", String(element.correct))
        


        uiParent.append(HTMLElement)



    })
    
}
renderUI(checkCorrectness(targetWord, userInput), currentWord)


input.addEventListener("input", e => {
    console.clear()
    
    userInput = e.target.value

    renderUI(checkCorrectness(targetWord, userInput), currentWord)


})