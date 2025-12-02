import profilePic from './assets/pfp.png'


function Card(props) {

    return(
        <div className="card">
            <img className='card-image' src={profilePic} alt="profile picture" />
            <h2 className='card-title'>{props.name}</h2>
            <p className='card-description'>2nd year CS Major @ the Georgia Institue of technology.</p>
        </div>
    );
}

export default Card