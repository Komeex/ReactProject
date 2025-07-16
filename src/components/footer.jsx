export default function Footer() {
  const companyLink = [
    {
      id: 1,
      href: "#",
      item: "About us",
    },
    {
      id: 2,
      href: "#",
      item: "Blog",
    },
    {
      id: 3,
      href: "#",
      item: "Contact us",
    },
    {
      id: 4,
      href: "#",
      item: "Pricing",
    },
    {
      id: 5,
      href: "#",
      item: "Testimonials",
    },
  ];

  const supportLink = [
    {
      id: 1,
      href: "#",
      item: "Help center",
    },
    {
      id: 2,
      href: "#",
      item: "Terms of service",
    },
    {
      id: 3,
      href: "#",
      item: "Legal",
    },
    {
      id: 4,
      href: "#",
      item: "Privacy policy",
    },
    {
      id: 5,
      href: "#",
      item: "Status",
    },
  ];

  return (
    <>
      <div className="w-screen h-[328px] bg-[#263238] flex justify-between items-center px-[144px]">
        <div className="flex flex-col w-[350px] h-[189px] gap-[40px]">
          <img
            className="w-[191px] h-[30px]"
            src="image/Logoputih.png"
            alt=""
          />
          <p className="text-[14px] text-[#F5F7FA] leading-loose	">
            Copyright © 2020 Nexcent ltd. <br /> All rights reserved
          </p>
          <div className="flex gap-[16px]">
            <img
              className="w-[42px] h-[42px]"
              src="image/Social Icons1.png"
              alt=""
            />
            <img
              className="w-[42px] h-[42px]"
              src="image/Social Icons2.png"
              alt=""
            />
            <img
              className="w-[42px] h-[42px]"
              src="image/Social Icons3.png"
              alt=""
            />
          </div>
        </div>
        <div className="w-[635px] h-[200px] flex gap-8">
          <div className="w-[160px]">
            <h3 className="text-[20px] font-semibold pb-[24px] text-white">
              Company
            </h3>
            <ul className="flex flex-col gap-[12px]">
              {companyLink.map((link) => (
                <li key={link.id}>
                  <a className="text-[#F5F7FA]" href={link.href}>
                    {link.item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-[160px]">
            <h3 className="text-[20px] font-semibold pb-[24px] text-white">
              Support
            </h3>
            <ul className="flex flex-col gap-[12px]">
                {supportLink.map((link) => (
                <li key={link.id}><a className="text-[#F5F7FA]" href={link.href}>{link.item}</a></li>
                ))}
            </ul>
          </div>
          <div className="w-[255px]"></div>
        </div>
      </div>
    </>
  );
}
