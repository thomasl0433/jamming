import React from 'react';
import './Track.css'

function Track(props) {
    const isRemoval = true

    const renderAction = () => {
        return <button className='Track-action'>{ isRemoval ? '-' : '+' }</button>
    }

    return (
        <div className="Track" >
            { console.log('track props: ', props) }
            <div className='Track-information'>
                <h3>{props.track.name}</h3>
                <p>{props.track.artist} | {props.track.album}</p>
            </div> 
           { renderAction() }
        </div>
    )
}

export default Track;