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
        <button onClick={addLocation}>ADD THIS LOCATION</button>
    )
}

export default AddLocation;


//should I make this its own app?? Probably... since typing urls does not work in reactpress