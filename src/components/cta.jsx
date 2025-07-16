export default function Cta() {
  return (
    <>
      <div className="flex mt-[48px] items-center justify-around w-full h-[433px] px-[144px] ">
        <div>
          <img
            className="w-[442px] h-[433px]"
            src="image/cta.png"
            alt=""
          />
        </div>
        <div className="ml-[16px] ">
          <h2 className="text-[36px] font-semibold text-[#4D4D4D] leading-[44px] max-w-[601px]">
            How to design your site footer like we did
          </h2>
          <p className="text-[#717171] text-[14px] leading-[20px] pt-[14px] max-w-[621px] h-[80]">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>
          <button className="bg-[#4CAF4F] text-white w-[151px] h-[52px] flex items-center justify-center rounded-[4px] mt-[32px]">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
}
