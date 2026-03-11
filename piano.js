let keyArray = [];
let synth = null;
const app = document.getElementById("app");
class KeyNote {
    constructor(note) {
        this.note = note;
        this.key = noteObj[note];
        const newEle = document.createElement("span");
        newEle.innerText = noteObj[note];
        // if (keyArray.length % 7 == 6) {
        //     newEle.innerText += `..`;
        // }
        newEle.classList.add("key");
        this.htmlElement = newEle;
        keyArray.push(this);
        this.add();
    }
    add() {
        app.appendChild(this.htmlElement);
    }
    remove() {
        this.htmlElement.remove();
    }
}
const noteObj = {
    "C4": "a",
    "D4": "s",
    "E4": "d",
    "F4": "f",
    "G4": "g",
    "A4": "h",
    "B4": "j",
    "C5": "k"
}
const keyObj = {
    "a": "C4",
    "s": "D4",
    "d": "E4",
    "f": "F4",
    "g": "G4",
    "h": "A4",
    "j": "B4",
    "k": "C5"
}
function keyDown(e) {
    if (e.key == "q") {
        synth = new Tone.PolySynth(Tone.Synth).toDestination();
        start();
    } else if (keyArray[0]) {
        synth.triggerAttack(keyObj[e.key]);
        if (keyArray[0].key == e.key) {
            keyArray[0].remove();
            keyArray.shift();
        }
    }
}
function keyRelease(e) {
    synth.triggerRelease(keyObj[e.key]);
}
document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyRelease);