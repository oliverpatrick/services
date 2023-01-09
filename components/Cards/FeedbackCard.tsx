const FeedbackCard = ({ content, name, title }: any) => {
  return (
    <div className="max-w-md h-max inline-block w-full rounded-[20px] p-6 m-4 bg-[#e7e7e7] dark:bg-[#2d2d30] bg-white hover:shadow-lg cursor-pointer">
      <div className="w-full flex justify-end mb-2">
        <div className="my-1 flex flex-row justify-start items-center">
          ⭐⭐⭐⭐⭐
        </div>
      </div>

      <div className="flex flex-col">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {content}
        </h4>
      </div>
      <div className="w-full flex flex-col justify-end mb-2">
        <p className="font-poppins font-normal text-[16px] leading-[32.4px] text-white mt-2">
          {name}
        </p>
        <p className="font-poppins font-normal xs:text-[12px] xs:leading-[20px] text-[10.43px] leading-[16.89px] tracking-[0.5%] dark:text-[#6B707B] text-[#A3B2BC] m-0">
          {title}
        </p>
      </div>
    </div>
  );
};

export default FeedbackCard;
