const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
	async index(req, res) {
		const products = await Product.find();

		return res.json(products);
	},

	async create(req, res) {
		console.log(req.body)
		try {
			const product = await Product.create(req.body);
	
			return res.json(product);
		} catch (error) {
			return res.json(error).status(500);
		}
	}
}