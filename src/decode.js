import React from 'react';
import ReactDOM from 'react-dom';

class Decode extends React.Component {
    render() {
        return(
            <div>
                <label>Decoded text:</label>
                <textarea id="decodedText"></textarea>
                <input type="button" value="Decode"></input>
            </div>
        );
    }

}

export default Decode