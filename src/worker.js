self.addEventListener('message', (message) => {
    let data = message.data;
    if (data === 'jocke') {
        self.postMessage({value: '...loading jocke'});
        let url = 'https://api.chucknorris.io/jokes/random';
        fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(jocke) {
            self.postMessage(jocke);
        })
    }
})