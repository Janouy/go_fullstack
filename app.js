const express = require('express');

const app = express();

app.use((req, res, next) =>{
    console.log('requêtereçue');
    next();
});

app.use((req, res, next) =>{
    res.status(201);
    next();
})

app.use((req, res) => {
res.json({message : 'votre requete a bien été reçue'});
});

module.exports = app;