import React from 'react';
//import ReactDOM from 'react-dom';

class Encode extends React.Component {
    render() {
        return(
            <div>
                <label>Encoded text:</label>
                <textarea id="encodedText" onChange={this.props.onChange}></textarea>
                <input type="button" value="Encode"></input>
            </div>
        );
    }

}

export default Encode