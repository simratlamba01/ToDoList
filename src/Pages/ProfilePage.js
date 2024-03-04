import React from 'react'
import Logo from "../Assets/Images/brightspotapp_logo.jpg"
import Profile from '../components/Profile/Profile'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const LoginPage = () => {
    return (
        <>

            <Header />
            <section className='py-8 md:min-h-screen flex items-center bg-gray-300'>
                <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 w-full'>
                    <div className='flex flex-wrap'>
                        <div className='loginLeftCol lg:basis-2/5 basis-full shrink-0 grow-0 px-4 md:h-screen flex items-center justify-center md:rounded-l-2xl md:py-0 py-4'>
                            <img src={Logo} className='' />
                        </div>
                        <div className='loginRightCol lg:basis-3/5 basis-full shrink-0 grow-0 bg-white md:rounded-r-2xl flex items-center px-8 justify-center flex-col md:py-0 py-8'>
                            <h1 className='xl:text-4xl text-2xl text-gray-700 font-bold text-left mb-8'>My Profile</h1>
                            <Profile />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default LoginPage