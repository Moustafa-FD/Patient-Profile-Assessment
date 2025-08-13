import { House, ChevronLeft, ScrollText, LogOut,  ClipboardPlus, Pencil, Flame, Circle, CircleCheckBig    } from 'lucide-react';
import './patientProfile.css';
import logo from './../../assets/logo.svg';
import pfp from './../../assets/pfp.jpg';

export default function PatientProfile(useProps) {





    return (
        <div className="flex flex-row h-screen w-screen">
            <div className="flex flex-col w-2/42 bg-[#845CC0] h-100vh items-center pt-10 gap-10 pb-10">
                <img src={logo} alt="" className='w-14' />

                <div className="pt-12 flex flex-col gap-12 ">
                    <House size={38} strokeWidth={1.2}/>
                    <ChevronLeft size={38} strokeWidth={1.2}/>
                    <ScrollText size={38} strokeWidth={1.2}/>
                </div>
                    
                <LogOut size={38} strokeWidth={1.2} className='mt-auto'/>
            </div>

            <div className="w-full h-full bg-cover bg-no-repeat">

                <div className='w-full h-1/5 bg-white pt-2 px-5 shadow-lg'>
                    <p className='h-1/12 text-[#4D4482] font-semibold text-m'><b>DashBoard </b>  / WimTach Client</p>
                    
                    <div className='h-9/12 mt-6 flex flex-row gap-x-5 px-10 max-h-full overflow-hidden items-center'>

                        <div className='flex flex-row gap-5 w-5/12'>
                            <img src={pfp} alt="" className='w-10 h-10 rounded-4xl h-14 w-14' />
                            
                            <div className='text-black pt-2 flex flex-col gap-1'>
                                <h1 className='font-semibold'>Wimtach Client</h1>
                                <p>Last Active: Mar 20, 2019 23:14</p>
                                <button className='p-2.5  bg-[#845CC0] rounded-lg text-white font-semibold'>Dischard Patient</button>
                            </div>

                        </div>

                        <div className='border-2 border-[#DEE2E6] rounded-2xl w-5/12 text-black h-30/32 overflow-hidden'>
                            
                            <div className='flex flex-row flex-wrap p-5 gap-y-5'>
                                <div className='w-1/3'>
                                    <h1 className='text-[#4D4482] text-sm'>Patient Profile</h1>
                                    <p className='font-semibold'>(555) 555-5555</p>
                                </div>
                                <div className='w-2/3'>
                                     <h1 className='text-[#4D4482] text-sm'>Email:</h1>
                                    <p className='font-semibold'>wimtachclient@hotmail.com</p>
                                </div>
                                <div className='w-1/3'>
                                     <h1 className='text-[#4D4482] text-sm'>Injury Location:</h1>
                                    <p className='font-semibold'>Right</p>
                                </div>
                                <div className='w-2/3'>
                                     <h1 className='text-[#4D4482] text-sm'>Diagnosis:</h1>
                                    <p className='font-semibold'>Other specified malgnant neoplasm of skin, unspecified - C4499</p>
                                </div>
                            </div>
                            

                        </div>


                        <div className='flex flex-col justify-center bg-[#adb5bd] h-15 w-15 items-center rounded-2xl gap-5 shadow-xl/20'>
                            <Pencil size={33} strokeWidth={2}/>
                        </div>

                    </div>

                </div>

                <div className="mainContent h-4/5 px-10 pt-10 flex flex row gap-30">
                        
                    <div className='w-2/3 h-full flex flex-col gap-10'>

                        <div className='flex flex-row gap-15 h-5/24 bg-white text-black rounded-2xl shadow-md border-1 border-[#DEE2E6]'>
                            
                            <div className='flex flex-col h-full w-2/3 p-5'>
                                <div className='flex flex-row w-full justify-between'>
                                    <h1 className='text-xl'>New HEP for Wimtach Client</h1>
                                    <p className='text-sm'>Edited <b>16 hourse ago</b></p>
                                </div>

                                <div className='flex flex-row gap-h pt-6 w-full justify-around items-center'>
                                    <div className='flex flex-col gap-2 items-center'>
                                        <p>Sessions per Day</p>
                                        <h1 className='font-bold text-xl'>5</h1>
                                    </div>

                                    <div className='h-full w-1 border-l-1' />

                                    <div className='flex flex-col gap-2 items-center'>
                                        <p>Total Reps</p>
                                        <h1 className='font-bold text-xl'>254</h1>
                                    </div>

                                </div>

                            </div>

                            <div className='bg-[#e791d9] w-1/3 h-full text-white flex items-center justify-center rounded-r-2xl'>
                                <h1 className='text-xl'>Edit HEP</h1>
                            </div>

                        </div>


                        <div className='bg-white h-10/24 rounded-2xl shadow-md border-1 border-[#DEE2E6] p-5 text-black'>
                            <h1 className='text-xl w-full pb-1 border-b-1' >Patient Education</h1>
                            <h2 className='pt-1'>Comming Soon</h2>

                        </div>

                    </div>

                    <div className='w-1/3 h-full flex flex-col gap-10'>

                        {/* week card */}
                        <div className='flex flex-row rounded-2xl h-1/3 bg-white rounded-2xl text-[#6c757d] '>
                            <div className='w-2/3 h-full'>
                                <div className='flex flex-row justify-between p-5'>
                                    <div>
                                        <h1 className='text-xl font-bold'>Stats</h1>
                                        <p className=''>for Period 3</p>
                                    </div>

                                    <div>
                                        <h2 className='font-semibold'>Streaks</h2>
                                        <p className='flex flex-row justify-around items-center pt-2'>1 <Flame size={26}/></p>
                                    </div>
                                </div>

                                <div className='w-full flex flex-row justify-around px-2 pt-2 text-sm  divide-x-1 divide-gray-300'>
                                    <div className='flex flex-col items-center justify-center pr-2'> <Circle size={26} strokeWidth={1.3}/>  <p>Wed</p></div>
                                    <div className='flex flex-col items-center justify-center pr-2'> <Circle size={26} strokeWidth={1.3}/>  <p>Thur</p></div>
                                    <div className='flex flex-col items-center justify-center pr-2'> <Circle size={26} strokeWidth={1.3}/>  <p>Fri</p></div>
                                    <div className='flex flex-col items-center justify-center pr-2'> <CircleCheckBig size={26} strokeWidth={1.3} color='#008cffff'/>  <p>Sat</p></div>
                                    <div className='flex flex-col items-center justify-center pr-2'> <Circle size={26} strokeWidth={1.3}/>  <p>Sun</p></div>
                                    <div className='flex flex-col items-center justify-center pr-2'> <Circle size={26} strokeWidth={1.3}/>  <p>Mon</p></div>
                                    <div className='flex flex-col items-center justify-center pr-2'> <Circle size={26} strokeWidth={1.3}/>  <p>Today</p></div>
                             
                                </div>


                                <div className='flex flex-row pt-8 justify-around items-center '>
                                    <div className='flex flex-col items-center justify-center'>
                                        <h1>Weeks Enrolled</h1>
                                        <h1>9</h1>
                                    </div>

                                    <div className='border-2 h-full w-1/12 border-gray-300'/>

                                    <div className='flex flex-col items-center justify-center'>
                                        <h1>Compliance</h1>
                                        <h1>16/30</h1>
                                    </div>
                                </div>
                            </div>

                            <div className='w-5/12 bg-yellow-300 h-full rounded-r-2xl'>

                            </div>
                        </div>

                        <div className='bg-[#2196f3] rounded-2xl w-full h-3/24 '>
                            <div className='flex flex-row items-center font-bold p-3 h-full justify-center'>
                                <h1 className='text-3xl justify-self-start'>$</h1>
                                <h1 className='text-xl'>View Billing Details</h1>
                            </div>
                        </div>

                    </div>



                </div>


            </div>
        </div>
    );
}