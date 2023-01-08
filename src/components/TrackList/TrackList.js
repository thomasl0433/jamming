import './TrackList.css'
import Track from '../Track/Track.js'

function TrackList(props) {
    return (
        <div className="TrackList">
            { props.searchResults.map((track, idx) => {
                return <Track key={track.id} track={track} />
            }) }
        </div>
    )
}

export default TrackList;