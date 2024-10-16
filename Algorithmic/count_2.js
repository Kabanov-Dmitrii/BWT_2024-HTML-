function verify() {
    console.log("a, b, c, d")
    let a = parseInt(elementA.value);
    let b = parseInt(elementB.value);
    let c = parseInt(elementC.value);
    let d = parseInt(elementD.value);
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
        document.getElementById("result").innerText = messageText + result;
        document.getElementsByName('result')[0].value = result;
        check = true;
    } else {
        result = "Не возможно поместить прямоугольник"
        document.getElementById("result").innerText = messageText + result;
        document.getElementsByName('result')[0].value = result;
        check = false;
    }
}

function send() {
    if (check) {
        let textCondition = document.getElementsByTagName('p')[0].innerText
        document.getElementsByName('formulation')[0].value = textCondition;
        document.getElementsByName('result')[0].value = result;
        document.getElementById("UserEnter").submit();
    } else {
        alert("Error! Прямоугольник не помещается, повторите ввод данных")
    }
}

function verify_send() {
    verify();
    send();
}

let messageText = document.getElementById("result").innerText
console.log(messageText)
let result;
let check = false;

const elementA = document.getElementById("a");
elementA.addEventListener('input', verify);

const elementB = document.getElementById("b");
elementB.addEventListener('input', verify);

const elementC = document.getElementById("c");
elementC.addEventListener('input', verify);

const elementD = document.getElementById("d");
elementA.addEventListener('input', verify);

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send)
