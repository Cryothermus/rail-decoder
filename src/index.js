import React from 'react';
import ReactDOM from 'react-dom';
import Encode from './encode.js';
import KeyInput from './keyInput.js';
import Decode from './decode.js';

class Decoder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            intKey: 0,
            orderKey: [],
            encodeContent: '',
            decodeContent: '',
            isOrdered: false,
        }

        this.onDecodeChange = this.onDecodeChange.bind(this);
        this.onEncodeChange = this.onEncodeChange.bind(this);
        this.onKeyBlur = this.onKeyBlur.bind(this);
        this.onOrderedBlur = this.onOrderedBlur.bind(this);
    }

    isValidOrder(arrayKey) {
        for (var i = 0; i < arrayKey.length; i++) {
            if (arrayKey[i] > arrayKey.length) return false;
            for (var j = 0; j < i; j++) {
                if (arrayKey[j] === arrayKey[i]) return false;
            }
        }
        return true;
    }

    encodeCipher(text, railNum) {
        var textRails = new Array(railNum);
        for(var i = 0; i < textRails.length; i++) {
            textRails[i] = "";
        }

        var railPos = 0;
        var movingDown = false; //"moving down" increments the number
        
        for (i = 0; i < text.length; i++) {
            //adds the character to the rail
            textRails[railPos] = textRails[railPos].concat(text.charAt(i));
            if (railPos === railNum - 1) {
                movingDown = false;
            }
            else if (railPos === 0) {
                movingDown = true;
            }

            if (movingDown) railPos++;
            else railPos--;

            
        }
        return textRails;
    }
        
    

    onEncodeChange(event) {
        this.setState({encodeContent: event.target.value});
    }

    onDecodeChange(event) {
        this.setState({decodeContent: event.target.value});
    }

    onKeyBlur(event) {
        console.log("Key input read.");
        //console.log(this.encodeCipher("attackatdawn", 3))
        this.setState({intKey: parseInt(event.target.value)});

    }

    onOrderedBlur(event) {
        console.log("Ordered input read.");
        var inputText = event.target.value;
        var scannedInts = inputText.match(/\d+/g); //i only vaguely understand how match() works
        this.setState({orderKey: scannedInts.map(Number)});
    }



    render() {
        return(
            <div>
                <KeyInput 
                onCheck={() => this.setState({isOrdered: !(this.state.isOrdered)})}
                ordered={this.state.isOrdered}
                keyBlur={this.onKeyBlur}
                orderedBlur={this.onOrderedBlur}></KeyInput>
                <Encode onChange={this.onEncodeChange}></Encode>
                <Decode onChange={this.onDecodeChange}></Decode>
            </div>
        );
    }

}

ReactDOM.render(
    <Decoder/>,
    document.getElementById('root')
);