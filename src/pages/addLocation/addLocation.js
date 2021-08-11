import React from 'react';
import {useEasybase} from 'easybase-react';

function AddLocation(props) {
    console.log(props.props)
    let data = props.props;
    const {db} = useEasybase();

    function addLocation() {
        db('LOCATIONS').insert(data).one()
    }

    return(
        <button onClick={addLocation}>Add this location</button>
    )
}

export default AddLocation;