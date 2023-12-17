import { useSelector } from 'react-redux';
import classes from './UserProfile.module.css';

const UserProfile = () => {
  const mail = useSelector(state => state.user.insertedEmail);
  const password = useSelector(state => state.user.insertedPassword);

  return (
    <main className={classes.profile}>
      <h2>My User Profile</h2>
      <p>{mail}</p>
      <p>{password}</p>
    </main>
  );
};

export default UserProfile;
