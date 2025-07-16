export default function Statistics() {
  const statisticsData = [
    { id: 1, title: "2,245,341", description: "Members", src: "image/vector1.png" },

    { id: 2, title: "46,328", description: "Clubs", src: "image/vector2.png" },

    {
      id: 3,
      title: "828,867",
      description: "Event Bookings",
      className: "row-start-2",
      src: "image/vector3.png",
    },
    {
      id: 4,
      title: "1,926,436",
      description: "Payments",
      className: "row-start-2",
      src: "image/vector4.png",
    },
  ];
  return (
    <>
      <div className="px-[144px] pt-[48px] flex items-center justify-around bg-[#F5F7FA] h-[288px]">
        <div className="flex flex-col w-[540px] h-[120px] gap-[8px]">
          <h2 className="max-w-[408px] max-h-[88px] text-[36px] font-semibold text-[#4D4D4D] leading-[44px]">
            Helping a local.{" "}
            <span className="text-[#4CAF4F]">business reinvent itself</span>
          </h2>
          <p className="">We reached here with our hard work and dedication</p>
        </div>
        <div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 w-[540px] h-[160px]">
            {statisticsData.map((stat) => (
              <div
                key={stat.id}
                className={`flex w-[255px] h-[60px] items-center gap-[16px] ${stat.className || ""}`}
              >
                <img className="w-[48px] h-[48px]" src={stat.src} alt="" />
                <div>
                  <h3 className="text-[28px] font-bold text-[#4D4D4D] leading-[36px] ">
                    {stat.title}
                  </h3>
                  <p className="text-[16px] text-gray-900 leading-[24px]">
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
