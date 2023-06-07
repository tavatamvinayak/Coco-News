"use client"

import Link from 'next/link'
import React, { useState } from 'react'

import { MdOutlineSegment } from 'react-icons/md';
import { AiOutlineSearch, AiFillCloseCircle } from 'react-icons/ai'
import { useRouter } from 'next/navigation';
function Navbar() {
    const router = useRouter()
    const [InputTextField, setInputTextField] = useState("");
    const [ShowInput, setShowInput] = useState("hidden");
    const [ShowNav, setShowNav] = useState("hidden");
    const searchNews = (e) => {
        e.preventDefault();
        const searchText = InputTextField.trim()
        router.push(`/search/top-headlines/${searchText}`)
    }
    const showInput = () => {
        setShowInput("")
    };
    const closeInput = () => {
        setShowInput("hidden")
    }
    const NavMobile = () => {
        setShowNav("")
    }
    return (
        <>
            <header className="text-gray-600 body-font px-10">
                <div className="container mx-auto flex flex-wrap p-5 flex-row justify-between md:flex-row items-center">
                    <Link href={`/`} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <span className="ml-3 text-5xl">Coco-News</span>
                    </Link>
                    <div className='flex justify-end'>

                        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center hidden sm:block">
                            <Link href={`/`} className="mr-5 hover:text-gray-900">Home</Link>
                            <Link href={`/usa`} className="mr-5 hover:text-gray-900">USA</Link>
                            <Link href={`/india`} className="mr-5 hover:text-gray-900">India</Link>

                        </nav>
                        <div className=' hidden sm:block  '>
                            <div className='flex justify-around items-center'>
                                <form onSubmit={searchNews} className={`${ShowInput}`}  >
                                    <input type="text" onChange={(e) => setInputTextField(e.target.value)} className='w-[90%] border border-2 border-green-400 px-3' />
                                </form>
                                <AiOutlineSearch className={`text-2xl `} onClick={showInput} />
                            </div>
                            
                                </div>
                                </div>

                                <div className='sm:hidden  '  >
                                    <MdOutlineSegment className={`text-3xl`} onClick={NavMobile} />

                                    <div className={`absolute top-16 right-5 ${ShowNav}`}>
                                        <div className='w-[100%] h-20 border border-2 border-red-400  flex'>
                                            <form onSubmit={searchNews} className={` p-1 ${ShowInput}`}  >
                                                <input type="text" onChange={(e) => setInputTextField(e.target.value)} className='w-[90%] rounded-lg  border border-2 border-green-400 px-3' />
                                                <button><AiOutlineSearch className='text-2xl' /></button>
                                            </form>
                                            <AiFillCloseCircle className='text-2xl' onClick={closeInput} />
                                            <AiOutlineSearch className={`text-2xl `} onClick={showInput} />
                                        </div>
                                    </div>
                                </div>

                        </div>

                    </header >
                </>
                )
}

                export default Navbar
