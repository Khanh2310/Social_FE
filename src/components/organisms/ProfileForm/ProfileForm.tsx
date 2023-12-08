import { Images } from '../../atoms/Images';

export const ProfileForm = ({ user }) => {
  console.log(user.data);
  return (
    <div className="w-full flex flex-col justify-start">
      <div className="flex items-center justify-between">
        <div className="">
          <h2 className="text-left text-heading3-bold text-light-1 mb-1">
            {user.data.name}
          </h2>
          <div className="flex items-center mb-2">
            <p className="text-small-regular text-light-1 ">
              {user.data.username}
            </p>
            <p className="text-tiny-medium text-gray-1 ml-1 bg-dark-4 px-[7px] py-[5px] rounded-2xl">
              threads.net
            </p>
          </div>
          <p className="text-light-1 text-tiny-medium">{user.data.bio}</p>
        </div>
        <div className="relative object-cover">
          <Images
            width={80}
            height={80}
            className="rounded-full object-cover shadow-2xl"
            src={
              user.data.profilePic
                ? user.data.profilePic
                : `https://img.freepik.com/free-photo/3d-rendering-woman-with-vr-glasses_23-2150898703.jpg?t=st=1701941476~exp=1701945076~hmac=ddea7e237544df3f570978c6ba1fdb129f81a368558bc83ea281f421f2677b99&w=826`
            }
            alt="profile-image"
          />
        </div>
      </div>
    </div>
  );
};
