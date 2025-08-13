import pfp from './../assets/pfp.jpg';
import { Pencil } from 'lucide-react';

export default function Header(props) {

    return (
        <div className='w-full h-1/5 bg-white pb-2 px-5 shadow-lg'>
            
            
            <div className='flex flex-row gap-x-5 h-full overflow-hidden items-center'>
                
                <div className='w-5/12 h-full flex flex-col justify-around'>
                    <p className='text-[#4D4482] font-semibold clickable'><b>DashBoard </b>  / WimTach Client</p>
                    <div className='flex flex-row gap-5 pl-4'>
                        <img src={pfp} alt="" className='w-10 h-10 rounded-4xl h-14 w-14' />
                    
                        <div className='text-black pt-2 flex flex-col gap-1'>
                            <h1 className='font-semibold'>{props.patient.name ?? "Unavalible"}</h1>
                            <p>Last Active: Mar 20, 2019 23:14</p>
                            <button className='p-2.5  bg-[#845CC0] rounded-lg text-white font-semibold clickableWithScale'>Dischard Patient</button>
                        </div>
                    </div>
                </div>

                <div className='border-2 border-[#DEE2E6] rounded-2xl w-5/12 text-black h-fit'>
                    
                    <div className='flex flex-row flex-wrap p-2 gap-y-3 h-full'>
                        <div className='w-1/3'>
                            <h1 className='text-[#4D4482] text-sm'>Patient Profile</h1>
                            <p className='font-semibold'>{props.patient.phone ?? "Unavalible"}</p>
                        </div>
                        <div className='w-2/3'>
                                <h1 className='text-[#4D4482] text-sm'>Email:</h1>
                            <p className='font-semibold'>{props.patient.email ?? "Unavalible"}</p>
                        </div>
                        <div className='w-1/3'>
                                <h1 className='text-[#4D4482] text-sm'>Injury Location:</h1>
                            <p className='font-semibold'>{props.patient.injury ?? "Unavalible"}</p>
                        </div>
                        <div className='w-2/3'>
                                <h1 className='text-[#4D4482] text-sm'>Diagnosis:</h1>
                            <p className='font-semibold'>{props.patient.diagnosis ?? "Unavalible"}</p>
                        </div>
                    </div>
                    

                </div>


                <div className='flex flex-col justify-center bg-[#adb5bd] h-15 w-15 items-center rounded-2xl gap-5 shadow-xl/20 clickableWithScale'>
                    <Pencil size={33} strokeWidth={2}/>
                </div>

            </div>

        </div>

    );
}