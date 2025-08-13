import { Flame, Circle, CircleCheckBig    } from 'lucide-react';
import { useParams } from 'react-router-dom';
import './patientProfile.css';

import NavBar from '../../Components/NavBar.jsx';
import Header from '../../Components/Header.jsx';

export default function PatientProfile() {

    const { id } = useParams();
    let patient = {
        name: "Wimtach Client",
        phone: "(555) 555-5555",
        email: "wimtachclient@hotmail.com",
        injury: "Right",
        diagnosis: "Other specified malgnant neoplasm of skin, unspecified - C4499",
        sessionPerDate: 5,
        totalReps: 254
    }


    return (
        <div className="flex flex-row h-screen w-screen overflow-hidden">
            
            <NavBar/>

            <div className="w-full h-full bg-cover bg-no-repeat">

                <Header patient={patient}/>

                <div className="mainContent h-4/5 px-10 pt-10 flex flex-row gap-30">
                        
                    <div className='w-2/3 h-full flex flex-col gap-10'>

                        <div className='flex flex-row h-5/24 bg-white text-black rounded-2xl shadow-md border-1 border-[#DEE2E6]'>
                            
                            <div className='flex flex-col h-full justify-between w-2/3 p-4'>
                                <div className='flex flex-row w-full justify-between'>
                                    <h1 className='text-xl'>New HEP for Wimtach Client</h1>
                                    <p className='text-sm'>Edited <b>16 hourse ago</b></p>
                                </div>

                                <div className='flex flex-row gap-h w-full justify-center gap-20 items-center'>
                                    <div className='flex flex-col gap-2 items-center'>
                                        <p>Sessions per Day</p>
                                        <h1 className='font-bold text-xl'>{patient.sessionPerDate ?? "Unavalible"}</h1>
                                    </div>

                                    <div className='dividerbig' />

                                    <div className='flex flex-col gap-2 items-center'>
                                        <p>Total Reps</p>
                                        <h1 className='font-bold text-xl'>{patient.totalReps ?? "Unavalible"}</h1>
                                    </div>

                                </div>

                            </div>

                            <div className='bg-[#e791d9] w-1/3 h-full text-white flex items-center justify-center rounded-r-2xl clickable'>
                                <h1 className='text-xl font-bold'>Edit HEP</h1>
                            </div>

                        </div>


                        <div className='bg-white h-fit rounded-2xl shadow-md border-1 border-[#DEE2E6] p-5 text-black'>
                            <h1 className='text-xl w-full pb-1 border-b-1' >Patient Education</h1>
                            <h2 className='pt-1'>Comming Soon</h2>
                            <div className='h-full flex justify-center'> <img className='h-[20vh]' src="/placeholder.png" alt="/placeholder.png"/></div>
                           
                        </div>

                    </div>

                    <div className='w-1/3 h-full flex flex-col gap-10'>

                        <div className='flex flex-row rounded-2xl h-1/3 bg-white rounded-2xl text-[#6c757d] '>
                            <div className='flex flex-col justify-between w-2/3 h-full pb-5'>
                                <div className='flex flex-row justify-between h-3/12 p-5'>
                                    <div>
                                        <h1 className='text-xl font-bold'>Stats</h1>
                                        <p className=''>for Period 3</p>
                                    </div>

                                    <div>
                                        <h2 className='font-semibold'>Streaks</h2>
                                        <p className='flex flex-row justify-center gap-2 items-center text-lg'>1 <Flame size={26}/></p>
                                    </div>
                                </div>

                                <div className='w-full h-4/12 flex flex-row justify-around px-2 pt-8 text-sm items-center'>
                                    <div className='callenderItem'> <Circle size={26} strokeWidth={1.3}/>  <p>Wed</p></div>
                                    <div className='dividerSmall'/>
                                    <div className='callenderItem'> <Circle size={26} strokeWidth={1.3}/>  <p>Thur</p></div>
                                    <div className='dividerSmall'/>
                                    <div className='callenderItem'> <Circle size={26} strokeWidth={1.3}/>  <p>Fri</p></div>
                                    <div className='dividerSmall'/>
                                    <div className='callenderItem'> <CircleCheckBig size={26} strokeWidth={1.3} color='#008cffff'/>  <p>Sat</p></div>
                                    <div className='dividerSmall'/>
                                    <div className='callenderItem'> <Circle size={26} strokeWidth={1.3}/>  <p>Sun</p></div>
                                    <div className='dividerSmall'/>
                                    <div className='callenderItem'> <Circle size={26} strokeWidth={1.3}/>  <p>Mon</p></div>
                                    <div className='dividerSmall'/>
                                    <div className='callenderItem'> <Circle size={26} strokeWidth={1.3}/>  <p>Today</p></div>
                             
                                </div>


                                <div className='flex flex-row pt-8 justify-around items-center h-3/12'>
                                    <div className='flex flex-col items-center justify-center'>
                                        <h1>Weeks Enrolled</h1>
                                        <h1>9</h1>
                                    </div>

                                    <div className='dividerbig'/>

                                    <div className='flex flex-col items-center justify-center'>
                                        <h1>Compliance</h1>
                                        <h1>16/30</h1>
                                    </div>
                                </div>
                            </div>

                            <div className='w-5/12 bg-[#eea63a] h-full rounded-r-2xl flex items-center justify-center text-white font-bold text-xl clickable'>
                                View Stats
                            </div>
                        </div>

                        <button className='bg-[#2196f3]  rounded-2xl w-full h-3/24 clickableWithScale'>
                            <div className='flex flex-row items-center font-bold p-3 h-full justify-around'>
                                <h1 className='text-3xl text-start'>$</h1>
                                <h1 className='text-xl w-5/6 text-center'>View Billing Details</h1>
                            </div>
                        </button>

                    </div>



                </div>


            </div>
        </div>
    );
}