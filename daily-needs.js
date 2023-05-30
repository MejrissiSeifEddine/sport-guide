document.getElementById('dailyNeedsForm').addEventListener('submit', function(event) {
  event.preventDefault();


  var weight = parseFloat(document.getElementById('weight').value);
  var gender = document.querySelector('input[name="gender"]:checked').value;
  var age = parseInt(document.getElementById('age').value);
  var height = parseFloat(document.getElementById('height').value);
  var activityLevel = parseFloat(document.getElementById('activityLevel').value);
  var goal = document.getElementById('goal').value;

  
  var water = calculateWater(weight);
  var calories = calculateCalories(weight, gender, age, height, activityLevel, goal);
  var protein = calculateProtein(weight, goal);

 
  var result = document.getElementById('result');
  result.innerHTML = '<h3>Your Daily Needs:</h3>' +
    '<p>Water: ' + water + ' liters</p>' +
    '<p>Calories: ' + calories + ' kcal</p>' +
    '<p>Protein: ' + protein + ' grams</p>';
});

function calculateWater(weight) {
  
  var waterPercentage = 0.03;
  var water = weight * waterPercentage;
  return water.toFixed(2);
}

function calculateCalories(weight, gender, age, height, activityLevel, goal) {
  var bmr;

 
  if (gender === 'male') {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }

 
  var calories = bmr * activityLevel;

  
  if (goal === 'lose') {
    calories -= 500; 
  } else if (goal === 'gain') {
    calories += 250; 
  }

  return calories.toFixed(0);
}

function calculateProtein(weight, goal) {
  var protein;


  if (goal === 'maintain') {
    protein = weight * 0.8;
  } else {
    protein = weight;
  }

  return protein.toFixed(1); 
}
