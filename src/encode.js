import React from 'react';
import { Button, /*TextField*/ } from '@material-ui/core';
//import ReactDOM from 'react-dom';

class Encode extends React.Component {
    render() {
        return (
            <div>
                <label>Decoded text:</label>
                {/* <TextField
                    id="filled-multiline-static"
                    label="Encoded Text"
                    multiline
                    rows={4}
                    defaultValue="Default Value"
                    variant="filled"
                />
                <br />
                <br /> */}
                <textarea 
                id="encodedText" 
                onChange={this.props.onChange}
                value={this.props.textContent}
                ></textarea>
                <Button 
                color="primary" 
                variant="contained"
                onClick={this.props.onClick}>Encode</Button>
            </div>
        );
    }

}

export default Encode