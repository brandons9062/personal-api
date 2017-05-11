const user = {
    name: 'Browndon',
    location: 'Provo, UT',
    occupations: ['Student', 'Coding Genius'],
    hobbies: [
        {
            name: 'Basketball',
            type: 'Sport'
        },
        {
            name: 'Reading',
            type: 'Literary'
        },
        {
            name: 'Tennis',
            type: 'Sport'
        }
    ],
    family: [
        {
            name: "test",
            relation: "test",
            gender: "Male"
        },
        {
            name: "G-Money",
            relation: "Parent",
            gender: "Female"
        },
        {
            name: "A-Dime",
            relation: "Fiance",
            gender: "Female"
        },
        {
            name: "No-Name",
            relation: "Parent",
            gender: "Male"
        }
    ],
    restaurants: [
        {
            name: "IHOP",
            type: 'Breakfast',
            rating: 5
        },
        {
            name: "Denny's",
            type: "Breakfast",
            rating: 3
        },
        {
            name: "Simply Thai",
            type: "Asian",
            rating: 8
        }
    ]
};

module.exports = user;

user.getFamily = function (query) {
    let results = Array.from(user.family);
    for (var i = 0; i < results.length; i++) {
        for (var key in query) {
            if (results[i][key] != query[key]) {
                results.splice(i,1);
                --i;
            }
        }
    }
    return results;
}

user.getFamilyByGender = function (gender) {
    let results = Array.from(user.family);
    for(var i = 0; i < results.length; i++){
        if(results[i].gender != gender){
            results.splice(i,1);
            i--;
        }
    }
    return results
}

user.getRestaurants = function (query){
    let results = Array.from(user.restaurants);
    for(var i = 0; i < results.length; i++){
        for(var key in query){
            if(results[i][key] < query[key]){
                results.splice(i,1);
                --i;
            }
        }
    }
    return results;
}

user.getOccupations = function (query){
    let results = Array.from(user.occupations);
        if(query.order=='asc'){
            results.sort();
        }
        else if(query.order=='desc'){
            results.sort().reverse();
        }
    return results;
}

user.restaurantsByName = function (name) {
    for(var i = 0; i < user.restaurants.length; i++){
        if(user.restaurants[i].name == name){
            return user.restaurants[i];
        }
    }
}

user.updateName = function (name, newName){
    if(user.name == name){
        user.name = newName.name;
    }
}

user.updateLocation = function (location, newLocation){
    if(location = "changeMe"){
        user.location = newLocation.location;
    }
}

user.addHobbies = function (newHobbies){
    var checkArr = Array.from(newHobbies);
    for(var i = 0; i < user.hobbies.length; i++){
        for(var k = 0; k < checkArr.length; k++){
            if(user.hobbies[i].name == checkArr[k].name){
                checkArr.splice(k,1);
                k--;
            }
        }
    }
    user.hobbies = user.hobbies.concat(checkArr);
}

user.addFamilyMembers = function (newFamilyMembers){
    var checkArr = Array.from(newFamilyMembers);
    for(var i = 0; i < user.family.length; i++){
        for(var k = 0; k < checkArr.length; k++){
            if(user.family[i].name == checkArr[k].name){
                checkArr.splice(k,1);
                k--;
            }
        }
    }
    user.family = user.family.concat(checkArr);
}

user.addRestaurants = function (newRestaurants){
    var checkArr = Array.from(newRestaurants);
    for(var i = 0; i < user.restaurants.length; i++){
        for(var k = 0; k < checkArr.length; k++){
            if(user.restaurants[i].name == checkArr[k].name){
                checkArr.splice(k,1);
                k--;
            }
        }
    }
    user.restaurants = user.restaurants.concat(checkArr);
}


