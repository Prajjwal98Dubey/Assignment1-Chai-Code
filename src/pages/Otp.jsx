import { useEffect, useRef, useState } from 'react'
import './Otp.css'
import Brand from './Brand'
import NavBar from './NavBar'
const Otp = () => {
    const [number, setNumber] = useState({ 0: "", 1: "", 2: "", 3: "" })
    const [isVerified, setIsVerified] = useState(null);
    const [inputArr] = useState(Array(4).fill(""))
    const inputRef = useRef([])
    const [focus, setFocus] = useState(0)
    let numberSet = new Set()
    for (let i = 0; i < 10; i++) {
        numberSet.add(i.toString())
    }
    useEffect(() => {
        if (inputRef.current[focus]) {
            inputRef.current[focus].focus()
        }
    }, [focus])
    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace') {
            e.preventDefault()
            if (number[index] !== "") setNumber({ ...number, [index]: "" })
            setFocus(Math.max(0, focus - 1))
        }
    }
    const handleVerification = () => {
        if (number[0] == "" || number[1] == "" || number[2] == "" || number[3] == "") return alert("otp not valid.")
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
        <>
        <NavBar/>
        <div id="otp-body">
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
                        {inputArr.map((i, index) => (
                            <div key={index}>
                                <input ref={(e) => inputRef.current[index] = e} className={`w-[75px] h-[85px] bg-[#DBE2EF] p-2 m-2 text-4xl font-bold text-center rounded-lg border  ${isVerified === null ? 'border-[#112D4E]' : isVerified ? ' border-[#23CF9B]' : 'border-[#EB2D5B]'}`} value={number[index]} onChange={(e) => {
                                    if (numberSet.has(e.target.value.charAt(e.target.value.length - 1))) {
                                        setNumber({ ...number, [index]: e.target.value.charAt(e.target.value.length - 1) })
                                        setFocus(Math.min(focus + 1, 3))
                                    }
                                }} onKeyDown={(e) => handleKeyDown(e, index)} />
                            </div>
                        ))}
                    </div>
                    <div className='flex justify-center'>
                        <button type='submit' disabled={isVerified !== null} className={`w-[350px] h-[55px] ${isVerified === null ? "bg-[#112D4E]" : isVerified === true ? 'bg-[#23CF9B]' : 'bg-[#EB2D5B]'} text-center text-white rounded-lg `} onClick={handleVerification}>
                            {isVerified === null ? 'Verify Account' : isVerified === true ? 'Verified' : 'Verification failed'}
                        </button>
                    </div>
                    <div className='flex justify-center text-[#BFBFBF] p-2 items-center'>
                        Didn&apos;t recieve code? <span className='text-[#112D4E] font-semibold'> Resend</span>
                    </div>
                </div>
            </div>
            <Brand />
        </div>
        </>
    )
}
export default Otp
