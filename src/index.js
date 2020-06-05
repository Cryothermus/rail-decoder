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

    onEncodeChange(event) {
        this.setState({encodeContent: event.target.value});
    }

    onDecodeChange(event) {
        this.setState({decodeContent: event.target.value});
    }

    onKeyBlur(event) {
        console.log("Key input read.");
        this.setState({intKey: parseInt(event.target.value)});

    }

    onOrderedBlur(event) {
        console.log("Ordered input read.");
        var inputText = event.target.value;
        var scannedInts = inputText.match(/\d+/g); //i only vaguely understand how this method works
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