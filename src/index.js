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
    }

    onEncodeChange(event) {
        this.setState({encodeContent: event.target.value})
    }

    onDecodeChange(event) {
        this.setState({decodeContent: event.target.value})
    }

    render() {
        return(
            <div>
                <KeyInput onCheck={(status) => this.setState({isOrdered: status})}></KeyInput>
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