function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById('inputTemp').value);
    const inputScale = document.getElementById('inputScale').value;
    const outputScale = document.getElementById('outputScale').value;

    if (isNaN(inputTemp)) {
        document.getElementById('outputTemp').textContent = 'Please enter a valid number.';
        return;
    }

    let tempInCelsius;

    // Convert input temperature to Celsius
    switch (inputScale) {
        case 'celsius':
            tempInCelsius = inputTemp;
            break;
        case 'fahrenheit':
            tempInCelsius = (inputTemp - 32) * 5 / 9;
            break;
        case 'kelvin':
            tempInCelsius = inputTemp - 273.15;
            break;
    }

    let result;

    // Convert Celsius to the desired output scale
    switch (outputScale) {
        case 'celsius':
            result = tempInCelsius;
            break;
        case 'fahrenheit':
            result = (tempInCelsius * 9 / 5) + 32;
            break;
        case 'kelvin':
            result = tempInCelsius + 273.15;
            break;
    }

    document.getElementById('outputTemp').textContent = `Converted Temperature: ${result.toFixed(2)} ${getScaleName(outputScale)}`;
}

function getScaleName(scale) {
    switch (scale) {
        case 'celsius':
            return '°C';
        case 'fahrenheit':
            return '°F';
        case 'kelvin':
            return 'K';
        default:
            return '';
    }
}

function clearFields() {
    document.getElementById('inputTemp').value = '';
    document.getElementById('inputScale').value = 'celsius';
    document.getElementById('outputScale').value = 'celsius';
    document.getElementById('outputTemp').textContent = '';
}
