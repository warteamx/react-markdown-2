import React from 'react';
import './drum.css'


function Drum() {

    // const [keyCode, setOnKey] = useState("");


    const PAD = {
        0: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
        1: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
        2: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
        3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
        4: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
        5: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
        6: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
        7: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
        8: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',

    };
    let data = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

const drumData = {
    letters: ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"],
    padSource: {
        0: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
        1: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
        2: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
        3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
        4: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
        5: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
        6: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
        7: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
        8: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',

    },
    names: ["heater-1","heater-2","heater-3","heater-4","heater-6","Dsc-oh","Kick-n-hat","Kick-1","Cev-h2"]

}



    function handleClick(e) {
        let idValue = e.target.id;
        let idString = idValue.toString();
        let element = document.getElementById(idString);
        let c = element.children
        document.getElementById("display").innerHTML = idString;

        c[0].play();
    };


    function handleKey2(e) {
        // console.log(e.keyCode);
        // console.log(e.key);
        let idValue = e.key.toUpperCase();
        // console.log(idValue);
        switch (idValue) {
            case "Q":
                let q = document.getElementById("1").children;
                q[0].play();
                break;
                case "W":
                let w = document.getElementById("2").children;
                w[0].play();
                break;
                case "E":
                let e = document.getElementById("3").children;
                e[0].play();
                break;
                case "A":
                let a = document.getElementById("4").children;
                a[0].play();
                break;
                case "S":
                let s = document.getElementById("5").children;
                s[0].play();
                break;
                case "D":
                let d = document.getElementById("6").children;
                d[0].play();
                break;
                case "Z":
                let z = document.getElementById("7").children;
                z[0].play();
                break;
                case "X":
                let x= document.getElementById("8").children;
                x[0].play();
                break;

            default:
                console.log("key dont have sound")
        }
    }



    function handleKey(e) {
console.log(e.key);
let keyPress = e.key.toUpperCase();
let sound = document.getElementById(keyPress);
let parent = sound.parentElement.id;
 document.getElementById("display").innerHTML = parent;
sound.play();
    }

   function handleSwitch(e) {
document.getElementsByClassName("drum-pad").click();
   }


    let list = drumData.letters.map((obj, id) => {
        return <div key={"key" + id} className="drum-pad" id={drumData.names[id]} onClick={handleClick} onKeyDown={handleKey} tabIndex="0" >{obj}
            <audio src={drumData.padSource[id]} key={"" + id} className="clip" id={data[id]} >
            </audio>
        </div>
    });


    return <div id="drum-machine">
    <button >On and off</button>
    <div> {list} </div>
    <div id="display"> </div>
    
    </div>

}

export default Drum;

