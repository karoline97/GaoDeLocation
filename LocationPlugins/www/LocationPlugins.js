var exec = require('cordova/exec');

var GaodeLocation = {
    getCurrentPosition:function (successFn,errorFn) {
        exec(successFn,errorFn,'GaoDeLocation','getCurrentPosition',[]);
    }
};

module.exports = GaodeLocation;
