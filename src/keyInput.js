import React from 'react';
//import ReactDOM from 'react-dom';
//import { FaKey } from "react-icons/fa";
import { Checkbox, FormControlLabel, TextField, /*IconButton,*/ Tooltip, /*Grid*/ } from '@material-ui/core';
//import HelpIcon from '@material-ui/icons/Help';
import './index.css';

class KeyInput extends React.Component {

    KeyBox(props) {
        if (props.ordered) {
            return (
                <div>
                    <FormControlLabel
                        control={
                            <Tooltip
                                title="Ordered keys consist of a series of unique integers, starting at 0 and all below the length of the series (ex: 3 0 4 1 2)"
                                placement="right"
                                arrow>
                                <TextField
                                    variant="standard"
                                    error={props.errorMessage.length !== 0}
                                    helperText={props.errorMessage}
                                    id="orderedKeyInput"
                                    onKeyDown={(e) => {
                                        if ((e.keyCode < 48 || e.keyCode > 57) && !(e.keyCode === 8 || e.keyCode === 32 || e.keyCode === 188)) {
                                            e.preventDefault();
                                        }
                                    }}
                                    onBlur={props.orderedBlur}
                                    size="small"
                                />
                            </Tooltip>
                        }
                        label="Ordered Key:  "
                        labelPlacement="start"
                    />
                </div>
            );
        }
        else {
            return (
                <div>
                    <FormControlLabel
                        control={
                            <Tooltip
                                title="A standard rail-fence cipher key consists of a single integer, >0 and ideally on the smaller side (depending on text length)."
                                placement="right"
                                arrow>
                                <TextField
                                    variant="standard"
                                    error={props.errorMessage.length !== 0}
                                    helperText={props.errorMessage}
                                    id="basicKeyInput"
                                    onKeyDown={(e) => {
                                        if ((e.keyCode < 48 || e.keyCode > 57) && e.keyCode !== 8) {
                                            e.preventDefault();
                                        }
                                    }}
                                    onBlur={props.keyBlur}
                                    size="small"
                                />
                            </Tooltip>
                        }
                        label="Key: "
                        labelPlacement="start"
                    />
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