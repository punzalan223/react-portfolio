import RetroNav from "./RetroNav";

function BodyContent({children}) {
    return (
        <div className="flex flex-col flex-1 rounded-3xl border-4 border-[#252E37] shadow-[8px_8px_0px_0px_rgba(60,75,90)] overflow-hidden sm:h-[90vh] sticky top-10">
            <RetroNav background='bg-[#B5D9AC]'>
                <iframe 
                    src="https://giphy.com/embed/bjE9JbNSckM0w" 
                    width="70" 
                    height="70" 
                    className="absolute top-0 left-0" 
                    style={{ pointerEvents: "none" }}
                ></iframe>
                <div className="flex items-center justify-end h-full gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
            </RetroNav>
            <div className="relative flex-1 px-5 py-10 overflow-auto bg-white/95 lg:p-10">
                {children}
            </div>
        </div>

    );
}

export default BodyContent;