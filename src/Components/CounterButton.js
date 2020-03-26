import React from 'react'

class CounterButton extends React.PureComponent {

    constructor() {
        super();
        this.state = {
            count: 0
        }
    }


    // shouldComponentUpdate(nextProps, nextState) {
    //     if (this.state.count !== nextState.count) {
    //         return true;
    //     }
    //     else {
    //         return false;
    //     }
    // }

    updateCount = () => {
        this.setState(state => {
            return { count: this.state.count + 1 }
        }
        );
    }

    render() {
        console.log('header')
        return (
            <button color={this.props.color} onClick={this.updateCount}>{this.state.count}</button>

        );
    }
}

export default CounterButton