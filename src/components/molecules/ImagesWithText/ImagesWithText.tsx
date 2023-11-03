import iconInstagram from '../../../assets/icons8-instagram-96.svg';
export const ImagesWithText = () => {
  return (
    <div className="flex items-center justify-between border border-[#323333] rounded-2xl p-3 cursor-pointer">
      <img src={iconInstagram} width={60} height={60} alt="icon_instagram" />
      <p className="text-base-semibold text-center text-light-1 ">
        Continue with Instagram
      </p>
      <span className="text-[#777777]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </span>
    </div>
  );
};
