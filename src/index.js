import React from 'react';
import ReactDOM from 'react-dom';
import Encode from './encode.js';
import KeyInput from './keyInput.js';
import Decode from './decode.js';
import Options from './options.js';
import './index.css';


import { Grid } from '@material-ui/core'

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
            excludeSpaces: false,
            excludeSymbols: false,
            doCaps: false,
        }

        this.onDecodeChange = this.onDecodeChange.bind(this);
        this.onEncodeChange = this.onEncodeChange.bind(this);
        this.onKeyBlur = this.onKeyBlur.bind(this);
        this.onOrderedBlur = this.onOrderedBlur.bind(this);
        this.encodeInput = this.encodeInput.bind(this);
        this.decodeInput = this.decodeInput.bind(this);
        this.applyOptions = this.applyOptions.bind(this);
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
        this.setState({ keyErrorLabel: message });
        setTimeout(() => { this.setState({ keyErrorLabel: "" }) }, seconds * 1000);
    }

    applyOptions(text) {
        if (this.state.excludeSpaces) {
            text = text.replace(/\s/, '');
        }

        if (this.state.excludeSymbols) {
            text = text.replace(/[$-/:-?{-~!"^_`[\]]/,'')
        }

        if (this.state.doCaps) {
            text = text.toUpperCase();
        }

        return text;
    }

    checkKeyInput(length, key) {
        if (length === 0 || !length) {
            this.doKeyError("Invalid key", 3)
            return false;
        }
        else if (this.state.isOrdered !== this.isValidOrder(key)) {
            this.doKeyError("Invalid key order", 3)
            return false;
        }
        return true;
    }

    encodeCipher(text, key) {
        var isOrderedKey = this.isValidOrder(key);
        var railNum = isOrderedKey ? key.length : key;
        if (!this.checkKeyInput(railNum, key)) return;

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
        console.log(textRails);
        var result;
        if (!isOrderedKey) result = textRails.join("");
        else result = key.map(function (element) { return textRails[element] }).join("");

        return this.applyOptions(result);
    }

    decodeCipher(text, key) {
        //some basic setup (key type, creates rail length array)
        var isOrderedKey = this.isValidOrder(key);
        var keyLength = isOrderedKey ? key.length : key;
        if (!this.checkKeyInput(keyLength, key)) return;

        //console.log(railLengths);
        var railLengths = new Array(keyLength);
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
        console.log(railLengths);

        // if the key is ordered, arrange the rail lengths into the correct order
        if (isOrderedKey) {
            railLengths = key.map(function (element) { return railLengths[element] });
        }
        console.log(railLengths);

        //cuts the ciphertext into appropriate rails
        var textRails = railLengths.map(function (element) {
            var cutText = text.slice(0, element);
            text = text.slice(element, text.length);
            return cutText;
        })
        console.log(textRails);

       if (isOrderedKey) { //gets the rails back in proper order ** TODO: DOESN'T WORK, FIX THIS**
            var holdRails = [];
            for (i = 0; i < textRails.length; i++) {
                holdRails.push(textRails[key.indexOf(i)]);
            }
            textRails = holdRails;
        }
        console.log(textRails);

        //creates the decoded string from the rail contents
        var finalString = "";
        railPos = 0;
        movingDown = false;
        while (textRails[railPos] !== "") {
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

        return this.applyOptions(finalString);
    }

    encodeInput(event) { //handles clicking of "encode"
        console.log("Encoding text");
        var key = this.state.isOrdered ? this.state.orderKey : this.state.intKey;
        var encodedText = this.encodeCipher(this.state.encodeContent, key);
        console.log(encodedText);
        this.setState({ decodeContent: encodedText });

    }

    decodeInput(event) { //handles clicking of "decode"
        console.log("Decoding text");
        var key = this.state.isOrdered ? this.state.orderKey : this.state.intKey;
        var decodedText = this.decodeCipher(this.state.decodeContent, key);
        this.setState({ encodeContent: decodedText });
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
        if (scannedInts) this.setState({ orderKey: scannedInts.map(Number) });
    }



    render() {
        return (
            <div>
                <KeyInput
                    onCheck={() => this.setState({ isOrdered: !(this.state.isOrdered) })}
                    ordered={this.state.isOrdered}
                    keyBlur={this.onKeyBlur}
                    orderedBlur={this.onOrderedBlur}
                    errorMessage={this.state.keyErrorLabel}
                    id="keyInput"
                    ></KeyInput>
                <br/>
                <Grid
                container
                direction="row"
                id="cipherRow"
                justify="flex-start"
                alignItems="center">
                    <Encode
                        onChange={this.onEncodeChange}
                        onClick={this.encodeInput}
                        textContent={this.state.encodeContent}
                    ></Encode>
                    <Decode
                        onChange={this.onDecodeChange}
                        onClick={this.decodeInput}
                        textContent={this.state.decodeContent}
                    ></Decode>
                </Grid>
                <br/>
                <Options
                onClickSpaces={() => this.setState({excludeSpaces: !(this.state.excludeSpaces)})}
                onClickSymbols={() => this.setState({excludeSymbols: !(this.state.excludeSymbols)})}
                onClickCaps={() => this.setState({doCaps: !(this.state.doCaps)})}
                />
            </div>
        );
    }

}

ReactDOM.render(
    <Decoder />,
    document.getElementById('root')
);