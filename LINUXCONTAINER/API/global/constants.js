module.exports.CONTENT_ACTIVE = 1;

module.exports.CODE_EXECUTION_TYPES = {
    PYTHON3: 1,
    JAVASCRIPT: 2,
    CPP: 3,
    C: 4,
    GOLANG: 5,
    PHP: 6,
    PYTHON2: 7
};

module.exports.CODE_EXECUTION_STATUS = {
  SUCCESS: 1,
  FAILURE: 2
};

module.exports.TEMP_FOLDER_PATH = __dirname+'/../tempfolder/';
