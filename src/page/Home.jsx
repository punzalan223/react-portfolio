import CarbonSense from '../img/projects/carbon_sense.jpg'
import Devp from '../img/projects/DEVP_system.jpg'
import Egc from '../img/projects/EGC_system.jpg'
import FaceRecognition from '../img/projects/face_recognition.jpg'
import FilipinoClassifieds from '../img/projects/filipino-classifieds.png'
import Gis from '../img/projects/gis.png'
import HrPortal from '../img/projects/hrportal.png'
import Keeper from '../img/projects/Keeper.jpg'
import Nwllc from '../img/projects/nwnllc.png'
import AlaskaList from '../img/projects/alaska_list.jpg'
import CampaignsUsa from '../img/projects/campaigns_usa.jpg'
import RobYundt from '../img/projects/rob_yundt.jpg'

export function Home() {
    return (
        <>
            <div className="flex flex-col gap-12">
                <div className="flex flex-col gap-4">
                    <p className="text-2xl text-center">About Me</p>
                    <p className="opacity-75 text-dark">
                        I'm a dedicated individual who loves to explore and learn. Reading is a big part of my life, as it opens up new worlds and perspectives. Whenever I have some free time, you can find me hitting the gym or working out, keeping my body active and healthy. Technology is another passion of mine, and I'm always excited to learn about the latest trends and frameworks. And when I want to unwind and have some fun, playing games is my go-to. These habits and interests make me a well-rounded person who's always eager to grow and embrace new experiences.
                    </p>
                </div>
                <div>
                    <p className="text-2xl text-center">Experiences</p>
                    <ul aria-label="Alternative changelog feed" role="feed" className="relative flex flex-col gap-12 py-12 text-sm px-6 lg:px-0 before:absolute before:top-0 before:left-6 lg:before:left-[8.5rem] before:h-full before:border before:-translate-x-1/2 before:border-slate-200 before:border-dashed after:absolute after:top-6 after:left-6 lg:after:left-[8.5rem] after:bottom-6 after:border after:-translate-x-1/2 after:border-slate-200">
                        <li role="article" className="relative pl-6 lg:pl-0 lg:flex lg:gap-12 before:absolute before:z-10 before:left-0 lg:before-left-1 before:top-2 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-emerald-500 before:ring-2 before:ring-white">
                            <h4 className="hidden text-base font-medium leading-7 text-gray-500 text-opacity-75 lg:w-28 lg:text-right lg:block">March 2021</h4>
                            <div className="flex flex-col flex-1 gap-2">
                                <h3 className="text-base font-medium leading-7 text-black opacity-75">Database Admin Assistant Intern <span className="font-normal text-gray-500 text-opacity-75 lg:hidden"> - 2023-01-21</span></h3>
                                <p className="max-w-2xl text-gray-500 text-opacity-75">Database management and handling company’s data so it can be accessed, updated and managed</p>
                            </div>
                        </li>
                        <li role="article" className="relative pl-6 lg:pl-0 lg:flex lg:gap-12 before:absolute before:z-10 before:left-0 lg:before-left-1 before:top-2 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-emerald-500 before:ring-2 before:ring-white">
                            <h4 className="hidden text-base font-medium leading-7 text-gray-500 text-opacity-75 lg:w-28 lg:text-right lg:block">2023-01-21</h4>
                            <div className="flex flex-col flex-1 gap-2">
                                <h3 className="text-base font-medium leading-7 text-black opacity-75">Associate Software Developer <span className="font-normal text-gray-500 text-opacity-75 lg:hidden"> - 2023-01-21</span></h3>
                                <p className="max-w-2xl text-gray-500 text-opacity-75">Contributed to developing dynamic web applications and platforms, specializing in Laravel, Livewire, and Tailwind CSS for optimized user experiences.</p>
                                <ul className="pl-5 text-gray-500 text-opacity-75 list-disc opacity-75 marker:text-black">
                                    <li>Built and optimized responsive user interfaces using Tailwind CSS and Alpine.js.</li>
                                    <li>Implemented backend features with Laravel, integrating APIs and enhancing system performance.</li>
                                    <li>Collaborated on projects like Filipino ClassNameifieds to streamline online marketplaces.</li>
                                </ul>
                            </div>
                        </li>
                        <li role="article" className="relative pl-6 lg:pl-0 lg:flex lg:gap-12 before:absolute before:z-10 before:left-0 lg:before-left-1 before:top-2 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-emerald-500 before:ring-2 before:ring-white">
                            <h4 className="hidden text-base font-medium leading-7 text-gray-500 text-opacity-75 lg:w-28 lg:text-right lg:block">2023-01-18</h4>
                            <div className="flex flex-col flex-1 gap-2">
                                <h3 className="text-base font-medium leading-7 text-black opacity-75">Full Stack Developer <span className="font-normal text-gray-500 text-opacity-75 lg:hidden"> - 2024-05-24</span></h3>
                                <p className="max-w-2xl text-gray-500 text-opacity-75">Working on building robust, scalable web applications using Laravel, Livewire, Alpine.js, and Tailwind CSS. Focused on providing both frontend and backend solutions to create seamless user experiences while optimizing system performance and functionality.</p>
                                <ul className="pl-5 text-gray-500 text-opacity-75 list-disc opacity-75 marker:text-black">
                                    <li>Designed and developed dynamic features using Laravel, ensuring high performance and scalability.</li>
                                    <li>Implemented interactive frontend components with Alpine.js for a smooth user experience.</li>
                                    <li>Optimized responsive web design with Tailwind CSS, ensuring compatibility across devices.</li>
                                    <li>Utilized best practices in code architecture and testing to maintain a high-quality codebase.</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col">
                    <p className="text-2xl text-center">Projects</p>
                    <div className="grid self-center max-w-xl gap-4 mt-4 text-center">
                        <p className="text-black opacity-75">Over the years, I've had the privilege of working on a diverse range of projects, each one contributing to my growth as a developer.</p>
                    </div>
                    <div className="grid mt-12 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-16">
                        <div className='flex flex-col gap-4'>
                            <img src={CarbonSense} alt="" className='object-cover w-full h-32' />
                            <div className='flex flex-col'>
                                <div className='flex flex-col gap-2'>
                                    <p className='text-black opacity-75'>Carbon Sense</p>
                                    <p className='text-sm text-gray-500 opacity-75'>
                                        A comprehensive solution for monitoring Carbon emissions from motorcycle
                                    </p>
                                    <p className="text-sm text-left text-gray-500 opacity-75">
                                        Status: <span className="text-green-700 opacity-75">Completed</span>
                                    </p>
                                </div>
           
                            </div>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <img src={Devp} alt="" className='object-cover w-full h-32' />
                            <div className='flex flex-col'>
                                <div className='flex flex-col gap-2'>
                                    <p className='text-black opacity-75'>Devp</p>
                                    <p className='text-sm text-gray-500 opacity-75'>
                                        A platform for scanning E-Gift Cards for redemption and tracking statistics.
                                    </p>
                                    <p className="text-sm text-left text-gray-500 opacity-75">
                                        Status: <span className="text-green-700 opacity-75">Completed</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <img src={Egc} alt="" className='object-cover w-full h-32' />
                            <div className='flex flex-col'>
                                <div className='flex flex-col gap-2'>
                                    <p className='text-black opacity-75'>EGC</p>
                                    <p className='text-sm text-gray-500 opacity-75'>
                                        A platform for uploading E-Gift Cards and managing redemption with statistics.
                                    </p>
                                    <p className="text-sm text-left text-gray-500 opacity-75">
                                        Status: <span className="text-green-700 opacity-75">Completed</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <img src={FaceRecognition} alt="" className='object-cover w-full h-32' />
                            <div className='flex flex-col'>
                                <div className='flex flex-col gap-2'>
                                    <p className='text-black opacity-75'>HR Face Recognition</p>
                                    <p className='text-sm text-gray-500 opacity-75'>
                                    A face recognition system designed for HR departments to streamline attendance.
                                    </p>
                                    <p className="text-sm text-left text-gray-500 opacity-75">
                                        Status: <span className="text-green-700 opacity-75">Completed</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <img src={FilipinoClassifieds} alt="" className='object-cover w-full h-32' />
                            <div className='flex flex-col'>
                                <div className='flex flex-col gap-2'>
                                    <p className='text-black opacity-75'>Filipino Classifieds</p>
                                    <p className='text-sm text-gray-500 opacity-75'>
                                        A classifieds platform for Filipinos to connect, buy, sell, and explore job.
                                    </p>
                                    <p className="text-sm text-left text-gray-500 opacity-75">
                                        Status: <span className="text-orange-700 opacity-75">Pending</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <img src={Gis} alt="" className='object-cover w-full h-32' />
                            <div className='flex flex-col'>
                                <div className='flex flex-col gap-2'>
                                    <p className='text-black opacity-75'>GIS (POS) System</p>
                                    <p className='text-sm text-gray-500 opacity-75'>
                                        A POS system tailored for the trending Japan Gashapon machines in the Philippines.
                                    </p>
                                    <p className="text-sm text-left text-gray-500 opacity-75">
                                        Status: <span className="text-green-700 opacity-75">Completed</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <img src={HrPortal} alt="" className='object-cover w-full h-32' />
                            <div className='flex flex-col'>
                                <div className='flex flex-col gap-2'>
                                    <p className='text-black opacity-75'>Lurtsema HR Portal</p>
                                    <p className='text-sm text-gray-500 opacity-75'>
                                        A centralized portal for managing employee records, attendance, and HR workflows.
                                    </p>
                                    <p className="text-sm text-left text-gray-500 opacity-75">
                                        Status: <span className="text-green-700 opacity-75">Completed</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <img src={Keeper} alt="" className='object-cover w-full h-32' />
                            <div className='flex flex-col'>
                                <div className='flex flex-col gap-2'>
                                    <p className='text-black opacity-75'>Keeper</p>
                                    <p className='text-sm text-gray-500 opacity-75'>
                                        A frontend UI tailored for seamless deployment processes, enhancing user experience.
                                    </p>
                                    <p className="text-sm text-left text-gray-500 opacity-75">
                                        Status: <span className="text-green-700 opacity-75">Completed</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <img src={Nwllc} alt="" className='object-cover w-full h-32' />
                            <div className='flex flex-col'>
                                <div className='flex flex-col gap-2'>
                                    <p className='text-black opacity-75'>Nortwest Nurses</p>
                                    <p className='text-sm text-gray-500 opacity-75'>
                                        A platform similar to Indeed, designed specifically for Northwest nurses.
                                    </p>
                                    <p className="text-sm text-left text-gray-500 opacity-75">
                                        Status: <span className="text-green-700 opacity-75">Completed</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <img src={AlaskaList} alt="" className='object-cover w-full h-32' />
                            <div className='flex flex-col'>
                                <div className='flex flex-col gap-2'>
                                    <p className='text-black opacity-75'>The Alaska List</p>
                                    <p className='text-sm text-gray-500 opacity-75'>
                                        A classified platform tailored for Alaska, connecting locals with opportunities.
                                    </p>
                                    <p className="text-sm text-left text-gray-500 opacity-75">
                                        Status: <span className="text-green-700 opacity-75">Completed</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <img src={CampaignsUsa} alt="" className='object-cover w-full h-32' />
                            <div className='flex flex-col'>
                                <div className='flex flex-col gap-2'>
                                    <p className='text-black opacity-75'>Campaigns USA</p>
                                    <p className='text-sm text-gray-500 opacity-75'>
                                        A platform offering online courses and resources focused on marketing campaigns
                                    </p>
                                    <p className="text-sm text-left text-gray-500 opacity-75">
                                        Status: <span className="text-orange-700 opacity-75">Pending</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <img src={RobYundt} alt="" className='object-cover w-full h-32' />
                            <div className='flex flex-col'>
                                <div className='flex flex-col gap-2'>
                                    <p className='text-black opacity-75'>Rob Yundt Legislative</p>
                                    <p className='text-sm text-gray-500 opacity-75'>
                                        A platform for publishing and disseminating legislative content.
                                    </p>
                                    <p className="text-sm text-left text-gray-500 opacity-75">
                                        Status: <span className="text-orange-700 opacity-75">Pending</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}