document.addEventListener('DOMContentLoaded', () => {
    const convertBtn = document.getElementById('convert-btn');
    const temperatureInput = document.getElementById('temperature-input');
    const unitSelect = document.getElementById('unit-select');
    const resultDiv = document.getElementById('result');

    convertBtn.addEventListener('click', () => {
        const temperature = parseFloat(temperatureInput.value);
        const unit = unitSelect.value;

        if (isNaN(temperature)) {
            resultDiv.textContent = 'Please enter a valid number';
            return;
        }

        let convertedTemperature;
        let convertedUnit;

        if (unit === 'Celsius') {
            convertedTemperature = (temperature * 9/5) + 32;
            convertedUnit = 'Fahrenheit';
            resultDiv.innerHTML = `${temperature} °C is equal to ${convertedTemperature.toFixed(2)} °F<br>`;

            const kelvinTemperature = temperature + 273.15;
            resultDiv.innerHTML += `${temperature} °C is equal to ${kelvinTemperature.toFixed(2)} K`;
        } else if (unit === 'Fahrenheit') {
            convertedTemperature = (temperature - 32) * 5/9;
            convertedUnit = 'Celsius';
            resultDiv.innerHTML = `${temperature} °F is equal to ${convertedTemperature.toFixed(2)} °C<br>`;

            const kelvinTemperature = convertedTemperature + 273.15;
            resultDiv.innerHTML += `${temperature} °F is equal to ${kelvinTemperature.toFixed(2)} K`;
        } else if (unit === 'Kelvin') {
            convertedTemperature = temperature - 273.15;
            convertedUnit = 'Celsius';document.addEventListener('DOMContentLoaded', () => {
                const convertBtn = document.getElementById('convert-btn');
                const temperatureInput = document.getElementById('temperature-input');
                const unitSelect = document.getElementById('unit-select');
                const resultDiv = document.getElementById('result');
            
                convertBtn.addEventListener('click', () => {
                    const temperature = parseFloat(temperatureInput.value);
                    const unit = unitSelect.value;
            
                    if (isNaN(temperature)) {
                        resultDiv.textContent = 'Please enter a valid number';
                        return;
                    }
            
                    let convertedTemperature;
                    let convertedUnit;
            
                    if (unit === 'Celsius') {
                        convertedTemperature = (temperature * 9/5) + 32;
                        convertedUnit = 'Fahrenheit';
                        resultDiv.innerHTML = `${temperature} °C is equal to ${convertedTemperature.toFixed(2)} °F<br>`;
            
                        const kelvinTemperature = temperature + 273.15;
                        resultDiv.innerHTML += `${temperature} °C is equal to ${kelvinTemperature.toFixed(2)} K`;
                    } else if (unit === 'Fahrenheit') {
                        convertedTemperature = (temperature - 32) * 5/9;
                        convertedUnit = 'Celsius';
                        resultDiv.innerHTML = `${temperature} °F is equal to ${convertedTemperature.toFixed(2)} °C<br>`;
            
                        const kelvinTemperature = convertedTemperature + 273.15;
                        resultDiv.innerHTML += `${temperature} °F is equal to ${kelvinTemperature.toFixed(2)} K`;
                    } else if (unit === 'Kelvin') {
                        convertedTemperature = temperature - 273.15;
                        convertedUnit = 'Celsius';
                        resultDiv.innerHTML = `${temperature} K is equal to ${convertedTemperature.toFixed(2)} °C<br>`;
            
                        const fahrenheitTemperature = (convertedTemperature * 9/5) + 32;
                        resultDiv.innerHTML += `${temperature} K is equal to ${fahrenheitTemperature.toFixed(2)} °F`;
                    }
                });
            });
            
            resultDiv.innerHTML = `${temperature} K is equal to ${convertedTemperature.toFixed(2)} °C<br>`;

            const fahrenheitTemperature = (convertedTemperature * 9/5) + 32;
            resultDiv.innerHTML += `${temperature} K is equal to ${fahrenheitTemperature.toFixed(2)} °F`;
        }
    });
});
