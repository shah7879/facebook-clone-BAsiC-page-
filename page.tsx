export default function Home (){
  return (
  
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      {/*Left side */}
      <div className="text-3xl w-1/2 px-8">
        <img src={"/facebook.svg"} width={300} height={100} alt="Facebook logo" />
        <p className="ml-8 -mt-3">Facebook helps you connect and share with the people in your life. </p>
      </div>
      {/*Rihgt side */}
      <div className="bg-white flex flex-col p-5 rounded-xl w-1/3">
        <input className="my-2 border border-1 border-gray-200 p-3 focus:outline outline-blue-500" type="text"placeholder="Email or phone number" />
        <input className="my-2 border border-1 border-gray-200 p-3 focus:outline outline-blue-500" type="Password"placeholder="Password" />
        <button className="bg-blue-500 my-2 text-lg font-bold text-white rounded-md hover:bg-blue-600">Log in</button>
        <p className="cursor-pointer text-blue-500 text-sm my-2 text-center hover:underline">Forgotton Password</p>
        <span className="my-2">
          <hr />
        </span>
        <button className="bg-green-500 my-2 py-2 text-lg font-bold text-white rounded-md hover:bg-green-600 w-fit mx-auto">Create new account</button>
      </div>
    </div>
  )
}