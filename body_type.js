document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('bodyTypeForm');
    const resultContainer = document.getElementById('result');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const gender = document.querySelector('input[name="gender"]:checked').value;
      const weight = parseFloat(document.getElementById('weight').value);
      const age = parseInt(document.getElementById('age').value);
      const height = parseInt(document.getElementById('height').value);
      const waist = parseInt(document.getElementById('waist').value);
      const hip = parseInt(document.getElementById('hip').value);
      const neck = parseInt(document.getElementById('neck').value);
  
     
      let bodyFatPercentage;
      if (gender === 'male') {
        bodyFatPercentage = (86.010 * Math.log10(waist - neck) - 70.041 * Math.log10(height)) + 36.76;
      } else if (gender === 'female') {
        bodyFatPercentage = (163.205 * Math.log10(waist + hip - neck)) - (97.684 * Math.log10(height)) - 78.387;

      }
  
      
      let idealWeight;
      if (gender === 'male') {
        idealWeight = 53 + 2.3 * ((height / 2.54) - 60);
      } else if (gender === 'female') {
        idealWeight = 48.5 + 2.3 * ((height / 2.54) - 60);
      }
  
      
      resultContainer.innerHTML = `
        <h4>Results:</h4>
        <p><strong>Body Fat Percentage:</strong> ${bodyFatPercentage.toFixed(2)}%</p>
        <p><strong>Ideal Weight:</strong> ${idealWeight.toFixed(2)} kg</p>
      `;
    });
  });
  