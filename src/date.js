import React, { PropTypes } from 'react';

class date extends React.Component {
    render() {
        let d = new Date();
        return (<div>{d.toString()} Sasa is the greatest ever!</div>);
    }
}

export default date; 