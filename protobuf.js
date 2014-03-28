var fs = require('fs');
var Schema = require('protobuf').Schema;
var schema = new Schema(fs.readFileSync('buftest.desc'));

var BufTest = schema.BufTest;

exports.serialize = function (socket, data) {
    var proData = BufTest.serialize(data);
    return proData;
};

exports.resolveMessage = function (proData) {
    var data;
    try{
        data = BufTest.parse(new Buffer(proData));
    } catch(e) {
        console.log(e);
        return null;
    }
    return data;
};