let input_element = document.getElementById('pass')
let show_icon = document.getElementById('Layer_1')
let hide_icon = document.getElementById('Layer_2')

function passwordToggle() {
    if (input_element.type === "password") {
        input_element.type = 'text'
        show_icon.style.display = 'inline'
        hide_icon.style.display = 'none'
    } else {
        input_element.type = 'password'
        show_icon.style.display = 'none'
        hide_icon.style.display = 'inline'
    }
}