let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");
let operations = ['+', '-', '*', '/', '.', '%'];

display.focus();


buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    let value = e.target.innerText;

    if (value === '=') {
      try {
        
        if (display.value !== '' && !operations.includes(display.value.slice(-1))) {
          let result = eval(display.value);
          if (result !== undefined && !isNaN(result)) {
            display.value = result;
          }
        }
      } catch {
        
      }
    }

    else if (value === 'AC') {
      display.value = '';
    }

    else if (value === 'DEL') {
      display.value = display.value.slice(0, -1);
    }

    else if (operations.includes(value)) {
      if (display.value === '' && value !== '-') return;

      if (operations.includes(display.value.slice(-1))) {
        display.value = display.value.slice(0, -1) + value;
      } else {
        display.value += value;
      }
    }

    else {
      display.value += value;
    }
  });
});
