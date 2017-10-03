
var name = 'Jacob Jones';
var upperCaseName = name.toUpperCase();
var career = 'Junior Developer';
var descStuff = 'I am currently looking for a way to use my newly obtained skills in the workplace.';

    console.log('Name: ' + upperCaseName);

    console.log('Career: ' + career);

    console.log('Description: ' + descStuff);


//Section for My Interests
    console.log('My Interests:');

function myInterests(interests){
    console.log('* ' + interests);
}

['Board Games', 'Mathematics', 'Trail Racing', 'Skateboarding'].forEach(myInterests);


//Section for My Previous Experience
    console.log('My Previous Experience:');

function displayPosition(companyName, jobTitle, description){
    console.log('* ' + jobTitle + ' at ' + companyName + ' -- ')
    console.log(description)
}

displayPosition('Student Teacher', 'Stockton High School', 'Created insturctional lesson plans and curricula, maintained an educational environment for students, collected data and used that data to enchance classroom operations.');
displayPosition('Math Lab Instructor', 'Southwest Baptist University', 'Supervised over 20 plus students at a time, aided in grading assignments, maintained attendence, provided tutoring, answered questions, held lab hours, and held office hours for pre-algebra students.');
displayPosition( 'Paraprofessional', 'Fall-Hamilton Enhanced Options School', 'Supervised over students with enchanced needs, motified lesson plans to met the needs of students, created a positive environment for students, taught mathematics and english.');

//Section for My Skills
    console.log('My Skills:');

function displaySkill(skill, isCool){
 if  (isCool === true) {
     console.log('* Check it: ' + skill)
 } else {
     console.log('* ' + skill)
 }
}

displaySkill('Verbal Communication', false);
displaySkill('Written Communication', false);
displaySkill('Time Management', false);
displaySkill('Trail Racing', true);
displaySkill('Skateboarding', true);
displaySkill('Advance Statistics', false);
displaySkill('Public Speaking', false);
displaySkill('JavaScript', true);