const express = require('express');
const bodyParser = require('body-parser')
const global = require('./global');
const codeExecutorHelperLib = require('./library/helperLib/codeExecutionLib.helper');
const app = express();
const fileUpload = require('express-fileupload');
const appId = process.env.APPPORTID;
// const appId = 1111;
const PORTNUMBER = appId;
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
app.use(fileUpload());
app.get('/', (req, res) => {
  res.send({
    responseCode: global.SUCCESS.code,
    responseData: `Welcome to ${appId} home page running on port ${appId}`,
    responseMsg: global.SUCCESS.message
  });
});

app.post('/', (req, res) => {
  const responseData = {
    responseCode: global.SUCCESS.code,
    responseData: `test`,
    responseMsg: global.SUCCESS.message
  }
  res.send(responseData);
});

app.post('/code_executor', async (req, res) => {
  const codeExecutionType = Number(req.body.execution_type);
  const userId = Number(req.body.user_id);
  const codeData = req.files.code_data;
  const result = await codeExecutorHelperLib.codeExecutorForEnvironments(codeExecutionType, userId, codeData);
  const responseData = {
    responseCode: global.SUCCESS.code,
    responseData: result,
    responseMsg: global.SUCCESS.message
  }
  res.send(responseData);
});

app.listen(PORTNUMBER, () => {
  console.log(`APP STARTED ON PORT ${appId} for APP id ${appId}`);
})
