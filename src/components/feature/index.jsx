const Feature = ({ imagePath, title, description, padding }) => {
  return (
    <div
      className={`${
        padding ? "lg:pt-[2.3rem]" : ""
      } flex flex-col items-center space-y-12 text-[#000000]`}
    >
      <img src={imagePath} alt={title} className="" />
      <article className="space-y-4">
        <h4 className="font-bold text-[1.125rem] leading-[1.5625rem] text-center">
          {title}
        </h4>
        <p className="text-[0.9375rem] leading-[1.5625rem] text-center opacity-60 font-normal">
          {description}
        </p>
      </article>
    </div>
  );
};
export default Feature;
