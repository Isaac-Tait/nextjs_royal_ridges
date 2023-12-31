'use client';

import Header from '../../(components)/Header';
import Footer from '../../(components)/Footer';

const Success = () => {
  return (
    <div className='bg-gradient-to-l from-yellow-200 to-indigo-200'>
      <Header />
      <div className='bg-yellow-200 h-screen'>
        <div className='grid place-content-center'>
          <p className='mt-4 text-2xl text-gray-600'>
            Your message was successfully delivered. Someone will be
            in touch with you shortly.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Success;
