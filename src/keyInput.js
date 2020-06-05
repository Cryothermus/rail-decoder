import React from 'react';
//import ReactDOM from 'react-dom';

class KeyInput extends React.Component {

    KeyBox(props) {
        if (props.ordered) {
            return (
                <div>
                    <label>Ordered Key: </label>
                    <input 
                    type="text" 
                    id="orderedKeyInput" 
                    onBlur={props.orderedBlur}></input>
                </div>
            );
        }
        else {
            return (
                <div>
                    <label>Key: </label>
                    <input 
                    type="text" 
                    id="basicKeyInput" 
                    onBlur={props.keyBlur}
                    ></input>
                </div>
            )
        }
    }


    render() {
        return(
            <div>
                <label>Use Ordered Key: </label>
                <input type='checkbox' onClick={() => {this.props.onCheck()}}></input>
                <this.KeyBox 
                ordered={this.props.ordered}
                keyBlur={this.props.keyBlur}
                orderedBlur={this.props.orderedBlur}></this.KeyBox>
            </div>
        );
    }
}

export default KeyInput