import { useParams } from 'react-router-dom';
import { ProfileForm } from '../../organisms/ProfileForm';
import { useRecoilValue } from 'recoil';
import { userAtoms } from '../../../states/authAtoms';

export const Profile = () => {
  const { usersname } = useParams<{ usersname: string | undefined }>();
  const currentUser = useRecoilValue(userAtoms);
  return (
    <>
      <ProfileForm usersname={usersname} currentUser={currentUser} />
    </>
  );
};
