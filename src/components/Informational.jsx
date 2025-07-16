export default function Informational() {
  return (
    <>
      <div className="flex mt-[48px] items-center justify-around w-full h-[433px] px-[144px] ">
        <div>
          <img
            className="w-[442px] h-[433px]"
            src="image/Informational.png"
            alt=""
          />
        </div>
        <div className="ml-[16px] ">
          <h2 className="text-[36px] font-semibold text-[#4D4D4D] leading-[44px] max-w-[601px]">
            The unseen of spending three years at Pixelgrade
          </h2>
          <p className="text-[#717171] text-[14px] leading-[20px] pt-[14px] max-w-[621px] h-[80]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <button className="bg-[#4CAF4F] text-white w-[151px] h-[52px] flex items-center justify-center rounded-[4px] mt-[32px]">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
}
