import { Images } from '../../atoms/Images';

export const ProfileForm = () => {
  return (
    <div className="w-full flex flex-col justify-start">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative object-cover">
            <Images
              width={80}
              height={80}
              className="rounded-full object-cover shadow-2xl"
              src="https://img.freepik.com/free-photo/3d-rendering-woman-with-vr-glasses_23-2150898703.jpg?t=st=1701941476~exp=1701945076~hmac=ddea7e237544df3f570978c6ba1fdb129f81a368558bc83ea281f421f2677b99&w=826"
              alt="profile-image"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-left text-heading3-bold text-light-1">
              Nguyen Hoang Quoc Bao
            </h2>
            <p className="text-base-medium text-gray-1 mb-1">Viet Nam</p>
          </div>
        </div>
      </div>
    </div>
  );
};
