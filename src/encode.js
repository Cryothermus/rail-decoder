import React from 'react';
import { Button, TextField, Grid } from '@material-ui/core';

//import ReactDOM from 'react-dom';

class Encode extends React.Component {
    render() {
        return (
            <div>
                <Grid
                    container
                    id="encodeGrid"
                    className="cipherGrid"
                    direction="column"
                    justify="flex-start"
                    alignItems="flex-start" >

                    <TextField
                        id="decodedText"
                        className="inputField"
                        label="Decoded Text:"
                        multiline
                        rows={6}
                        variant="outlined"
                        onChange={this.props.onChange}
                        value={this.props.textContent}
                    />
                    
                    <Button
                        color="secondary"
                        id="encodeButton"
                        className="cipherButton"
                        variant="contained"
                        onClick={this.props.onClick}>Encode</Button>
                </Grid>
            </div>
        );
    }

}

export default Encode