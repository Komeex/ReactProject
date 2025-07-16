export default function Client() {
    const Client = [
        {id : 1, src: 'image/Logo (1).png', alt: 'Client Logo 1'},
        {id : 2, src: 'image/Logo (2).png', alt: 'Client Logo 2'},
        {id : 3, src: 'image/Logo (3).png', alt: 'Client Logo 3'},
        {id : 4, src: 'image/Logo (4).png', alt: 'Client Logo 4'},
        {id : 5, src: 'image/Logo (5).png', alt: 'Client Logo 5'},
        {id : 6, src: 'image/Logo (6).png', alt: 'Client Logo 6'},
        {id : 7, src: 'image/Logo (7).png', alt: 'Client Logo 7'},
    ];
    return (
        <>
            <div className="flex flex-col  items-center gap-[16px] mt-[48px] overflow-x-hidden mx-[144px]">
                <div className="flex flex-col items-center gap-[8px]">
                    <h2 className="text-[36px] font-semibold text-[#4D4D4D]">Our Clients</h2>
                    <p className="text-[#717171]">We have been working with some Fortune 300+ clients</p>
                    </div>
                    <div className="flex flex-wrap justify-between w-[1152px] h-[98px] items-center gap-4 mt-6 ">
                        {Client.map((client) => (
                        <img key={client.id} id={client.id} src={client.src} alt={client.alt} className="w-[48px] h-auto" />
                    ))}
                    </div>
            </div>
        </>
    );
}