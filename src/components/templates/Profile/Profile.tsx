import { useParams } from 'react-router-dom';
import { profileTabs } from '../../../contants';
import { Images } from '../../atoms/Images';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../atoms/Tabs';
import { ProfileForm } from '../../organisms/ProfileForm';
import { useRecoilValue } from 'recoil';
import { userAtoms } from '../../../states/authAtoms';

export const Profile = () => {
  const { usersname } = useParams<{ usersname: string | undefined }>();
  const currentUser = useRecoilValue(userAtoms);
  return (
    <>
      <ProfileForm usersname={usersname} currentUser={currentUser} />
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
