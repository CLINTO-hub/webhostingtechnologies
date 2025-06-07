import Image from 'next/image'
import Link from 'next/link'

const Banner = () => {
  return (
    <section className='relative bg-header pt-28 lg:pb-14 overflow-hidden'>
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className='absolute top-0 left-0 w-full h-full object-cover z-0'
      >
        <source src="/videos/banner.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay (optional, for darkening the video slightly) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10" />

      {/* Content */}
      <div className='relative z-20 container'>
        <div className='grid gap-5 grid-cols-1 lg:grid-cols-12 content-center'>
          <div className='lg:col-span-7 flex flex-col justify-center relative'>
            <Image
              src='/images/hero/star.svg'
              alt='star-image'
              width={95}
              height={97}
              className='absolute top-[-74px] right-[51px] opacity-10'
            />
            <Image
              src='/images/hero/lineone.svg'
              alt='line-image'
              width={190}
              height={148}
              className='absolute top-[-74px] right-[51px] opacity-5'
            />
            <Image
              src='/images/hero/linetwo.svg'
              alt='line-image'
              width={190}
              height={148}
              className='hidden xl:block absolute bottom-[-74px] right-[-38rem] opacity-5'
            />
            <div className='flex flex-col gap-5'>
              <h1 className='text-6xl max-w-2xl leading-16 text-blue-600 text-center lg:text-start mx-auto lg:mx-0 pt-5'>
                Build Smarter Software, Faster.
              </h1>
              <p className='text-white/75 text-lg font-normal text-center lg:text-start max-w-lg mx-auto lg:mx-0'>
                We craft scalable web and mobile solutions tailored to your business. From MVPs to full-scale products, we turn your ideas into powerful digital experiences.
              </p>

              <div className='mx-auto lg:mx-0'>
                <Link href={'/#pricing'}>
                  <button className='text-white text-xl font-medium py-4 px-8 rounded-full transition duration-300 border border-primary bg-primary hover:bg-transparent hover:cursor-pointer hover:text-primary'>
                    Get started
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className='mt-10 lg:mt-0 lg:col-span-5'>
            <div>
              <Image
                src='/images/hero/banner.webp'
                alt='nothing'
                width={698}
                height={652}
                className='w-full'
              />
            </div>
          </div>
        </div>

      </div>

    </section>


  )
}

export default Banner
