/* eslint-disable react/prop-types */
import { useSortable } from "@dnd-kit/sortable"
import { DOWN_ARROW_ICON, TRASH_ICON, UP_ARROW_ICON } from "../assets/image"
import BackDrop from "./BackDrop"
import { CSS } from "@dnd-kit/utilities"

const SIngleCourse = ({ item, isOpenOption, handleOptionsSelection, handleCloseOptions, handleMoveToTop, handleMoveToBottom, handleRemoveItem, index }) => {
    const { attributes, listeners, transform, transition, setNodeRef } = useSortable({ id: item.id })
    const style = {
        transition,
        transform: CSS.Transform.toString(transform)
    }
    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners} key={index} className='w-[610px] h-[63px] rounded-lg m-2 bg-white shadow-sm shadow-[#7E7E7E] flex '>
            <div className='flex items-center ml-2'>
                <svg width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <>
                        <path d="M18.3333 30C18.3333 31.8333 16.8333 33.3333 15 33.3333C13.1666 33.3333 11.6666 31.8333 11.6666 30C11.6666 28.1666 13.1666 26.6666 15 26.6666C16.8333 26.6666 18.3333 28.1666 18.3333 30ZM15 16.6666C13.1666 16.6666 11.6666 18.1666 11.6666 20C11.6666 21.8333 13.1666 23.3333 15 23.3333C16.8333 23.3333 18.3333 21.8333 18.3333 20C18.3333 18.1666 16.8333 16.6666 15 16.6666ZM15 6.66663C13.1666 6.66663 11.6666 8.16663 11.6666 9.99996C11.6666 11.8333 13.1666 13.3333 15 13.3333C16.8333 13.3333 18.3333 11.8333 18.3333 9.99996C18.3333 8.16663 16.8333 6.66663 15 6.66663ZM25 13.3333C26.8333 13.3333 28.3333 11.8333 28.3333 9.99996C28.3333 8.16663 26.8333 6.66663 25 6.66663C23.1666 6.66663 21.6666 8.16663 21.6666 9.99996C21.6666 11.8333 23.1666 13.3333 25 13.3333ZM25 16.6666C23.1666 16.6666 21.6666 18.1666 21.6666 20C21.6666 21.8333 23.1666 23.3333 25 23.3333C26.8333 23.3333 28.3333 21.8333 28.3333 20C28.3333 18.1666 26.8333 16.6666 25 16.6666ZM25 26.6666C23.1666 26.6666 21.6666 28.1666 21.6666 30C21.6666 31.8333 23.1666 33.3333 25 33.3333C26.8333 33.3333 28.3333 31.8333 28.3333 30C28.3333 28.1666 26.8333 26.6666 25 26.6666Z" fill="#7F7F7F" />
                    </>
                    <defs>
                        <clipPath id="clip0_12_10">
                            <rect width="40" height="40" fill="white" />
                        </clipPath>
                    </defs>
                </svg>

            </div>
            <div className='flex justify-center items-center ml-2'><img src={item.thumbNail} alt="loading" loading='lazy' className='w-[80px] h-[45px] rounded-lg' /></div>
            <div className='text-[11px] font-bold text-[#313131] flex  items-center ml-4 w-[250px]'>{item.courseName}</div>
            <div className='text-[11px] font-semibold text-[#313131] flex  items-center w-[75px]'>{item.price !== 'Free' ? "Rs. " + item.price + "/-" : item.price}</div>
            <div className='text-[9px] text-[#313131] flex justify-center items-center w-[75px] '><p className='bg-[#DBFFCE] p-1 rounded-sm border border-gray-300 w-[70px] text-center font-semibold'>{item.tag}</p></div>
            <div className='flex justify-center items-center ml-4 relative' onClick={() => handleOptionsSelection(index)}>
                <svg  className='' width="5" height="15" viewBox="0 0 5 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.84375 18.3125C4.84375 18.9341 4.59682 19.5302 4.15728 19.9698C3.71774 20.4093 3.1216 20.6562 2.5 20.6562C1.8784 20.6562 1.28226 20.4093 0.842718 19.9698C0.40318 19.5302 0.15625 18.9341 0.15625 18.3125C0.15625 17.6909 0.40318 17.0948 0.842718 16.6552C1.28226 16.2157 1.8784 15.9688 2.5 15.9688C3.1216 15.9688 3.71774 16.2157 4.15728 16.6552C4.59682 17.0948 4.84375 17.6909 4.84375 18.3125ZM4.84375 10.5C4.84375 11.1216 4.59682 11.7177 4.15728 12.1573C3.71774 12.5968 3.1216 12.8438 2.5 12.8438C1.8784 12.8438 1.28226 12.5968 0.842718 12.1573C0.40318 11.7177 0.15625 11.1216 0.15625 10.5C0.15625 9.8784 0.40318 9.28226 0.842718 8.84272C1.28226 8.40318 1.8784 8.15625 2.5 8.15625C3.1216 8.15625 3.71774 8.40318 4.15728 8.84272C4.59682 9.28226 4.84375 9.8784 4.84375 10.5ZM4.84375 2.6875C4.84375 3.3091 4.59682 3.90524 4.15728 4.34478C3.71774 4.78432 3.1216 5.03125 2.5 5.03125C1.8784 5.03125 1.28226 4.78432 0.842718 4.34478C0.40318 3.90524 0.15625 3.3091 0.15625 2.6875C0.15625 2.0659 0.40318 1.46976 0.842718 1.03022C1.28226 0.59068 1.8784 0.34375 2.5 0.34375C3.1216 0.34375 3.71774 0.59068 4.15728 1.03022C4.59682 1.46976 4.84375 2.0659 4.84375 2.6875Z" fill="black" />
                </svg>
                {isOpenOption[index] &&
                    <>
                        <div onClick={handleCloseOptions}>
                            <BackDrop />
                        </div>
                        <div className='w-[145px] h-[110px] bg-white rounded-lg absolute top-0 p-2 border border-gray-400 z-50 '>
                            <div className='flex justify-evenly m-1 p-1 cursor-pointer hover:bg-gray-200 rounded-lg' onClick={() => handleMoveToTop(index)}>
                                <div className='flex justify-center items-center'><img src={UP_ARROW_ICON} alt="loading" className='w-[15px] h-[15px]' /></div>
                                <div className='w-[100px] flex items-center text-[12px] ml-2'>Move To Top</div>
                            </div>
                            <div className='flex justify-evenly m-1 p-1 cursor-pointer hover:bg-gray-200 rounded-lg' onClick={() => handleMoveToBottom(index)}>
                                <div className='flex justify-center items-center'><img src={DOWN_ARROW_ICON} alt="loading" className='w-[15px] h-[15px]' /></div>
                                <div className='w-[100px] flex items-center text-[12px] ml-2'>Move To Bottom</div>
                            </div>
                            <div className='flex justify-evenly m-1 p-1 cursor-pointer hover:bg-red-200 rounded-lg' onClick={() => handleRemoveItem(index)}>
                                <div className='flex justify-center items-center'><img src={TRASH_ICON} alt="loading" className='w-[15px] h-[15px]' /></div>
                                <div className=' w-[100px] flex items-center text-[12px] text-[#FA2D2D] ml-2'>Remove</div>
                            </div>

                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default SIngleCourse
