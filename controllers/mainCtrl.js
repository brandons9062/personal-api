var exports = module.exports = {};
var user = require('../user');
var skillz = require('../skillz');
var secrets = require('../secrets');

exports.getName = function(req, res, next){
    let name = {"name":user.name};
    console.log(name);
    res.status(200).json(name);
}

exports.getLocation = function(req, res, next){
    let location = {"location":user.location};
    res.status(200).json(location);
}

exports.getOccupations = function(req, res, next){
    let occupations = {"occupations":user.getOccupations(req.query)};
    res.status(200).json(occupations);
}

exports.getLatestOccupation = function(req, res, next){
    let latestOccupation = {"latestOccupation":user.occupations.pop()};
    res.status(200).json(latestOccupation);
}

exports.getHobbies = function(req, res, next){
    let hobbies = {
        "hobbies" : user.hobbies
    }
    res.status(200).json(hobbies);
}

exports.getHobbiesByType = function(req, res, next){
    let type = req.params.type;
    let associatedHobbies = [];
    for(var i = 0; i < user.hobbies.length; i++){
        if(user.hobbies[i].type === type){
            associatedHobbies.push(user.hobbies[i]);
        }
    }
    res.status(200).json(associatedHobbies);
}

exports.getFamily = function(req, res, next){
    let familyMembers = {"familyMembers":user.getFamily(req.query)};
    
    res.status(200).json(familyMembers);
}

exports.getFamilyByGender = function(req, res, next){
    let familyMembers = {"familyMembers":user.getFamilyByGender(req.params.gender)};
    
    res.status(200).json(familyMembers);
}

exports.getRestaurants = function(req, res, next){
    let restaurants = {"restaurants":user.getRestaurants(req.query)};
    
    res.status(200).json(restaurants);
}

exports.getRestaurantsByName = function(req, res, next){
    let restaurants = {"restaurant":user.restaurantsByName(req.params.name)};
    
    res.status(200).json(restaurants);
}

exports.updateName = function(req, res, next){
    let newName = {"newName":user.updateName(req.params.name, req.body)};
    res.status(200).json(newName);
}

exports.updateLocation = function(req, res, next){
    let newLocation = {"newLocation":user.updateLocation(req.params.location, req.body)};
    res.status(200).json(newLocation);
}

exports.addHobbies = function(req, res, next){
    let newHobbies = {"newHobbies":user.addHobbies(req.body)};
    res.status(200).json(newHobbies);
}

exports.addFamilyMembers = function(req, res, next){
    let newFamilyMembers = {"newFamilyMembers":user.addFamilyMembers(req.body)};
    res.status(200).json(newFamilyMembers);
}

exports.addRestaurants = function(req, res, next){
    let newRestaurants = {"newRestaurants":user.addRestaurants(req.body)};
    res.status(200).json(newRestaurants);
}

exports.getSkillz = function(req, res, next){
    let mySkillz = {"mySkillz":skillz.getSkillz(req.query)};
    res.status(200).json(mySkillz);
}

exports.addSkillz = function(req, res, next){
    let newSkillz = {"newSkillz":skillz.addSkillz(req.body)};
    res.status(200).json(newSkillz);
}

exports.getSecrets = function(req, res, next){
    let mySecrets = secrets;
    res.status(200).json(mySecrets);
}



