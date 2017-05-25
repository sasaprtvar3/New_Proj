import React, { PropTypes } from 'react';

class date extends React.Component {
    render() {
        let d = new Date();
        return (<div>{d.toString()}</div>);
    }
}

export default date; 