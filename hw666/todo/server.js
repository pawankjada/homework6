const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'));


app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());


require('./routes/routes.js')(app);


app.listen(process.env.PORT || 8080, function () {
    console.log(`App is now listening on PORT ` + process.env.PORT);
});