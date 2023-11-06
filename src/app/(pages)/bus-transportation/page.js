'use client';

import Image from 'next/image';

import SummerNavigation from '../../(components)/SummerNav';
import Header from '../../(components)/Header';
import Footer from '../../(components)/Footer';

const DayCamp = () => {
  return (
    <div className='bg-gradient-to-l from-yellow-200 to-indigo-200'>
      <Header />
      <div className='h-screen overflow-y-scroll px-1 sm:grid sm:grid-cols-2'>
        {/*Column 1*/}
        <div>
          <SummerNavigation />
        </div>
        {/*Column 2*/}
        <div className='mr-4 overflow-y-scroll'>
          <Image
            src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1699283060/royalRidges/icons/GiddyUp_pmxkht.png'
            alt='summer bus service'
            width={200}
            height={200}
            className='w-1/2 flex mx-auto rounded-xl my-6'
          />
          <a
            href='https://www.ultracamp.com/clientlogin.aspx?idCamp=1145&campCode=151'
            target='_blank'
            rel='noopener noreferrer'
            className='text-yellow-400 font-extrabold text-3xl hover:underline hover:text-indigo-400 flex justify-center'
          >
            Register for Bus Service
          </a>
          <div className='my-4'>
            <h3 className='text-green-200 font-semibold text-xl'>
              East One Bus Route
            </h3>
            <h4 className='font-semibold'>
              NW Gospel Church - Camas
            </h4>
            <p className='ml-2'>7:50am - Departure Time</p>
            <p className='ml-2'>
              4:20pm - Drop Off Time&nbsp;
              <span className='font-semibold text-red-400'>
                (Final Stop)
              </span>
            </p>
            <a
              href='https://goo.gl/maps/NPJ6W8WAqDRRATzj7'
              target='_blank'
              rel='noopener noreferrer'
              className='ml-2 hover:underline text-green-200 hover:text-indigo-500'
            >
              1420 NE 3rd Avenue Camas, WA
            </a>
            <h4 className='font-semibold'>
              NW Gospel Church - East Vancouver
            </h4>
            <p className='ml-2'>8:10am - Departure Time</p>
            <p className='ml-2'>4:00pm - Drop Off Time</p>
            <a
              href='https://goo.gl/maps/hpvKZQcPRKAxzEKo9'
              target='_blank'
              rel='noopener noreferrer'
              className='ml-2 hover:underline text-green-200 hover:text-indigo-500'
            >
              305 NE 192nd Avenue Vancouver, WA
            </a>
            <hr />
            <h3 className='text-green-200 font-semibold text-xl mt-6'>
              East Two Bus Route
            </h3>
            <h4 className='font-semibold'>East Park Church</h4>
            <p className='ml-2'>8:05am - Departure Time</p>
            <p className='ml-2'>
              4:15pm - Drop Off Time&nbsp;
              <span className='font-semibold text-red-400'>
                (Final Stop)
              </span>
            </p>
            <a
              href='https://goo.gl/maps/qKhgGZcQhy5oNzPV8'
              target='_blank'
              rel='noopener noreferrer'
              className='ml-2 hover:underline text-green-200 hover:text-indigo-500'
            >
              15815 NE 18th Street Vancouver, WA
            </a>
            <p className='italic ml-2 text-xs'>
              (NE Side of parking lot)
            </p>
            <h4 className='font-semibold'>
              Fourth Plains Church of the Nazarene
            </h4>
            <p className='ml-2'>8:20am - Departure Time</p>
            <p className='ml-2'>4:00pm - Drop Off Time</p>
            <a
              href='https://goo.gl/maps/YKX8bJS4H76KNDXp6'
              target='_blank'
              rel='noopener noreferrer'
              className='ml-2 hover:underline text-green-200 hover:text-indigo-500'
            >
              16807 NE Fourth Plain Boulevard Vancouver, WA
            </a>
            <hr />
            <h3 className='text-green-200 font-semibold text-xl mt-6'>
              East Three Bus Route
            </h3>
            <h4 className='font-semibold'>
              Brush Prairie Baptist Church
            </h4>
            <p className='ml-2'>8:15am - Departure Time</p>
            <p className='ml-2'>
              4:00pm - Drop Off Time&nbsp;
              <span className='font-semibold text-red-400'>
                (Final Stop)
              </span>
            </p>
            <a
              href='https://goo.gl/maps/Lewa8HyenUBhNw2q9'
              target='_blank'
              rel='noopener noreferrer'
              className='ml-2 hover:underline text-green-200 hover:text-indigo-500'
            >
              11814 NE 117th Avenue Vancouver, WA
            </a>
            <h4 className='font-semibold'>
              Battle Ground Baptist Church
            </h4>
            <p className='ml-2'>8:30am - Departure Time</p>
            <p className='ml-2'>3:50pm - Drop Off Time</p>
            <a
              href='https://goo.gl/maps/cTXDh6qwmtNUxHHQ7'
              target='_blank'
              rel='noopener noreferrer'
              className='ml-2 hover:underline text-green-200 hover:text-indigo-500'
            >
              1110 NW 6th Avenue Battle Ground, WA
            </a>
            <p className='italic ml-2 text-xs mb-2'>
              (Front parking lot)
            </p>
            <hr />
            <h3 className='text-green-200 font-semibold text-xl mt-6'>
              West One Bus Route
            </h3>
            <h4 className='font-semibold'>
              Vancouver Vineyard Church
            </h4>
            <p className='ml-2'>7:45am - Departure Time</p>
            <p className='ml-2'>
              4:25pm - Drop Off Time&nbsp;
              <span className='font-semibold text-red-400'>
                (Final Stop)
              </span>
            </p>
            <a
              href='https://goo.gl/maps/MT7CptBMtWGPALaj6'
              target='_blank'
              rel='noopener noreferrer'
              className='ml-2 hover:underline text-green-200 hover:text-indigo-500'
            >
              2007 East 12th Street Vancouver, WA
            </a>
            <p className='italic ml-2 text-xs'>
              (South parking lot next to The Portal)
            </p>
            <h4 className='font-semibold'>City Harvest Church</h4>
            <p className='ml-2'>8:05am - Departure Time</p>
            <p className='ml-2'>4:00pm - Drop Off Time</p>
            <a
              href='https://goo.gl/maps/WUrB2xMB1T1FbZFT7'
              target='_blank'
              rel='noopener noreferrer'
              className='ml-2 hover:underline text-green-200 hover:text-indigo-500 mb-2'
            >
              8100 NW 9th Avenue Vancouver, WA
            </a>
            <hr />
            <h3 className='text-green-200 font-semibold text-xl mt-6'>
              West Two Bus Route
            </h3>
            <h4 className='font-semibold'>
              Albertsons at Salmon Creek
            </h4>
            <p className='ml-2'>8:15am - Departure Time</p>
            <p className='ml-2'>4:05pm - Drop Off Time</p>
            <a
              href='https://goo.gl/maps/uwcH583GVrLgoi61A'
              target='_blank'
              rel='noopener noreferrer'
              className='ml-2 hover:underline text-green-200 hover:text-indigo-500'
            >
              14300 NE 20th Avenue Vancouver, WA
            </a>
            <p className='italic ml-2 text-xs mb-2'>
              (North side by Dumpster)
            </p>
            <hr />
            <h3 className='text-green-200 font-semibold text-xl mt-6'>
              West Three Bus Route
            </h3>
            <h4 className='font-semibold'>La Center Church</h4>
            <p className='ml-2'>7:50am - Departure Time</p>
            <p className='ml-2'>
              4:20pm - Drop Off Time&nbsp;
              <span className='font-semibold text-red-400'>
                (Final Stop)
              </span>
            </p>
            <a
              href='https://goo.gl/maps/B4EQXNsazyMuFy4e9'
              target='_blank'
              rel='noopener noreferrer'
              className='ml-2 hover:underline text-green-200 hover:text-indigo-500'
            >
              111 E 5th Street LaCenter, WA
            </a>
            <p className='italic ml-2 text-xs'>
              (South parking lot - bus on the street)
            </p>
            <h4 className='font-semibold'>
              Ridgefield Church of the Nazarene
            </h4>
            <p className='ml-2'>8:10am - Departure Time</p>
            <p className='ml-2'>4:00pm - Drop Off Time</p>
            <a
              href='https://goo.gl/maps/HMZbNaLseeihz8ZY9'
              target='_blank'
              rel='noopener noreferrer'
              className='ml-2 hover:underline text-green-200 hover:text-indigo-500'
            >
              747 Pioneer Street Ridgefield, WA
            </a>
          </div>
          <hr />
          <div className='my-4'>
            <p>
              Please arrive at least 10 minutes prior to the times
              posted. Please understand that bus times are subject to
              change
            </p>
            <p>
              <span className='text-red-700 font-semibold'>
                NOTICE
              </span>{' '}
              All times are{' '}
              <span className='text-red-700 underline'>
                DEPARTURE
              </span>{' '}
              times.
            </p>
            <p>
              <span className='text-red-700 font-semibold'>
                NOTICE
              </span>{' '}
              The bus{' '}
              <span className='text-red-700 underline'>
                WILL NOT WAIT
              </span>
              . The bus will proceed to the next stop. This is true in
              the AM & PM.
            </p>
            <p>
              <span className='text-red-700 font-semibold'>
                PARENTS
              </span>
              : We need your help. You{' '}
              <span className='text-red-700 underline'>
                ARE REQUIRED
              </span>{' '}
              to <span className='text-red-700 underline'>SIGN</span>{' '}
              for the release of your child at the evening stops. You
              can help speed this process by:
            </p>
            <p className='italic ml-2'>
              a) Arriving at the stop 10 minutes before the posted
              return time.
            </p>
            <p className='italic ml-2'>
              b) Moving promptly from your car to the bus upon
              arrival.
            </p>
            <p className='italic ml-2'>
              c) Encouraging your child to wear the bus wrist band at
              all times.
            </p>
            <p className='italic ml-2'>
              d) Knowing the color and number of your child's wrist
              band.
            </p>
            <p className='italic ml-2'>
              e) Requesting your children in numerical order of the
              wrist band.
            </p>
            <p>
              Parents at the NEXT stop will appreciate your help in
              avoiding delay of bus departure.
            </p>
          </div>
          <a
            href='https://www.ultracamp.com/clientlogin.aspx?idCamp=1145&campCode=151'
            target='_blank'
            rel='noopener noreferrer'
            className='text-yellow-400 font-extrabold text-3xl text-center hover:underline hover:text-indigo-400 flex justify-center py-10'
          >
            Register for Bus Service
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DayCamp;
