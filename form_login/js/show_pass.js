let input_element = document.getElementById("pass")
let show_password = document.getElementById("Layer_1")
let hide_password = document.getElementById("Layer_2")

function togglePass() {
    if (input_element.type === "password") {
        input_element.type = 'text'
        show_password.style.display = 'inline'
        hide_password.style.display = 'none'
    } else {
        input_element.type = 'password'
        show_password.style.display = 'none'
        hide_password.style.display = 'inline'
    }
}
