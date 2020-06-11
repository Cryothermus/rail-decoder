import React from 'react';
import { Button } from '@material-ui/core';
//import ReactDOM from 'react-dom';

class Decode extends React.Component {
    render() {
        return(
            <div>
                <label>Decoded text:</label>
                <textarea id="decodedText" onChange={this.props.onChange}></textarea>
                <Button color="secondary" variant="contained">Decode</Button>
            </div>
        );
    }

}

export default Decode