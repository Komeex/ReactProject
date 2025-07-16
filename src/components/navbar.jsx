export default function Navbar() {
  const navItem = [
    { id: 1, name: "Home", href: "", label: "Home" },
    { id: 2, name: "Service", href: "#", label: "Service" },
    { id: 3, name: "Feature", href: "#", label: "Feature" },
    { id: 4, name: "Product", href: "#", label: "Product" },
    { id: 5, name: "Testimonial", href: "#", label: "Testimonial" },
    { id: 6, name: "Faq", href: "#", label: "Faq" },
  ];
  return (
    <>
      <div className="h-[84px] w-screen flex justify-around  items-center p-4 bg-[#F5F7FA] sticky z-50 top-0">
        <div className="flex items-center space-x-2 font-bold">
          <img className="w-[154px] h-[24px]" src="image/Logo.png" alt="" />
        </div>
        <div>
          <ul className="flex items-center lg:gap-2 xl:gap-10   ">
            {navItem.map((item) => (
              <li
                key={item.id}
                className="inline-block mx-4 cursor-pointer text-[#18191F] hover:text-gray-400 text-[16px]">
                <a href={item.href} id={item.id}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-[14px]">
          <button className="text-[#4CAF4F] w-[77px] h-[40px]">Login</button>
          <button className="bg-[#4CAF4F] text-white w-[91px] h-[40px] rounded-[6px]">
            Sign up
          </button>
        </div>
      </div>
    </>
  );
}
