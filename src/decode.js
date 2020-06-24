import React from 'react';
import { Button, TextField, Grid } from '@material-ui/core';
//import ReactDOM from 'react-dom';

class Decode extends React.Component {
    render() {
        return (
            <div>
                <Grid
                    container
                    class="decodeGrid"
                    direction="column"
                    spacing={13}
                    justify="flex-start"
                    alignItems="flex-start" >

                    <TextField
                        id="encodedText"
                        label="Encoded Text:"
                        multiline
                        rows={6}
                        variant="outlined"
                        onChange={this.props.onChange}
                        value={this.props.textContent}
                    />
                    <br/>
                    <Button
                        color="primary"
                        id="decodeButton"
                        variant="contained"
                        onClick={this.props.onClick}>Decode
                    </Button>

                </Grid>
            </div>
        );
    }

}

export default Decode