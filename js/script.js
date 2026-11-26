// Data
let wordPool = [
    "the", "be", "to", "of", "and", "a", "in", "that", "have",
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

// Timer Variables
let seconds = 0
let timer = null

// DOM Elements
let paragraphDisplayElement = document.getElementById("paragraphDisplay")
let paragraphInputElement = document.getElementById("paragraphInput")
let wordCountInput = document.getElementById("wordCountInput")
let wordCount = localStorage.getItem("wordCount")
wordCountInput.value = wordCount
let resetButton = document.getElementById("resetButton")
let timerElement = document.getElementById("timerElement")

// Input Event Listener
paragraphInputElement.addEventListener("input", () => {
    let arrayParagraph = paragraphDisplayElement.querySelectorAll("span")
    let arrayValue = paragraphInputElement.value.split("")
    let correct = true

    arrayParagraph.forEach( (letterSpan, index) => {
        let letter = arrayValue[index]
        if (letter == null) {
            letterSpan.classList.remove("class", "correct")
            letterSpan.classList.remove("class", "incorrect")
            correct = false
        }
        else if (letter === letterSpan.innerText) {
            letterSpan.classList.add("class", "correct")
            letterSpan.classList.remove("class", "incorrect")
        }
        else {
            letterSpan.classList.add("class", "incorrect")
            letterSpan.classList.remove("class", "correct")
            correct = false
        }


    } )

    if (correct) {
        resetTimer()
        renderNewParagraph()
    }

})

// Reset Event Listener
resetButton.addEventListener("click", e => {
    resetTimer()
    renderNewParagraph()
})

// Change Word Count Event Listener
wordCountInput.addEventListener("input", e => {
    localStorage.setItem("wordCount", e.target.value)
    wordCount = e.target.value
})

// Functions
function pickRandomWord(arr) {
    let r = Math.trunc(Math.random() * arr.length - 1)
    let randomWord = arr[r]
    return randomWord
}

function getRandomParagraph(wordCount) {
    let data = ""
    for (let i = 0; i < wordCount; i++) {
        if (!data) {
            data += pickRandomWord(wordPool)
        }
        else {
            data += " " + pickRandomWord(wordPool)
        }
    }
    return data
}

function renderNewParagraph() {
    let quote = getRandomParagraph(wordCount)
    paragraphDisplayElement.innerHTML = ``
    quote.split("").forEach( letter => {
        let letterSpan = document.createElement("span")
        letterSpan.innerText = letter
        paragraphDisplayElement.appendChild(letterSpan)
    } )
    paragraphInputElement.value = ``
    startTimer()

} renderNewParagraph()

function startTimer() {
    if (timer !== null) return
    timer = setInterval(() => {
        seconds++
        timerElement.textContent = `${seconds}`
    }, 1000)
}

function stopTimer() {
    clearInterval(timer)
    timer = null
}

function resetTimer() {
    stopTimer()
    seconds = 0
    timerElement.textContent = `${seconds}`
}