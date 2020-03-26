import React from 'react'
//import CounterButton from './CounterButton';

class Header extends React.Component {

    shouldComponentUpdate() {
        return false;
    }

    render() {
        console.log('header')
        return (
            <div>
                {/* <CounterButton color={'red'} /> */}
                <h1 className='f1'>Robots</h1>
            </div>
        )
    }
}

export default Header