import React from 'react';
import ReactDOM from 'react-dom';
import Encode from './encode.js';
import KeyInput from './keyInput.js';
import Decode from './decode.js';

/*import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';*/

class Decoder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            intKey: 0,
            orderKey: [],
            encodeContent: '',
            decodeContent: '',
            isOrdered: false,
            keyErrorLabel: "",
        }

        this.onDecodeChange = this.onDecodeChange.bind(this);
        this.onEncodeChange = this.onEncodeChange.bind(this);
        this.onKeyBlur = this.onKeyBlur.bind(this);
        this.onOrderedBlur = this.onOrderedBlur.bind(this);
        this.encodeInput = this.encodeInput.bind(this);
        this.decodeInput = this.decodeInput.bind(this);
    }

    isValidOrder(arrayKey) {
        if (!Array.isArray(arrayKey)) return false;
        for (var i = 0; i < arrayKey.length; i++) {
            if (arrayKey[i] > arrayKey.length) return false;
            for (var j = 0; j < i; j++) {
                if (arrayKey[j] === arrayKey[i]) return false;
            }
        }
        return true;
    }

    doKeyError(message, seconds) {
        this.setState({keyErrorLabel: message});
        setTimeout(() => {this.setState({keyErrorLabel: ""})}, seconds * 1000);
    }

    encodeCipher(text, key) {
        var isOrderedKey = this.isValidOrder(key);
        var railNum = isOrderedKey ? key.length : key;
        if (railNum === 0 || railNum === null) {
            this.doKeyError("Invalid key", 3);
            return;
        }

        var textRails = new Array(railNum);
        for (var i = 0; i < textRails.length; i++) {
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
        if (!isOrderedKey) return textRails.join("");
        else return key.map(function(element) {return textRails[element]}).join("");
    }

    decodeCipher(text, key) {
        //some basic setup (key type, creates rail length array)
        var isOrderedKey = this.isValidOrder(key);
        var keyLength = isOrderedKey ? key.length : key;
        if (keyLength === 0 || keyLength === null) {
            this.doKeyError("Invalid key", 3);
            return;
        }
        var railLengths = new Array(keyLength);
        //console.log(railLengths);
        railLengths.fill(0);
        //console.log(railLengths);

        //simulates the rail-creation process to determine the length of each rail
        var railPos = 0;
        var movingDown = false;
        for (var i = 0; i < text.length; i++) {
            railLengths[railPos]++;

            if (railPos === railLengths.length - 1) {
                movingDown = false;
            }
            else if (railPos === 0) {
                movingDown = true;
            }

            if (movingDown) railPos++;
            else railPos--;
            //console.log(railLengths);
        }

        // if the key is ordered, arrange the rail lengths into the correct order
        if (isOrderedKey) {
        railLengths = key.map(function(element) {return railLengths[element]});
        }

        //cuts the ciphertext into appropriate rails
        var textRails = railLengths.map(function(element) {
            var cutText = text.slice(0, element);
            text = text.slice(element, text.length);
            return cutText;
        })
        console.log(textRails);

        if (isOrderedKey) { //gets the rails back in proper order
            textRails = key.map(function(element) {return textRails[element]});
        }

        //creates the decoded string from the rail contents
        var finalString = "";
        railPos = 0;
        movingDown = false;
        while(textRails[railPos] !== "") {
            //slices off the first chracter of the chosen text rail, adding it to the list
            finalString = finalString.concat(textRails[railPos].charAt(0));
            textRails[railPos] = textRails[railPos].slice(1, textRails[railPos].length);

            if (railPos === textRails.length - 1) {
                movingDown = false;
            }
            else if (railPos === 0) {
                movingDown = true;
            }

            if (movingDown) railPos++;
            else railPos--;

        }

        return finalString;
    }

    encodeInput(event) { //handles clicking of "encode"
        console.log("Encoding text");
        var key = this.state.isOrdered? this.state.orderKey : this.state.intKey;
        var encodedText = this.encodeCipher(this.state.encodeContent, key);
        console.log(encodedText);
        this.setState({decodeContent: encodedText});

    }

    decodeInput(event) { //handles clicking of "decode"
        console.log("Decoding text");
        var key = this.state.isOrdered ? this.state.orderKey : this.state.intKey;
        var decodedText = this.decodeCipher(this.state.decodeContent, key);
        this.setState({encodeContent: decodedText});
    }



    onEncodeChange(event) {
        this.setState({ encodeContent: event.target.value });
    }

    onDecodeChange(event) {
        this.setState({ decodeContent: event.target.value });
    }

    onKeyBlur(event) {
        console.log("Key input read.");
        this.setState({ intKey: parseInt(event.target.value) });

    }

    onOrderedBlur(event) {
        console.log("Ordered input read.");
        var inputText = event.target.value;
        console.log(inputText);
        var scannedInts = inputText.match(/\d+/g); //i only vaguely understand how match() works
        this.setState({ orderKey: scannedInts.map(Number) });
    }



    render() {
        return (
            <div>
                <KeyInput
                    onCheck={() => this.setState({ isOrdered: !(this.state.isOrdered) })}
                    ordered={this.state.isOrdered}
                    keyBlur={this.onKeyBlur}
                    orderedBlur={this.onOrderedBlur}
                    errorMessage={this.state.keyErrorLabel}>
                    </KeyInput>
                    <div/>
               
                <Decode 
                    onChange={this.onDecodeChange}
                    onClick={this.decodeInput}
                    textContent={this.state.decodeContent}
                ></Decode>
                <Encode 
                    onChange={this.onEncodeChange}
                    onClick={this.encodeInput}
                    textContent={this.state.encodeContent}
                ></Encode>
            </div>
        );
    }

}

ReactDOM.render(
    <Decoder />,
    document.getElementById('root')
);