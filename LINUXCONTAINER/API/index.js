const express = require('express');
const global = require('./global');
const app = express();
// const appId = process.env.APPPORTID;
const appId = 1111;
const PORTNUMBER = appId;
app.get('/', (req, res) => {
  console.log('get========================')

  res.send({
    responseCode: global.SUCCESS.code,
    responseData: `Welcome to ${appId} home page running on port ${appId}`,
    responseMsg: global.SUCCESS.message
  });
});

app.post('/', (req, res) => {
  console.log('post========================')
  const responseData = {
    responseCode: global.SUCCESS.code,
    responseData: `test`,
    responseMsg: global.SUCCESS.message
  }
  res.send(responseData);
});

app.listen(PORTNUMBER, () => {
  console.log(`APP STARTED ON PORT ${appId} for APP id ${appId}`);
})
