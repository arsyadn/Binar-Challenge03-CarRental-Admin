const express = require("express");
const { render } = require("express/lib/response");
const app = express();
const routes = require("./routes");

app.set('view engine', 'ejs');

app.use("/", routes);

app.get('/list-cars', (req, res) => {
    res.render('list_cars',{
        title: 'List Cars Page'
    })
})

app.get('/add-cars',(req, res)=> {
    res.render('add_cars',{
        title: 'Add Car Page'
    })
})

app.get('/edit-cars',(req, res)=> {
    res.render('edit_cars',{
        title: 'Edit Car Page'
    })
})



app.listen(8000, () => {
    console.log("Server running on port 8000");
})

app.use( express.static( "public" ) );