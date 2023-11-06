import Image from 'next/image';
import Link from 'next/link';

import Mission from '/images/icons/MissionIcon.png';
import Faith from '/images/icons/FaithIcon.png';
import Staff from '/images/icons/StaffIcon.png';
import Newsletter from '/images/icons/NewsletterIcon.png';
import AboutIcon from '/images/icons/AboutIcon.png';

// import Header from '../components/header';
// import Footer from '../components/footer';

export default function About() {
  return (
    <div className='bg-gradient-to-l from-yellow-200 to-green-200'>
      {/* <Header /> */}
      <div className='max-w-6xl mx-auto'>
        <div className='flex justify-center'>
          <Image
            alt='about'
            src={AboutIcon}
            className='w-1/12 mt-1'
          />
        </div>

        {/* Icons */}
        <div className='grid grid-cols-2 gap-2 mx-2 h-screen'>
          <div className='flex items-center justify-center'>
            <Link href={'/mission'}>
              <Image
                alt='mission'
                src={Mission}
                className='w-40 md:w-64 mt-8 mx-auto'
              />
            </Link>
          </div>
          {/* Trigger Netlify build */}
          <div className='flex items-center justify-center'>
            <a
              href='https://hardcore-khorana-19151f.netlify.app'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                alt='newsletter'
                src={Newsletter}
                className='w-40 md:w-64 mt-8 mx-auto'
              />
            </a>
          </div>
          <div className='flex items-center justify-center'>
            <Link href={'/staff'}>
              <Image
                alt='staff'
                src={Staff}
                className='w-40 md:w-64 mt-8 mx-auto'
              />
            </Link>
          </div>
          <div className='flex items-center justify-center'>
            <Link href={'/statement-of-faith'}>
              <Image
                alt='faith'
                src={Faith}
                className='w-40 md:w-64 mt-8 mx-auhref'
              />
            </Link>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}