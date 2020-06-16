import React from 'react';
import { Button } from '@material-ui/core';
//import ReactDOM from 'react-dom';

class Decode extends React.Component {
    render() {
        return(
            <div>
                <label>Encoded text:</label>
                <textarea 
                id="decodedText" 
                onChange={this.props.onChange}
                value={this.props.textContent}
                ></textarea>
                <Button 
                color="secondary" 
                variant="contained"
                onClick={this.props.onClick}>Decode</Button>
            </div>
        );
    }

}

export default Decode