params = new URLSearchParams(window.location.search);

function load_loc() {
    if (localStorage.getItem("loc") != null) {
        return
    }

    if (params.has("loc")) {
        loc = params.get("loc");

        if (loc != "tx" && loc != "wv") {
            alert("Invalid Url parameters! Verify that you have recieved the correct link!")
            return
        }

        localStorage.setItem("loc",loc);
    }else {
        alert("Url parameters missing! Verify that you have recieved the correct link!")
    }
}

load_loc()