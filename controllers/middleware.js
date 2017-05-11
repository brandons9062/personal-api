var exports = module.exports = {};
const skillz = require('../skillz');

exports.addHeaders = function (req, res, next) {
    res.status(200).set({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS, GET, POST, PUT',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'X-XSS-Protection': '1; mode=block',
        'X-Frame-Options': 'SAMEORIGIN',
        'Content-Security-Policy': "default-src 'self' devmountain.github.io"
    });
    
    next();
}

exports.generateId = function(req, res, next){
    var id = skillz.length;
    console.log("TEST:  "+skillz.length)
    for(var i = 0; i < req.body.length; i++){
        req.body[i].id = id += 1;
        for(var k = 0; k < skillz.length; k++){
            console.log(req.body[i].id);
            if (skillz[k].id == req.body[i].id){
                i--;
                k = 0;
            }
        }
    }
    
    next();
}

exports.checkAuth = function(req, res, next){
    if(req.params.username === "bman123" && req.params.pin === "1234"){
        next();
    }
    else{
        res.status(403).send("You don't have access to this information");
    }
}
 