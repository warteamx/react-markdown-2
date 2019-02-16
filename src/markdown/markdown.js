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

That's it.  Pretty simple.  There's also a drop-down option in the upper right to switch between various views:

- **Preview:**  A live display of the generated HTML as it would render in a browser.
`
    const [textvalue, setTextvalue] = useState(textpreview);


    useEffect(() => {
        document.getElementById('preview').innerHTML = marked(textvalue.toString());
    });

    return (

        <React.Fragment>
            <div> Markdown previewer</div>

            <div id="editor">
                <textarea value={textvalue} onChange={e => setTextvalue(e.target.value)} >
                </textarea>
            </div>

            <div id="preview">
            </div>
        </React.Fragment>

    );
}

export default Markdown;
