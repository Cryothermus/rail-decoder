import React from 'react';
import { Checkbox, FormControlLabel, Grid } from '@material-ui/core';

class Options extends React.Component {

    render() {
        return (
            <div>
                <Grid
                    container
                    direction="column"
                    justify="flex-start"
                >
                    <FormControlLabel
                        control={
                            <Checkbox
                                color="primary"
                            ></Checkbox>
                        }
                        label="Exclude Spaces"
                        labelPlacement="end"
                    >
                    </FormControlLabel>
                    <FormControlLabel
                        control={
                            <Checkbox
                                color="primary"
                            ></Checkbox>
                        }
                        label="Exclude Symbols"
                        labelPlacement="end"
                    >
                    </FormControlLabel>
                </Grid>
            </div>
        )
    }



}

export default Options