function verify() {
    console.log("a, b, c, d")
    let a = parseInt(elementA.innerText);
    let b = parseInt(elementB.innerText);
    let c = parseInt(elementC.innerText);
    let d = parseInt(elementD.innerText);
    console.log(a, b, c, d)

    let low, high
    if (c < d) {
        low = c;
        high = d;
    }
    else {
        low = d;
        high = c;
    }

    if (((a <= high) && (b <= low)) || ((a <= low) && (b <= high))) {
        result = "Можно поместить прямоугольник"
        document.getElementById("result").innerText = result;
    } else {
        result = "Не возможно поместить прямоугольник"
        document.getElementById("result").innerText = result;
    }
}

const elementA = document.getElementById("a");
const elementB = document.getElementById("b");
const elementC = document.getElementById("c");
const elementD = document.getElementById("d");

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);
