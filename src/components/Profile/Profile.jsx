import './Profile.scss';
import avatar from './../../assets/avatar.jpg';
function Profile() {
    return (
        <div className="profile-container">
            <div>
                <img src={avatar} alt='avatar' className='profile-avatar' />
                <p>Hi, Jamie</p>

                <br />
                <h4>12:30 pm
                </h4>
                <br />
                <h4>
                    15 March, 2023
                </h4>
            </div>
        </div>
    )
}

export default Profile;