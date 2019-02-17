import React from 'react';
import './drum.css'

function Drum() {
    const PAD = {
        Q: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
        W: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
        E: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
        A: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
        S: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
        D: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
        Z: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
        X: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
        C: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',

    };

    // const [idvalue, setIdvalue] = useState('Q');

    // useEffect(() => {
    //     document.getElementById('preview').innerHTML = idvalue.toString();
    // }); 


function handleClick(e) {
    e.preventDefault();
    let sound= document.getElementById('Q');
    sound.play();
    alert(e.id);

}
// function handleOnKeyPress(e) {
//     e.preventDefault();
//     let char = e.which || e.keyCode;
//     document.getElementById("preview").innerHTML = "Unicode CHARACTER code: " + char;

// }

function handleOnKeyDown(event) {
    // event.preventDefault();
    let key = event.keyCode;
    document.getElementById("preview").innerHTML = "Unicode KEY code: " + key;
    let sound= document.getElementById('Q');
    sound.play();

}
    return (
        <div id="drum-machine">
            <h1> React Drum Proyect </h1>
            <div id="display">

                <div className="drumpad"  onClick={handleClick} onKeyDown={handleOnKeyDown} tabIndex="0" >Q
  <audio className="clip" id="Q" >
                        <source src={PAD.Q}></source>
                    </audio>
                </div>

                                <div className="drumpad"  onClick={handleClick} onKeyDown={handleOnKeyDown} tabIndex="0" >W
  <audio className="clip" id="W" >
                        <source src={PAD.W}></source>
                    </audio>
                </div>

                <div className="drumpad" id="w-audio">W</div>
                <div className="drumpad" id="e-audio">E</div>
                <div className="drumpad" id="a-audio">A</div>
                <div className="drumpad" id="s-audio">S</div>
                <div className="drumpad" id="d-audio">D</div>
                <div className="drumpad" id="z-audio">Z</div>
                <div className="drumpad" id="x-audio">X</div>
                <div className="drumpad" id="c-audio">C</div>


            </div>

            <div id="preview">
            </div>
        </div>


    );

}

export default Drum;

