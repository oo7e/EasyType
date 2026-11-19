// Counters
let currentWordIndex = 0

// Data
let wordPool = [
    "the", "be", "to", "of", "and", "a", "in", "that", "have", "I",
    "it", "for", "not", "on", "with", "he", "as", "you", "do", "at",
    "this", "but", "his", "by", "from", "they", "we", "say", "her", "she",
    "or", "an", "will", "my", "one", "all", "would", "there", "their", "what",
    "so", "up", "out", "if", "about", "who", "get", "which", "go", "me",
    "when", "make", "can", "like", "time", "no", "just", "him", "know", "take",
    "people", "into", "year", "your", "good", "some", "could", "them", "see", "other",
    "than", "then", "now", "look", "only", "come", "its", "over", "think", "also",
    "back", "after", "use", "two", "how", "our", "work", "first", "well", "way",
    "even", "new", "want", "because", "any", "these", "give", "day", "most", "us"
]

// Variables
let targetWord = pickRandomWord(wordPool)
let userInput = ""

// DOM Elements
let input = document.querySelector("#input")
let currentWord = document.querySelector("#currentWord")


// Functions
function pickRandomWord(arr) {
    let r = Math.trunc(Math.random() * arr.length - 1)
    let randomWord = arr[r]
    return randomWord
}

function checkCorrectness(targetWord, userInput) {
    let arr = []
    if (userInput.length > targetWord.length) {

        userInput.split("").forEach((letter, index) => {
            if (letter === targetWord[index]) {
                arr = [...arr, { letter: letter, correct: true }]
            }

            else {
                arr = [...arr, { letter: targetWord[index] || letter, correct: false }]
            }
        })
    }

    else {
        targetWord.split("").forEach((letter, index) => {

            if (letter === userInput[index]) {
                arr = [...arr, { letter: letter, correct: true }]
            }

            else if (!userInput[index]) {
                arr = [...arr, { letter: letter, correct: "untyped" }]
            }

            else {
                arr = [...arr, { letter: letter, correct: false }]
            }
        })
    }



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
    if (e.data == " ") {
        let wordIsCorrect = checkCorrectness(targetWord, userInput).every(element => element.correct === true)

        // console.log(wordIsCorrect);

        if (wordIsCorrect) {
            currentWordIndex++
            targetWord = pickRandomWord(wordPool)
            e.target.value = ""
        }


    }
    userInput = e.target.value
    renderUI(checkCorrectness(targetWord, userInput), currentWord)
})