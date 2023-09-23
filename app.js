const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'We Love Programming!'
let idx = 1
let speed = 150 / speedEl.value

writeText()

function writeText() {
    textEl.innerText = text.slice(0, idx)

    idx++

    if(idx > text.length) {
        idx = 1
    }

    setTimeout(writeText, speed)
}
// const textEl = document.getElementById('textEl');
// const speedEl = document.getElementById('speedEl');

textEl.addEventListener('mouseover', (e) => {
  let currentValue = parseFloat(speedEl.value);

  if (!isNaN(currentValue)) {
    currentValue++;
    speedEl.value = currentValue;

    // Remove any existing event listener (if needed)
    // speedEl.removeEventListener('input', handleSpeedInput);

    // Add a new 'input' event listener to 'speedEl'
    speedEl.addEventListener('input', handleSpeedInput(currentValue));
    console.log(`Speed updated to: ${speed}`);
  }
});

function handleSpeedInput(currentValue) {
  // Calculate 'speed' based on the input value of 'speedEl'
  speed = 300 / currentValue;

  // You can use the 'speed' value here or perform any other actions as needed.
  console.log(`Speed updated to: ${speed}`);
}


textEl.addEventListener('click', (e) => {
    let currentValue = parseFloat(speedEl.value);
  
    if (!isNaN(currentValue)) {
      currentValue--;
      speedEl.value = currentValue;
  
      // Remove any existing event listener (if needed)
      // speedEl.removeEventListener('input', handleSpeedInput);
  
      // Add a new 'input' event listener to 'speedEl'
      speedEl.addEventListener('input', handleSpeedInput(currentValue));
      console.log(`Speed updated to: ${speed}`);
    }
  });
  
  function handleSpeedInput(currentValue) {
    // Calculate 'speed' based on the input value of 'speedEl'
    speed = 300 / currentValue;
  
    // You can use the 'speed' value here or perform any other actions as needed.
    console.log(`Speed updated to: ${speed}`);
  }


speedEl.addEventListener('input', (e) => {
    speed = 300/ e.target.value
    console.log(`${speed}`);
})
