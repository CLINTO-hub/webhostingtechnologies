'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Icon } from '@iconify/react';

// Dynamically import the Lottie Player to avoid SSR issues
const Player = dynamic(
  () => import('@lottiefiles/react-lottie-player').then(mod => mod.Player),
  { ssr: false }
);

const Payment = () => {
  return (
    <section className='py-10'>
      <div className='container px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-center'>
          {/* Animation Section */}
          <div className='lg:col-span-6 flex justify-center'>
            <Player
              autoplay
              loop
              src='/animations/robotanimation.json'
              style={{ height: '300px', width: '100%', maxWidth: '500px' }}
            />
          </div>

          {/* Text Content Section */}
          <div className='lg:col-span-6 flex flex-col gap-5 items-center lg:items-start text-center lg:text-start'>
            <h2 className='text-midnight_text text-2xl sm:text-3xl lg:text-4xl leading-tight'>
              It’s time to transform your business with smart technology.
            </h2>
            <p className='text-black/75 text-base sm:text-lg max-w-2xl'>
              Whether you need custom software, AI solutions, or scalable ERP systems, we craft powerful digital tools that streamline operations, enhance productivity, and future-proof your business.
            </p>
            <Link
              href='/'
              className='text-primary hover:text-blue-700 text-lg font-medium flex items-center gap-2'
            >
              Learn more
              <Icon icon='tabler:arrow-right' className='text-2xl' />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
