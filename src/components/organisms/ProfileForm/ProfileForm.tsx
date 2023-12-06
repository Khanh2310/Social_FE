export const ProfileForm = () => {
  return (
    <>
      <form action="">
        <div className="avatar-wrapper">
          <img className="profile-pic" />
          <div className="upload-button">
            <i className="fa fa-arrow-circle-up" aria-hidden="true"></i>
          </div>
          <input className="file-upload" type="file" accept="image/*" />
        </div>
      </form>
    </>
  );
};
