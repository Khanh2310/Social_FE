interface Params {
  src: string;
  alt: string;
  className: string;
  width?: number;
  height?: number;
}
export const Images = ({ className, alt, src, width, height }: Params) => {
  return (
    <img
      className={className}
      alt={alt}
      src={src}
      width={width}
      height={height}
    ></img>
  );
};
