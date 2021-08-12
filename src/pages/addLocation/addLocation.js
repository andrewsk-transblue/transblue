import React, {Fragment, useState} from 'react';
import {useEasybase} from 'easybase-react';

function AddLocation(props) {
    const [isSubmitted, setIsSubmitted] = useState(false);
    //console.log(props.props)
    let data = props.props;
    // const {db} = useEasybase();

    // function addLocation() {
    //     db('LOCATIONS').insert(data).one()
    //     setIsSubmitted(true)
    // }

    return(
        <Fragment>
            <button className='add-btn' 
            // onClick={addLocation}
            >ADD THIS LOCATION</button>
            {isSubmitted && 
                <div className='alert'>
                    Location has been submitted!<br />
                    <a href={`/locations/${data.state}/${data.urlCity}`}>View Franchise Page</a>
                </div>
            }
        </Fragment>
    )
}

export default AddLocation;


//should I make this its own app?? Probably... since typing urls does not work in reactpress