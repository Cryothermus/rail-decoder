import React from 'react';
//import ReactDOM from 'react-dom';

class KeyInput extends React.Component {
    render() {
        return(
            <div>
                <label>Basic Key</label>
                <input type="radio" id="BasicKey" name="keyType"></input>
                <label>Ordered Key</label>
                <input type="radio" id="OrderedKey" name="keyType"></input>
                <label>Key: </label>
                <input type="text"></input>
            </div>
        );
    }
}

export default KeyInput