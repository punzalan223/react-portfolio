import RetroNav from "./RetroNav";
import profile from "../img/patrick.jpg";
import download from "../img/download.png";
import tech1 from "../img/tech/c++.png";
import tech2 from "../img/tech/php.png";
import tech3 from "../img/tech/python.png";
import tech4 from "../img/tech/js.png";
import tech5 from "../img/tech/html.png";
import tech6 from "../img/tech/css.png";
import Resume from "../pdf/patrick_punzalan__resume.pdf"

function SideBar () {
    return (
        <>
            <div className="flex flex-col justify-center w-full gap-8 lg:flex-row xl:flex-col xl:max-w-lg">
                <div className="w-full lg:max-w-lg bg-transparent border-4 border-[#252E37] rounded-tl-3xl rounded-tr-3xl shadow-[8px_8px_0px_0px_rgba(60,75,90)] overflow-hidden">
                    <RetroNav background='bg-[#A9BEDC]'>
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
                    <div className="p-5 bg-white/95">
                        <div className="flex items-center gap-4 sm:gap-12">
                            <img src={profile} alt="profile-img" className="h-24 rounded-full sm:h-32" />
                            <div className="flex flex-col justify-center py-5">
                                <p className="text-black text-opacity-75">Patrick Punzalan</p>
                                <p className="text-gray-500 text-opacity-75">FullStack Developer</p>
                                <div className="flex gap-2 mt-1">
                                    <a href="https://github.com/punzalan223" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 16 16" id="github" className="h-6">
                                            <path d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"></path>
                                        </svg>
                                    </a>
                                    <a href="https://www.facebook.com/patwicku/" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" id="facebook" className="h-6">
                                            <path fill="#1877f2" d="M1024,512C1024,229.23016,794.76978,0,512,0S0,229.23016,0,512c0,255.554,187.231,467.37012,432,505.77777V660H302V512H432V399.2C432,270.87982,508.43854,200,625.38922,200,681.40765,200,740,210,740,210V336H675.43713C611.83508,336,592,375.46667,592,415.95728V512H734L711.3,660H592v357.77777C836.769,979.37012,1024,767.554,1024,512Z"></path>
                                            <path fill="#fff" d="M711.3,660,734,512H592V415.95728C592,375.46667,611.83508,336,675.43713,336H740V210s-58.59235-10-114.61078-10C508.43854,200,432,270.87982,432,399.2V512H302V660H432v357.77777a517.39619,517.39619,0,0,0,160,0V660Z"></path>
                                        </svg>
                                    </a>
                                    <a href="https://www.instagram.com/" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 102 102" id="instagram" className="h-6">
                                            <defs>
                                                <radialGradient id="a" cx="6.601" cy="99.766" r="129.502" gradientUnits="userSpaceOnUse">
                                                <stop offset=".09" stopColor="#fa8f21"></stop>
                                                <stop offset=".78" stopColor="#d82d7e"></stop>
                                                </radialGradient>
                                                <radialGradient id="b" cx="70.652" cy="96.49" r="113.963" gradientUnits="userSpaceOnUse">
                                                <stop offset=".64" stopColor="#8c3aaa" stopOpacity="0"></stop>
                                                <stop offset="1" stopColor="#8c3aaa"></stop>
                                                </radialGradient>
                                            </defs>
                                            <path fill="url(#a)" d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"></path>
                                            <path fill="url(#b)" d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"></path>
                                            <path fill="#fff" d="M461.114,477.413a12.631,12.631,0,1,1,12.629,12.632,12.631,12.631,0,0,1-12.629-12.632m-6.829,0a19.458,19.458,0,1,0,19.458-19.458,19.457,19.457,0,0,0-19.458,19.458m35.139-20.229a4.547,4.547,0,1,0,4.549-4.545h0a4.549,4.549,0,0,0-4.547,4.545m-30.99,51.074a20.943,20.943,0,0,1-7.037-1.3,12.547,12.547,0,0,1-7.193-7.19,20.923,20.923,0,0,1-1.3-7.037c-.184-3.994-.22-5.194-.22-15.313s.04-11.316.22-15.314a21.082,21.082,0,0,1,1.3-7.037,12.54,12.54,0,0,1,7.193-7.193,20.924,20.924,0,0,1,7.037-1.3c3.994-.184,5.194-.22,15.309-.22s11.316.039,15.314.221a21.082,21.082,0,0,1,7.037,1.3,12.541,12.541,0,0,1,7.193,7.193,20.926,20.926,0,0,1,1.3,7.037c.184,4,.22,5.194.22,15.314s-.037,11.316-.22,15.314a21.023,21.023,0,0,1-1.3,7.037,12.547,12.547,0,0,1-7.193,7.19,20.925,20.925,0,0,1-7.037,1.3c-3.994.184-5.194.22-15.314.22s-11.316-.037-15.309-.22m-.314-68.509a27.786,27.786,0,0,0-9.2,1.76,19.373,19.373,0,0,0-11.083,11.083,27.794,27.794,0,0,0-1.76,9.2c-.187,4.04-.229,5.332-.229,15.623s.043,11.582.229,15.623a27.793,27.793,0,0,0,1.76,9.2,19.374,19.374,0,0,0,11.083,11.083,27.813,27.813,0,0,0,9.2,1.76c4.042.184,5.332.229,15.623.229s11.582-.043,15.623-.229a27.8,27.8,0,0,0,9.2-1.76,19.374,19.374,0,0,0,11.083-11.083,27.716,27.716,0,0,0,1.76-9.2c.184-4.043.226-5.332.226-15.623s-.043-11.582-.226-15.623a27.786,27.786,0,0,0-1.76-9.2,19.379,19.379,0,0,0-11.08-11.083,27.748,27.748,0,0,0-9.2-1.76c-4.041-.185-5.332-.229-15.621-.229s-11.583.043-15.626.229" transform="translate(-422.637 -426.196)"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-2 pt-10 border-t-4 border-b-4 pb-10 border-[#3C4B5A] mt-5">
                            <div className="flex flex-col items-center gap-2 border-r-2 sm:border-0">
                                <p className="text-sm text-gray-500 text-opacity-75 sm:text-base">PROJECT</p>
                                <p className="text-4xl text-black opacity-75">12</p>
                            </div>
                            <div className="flex flex-col items-center gap-2 sm:border-l-2 sm:border-r-2">
                                <p className="text-sm text-gray-500 text-opacity-75 sm:text-base">COMPLETED</p>
                                <p className="text-4xl text-black opacity-75">9</p>
                            </div>
                            <div className="flex flex-col items-center gap-2 border-l-2 sm:border-0">
                                <p className="text-sm text-gray-500 text-opacity-75 sm:text-base">PENDING</p>
                                <p className="text-4xl text-black opacity-75">3</p>
                            </div>
                        </div>
                        <div className="my-5">
                            <p className="text-black opacity-75 ">Tech Stack</p>
                            <div className="grid flex-wrap grid-cols-6 gap-2 mt-5">
                                <img src={tech1} alt="" className="w-12 mx-auto"/>
                                <img src={tech2} alt="" className="w-12 mx-auto"/>
                                <img src={tech3} alt="" className="w-12 mx-auto"/>
                                <img src={tech4} alt="" className="w-12 mx-auto"/>
                                <img src={tech5} alt="" className="w-12 mx-auto"/>
                                <img src={tech6} alt="" className="w-12 mx-auto"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:max-w-lg bg-white/95 border-4 border-[#252E37] rounded-bl-3xl rounded-br-3xl shadow-[8px_8px_0px_0px_rgba(60,75,90)] overflow-hidden">
                    <RetroNav background="bg-[#FEDD5A]">
                        <div className="flex items-center justify-end h-full gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18v18H3z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </div>
                    </RetroNav>
                    <div className="flex flex-col items-center justify-center gap-10 px-5 py-10">
                        <div className="rounded-full bg-[#FF8F9F] h-40 w-40 flex justify-center items-center">
                            <img src={download} alt="download img" className="h-20" />
                        </div>
                        <a href={Resume} download>
                            <button className="text-black opacity-75 bg-[#FEDD5A] px-6 py-4 border-2 border-[#252E37] hover:opacity-70">
                                Download My Resume
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideBar;