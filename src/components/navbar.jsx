import React, { PureComponent } from 'react';
//⭐PureComponent : data가 변경되지 않는다면 rerendering되지 않는다.

class Navbar extends PureComponent {
    render() {
        console.log('navbar')
        return (
            <nav className="navbar">
                <i className="navbar-logo fa-solid fa-pen-to-square"></i>
                <span>Habit Tracker</span>
                <span className="navbar-count">{this.props.totalCount}</span>
            </nav>
        );
    }
}

export default Navbar;