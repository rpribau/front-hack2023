import React from "react";

function Form() {
    return (
        <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray">
            <h1 className="text-5xl font-semibold">Login User</h1>
            <p className="font-medium text-lg text-gray-500 mt-4">Please enter your username and password</p>
            <div className="mt-8">
                <div>
                    <label className="text-lg font-medium">Username</label>
                    <input className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                        placeholder="Enter your username"></input>
                </div>
                <div>
                    <label className="text-lg font-medium">Password</label>
                    <input className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                        placeholder="Enter your password"
                        type="password"></input>
                </div>
                <div className="mt-8 flex justify-between items-center">
                    <button className="font-medium text-base text-violet-500">Forgot password</button>
                </div>
                <div className="mt-8 flex flex-col gap-y-4">
                    <button className="active:scale-[.98] active:duration-75 
                    hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl 
                    bg-violet-500 text-white text-lg font-bold">Sign in</button>
                </div>
            </div>
        </div>
    )
}

export default Form;