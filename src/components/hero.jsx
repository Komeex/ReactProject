
export default function Hero() {
    return (
        <>
            <div className="flex justify-around h-[599px] w-scree items-center bg-[#F5F7FA] overflow-x-hidden px-[144px]    ">
                <div className="flex flex-col max-w-[657px] leading-[76px]">
                    <h1 className="text-[#4d4d4d] text-[64px] font-semibold">
                        Lessons and insights <span className="text-[#4caf4f]">from 8 years</span>
                    </h1>
                    <p className="text-[#717171] text-[16px]">
                        Where to grow your business as a photographer: site or social media?
                    </p>
                    <button className="bg-[#4CAF4F] text-white w-[128px] h-[52px] flex items-center justify-center rounded-[4px]">Register</button>
                </div>
                <div>
                    <img className="w-[500px] h-[500px]" src="image/Illustration.png" alt="Hero Image" />
                </div>
            </div>
        </>
    )
}