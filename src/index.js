const axios = require('axios')
const decompress = require('brotli/decompress')

axios.get('https://meme-api.com/gimme/ITMemes', {
  responseType: 'arraybuffer'
}).then(response => {
  const encodedArray = decompress(response.data)
  const decodedString = new TextDecoder().decode(encodedArray);
  const json = JSON.parse(decodedString)
  console.log(json)
});
