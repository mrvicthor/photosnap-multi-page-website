const FeatureListItem = ({ isHidden, title }) => {
  return (
    <div className="space-y-2">
      <p className="text-[0.625rem] leading-[13.02px] tracking-[1.67px] opacity-50 uppercase">
        {title}
      </p>
      <div>
        {isHidden ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15">
            <path
              fill="none"
              stroke="#000"
              strokeWidth="2"
              d="M1 8.124L5.623 13 17 1"
            />
          </svg>
        ) : null}
      </div>
    </div>
  );
};

export default FeatureListItem;
