var skillz = [
    {
        "id": 1,
        "name": "Javascript",
        "experience": "Intermediate"
    },
    {
        "id": 2,
        "name": "Angular",
        "experience": "Intermediate"
    },
    {
        "id": 3,
        "name": "Node",
        "experience": "Intermediate"
    },
    {
        "id": 4,
        "name": "HTML/CSS",
        "experience": "Beginner"
    }
];

module.exports = skillz;

skillz.getSkillz = function(experience){
    var results = Array.from(skillz);
    if(experience.experience){
    for(var i = 0; i < results.length; i++){
        if(results[i].experience != experience.experience){
            results.splice(i,1);
            --i;
        }
    }
    }
    return results;
}

skillz.addSkillz = function(newSkillz) {
    console.log(newSkillz);
    for(var i = 0; i < skillz.length; i++){
        for(var k = 0; k < newSkillz.length; k++){
            console.log(newSkillz[k]);
            if(skillz[i].name == newSkillz[k].name){
                newSkillz.splice(k,1);
                k--;
            }
        }
    }
    skillz = skillz.concat(newSkillz);
    return skillz;
}