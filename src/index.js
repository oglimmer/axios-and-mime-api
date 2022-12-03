const axios = require('axios')

axios.get('https://meme-api.com/gimme/ITMemes').then(response => {
  console.log(response.data) // this should be JSON
});
