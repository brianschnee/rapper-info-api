const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;

app.use(cors());

const rappers = {
	'21 savage': {
		age: 29,
		birthName: 'Shéyaa Bin Abraham-Joseph',
		birthLocation: 'London, England',
	},
	'chance the rapper': {
		age: 29,
		birthName: 'Chancelor Bennett',
		birthLocation: 'Chicago, IL',
	},
	unknown: {
		age: 0,
		birthName: 'unknown',
		birthLocation: 'unknown',
	},
};

// Send File
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

// Send JSON
app.get('/api/:name', (req, res) => {
	let { name } = req.params;
	name = name.toLowerCase();

	// [] notation incase of spaces in prop name
	if (rappers[name]) {
		res.json(rappers[name]);
	} else {
		res.json(rappers['unknown']);
	}
});

// Listen on PORT
app.listen(process.env.PORT || PORT, () => {
	console.log(
		`\x1b[1m\x1b[32mThe server is running on port ${PORT}! You better go catch it!`,
	);
});
