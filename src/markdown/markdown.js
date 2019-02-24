import React, { useState, useEffect } from 'react';
import './markdown.css';
import marked from './../../node_modules/marked';


function Markdown() {
    let textpreview = `
Marked - Markdown Parser
========================
[Marked] lets you convert [Markdown] into HTML. 
How To Use The Demo
-------------------
1. Type in stuff on the left.
2. See the live updates on the right.
That's it.  Pretty simple. 
`
    const [textvalue, setTextvalue] = useState(textpreview);


    useEffect(() => {
        document.getElementById('preview').innerHTML = marked(textvalue.toString());
    });


    return (

        <React.Fragment>
            <div className="container-fluid">


                <h1> Markdown previewer</h1>
<p> FCC project <a href="https://learn.freecodecamp.org/front-end-libraries/front-end-libraries-projects/build-a-markdown-previewer"> User story</a> </p>
                

                <div className="row">
                    <div className="col-md-6">
                        <textarea id="editor" value={textvalue} onChange={e => setTextvalue(e.target.value)} >
                        </textarea>
                    </div>

                    <div className="col-md-6" id="preview">
                    </div>
                </div>
            </div>
        </React.Fragment>

    );
}

export default Markdown;
