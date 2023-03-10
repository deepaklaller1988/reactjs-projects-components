//Higher Order Component
import React, { Component } from 'react'
import UpdatedComp from './withCounter'

class ClickCounter extends Component {
    render() {
        const {count, incrementCount} = this.props;
        return (
            <div>
                <button onClick={incrementCount}>Clicked {count} times</button>
            </div>
        )
    }
}

export default UpdatedComp(ClickCounter)
