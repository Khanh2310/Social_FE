import { IconNext } from '../../atoms/Icons';

export const ProfileForm = () => {
  return (
    <div className="w-[800px] mx-auto bg-dark-4">
      <div className="flex items-center justify-between">
        <button className="text-white">
          <IconNext />
        </button>
        <div className="text-white">Edit Profile</div>
        <button className=""></button>
      </div>
    </div>
  );
};
