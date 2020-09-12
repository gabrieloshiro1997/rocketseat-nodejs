const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();

mongoose.connect('mongodb://localhost:27017/nodeapi', 
	{ 
		useNewUrlParser: true ,
		useUnifiedTopology: true
	}
);

requireDir('./src/models');

const Product = mongoose.model('Product');

app.get('/', (req, res) => {

	const product = Product.create({
		title: 'React Native',
		description: 'Build native apps with React',
		url: 'http://github.com/facebook/react-native'
	});

	return res.send("Hello Rocketseat");
})

app.listen(3001, () => console.error('NodeJS is running on port 3001'));