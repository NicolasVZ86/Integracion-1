console.log(window.location.pathname)
if (window.location.pathname == "/Frontend/html/carrito.html") {
    
    console.log(localStorage.getItem('token'))
    if (localStorage.getItem('token') === null) {
        window.location.href = "/login.html"
    }
} else if (window.location.pathname == "/login.html") {}