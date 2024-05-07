function show_password() {
    let show = document.getElementById('my_password')
    if(show.type === "password")
    {
        show.type = "text"
    }
    else
    {
        show.type = "password"
    }
}