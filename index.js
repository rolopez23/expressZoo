const express = require('express');
const app = express();
const PORT = 7173;

const visit = require('./routes/visitZoo.js');
const leaveZoo = require('./routes/leaveZoo.js');
const playAtZoo = require('./routes/playAtZoo.js');
const changeZoo = require('./routes/changeZoo.js');

app.use(express.json());
app.use(visit);
app.use(leaveZoo);
app.use(playAtZoo);
app.use(changeZoo);

app.listen(PORT, ()=>{
  console.log(`The zoo is open @ address ${PORT} on localhost`)
})

