const FeatureList = ({ title, children }) => {
  return (
    <div className="border-b border-[#dfdfdf] py-6 flex flex-col gap-4">
      <p className="text-[0.75rem] font-bold leading-[15.62px] tracking-[2px] uppercase">
        {title}
      </p>

      <div className="flex justify-between pr-[2.875rem]">{children}</div>
    </div>
  );
};

export default FeatureList;
