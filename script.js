let display = document.getElementById('display')
let buttons = document.querySelectorAll('.buttons')
let bs = document.querySelector('.bs')
let buttonsArray = [...buttons]

buttonsArray.forEach(button => {
	button.addEventListener('click', (event) => {
		let key = event.target.innerText
		if(key === '←'){
			display.innerText = display.innerText.slice(0 , -1)
		} else if (key === 'C') {
			display.innerText =''
		} else if (display.innerText && key === "=") {
			display.innerText = performTask(display.innerText)
		} 
		else if (!display.innerText && key === "=") {
				display.innerText =''
			}	
		else {
			display.innerText += key
		}
	})
}
)

function performTask(equation){
	let result = eval(equation)
	if(result && !'Error'){
		return result
	} else {
		return 'Error'
	} 
}
