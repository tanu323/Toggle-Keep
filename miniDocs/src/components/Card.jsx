import React from 'react';
import { FaRegFileCode } from "react-icons/fa";
import { MdOutlineDownloading } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const Card = ({ data, reference }) => {
    return (
        <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.2 }} dragElastic={0.1} dragTransition={{ bounceStiffness: 100, bounceDamping: 200 }} className='relative flex-shrink-0 text-[14px] h-60 w-48 rounded-[30px] bg-zinc-600/90 text-white px-6 py-8 overflow-hidden'>
            <FaRegFileCode />
            <p className='py-6 leading-tight font-semibold'>
                {data.description}
            </p>
            <div className='footer absolute inset-x-0 bottom-0 h-20'>
                <div className='flex items-center justify-between px-6 '>
                    <h5>{data.filesize}</h5>
                    <span className='w-5.5 h-5.5 bg-slate-400 rounded-full items-center justify-center p-2'>
                        {data.close ? <IoClose /> : <MdOutlineDownloading />}</span>
                </div>
                {
                    data.tag.isOpen ?
                        (<div className={`tag w-full h-12 ${data.tag.tagColor === "blue" ? "bg-blue-500" : "bg-green-600"}  flex items-center justify-center`}>
                            <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                        </div>) : null
                }
            </div>
        </motion.div >
    )
}

export default Card
