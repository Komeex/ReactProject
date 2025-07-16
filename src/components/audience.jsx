export default function Audience() {
  const AudienceData = [
    {
      id: 1,
      src: './image/Icon1.png',
      title: 'Membership Organisations',
      description:
        'Our membership management software provides full automation of membership renewals and payments',
    },
    {
      id: 2,
      src: './image/Icon2.png',
      title: 'National Associations',
      description:
        'Our membership management software provides full automation of membership renewals and payments',
    },
    {
      id: 3,
      src: './image/Icon3.png',
      title: 'Clubs And Groups',
      description:
        'Our membership management software provides full automation of membership renewals and payments',
    },
  ];
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-[48px] gap-3 mx-[144px]">
        <div className="flex flex-col items-center gap-[8px]">
          <h2 className="text-[36px] font-semibold text-[#4D4D4D] max-w-[542px] text-center leading-[44px]">
            Manage your entire community in a single system
          </h2>
          <p className="text-[#717171]">Who is Nextcent suitable for?</p>
        </div>
        <div className="flex justify-around items-center w-[1152px] h-[260px] mt-8 ">
         {AudienceData.map((audience) => (
            <div key={audience.id} className="shadow-custom-soft flex flex-col justify-center items-center text-center w-[299px] h-[260px]">
            <img className="w-[65px] h-[56px]" src={audience.src} />
            <h3 className="text-[28px] font-bold max-w-[231px] pt-8 text-[#4D4D4D]">{audience.title}</h3>
            <p className="text-[#717171] max-w-[251px] text-[14px] pt-[8px]" >{audience.description}</p>
          </div>
          ))}
        </div>
      </div>
    </>
  );
}
