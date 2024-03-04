import React from 'react';
import ToDoListing from '../components/ToDoList/ToDoList';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const TodoList = () => {

    return (
        <>
            <Header />
            <section className='py-8 flex items-center bg-gray-300'>
                <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 w-full'>
                    <div className='flex flex-wrap'>
                        <h1 className='font-bold xl:text-4xl text-2xl text-gray-700 mb-8 px-4'>Add Tasks</h1>
                    </div>
                    <div className='flex flex-wrap'>
                        <ToDoListing />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default TodoList;
