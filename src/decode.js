import React from 'react';
import { Button, TextField, Grid } from '@material-ui/core';
import './index.css';
//import ReactDOM from 'react-dom';

class Decode extends React.Component {
    render() {
        return (
            <div>
                <Grid
                    container
                    id="decodeGrid"
                    className="cipherGrid"
                    direction="column"
                    justify="flex-start"
                    alignItems="flex-start" >

                    <TextField
                        id="encodedText"
                        className="inputField"
                        label="Encoded Text:"
                        multiline
                        rows={6}
                        variant="outlined"
                        onChange={this.props.onChange}
                        value={this.props.textContent}
                    />

                    <Button
                        color="primary"
                        id="decodeButton"
                        className="cipherButton"
                        variant="contained"
                        onClick={this.props.onClick}>Decode
                    </Button>

                </Grid>
            </div>
        );
    }

}

export default Decode