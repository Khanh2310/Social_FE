import { useEffect, useState } from 'react';
import { Images } from '../../atoms/Images';
import axiosInstance from '../../../config/axiosInstance';
import { Button } from '../../atoms/Button';
import { Link } from 'react-router-dom';
interface UserProfile {
  data: {
    _id: string;
    name: string;
    email: string;
    bio: string;
    followers: [];
    follwings: [];
    profilePic: string;
    username: string;
  };
}

type userParams = {
  usersname: string | undefined;
  currentUser?: string | null;
};

export const ProfileForm = ({ usersname, currentUser }: userParams) => {
  const [user, setUser] = useState<UserProfile | null>(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res: UserProfile = await axiosInstance.get(
          `users/profile/${usersname}`
        );
        setUser(res);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [usersname]);
  return (
    <div className="w-full flex flex-col justify-start overflow-x-hidden">
      <div className="flex items-start justify-between">
        <div className="">
          <h2 className="text-left text-heading3-bold text-light-1 mb-1">
            {user?.data.name}
          </h2>
          <div className="flex items-center mb-2">
            <p className="text-small-regular text-light-1 ">
              {user?.data.username}
            </p>
            <p className="text-tiny-medium text-gray-1 ml-1 bg-dark-4 px-[7px] py-[5px] rounded-2xl">
              threads.net
            </p>
          </div>
          <p className="text-light-1 text-tiny-medium">{user?.data.bio}</p>
          {user?.data._id == currentUser && (
            <div className="flex items-center mt-5 gap-x-2">
              <Button
                size={'sm'}
                className="text-light-1 border flex items-center h-auto py-1 px-6"
              >
                <Link to={'/edit'} className="text-tiny-medium">
                  Edit profile
                </Link>
              </Button>
              <Button
                size={'sm'}
                className="text-light-1 border  flex items-center h-auto py-1 px-6"
              >
                <Link to={'/edit'} className="text-tiny-medium">
                  Share profile
                </Link>
              </Button>
            </div>
          )}
        </div>
        <div className="object-cover w-[80px] h-[80px]">
          <Images
            className="rounded-full object-cover shadow-2xl"
            src={
              user?.data.profilePic
                ? user?.data.profilePic
                : `https://img.freepik.com/free-photo/3d-rendering-woman-with-vr-glasses_23-2150898703.jpg?t=st=1701941476~exp=1701945076~hmac=ddea7e237544df3f570978c6ba1fdb129f81a368558bc83ea281f421f2677b99&w=826`
            }
            alt="profile-image"
          />
        </div>
      </div>
    </div>
  );
};
