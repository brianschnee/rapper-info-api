const { request } = require('express');
const express = require('express');
const app = express();
const PORT = 8000;

const rappers = {
	'21 savage': {
		age: 29,
		birthName: 'Shéyaa Bin Abraham-Joseph',
		birthLocation: 'London, UK',
	},
	'chance the rapper': {
		age: 29,
		birthName: 'Chancelor Bennett',
		birthLocation: 'Chicago, IL',
	},
	dylan: {
		age: '29',
		birthName: 'Dylan',
		birthLocation: 'Dylan',
	},
};

// Send File
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

// Send JSON
app.get('/api/:rapperName', (req, res) => {
	let { rapperName } = req.params;
	rapperName = rapperName.toLowerCase();

	// [] notation incase of spaces in prop name
	if (rappers[rapperName]) {
		res.json(rappers[rapperName]);
	} else {
		res.json(rappers['dylan']);
	}
});

// Listen on PORT
app.listen(process.env.PORT || PORT, () =>
	console.log(
		`\x1b[1m\x1b[32mThe server is running on port ${PORT}! You better go catch it!`,
	),
);
