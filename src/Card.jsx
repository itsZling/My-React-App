
function Card(props) {

    return(
        <div className="card">
            <img className='card-image' src={props.pfp} alt="profile picture" />
            <h2 className='card-title'><span className='cs-gradient'>{props.name}</span></h2>
            <p className='card-description'>2nd year <span className='cs-gradient'>CS Major</span> @ the Georgia Institue of technology.</p>
        </div>
    );
}

export default Card