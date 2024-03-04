import React from 'react'
const ProfileInfo = [
    {
        id: 1,
        name: "Simrat Lamba",
        email: "simrat.lamba@gmail.com",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
    }
]
const Profile = () => {
    return (
        <>
            <div class=" flex flex-wrap items-center  justify-center  ">
                <div class=" bg-white  shadow-lg ">
                    <div class=" h-32 overflow-hidden" >
                        <img class="w-full" src="https://images.unsplash.com/photo-1707343844152-6d33a0bb32c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <div class="flex justify-center px-5  -mt-12">
                        <img class="h-32 w-32 bg-white p-2 rounded-full" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

                    </div>
                    {ProfileInfo.map((items) => (
                        <div class=" " key={items.id}>
                            <div class="text-center md:px-14 px-8">
                                <h2 class="text-gray-800 text-3xl font-bold">{items.name}</h2>
                                <a class="text-gray-400 mt-2 hover:text-blue-500" href="#">{items.email}</a>
                                <p class="mt-2 text-gray-500 text-sm">{items.desc} </p>
                            </div>
                            <hr class="mt-6" />
                            <div class="flex  bg-gray-50 ">
                                <a class="text-blue-700 hover:text-blue-500 w-1/2 text-center p-4 hover:bg-gray-100" href="/todo">
                                    Create Task
                                </a>
                                <div class="border"></div>
                                <a class="text-blue-700 hover:text-blue-500 w-1/2 text-center p-4 hover:bg-gray-100" href="/weather">
                                    Check Weather
                                </a>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Profile