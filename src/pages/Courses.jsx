
import { useState } from 'react'
import './Courses.css'
import { courseData } from './couserdata'
import Brand from './Brand'
import { closestCenter, DndContext } from '@dnd-kit/core'
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import SIngleCourse from './SIngleCourse'

const Courses = () => {
    const [items, setItems] = useState(courseData)
    const [isOpenOption, setIsOpenOption] = useState(Array(courseData.length).fill(false))
    const handleOptionsSelection = (index) => {
        let newOptions = []
        for (let i = 0; i < isOpenOption.length; i++) {
            if (index === i) newOptions[i] = true
            else newOptions[i] = false
        }
        setIsOpenOption(newOptions)
    }
    const handleCloseOptions = () => {
        let newOptions = []
        for (let i = 0; i < isOpenOption.length; i++) {
            newOptions[i] = false
        }
        setIsOpenOption(newOptions)
    }
    const handleMoveToTop = (index) => {
        let newOrder = []
        newOrder.push(items[index])
        for (let i = 0; i < items.length; i++) {
            if (index !== i) newOrder.push(items[i])
        }
        handleCloseOptions()
        setItems(newOrder)
    }
    const handleMoveToBottom = (index) => {
        let newOrder = []
        for (let i = 0; i < items.length; i++) {
            if (index !== i) newOrder.push(items[i])
        }
        newOrder.push(items[index])
        handleCloseOptions()
        setItems(newOrder)
    }
    const handleRemoveItem = (index) => {
        let newItems = items.filter((item, i) => i !== index)
        handleCloseOptions()
        setItems(newItems)
    }
    const onDragEnd = (e) => {
        const { active, over } = e
        if (active.id === over.id) return
        setItems((items) => {
            const oldIndex = items.findIndex((item) => item.id === active.id)
            const newIndex = items.findIndex((item) => item.id === over.id)
            return arrayMove(items, oldIndex, newIndex)
        })
    }
    return (
        <div id="course-body">
            <div className='flex justify-center p-4 items-center text-[#4F6F52] font-bold text-4xl'>Chai aur Code</div>
            <div className='flex justify-center'>
                <div className='w-[700px] h-[500px] bg-white rounded-lg'>
                    <div className='m-1 flex justify-start font-bold text-[30px] p-1 items-start text-[#313131]'>Manage Bundle</div>
                    <div className='m-1 flex justify-start font-bold p-1  items-start text-[#4B4747]'>Change orders of the products based on priority</div>
                        <div className='m-2'>
                    <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
                            {items.length == 0 ? <div className='flex justify-center p-2 items-center font-bold text-2xl'>No Course to display.</div> :
                                <SortableContext items={items} strategy={verticalListSortingStrategy}>
                                    {items.map((item, index) => (
                                        <SIngleCourse index={index} key={index} item={item} isOpenOption={isOpenOption} handleCloseOptions={handleCloseOptions} handleMoveToBottom={handleMoveToBottom} handleMoveToTop={handleMoveToTop} handleRemoveItem={handleRemoveItem} handleOptionsSelection={handleOptionsSelection} />
                                    ))
                                    }
                                </SortableContext>
                            }
                    </DndContext>
                        </div>
                </div>
            </div>
            <Brand />
        </div>
    )
}

export default Courses
