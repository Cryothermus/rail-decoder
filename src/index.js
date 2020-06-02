import React from 'react';
import ReactDOM from 'react-dom';
import Encode from './encode.js';
import KeyInput from './keyInput.js';
import Decode from './decode.js';

class Decoder extends React.Component {
    render() {
        return(
            <div>
                <KeyInput></KeyInput>
                <Encode></Encode>
                <Decode></Decode>
            </div>
        );
    }

}

ReactDOM.render(
    <Decoder/>,
    document.getElementById('root')
);