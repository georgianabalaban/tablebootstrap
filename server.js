var express = require("express")
var Sequelize = require("sequelize")
var nodeadmin = require("nodeadmin")

//connect to mysql database
var sequelize = new Sequelize('intrariDB', 'root', '', {
    dialect:'mysql',
    host:'localhost'
})

sequelize.authenticate().then(function(){
    console.log('Success')
})

//define a new Model
var Intrari = sequelize.define('intrari', {
    nr_intrare: Sequelize.STRING,
    data_intrare: Sequelize.DATE,
    furnizori: Sequelize.STRING,
    nr_factura: Sequelize.STRING,
    data_factura: Sequelize.DATE,
    model_document: Sequelize.STRING,
    data_scadenta: Sequelize.DATE,
    valoare_totala: Sequelize.STRING,
    stare_factura: Sequelize.STRING,
})

var app = express()

app.use('nodeadmin', nodeadmin(app));

//access static files
app.use(express.static('frontend'))

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

// get a list of intrari
app.get('/intrari', function(request, response) {
    Intrari.findAll().then(function(intrari){
        response.status(200).send(intrari)
    })
        
})

// get one intrare by id
app.get('/intrari/:id', function(request, response) {
    Intrari.findOne({where: {id:request.params.id}}).then(function(intrare) {
        if(intrare) {
            response.status(200).send(intrare)
        } else {
            response.status(404).send()
        }
    })
})

//create a new intrare
app.post('/intrari', function(request, response) {
    Intrari.create(request.body).then(function(intrare) {
        response.status(201).send(intrare)
    })
})

app.put('/intrari/:id', function(request, response) {
    Intrari.findById(request.params.id).then(function(intrare) {
        if(intrare) {
            intrare.update(request.body).then(function(intrare){
                response.status(201).send(intrare)
            }).catch(function(error) {
                response.status(200).send(error)
            })
        } else {
            response.status(404).send('Not found')
        }
    })
})

app.delete('/intrari/:id', function(request, response) {
    Intrari.findById(request.params.id).then(function(intrare) {
        if(intrare) {
            intrare.destroy().then(function(){
                response.status(204).send()
            })
        } else {
            response.status(404).send('Not found')
        }
    })
})



app.listen(8080)