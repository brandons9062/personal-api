const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const user = require('./user');
const skillz = require('./skillz');
const middleware = require('./controllers/middleware');
const mainCtrl = require('./controllers/mainCtrl');

app.use(bodyParser.json());
app.use(middleware.addHeaders);

app.get('/api/name', mainCtrl.getName);
app.get('/api/location', mainCtrl.getLocation);
app.get('/api/occupations', mainCtrl.getOccupations);
app.get('/api/occupations/latest', mainCtrl.getLatestOccupation);
app.get('/api/hobbies', mainCtrl.getHobbies);
app.get('/api/hobbies/:type', mainCtrl.getHobbiesByType);
app.get('/api/family', mainCtrl.getFamily);
app.get('/api/family/:gender', mainCtrl.getFamilyByGender);
app.get('/api/restaurants', mainCtrl.getRestaurants);
app.get('/api/restaurants/:name', mainCtrl.getRestaurantsByName);
app.get('/api/skillz', mainCtrl.getSkillz);
app.get('/secrets/:username/:pin', middleware.checkAuth, mainCtrl.getSecrets);

app.put('/api/name/:name', mainCtrl.updateName);
app.put('/api/location/:location', mainCtrl.updateLocation);

app.post('/api/hobbies', mainCtrl.addHobbies);
app.post('/api/family', mainCtrl.addFamilyMembers);
app.post('/api/restaurants', mainCtrl.addRestaurants);
app.post('/api/skillz', middleware.generateId, mainCtrl.addSkillz);

app.listen(3000, function(){
    console.log('Listening on 3000');
});