import React from 'react'
import { FaEnvelope, FaPhoneAlt , FaFacebookF, FaTwitter , FaInstagram, FaLinkedinIn} from 'react-icons/fa';
import logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='py-20 bg-slate-200'>
      <div className='container mx-auto px-5'>
        <div className='grid md:grid-cols-3'>
            <div>
              <img className='w-16 h-16 object-cover' src={logo} alt="logo" />
              <h3 className='text-xl font-semibold'>Sports academies</h3>
              <p>Worlds best Sports academies</p>
            </div>
            <div>
              <h3 className='text-2xl font-semibold mb-4'>Contact Us</h3>
              <div className='flex items-center gap-2 text-base font-semibold mb-2'>
                  <FaPhoneAlt></FaPhoneAlt>
                  <p>01722824160</p>
              </div>
              <div className='flex items-center gap-2 text-base font-semibold'>
                  <FaEnvelope></FaEnvelope>
                  <p>developerridoy11@gmail.com</p>
              </div>
            </div>
            <div>
                <h3 className='text-2xl font-semibold mb-4'>follow us</h3>
                <div className='flex gap-2'>
                    <Link to={`https://web.facebook.com/wdridoy11`} target='_blank' className='text-xl bg-black text-white p-3 rounded-full'>
                        <FaFacebookF />
                    </Link>
                    <Link to={`https://twitter.com/wdridoy11`} target='_blank' className='text-xl bg-black text-white p-3 rounded-full'>
                        <FaTwitter />
                    </Link>
                    <Link to={`https://www.instagram.com/wdridoy11`} target='_blank' className='text-xl bg-black text-white p-3 rounded-full'>
                        <FaInstagram />
                    </Link>
                    <Link to={`https://www.linkedin.com/in/wdridoy11`} target='_blank' className='text-xl bg-black text-white p-3 rounded-full'>
                        <FaLinkedinIn />
                    </Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer