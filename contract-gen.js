function iso8601(d) {
    return d.toISOString().substring(0, 10);
}

for (let el of document.getElementsByClassName("curday")) {
    el.innerText = iso8601(new Date());
}


function regen() {
    for (let el of document.querySelectorAll("#print *")) {
        let target = document.getElementById(el.getAttribute("--t"));
        if (target) {
            if (target.type == "checkbox" || target.type == "radio") {
                el.style.display = target.checked ? "" : "none";
            }
            if (target.type == "text" || target.type == "number") {
                el.innerHTML = target.value;
            }
        }
    }
}


for (let el of document.getElementsByTagName("input")) {
    el.onchange = () => {
        regen();
    };
    el.onclick = () => {
        regen();
    };
    el.oninput = () => {
        regen();
    };
}

regen();