import React from 'react';
import { Button, /*TextField*/ } from '@material-ui/core';
//import ReactDOM from 'react-dom';

class Encode extends React.Component {
    render() {
        return (
            <div>
                <label>Encoded text:</label>
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
                <textarea id="encodedText" onChange={this.props.onChange}></textarea>
                <Button color="primary" variant="contained">Encode</Button>
            </div>
        );
    }

}

export default Encode