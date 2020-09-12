const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send('Hello Rocketseat');
})
app.listen(3001, () => console.log('NodeJS is running on port 3001'));