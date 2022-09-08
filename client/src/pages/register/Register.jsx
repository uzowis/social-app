import React from 'react'

export const Register = () => {
  return (
    <div className="bg-gray-100 w-full h-screen overflow-auto xs:overflow-auto">
        <div className="xs:pt-3 grid grid-cols-1 xl:px-40 px-5 lg:pt-32 lg:px-10 lg:grid-cols-2 xs:px-10 xs:grid-cols-1 " >
           <div className="xs:w-[400px] xs:mx-auto lg:pt-2 lg:w-full lg:px-3 xs:py-10 py-5 my-auto justify-center">
                <h3 className="xs:text-center xs:text-5xl lg:text-6xl text-4xl text-primary font-extrabold font-poppins lg:text-left ">friendscon</h3>
                <p className=" xs:text-2xl text-gray-900 text-left lg:text-3xl font-300 font-roboto tracking-wide text-lg pt-3 xs:pt-5 px-7 xs:px-0 hidden xs:inline-block">Friendscon helps connect friends and families across the globe.</p>
           </div>

           <div >
                <div className=" bg-white h-full xs:mt-0 mt-5  rounded-lg shadow-lg w-full xs:w-[400px] xs:mx-auto ">
                    <form className=" flex flex-col px-4 pt-5 lg:space-y-3 xs:space-y-2 space-y-4">
                        <input type="text" placeholder="Username" className=" rounded ring-1 ring-gray-300 focus:ring-1 focus:ring-primary focus:outline-none  lg:h-[45px] p-5 placeholder:text-lg xs:h-[30px]"/>
                        <input type="text" placeholder="Firstname" className=" rounded ring-1 ring-gray-300 focus:ring-1 focus:ring-primary focus:outline-none  lg:h-[45px] p-5 placeholder:text-lg xs:h-[30px]"/> 
                        <input type="text" placeholder="Surname" className=" rounded ring-1 ring-gray-300 focus:ring-1 focus:ring-primary focus:outline-none  lg:h-[45px] p-5 placeholder:text-lg xs:h-[30px]"/> 
                        <input type="text" placeholder="Email - example@gmail.com" className=" rounded ring-1 ring-gray-300 focus:ring-1 focus:ring-primary focus:outline-none  lg:h-[45px] p-5 placeholder:text-lg xs:h-[30px]"/>
                        <input placeholder="Password" type="password"  className="rounded ring-1 ring-gray-300 focus:ring-1 focus:ring-primary focus:outline-none  lg:h-[45px] p-5 placeholder:text-lg xs:h-[30px]"/>
                        <input placeholder="Confirm Password" type="password"  className="rounded ring-1 ring-gray-300 focus:ring-1 focus:ring-primary focus:outline-none  lg:h-[45px] p-5 placeholder:text-lg xs:h-[30px]"/>

                        <button className="bg-primary lg:py-3 xs:py-2 py-2 rounded-lg text-2xl text-white font-semibold hover:bg-[#712fd4] transform transition-all">Sign Up</button>
                        <a href="" className="text-center text-blue-700 cursor-pointer hover:underline">Forgotten password?</a>
                        <hr />
                        <button className="bg-green-500 lg:py-3 xs:py-2 py-2 rounded-lg text-xl text-white font-semibold hover:bg-green-600 transform transition-all w-60 self-center">Sign In</button>

                    </form>

                </div>
                <div className="max-h-[500px] xs:w-[400px] w-full mt-2 xs:mx-auto mx-auto tex" >
                    <p className="text-center "><span className="font-bold">Create a Page</span> for a celebrity, brand or business.</p>
                </div>
                
           </div>

        </div>
    </div>
  )
}
