import { useRef, useState } from 'react'
import './Batches.css'
import { batchesData } from './couserdata'
import { LEFT_ARROW_ICON, RIGHT_ARROW_ICON } from '../assets/image'
import Brand from './Brand'
const Batches = () => {
    const [items, setItems] = useState(batchesData)
    const [pages, setPages] = useState(0)
    const [rows, setRows] = useState(3)
    const [searchedText, setSearchedText] = useState("")
    const focusRef = useRef(null)
    window.addEventListener('keydown',(e)=>{
        if(e.altKey && e.key==='k'){
            if(focusRef.current!==null) focusRef.current.focus()
        }
    })
    const handleRightPagination = () => {
        setPages(pages + rows)
    }
    const handleLeftPagination = () => {
        setPages(pages - rows)
    }
    const handleSearch = () => {
        if (searchedText === "") return alert("Write some text to be searched.")
        let originalItems = batchesData
        let newItems = originalItems.filter((item) => item.title.toLowerCase().includes(searchedText.toLowerCase()))
        setItems(newItems)
    }
    return (
        <>
        <div id="batches-body" className='overflow-auto'>
            <div className='text-[#444B79] flex justify-center p-2 items-center font-extrabold text-4xl'>Chai aur Code</div>
            <div className='flex justify-center'>
                <div className='w-[980px] max-h-max p-5 rounded-lg bg-white mb-3'>
                    <div className='ml-4 mt-4 font-bold text-2xl text-[#313131]'>Batches</div>
                    <div className='ml-4 mt-1 text-sm text-[#4B4747]'>Create learner&apos;s batch and share information at the same time.</div>
                    <div className='ml-4 mt-2'>
                        <input ref={focusRef} type="text" className=' p-2 w-[332px] h-[43px] rounded-md border border-gray-200' placeholder='Search by Title (alt + k or cmd + k)' value={searchedText} onChange={(e) => setSearchedText(e.target.value)} />
                        <button className='bg-[#6C6BAF] text-white text-center rounded-md ml-2 w-[116px] h-[43px]' onClick={handleSearch}>Search</button>
                    </div>
                    <table className='ml-4 mt-3 mr-4'>
                        <tbody>
                        <tr className=''>
                            <th className='w-[350px] h-[40px] border  text-left bg-gray-100 font-bold text-[#4B4747] text-[15px] pl-3 '>Title</th>
                            <th className='w-[120px] h-[40px] border  text-left bg-gray-100 font-bold text-[#4B4747] text-[15px] pl-3 '>Start Date</th>
                            <th className='w-[120px] h-[40px] border  text-left bg-gray-100 font-bold text-[#4B4747] text-[15px] pl-3 '>End Date</th>
                            <th className='w-[130px] h-[40px] border  text-left bg-gray-100 font-bold text-[#4B4747] text-[15px] pl-3 '>Price</th>
                            <th className='w-[150px] h-[40px] border  text-left bg-gray-100 font-bold text-[#4B4747] text-[15px] pl-3 '>Validity/Expiry</th>
                            <th className='w-[140px] h-[40px] border  text-left bg-gray-100 font-bold text-[#4B4747] text-[15px] pl-3 '>Status</th>
                        </tr>
                        {
                            items.slice(pages, pages + rows).map((item, index) => 
                                // <div  key ={index}>
                                    <tr key={index} className={`border ${index === item.length - 1 ? 'border-b-black' : 'border-b-transparent'} m-2`}>
                                        <td className={`pl-3 pt-4 border border-b-transparent `}>
                                            <div className='flex justify-around'>
                                                <div className='w-[100px] h-[50px] flex justify-start'><img src={item.thumbnail} alt="loading" loading='lazy' className='w-[90px] h-[45px] rounded-md' /></div>
                                                <div className='text-[12px] m-1 w-[250px] flex justify-start'>{item.title}</div>
                                            </div>
                                        </td>
                                        <td className='text-[13px] pl-3 pt-4 border border-b-transparent'>{item.start}</td>
                                        <td className='text-[13px] pl-3 pt-4 border border-b-transparent'>{item.end}</td>
                                        <td className='text-[13px] pl-3 pt-4 border border-b-transparent'>₹ {item.price}</td>
                                        <td className='text-[13px] pl-3 pt-4 border border-b-transparent'>{item.validity} days </td>
                                        <td className='text-[13px] pl-3 pt-4 border border-b-transparent'>
                                            <span className={`${item.status === 'Published' ? 'bg-[#7bd779] border border-green-500' : 'bg-[#A4A4A4] border border-gray-600'} p-[3px] rounded-sm text-[#3c3838] text-center text-[12px]`}>{item.status}</span>
                                        </td>
                                    </tr>)
                                
  
                        }
</tbody>
                    </table>
                    <div className='flex justify-end'>
                        <div className='flex mt-5 items-center'>
                            <div className='text-[11px]'>Rows per Page</div>
                            <div className='ml-2 text-[11px] w-[30px] border border-gray-400'>
                                <select onChange={(e) => setRows(parseInt(e.target.value))}>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                        </div>
                        <div className='flex justify-end mr-10 mt-5'>
                            <img src={LEFT_ARROW_ICON} alt="loading" className={`w-[25px] h-[25px] m-2 ${pages === 0 ? 'cursor-not-allowed ' : 'cursor-pointer'}`} onClick={() => { pages === 0 ? null : handleLeftPagination() }} />
                            <img src={RIGHT_ARROW_ICON} alt="loading" className={`w-[25px] h-[25px] m-2 ${pages + rows >= items.length ? 'cursor-not-allowed' : 'cursor-pointer'}`} onClick={() => { pages + rows >= items.length ? null : handleRightPagination() }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Brand/>
        </>
    )
}

export default Batches
