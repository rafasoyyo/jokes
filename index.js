const superagent = require('superagent');

// promise with async/await
(async () => {
    try {
        const res = await superagent.get('https://api.chucknorris.io/jokes/random');
        console.log(JSON.parse(res.text).value);
    } catch (err) {
        console.error('Error', err);
    }
})();