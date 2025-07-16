export default function Demo() {
  return (
    <>
      <div className="w-screen h-[300px] bg-[#F5F7FA] mt-[113px] flex flex-col justify-center items-center">
        <h1 className="leading-[76px] text-[64px] font-semibold text-[#263238] max-w-[887px] h-[152px] text-center">
          Pellentesque suscipit fringilla libero eu.
        </h1>
          <div className="flex bg-[#4CAF4F] text-white w-[178px] h-[52px] mt-[32px] rounded-[4px]  justify-center items-center gap-[8px]">
                    <button>
                      Get a demo
                    </button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[24px] h-[24px]">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"/>
                    </svg>
                  </div>
      </div>
    </>
  );
}
