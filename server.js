const express = require(`express`);
const cors = require(`cors`);
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware 
app.use(express.static(`public`));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const allRoutes = require(`./controllers`);
app.use(allRoutes);

app.listen(PORT, () => {
	console.log(`App listening at http://localhost:${PORT}`);
});