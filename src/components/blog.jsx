export default function Blog() {
  const blogData = [
    {
      id: 1,
      description: "Creating Streamlined Safeguarding Processes with OneRen",
      src: "image/blogimg1.png",
    },
    {
      id: 2,
      description:
        "What are your safeguarding responsibilities and how can you manage them?",
      src: "image/blogimg2.png",
    },
    {
      id: 3,
      description: "Revamping the Membership Model with Triathlon Australia",
      src: "image/blogimg3.png",
    },
  ];
  return (
    <>
      <div className="pt-[48px] px-[144px]">
        <div className="flex flex-col items-center gap-[16px]">
          <h2 className="text-[36px] font-semibold text-[#4D4D4D] max-w-[542px] text-center leading-[44px] gap-[8px]">
            Caring is the new marketing
          </h2>
          <p className="text-[#717171] max-w-[628px] text-center leading-[24px]">
            The Nexcent blog is the best place to read about the latest
            membership insights, trends and more. See who's joining the
            community, read about how our community are increasing their
            membership income and lot's more.​
          </p>
          <div className="grid grid-cols-3 gap-[16px]">
            {blogData.map((data) => (
              <div key={data.id} className="relative h-[366px] w-[368px]">
                <img src={data.src} />
                <div className="absolute bottom-0 left-[25px] flex flex-col p-4 justify-between text-center bg-[#F5F7FA] w-[317px] h-[176px] rounded-[8px]">
                  <h4 className="text-[20px] text-[#717171] leading-[28px] max-w-[275px] h-[84px] font-semibold">
                    {data.description}
                  </h4>
                  <div className="flex pt-[16px] w-[285px] h-[44px] justify-center items-center gap-[8px] text-[#4CAF4F]">
                    <button className="text-[20px] font-semibold">
                      Learn More
                    </button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[24px] h-[24px]">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
