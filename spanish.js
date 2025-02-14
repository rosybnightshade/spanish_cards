function dictionaryData() {
    let randomWord = '';
    let dictionary = `https://dictionaryapi.com/api/v3/references/collegiate/json/${randomWord}?key=f0932564-f1ca-45a4-a668-b19d9bad50fa`

    fetch(dictionary)
    .then(response => response.json())
    .then(data =>
        console.log(data)
    )
    .catch(error => console.error(error))

};