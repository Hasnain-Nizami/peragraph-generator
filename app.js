 var item = [
`If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough, the next logical step is to find a random paragraph. We created the Random Paragraph Generator with you in mind. The process is quite simple. Choose the number of random paragraphs you'd like to see and click the button. Your chosen number of paragraphs will instantly appear`,
`Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges. The writer can use the paragraph as the first one of a short story and build upon it. A second option is to use the random`,
`A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. By inserting a completely random paragraph from which to begin, it can take down some of the issues that may have been causing the writers' block in the first place.undertaken, the writer is forced to use creativity to `,
`Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.random paragraphs, you've come to the right place. `,
`writing challenge can be to take the individual sentences in the random paragraph and incorporate a single sentence from that into a new paragraph to create a short story. Unlike the random sentence generator, the sentences from the random paragraph will have some connection to one another so it will be a bit different. You also won't know exactly how many sentences will appear in the random paragraph.`,
``
]

let inputNumber = document.querySelector("#input")
let dataContainer = document.querySelector("#data")

const generate = () =>{
    if(isNaN(inputNumber.value) || inputNumber.value < 0 || inputNumber.value > 5){
        const randomIndex = Math.floor(Math.random() * item.length)
        dataContainer.innerHTML= `<p>${item[randomIndex]}</p>`
    }else{
        const data = item.slice(0,inputNumber.value)
        const pera = data.map((d)=> {
            return `<p>${d}</p>`
        })
        dataContainer.innerHTML = pera.join(" ") 
    
    }
}