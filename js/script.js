let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == "=") {
            string = eval(string)
            document.querySelector('.val-input').value = string;
        }
        else if (e.target.innerHTML == "C") {
            string = "";
            document.querySelector('.val-input').value = string;
        }
        else if (e.target.innerHTML == "Del") {
            string = string.slice(0, -1);
            document.querySelector('.val-input').value = string;
        }
        else {
            string = string + e.target.innerHTML;
            document.querySelector('.val-input').value = string;
        }
    })
})

// Rnadom Color Generator

const getColor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    document.querySelector('.clr-gen').style.backgroundColor = randomCode;
    document.querySelector('.color-code').innerText = randomCode;
    navigator.clipboard.writeText(randomCode)
}
document.getElementById("btn").addEventListener("click", getColor)

getColor();
