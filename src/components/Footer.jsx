import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className=''>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo} className='mb-5 w-32 ' alt="" />
                <p className='w-full md:w-2/3 text-gray-600 text-justify'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque laborum qui animi doloribus, ab nam ratione eveniet molestiae deleniti eos, soluta minima officiis architecto? Sint dolorum molestiae quis perspiciatis blanditiis.
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCE</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+880 1889354418</li>
                    <li>shayon808@gmail.com</li>
                </ul>
            </div>
        </div>
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>copyright 2024@ forever.com - All Right Reserved.</p>
            </div>
    </div>
  )
}

export default Footer