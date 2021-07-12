const global = require('../../global');
const fs = require('fs');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

module.exports.codeExecutorForEnvironments = async (codeExecutionType, userId, codeData) => {
  try {
    let result = {};
    switch (codeExecutionType) {
      case global.CODE_EXECUTION_TYPES.PYTHON3:
        result = await this.codeExecutorForPython3(userId, codeData);
        break;
      case global.CODE_EXECUTION_TYPES.GOLANG:
        result = await this.codeExecutorForGOLANG(userId, codeData);
        break;
      case global.CODE_EXECUTION_TYPES.JAVASCRIPT:
        result = await this.codeExecutorForJavascript(userId, codeData);
        break;
      case global.CODE_EXECUTION_TYPES.C:
        result = await this.codeExecutorForC(userId, codeData);
        break;
      case global.CODE_EXECUTION_TYPES.CPP:
        result = await this.codeExecutorForCPP(userId, codeData);
        break;
      case global.CODE_EXECUTION_TYPES.PHP:
        result = await this.codeExecutorForPHP(userId, codeData);
        break;
      case global.CODE_EXECUTION_TYPES.PYTHON2:
        result = await this.codeExecutorForPython2(userId, codeData);
        break;
    }
    return result;
  } catch (error) {
    console.log(error)
    return [];
  }
}

module.exports.codeExecutorForPython3 = async (userId, codeData) => {
  try {
    const dir = global.TEMP_FOLDER_PATH + userId;

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }

    fs.writeFileSync(dir + '/' + codeData.name, codeData.data, 'ascii');
    const executionCommand = 'python3 ' + dir + '/' + codeData.name;
    const { stdout, stderr } = await exec(executionCommand);
    return {
      stderr: stderr,
      stdout: stdout,
      status: global.CODE_EXECUTION_STATUS.SUCCESS
    };
  } catch (error) {
    console.log(error)
    return {
      stderr: "executable code thrown an exception",
      stdout: "",
      status: global.CODE_EXECUTION_STATUS.FAILURE
    };
  }
}

module.exports.codeExecutorForGOLANG = async (userId, codeData) => {
  try {
    const dir = global.TEMP_FOLDER_PATH + userId;

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }

    fs.writeFileSync(dir + '/' + codeData.name, codeData.data, 'ascii');
    const executionCommand = 'go run ' + dir + '/' + codeData.name;
    const { stdout, stderr } = await exec(executionCommand);
    return {
      stderr: stderr,
      stdout: stdout,
      status: global.CODE_EXECUTION_STATUS.SUCCESS
    };
  } catch (error) {
    console.log(error)
    return {
      stderr: "executable code thrown an exception",
      stdout: "",
      status: global.CODE_EXECUTION_STATUS.FAILURE
    };
  }
}

module.exports.codeExecutorForJavascript = async (userId, codeData) => {
  try {
    const dir = global.TEMP_FOLDER_PATH + userId;

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }

    fs.writeFileSync(dir + '/' + codeData.name, codeData.data, 'ascii');
    const executionCommand = 'node ' + dir + '/' + codeData.name;
    const { stdout, stderr } = await exec(executionCommand);
    return {
      stderr: stderr,
      stdout: stdout,
      status: global.CODE_EXECUTION_STATUS.SUCCESS
    };
  } catch (error) {
    console.log(error)
    return {
      stderr: "executable code thrown an exception",
      stdout: "",
      status: global.CODE_EXECUTION_STATUS.FAILURE
    };
  }
}

module.exports.codeExecutorForCPP = async (userId, codeData) => {
  try {
    const dir = global.TEMP_FOLDER_PATH + userId;

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }

    fs.writeFileSync(dir + '/' + codeData.name, codeData.data, 'ascii');
    const executionCommand = 'go run ' + dir + '/' + codeData.name;
    const { stdout, stderr } = await exec(executionCommand);
    return {
      stderr: stderr,
      stdout: stdout,
      status: global.CODE_EXECUTION_STATUS.SUCCESS
    };
  } catch (error) {
    console.log(error)
    return {
      stderr: "executable code thrown an exception",
      stdout: "",
      status: global.CODE_EXECUTION_STATUS.FAILURE
    };
  }
}

module.exports.codeExecutorForC = async (userId, codeData) => {
  try {
    const dir = global.TEMP_FOLDER_PATH + userId;

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }

    fs.writeFileSync(dir + '/' + codeData.name, codeData.data, 'ascii');
    const executionCommand = 'go run ' + dir + '/' + codeData.name;
    const { stdout, stderr } = await exec(executionCommand);
    return {
      stderr: stderr,
      stdout: stdout,
      status: global.CODE_EXECUTION_STATUS.SUCCESS
    };
  } catch (error) {
    console.log(error)
    return {
      stderr: "executable code thrown an exception",
      stdout: "",
      status: global.CODE_EXECUTION_STATUS.FAILURE
    };
  }
}

module.exports.codeExecutorForPHP = async (userId, codeData) => {
  try {
    const dir = global.TEMP_FOLDER_PATH + userId;

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }

    fs.writeFileSync(dir + '/' + codeData.name, codeData.data, 'ascii');
    const executionCommand = 'php ' + dir + '/' + codeData.name;
    const { stdout, stderr } = await exec(executionCommand);
    return {
      stderr: stderr,
      stdout: stdout,
      status: global.CODE_EXECUTION_STATUS.SUCCESS
    };
  } catch (error) {
    console.log(error)
    return {
      stderr: "executable code thrown an exception",
      stdout: "",
      status: global.CODE_EXECUTION_STATUS.FAILURE
    };
  }
}

module.exports.codeExecutorForPython2 = async (userId, codeData) => {
  try {
    const dir = global.TEMP_FOLDER_PATH + userId;

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }

    fs.writeFileSync(dir + '/' + codeData.name, codeData.data, 'ascii');
    const executionCommand = 'python2 ' + dir + '/' + codeData.name;
    const { stdout, stderr } = await exec(executionCommand);
    return {
      stderr: stderr,
      stdout: stdout,
      status: global.CODE_EXECUTION_STATUS.SUCCESS
    };
  } catch (error) {
    console.log(error)
    return {
      stderr: "executable code thrown an exception",
      stdout: "",
      status: global.CODE_EXECUTION_STATUS.FAILURE
    };
  }
}
