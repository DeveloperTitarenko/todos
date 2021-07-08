import './userCard.scss'
import avatar from '../../static/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png'
const UserCard = ({firstName, lastName, username, position, logo, index}) => (
  <div className='user-card' key={index}>
    <img src={logo ? logo : avatar} alt=""/>
    <div className={'user-card__information'}>
      <span>first name: {firstName}</span>
      <span>last name: {lastName}</span>
      <span>username: {username}</span>
      <span>position: {position}</span>
    </div>
  </div>
)
export default UserCard