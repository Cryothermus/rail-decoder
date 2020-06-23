import React from 'react';
//import ReactDOM from 'react-dom';
import { FaKey } from "react-icons/fa";
import { Checkbox, FormControlLabel, TextField, Grid } from '@material-ui/core';

class KeyInput extends React.Component {

    KeyBox(props) {
        if (props.ordered) {
            return (
                <div>
                    <FormControlLabel
                        control={
                            <TextField
                                variant="standard"
                                error={props.errorMessage.length !== 0}
                                helperText={props.errorMessage}
                                id="orderedKeyInput"
                                onBlur={props.orderedBlur}
                                size="small"
                            />
                        }
                        label="Ordered Key:"
                        labelPlacement="start"
                    />
                    {/*<label><FaKey /> Ordered Key: </label>
                    <input
                        type="text"
                        id="orderedKeyInput"
                    onBlur={props.orderedBlur}></input>*/}
                </div>
            );
        }
        else {
            return (
                <div>
                    <FormControlLabel
                        control={
                            <TextField
                                variant="standard"
                                error={props.errorMessage.length !== 0}
                                helperText={props.errorMessage}
                                id="basicKeyInput"
                                onBlur={props.keyBlur}
                                size="small"
                            />
                        }
                        label="Key:"
                        labelPlacement="start"
                    />

                    {/*<label><FaKey /> Key: </label>
                    <input
                        type="text"
                        id="basicKeyInput"
                        onBlur={props.keyBlur}
                    ></input>*/}
                </div>
            )
        }
    }


    render() {
        return (
            <div>
                <FormControlLabel
                    control={
                        <Checkbox
                            id="order=toggle=checkbox"
                            color="primary"
                            onClick={this.props.onCheck}
                        />
                    }
                    label="Use Ordered Key:"
                    labelPlacement="start"
                />

                {/*<label>Use Ordered Key: </label>
                <input type='checkbox' onClick={() => {this.props.onCheck()}}></input>*/}
                <this.KeyBox
                    ordered={this.props.ordered}
                    keyBlur={this.props.keyBlur}
                    orderedBlur={this.props.orderedBlur}
                    errorMessage={this.props.errorMessage}></this.KeyBox>
            </div>
        );
    }
}

export default KeyInput