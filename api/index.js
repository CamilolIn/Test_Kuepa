const express = require('express');
// const bodyParser = require('body-parser');
const { users, cursos } = require('./src/routes/index');
const app = express();
const passport = require('passport')
const session = require('express-session')
const http = require('http')
const server = http.createServer(app)
const socketio = require('socket.io')
const io = socketio(server)
var cors = require('cors')

/*******************Configuracion Socketio********************** */
io.on('connection', socket => {
  socket.on('conectado', () => {
    console.log('Useuario conectado')
  })
})

/*******************Configuracion Passport********************** */
require('./src/passport/auth')
app.use(session({
    secret: 'spiralamejorempresa',
    resave: false,
    saveUninitialized: true,
  }))
  app.use(passport.initialize());
  app.use(passport.session());
  /****************************************************************** */



app.use(cors())


app.use(express.json())
app.use('/users', users);
app.use('/cursos', cursos);
app.use(function (err, req, res, next) {
    console.error(err);
    res.status(err.status || 500).send(err.message);
});


module.exports = server;