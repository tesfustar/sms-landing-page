import React from 'react'
import { Link } from 'react-router-dom'

const Pending = () => {
  return (
    <div className='flex items-center justify-center min-h-screen '>
    <div className='flex items-center justify-center w-full h-96 py-10 p-2'>
      <div className='max-w-xl mx-auto flex flex-grow flex-col rounded-md p-2 space-y-2
       justify-center items-center bg-[#17203F] py-4'>
      <div className='flex flex-col space-y-3 items-center justify-center'>
      <h2 className='font-medium text-center text-white text-xl'>Thank you for your submission, please wait while we are verify your company information.</h2>
      <h2 className=' text-center text-white lg'>You will receive a text message on 09xxxxxxxx as soon as the verification is complete.</h2>
      </div>
      <a  href='http://sms-dashboard.smsethiopia.com/'>
      <button className='font-bold bg-white rounded-md p-2 px-4 text-[#17203F] '>Go to dashboard</button>
      </a>
      </div>
      
    </div>
    </div>
  )
}

export default Pending