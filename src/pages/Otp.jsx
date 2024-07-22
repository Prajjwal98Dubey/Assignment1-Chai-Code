import { useState } from 'react'
import './Otp.css'
import Brand from './Brand'
const Otp = () => {
    const [number, setNumber] = useState({ 0: "", 1: "", 2: "", 3: "" })
    const [isVerified, setIsVerified] = useState(null);
    const handleVerification = () => {
        console.log("clicked")
        if (number[0] == "" || number[1] == "" || number[2] == "" || number[3] == "") return alert("Otp not valid.")
        let t = '';
        for (let val in number) {
            t += number[val]
        }
        if (t === '1234') {
            setIsVerified(true)
            return
        }
        setIsVerified(false)
        return
    }
    return (
        <div>
            <div className='text-4xl font-extrabold text-white flex justify-center p-4 items-center'>Chai aur Code</div>
            <div className='flex justify-center'>
                <div className='w-[650px] h-[450px] bg-white rounded-lg'>
                    <div className='text-2xl font-bold flex justify-center p-4 items-center'>Mobile Phone Verification</div>
                    <div className='flex justify-center p-2 items-center'>
                        <div className='w-[370px] h-[66px] font-semibold text-[#BFBFBF]'>
                            <div className='flex justify-center'>
                                Enter the 4-digit verification code that was sent to
                            </div>
                            <div className='flex justify-center'>
                                your phone number.
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center p-3 items-center'>
                        <input type='number' className={`w-[75px] h-[85px] bg-[#DBE2EF] p-2 m-2 text-4xl font-bold text-center rounded-lg border  ${isVerified === null ? 'border-[#112D4E]' : isVerified ? ' border-[#23CF9B]' : 'border-[#EB2D5B]'}`} onChange={(e) => setNumber({ ...number, 0: e.target.value })} />
                        <input type='number' className={`w-[75px] h-[85px] bg-[#DBE2EF] p-2 m-2 text-4xl font-bold text-center rounded-lg border  ${isVerified === null ? 'border-[#112D4E]' : isVerified ? ' border-[#23CF9B]' : 'border-[#EB2D5B]'}`} onChange={(e) => setNumber({ ...number, 1: e.target.value })} />
                        <input type='number' className={`w-[75px] h-[85px] bg-[#DBE2EF] p-2 m-2 text-4xl font-bold text-center rounded-lg border  ${isVerified === null ? 'border-[#112D4E]' : isVerified ? ' border-[#23CF9B]' : 'border-[#EB2D5B]'}`} onChange={(e) => setNumber({ ...number, 2: e.target.value })} />
                        <input type='number' className={`w-[75px] h-[85px] bg-[#DBE2EF] p-2 m-2 text-4xl font-bold text-center rounded-lg border  ${isVerified === null ? 'border-[#112D4E]' : isVerified ? ' border-[#23CF9B]' : 'border-[#EB2D5B]'}`} onChange={(e) => setNumber({ ...number, 3: e.target.value })} />
                    </div>
                    <div className='flex justify-center'>
                        <button disabled={isVerified!==null} className={`w-[350px] h-[55px] ${isVerified === null ? "bg-[#112D4E]" : isVerified === true ? 'bg-[#23CF9B]' : 'bg-[#EB2D5B]'} text-center text-white rounded-lg `} onClick={handleVerification}>
                            {isVerified === null ? 'Verify Account' : isVerified === true ? 'Verified' : 'Verification failed'}
                        </button>
                    </div>
                    <div className='flex justify-center text-[#BFBFBF] p-2 items-center'>
                        Didn&apos;t recieve code? <span className='text-[#112D4E] font-semibold'> Resend</span>
                    </div>
                </div>
            </div>
            <Brand/>
        </div>
    )
}
export default Otp
