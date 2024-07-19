function GetCookieValue(cookieName) {
    
    let cookies = document.cookie;
    let cookieArray = cookies.split("; ");
    
        for (let i = 0; i < cookieArray.length; i++) {
            let cookie = cookieArray[i];
            let [name, value] = cookie.split("=");
        
            if (name === cookieName) {
                return decodeURIComponent(value);
            }
        }
        
        return null;
}

function DisplayProductByCookies() {
    document.getElementById("productImage").src = GetCookieValue("productImg");
    document.getElementById("productTitle").innerHTML = GetCookieValue("productTitle");
    document.getElementById("productPrice").innerHTML = GetCookieValue("productPrice");
}