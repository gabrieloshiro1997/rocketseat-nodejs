const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
	async index(req, res) {
		try {
			const { page } = req.query; 
			const products = await Product.paginate({}, { page, limit: 10 });

			return res.json(products);
		} catch (error) {
			return res.json(error).status(500);
		}
	},

	async create(req, res) {
		try {
			const product = await Product.create(req.body);

			return res.json(product);
		} catch (error) {
			return res.json(error).status(500);
		}
	},

	async show(req, res) {

		try {
			const product = await Product.findById(req.params.id);

			return res.json(product)
		} catch (error) {
			return res.send(error).status(500);
		}
	},

	async update(req, res) {
		try {
			const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: false });

			return res.json(product);
		} catch (error) {
			return res.json(error).status(500);
		}
	},

	async destroy(req, res) {
		try {
			await Product.findByIdAndDelete(req.params.id);

			return res.send();
		} catch (error) {
			return res.json(error).status(500);

		}
	}
}