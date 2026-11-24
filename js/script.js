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

// DOM Elements
let paragraphDisplayElement = document.getElementById("paragraphDisplay")
let paragraphInputElement = document.getElementById("paragraphInput")

// Event Listener
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

    if (correct) renderNewParagraph()

})

// Functions
function pickRandomWord(arr) {
    let r = Math.trunc(Math.random() * arr.length - 1)
    let randomWord = arr[r]
    return randomWord
}

function getRandomParagraph(wordCount) {
    let data = ""
    for (let i = 0; i <= wordCount; i++) {
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
    let quote = getRandomParagraph(30)
    paragraphDisplayElement.innerHTML = ``
    quote.split("").forEach( letter => {
        let letterSpan = document.createElement("span")
        letterSpan.innerText = letter
        paragraphDisplayElement.appendChild(letterSpan)
    } )
    paragraphInputElement.value = ``

} renderNewParagraph()