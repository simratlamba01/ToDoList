import React from 'react'
import Logo from "../../Assets/Images/brightspotapp_logo.jpg"

const Header = () => {
    return (
        <>
            <nav class="bg-white shadow shadow-gray-300 w-100 py-4 px-8 md:px-auto border border-b-2 border-gray-500 border-t-0 border-x-0">
                <div class="mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">

                    <div class="text-indigo-500 md:order-1">
                        <img src={Logo} className='w-8' />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header


