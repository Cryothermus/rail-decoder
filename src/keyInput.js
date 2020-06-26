import React from 'react';
//import ReactDOM from 'react-dom';
//import { FaKey } from "react-icons/fa";
import { Checkbox, FormControlLabel, TextField, IconButton, Tooltip, /*Grid*/ } from '@material-ui/core';
import HelpIcon from '@material-ui/icons/Help';
import './index.css';

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
                        label="Ordered Key:  "
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
                        label="Key: "
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
                <Tooltip 
                title="An ordered key is an arrangement of unique integers within a range, starting at zero. Ex: {3, 0, 1, 4, 2}"
                placement="right"
                arrow>
                    <IconButton
                        aria-label="help"
                        disableFocusRipple={true}
                        disableRipple={true}
                        size="medium"
                        >
                        <HelpIcon
                            fontSize="small" />
                    </IconButton>
                </Tooltip>

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