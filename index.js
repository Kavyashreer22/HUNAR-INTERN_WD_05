const tempE1 = document.getElementById("temperature");
const scaleE1 = document.getElementById("scale");

function computeTemp(event) {
  const currentValue = +tempE1.value;
  const currentScale = scaleE1.value;

  switch (currentScale) {
    case "celsius":
      tempE1.value = (currentValue + 273.32).toFixed(2);
      scaleE1.value = "kelvin";
      break;
    case "fahrenheit":
      tempE1.value = ((currentValue - 32) / 1.8).toFixed(2);
      scaleE1.value = "celsius";
      break;
    case "kelvin":
      tempE1.value = ((currentValue - 273.32) * 1.8 + 32).toFixed(2);
      scaleE1.value = "fahrenheit";
      break;

    default:
      break;
  }
}
