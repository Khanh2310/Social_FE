import { useEffect, useState } from 'react';
import { Images } from '../../atoms/Images';
import axiosInstance from '../../../config/axiosInstance';
import { Button } from '../../atoms/Button';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../atoms/Tabs';
import { profileTabs } from '../../../contants';
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
    <>
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
      {user?.data._id == currentUser ? (
        <div className="flex items-center mt-7 gap-x-3 mb-7">
          <Button
            size={'sm'}
            className="text-light-1 border flex items-center h-auto py-2 px-7"
          >
            <Link to={'/edit'} className="text-tiny-medium">
              Edit profile
            </Link>
          </Button>
          <Button
            size={'sm'}
            className="text-light-1 border flex items-center h-auto py-2 px-7"
          >
            <Link to={'/edit'} className="text-tiny-medium">
              Share profile
            </Link>
          </Button>
        </div>
      ) : (
        <div className="flex items-center justify-center md:justify-start gap-x-5 mt-5 mb-8">
          <Button className="text-white bg-dark-4 px-12" size={'sm'}>
            Follow
          </Button>
          <Button className="text-dark-1 bg-white px-12" size={'sm'}>
            Mention
          </Button>
        </div>
      )}
      <div className="mt-5">
        <Tabs defaultValue="threads" className="w-full">
          <TabsList className="tab">
            {profileTabs.map((tabs) => (
              <TabsTrigger className="tab" key={tabs.label} value={tabs.value}>
                <Images
                  src={tabs.icon}
                  width={24}
                  height={24}
                  alt="icon"
                  className="object-cover"
                />
                <p className="max-sm:hidden">{tabs.label}</p>
              </TabsTrigger>
            ))}
          </TabsList>
          {profileTabs.map((tabInfor) => (
            <TabsContent
              value={tabInfor.value}
              className="w-full text-light-1"
              key={`content-${tabInfor.label}`}
            ></TabsContent>
          ))}
        </Tabs>
      </div>
    </>
  );
};
