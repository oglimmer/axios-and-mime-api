const axios = require('axios')
const zlib = require('zlib')

function streamToString (stream) {
  const chunks = [];
  return new Promise((resolve, reject) => {
    stream.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
    stream.on('error', (err) => reject(err));
    stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
  })
}

axios.get('https://meme-api.com/gimme/ITMemes', {
  decompress: false,
  responseType: 'stream',
  transformResponse: (data) => data.pipe(zlib.createBrotliDecompress())
})
.then(response => streamToString(response.data))
.then(data => {
  console.log(data)
});
