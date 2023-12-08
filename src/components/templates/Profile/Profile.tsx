import { useParams } from 'react-router-dom';
import { profileTabs } from '../../../contants';
import { Images } from '../../atoms/Images';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../atoms/Tabs';
import { ProfileForm } from '../../organisms/ProfileForm';
import { useEffect, useState } from 'react';
import axiosInstance from '../../../config/axiosInstance';

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
export const Profile = () => {
  const { username } = useParams();
  const [user, setUser] = useState<UserProfile | null>(null);
  useEffect(() => {
    const getUser = async () => {
      try {
        const res: UserProfile = await axiosInstance.get(
          `users/profile/${username}`
        );
        setUser(res);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [username]);
  if (!user) return null;
  return (
    <>
      <ProfileForm user={user} />
      <div className="mt-9">
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
