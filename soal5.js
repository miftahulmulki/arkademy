function countAlphabet(words) {
    let regex = /[aiueoAIUEO]/gi
    let counter = words.match(regex)
    if (counter){
        console.log(counter.length)
    }
}

countAlphabet('sakARePKuaElah')