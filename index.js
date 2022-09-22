//Auxiliar de libreria
const express = require('express');
const app = express();

//API port
app.set('port', process.env.PORT || 4000);

app.listen(4000, () => {
    //console.log('conexion exitosa');
});

//Routes
app.use(require('./routes/index.routes'));