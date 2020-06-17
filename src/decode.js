import React from 'react';
import { Button, TextField } from '@material-ui/core';
//import ReactDOM from 'react-dom';

class Decode extends React.Component {
    render() {
        return(
            <div>
                <TextField
                    id="filled-multiline-static"
                    label="Encoded Text:"
                    multiline
                    rows={4}
                    variant="filled"
                    onChange={this.props.onChange}
                    value={this.props.textContent}
                />
                {/*<label>Encoded text:</label>
                <textarea 
                id="decodedText" 
                onChange={this.props.onChange}
                value={this.props.textContent}
                ></textarea> */}
                <Button 
                color="secondary" 
                variant="contained"
                onClick={this.props.onClick}>Decode</Button>
            </div>
        );
    }

}

export default Decode