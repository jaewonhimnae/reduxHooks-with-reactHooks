import React, { Component } from 'react'
import { connect } from "react-redux";
import {
    incrementNumber,
} from "./_actions/number";

export class AppClass extends Component {

    handleClick = () => {
        this.props.dispatch(
            incrementNumber((this.props.number && this.props.number.clickedNumber) || 0)
        )
    }

    render() {
        const props = this.props;

        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column', fontSize: '2rem' }}>
                {props.number.clickedNumber || 0}<br /><br />
                <button onClick={this.handleClick}>
                    Click Me!
              </button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        number: state.number
    };
};

export default connect(mapStateToProps)(AppClass);

