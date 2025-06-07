import { NextResponse } from 'next/server'

import { headerItem } from '@/app/types/menu'
import { featureData } from '@/app/types/featuredata'
import { socialLinksData } from '@/app/types/sociallinks'
import { plansData } from '@/app/types/plans'
import { footerlLinksData } from '@/app/types/footerlinks'

const HeaderData: headerItem[] = [
  { label: 'Product', href: '/#product' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Services', href: '/#features ' },
  { label: 'Contact Us', href: '/#contact ' },
]

const FeatureData: featureData[] = [
  {
    imgSrc: '/images/features/software.svg',
    heading: 'Custom Software Solutions',
    paragraph:
      'Tailor-made software to fit your business needs. Scalable, secure, and built just for you.',
  },
  {
    imgSrc: '/images/features/erp.svg',
    heading: 'ERP Software',
    paragraph:
      'Centralize your operations with powerful ERP systems. Streamline inventory, HR, sales, and more.',
  },
  {
    imgSrc: '/images/features/ai-ml.svg',
    heading: 'AI & ML Solutions',
    paragraph:
      'Leverage artificial intelligence and machine learning to automate tasks and gain deeper insights.',
  },
  {
    imgSrc: '/images/features/web.svg',
    heading: 'Web Design & Development',
    paragraph:
      'Responsive and modern websites that convert. Built with performance and user experience in mind.',
  },
  {
    imgSrc: '/images/features/app.svg',
    heading: 'App Design & Development',
    paragraph:
      'Create seamless mobile experiences. Android, iOS, or hybrid apps — we bring your ideas to life.',
  },
  {
    imgSrc: '/images/features/marketing.svg',
    heading: 'Logo designing',
    paragraph:
      'Boost your online presence with strategic marketing and stunning logo designs that speak your brand.',
  },
]

const PlansData: plansData[] = [
  {
    heading: 'Lite',
    price: {
      monthly: 19,
      yearly: 190,
    },
    subscriber: 0.5,
    button: 'Purchase',
    option: [
      'Basic invoice generation',
      'Downloadable PDF invoice',
      'Unlimited transactions',
      'Emails for all the updates',
    ],
    category: ['monthly', 'yearly'],
    imgSrc: '/images/pricing/starone.svg',
  },
  {
    heading: 'Basic',
    price: {
      monthly: 29,
      yearly: 290,
    },
    subscriber: 0.5,
    button: 'Purchase',
    option: [
      'All Lite features',
      'Custom invoice templates',
      'Tax calculation support',
      'Automatic invoice reminders',
    ],
    category: ['monthly', 'yearly'],
    imgSrc: '/images/pricing/startwo.svg',
  },
  {
    heading: 'Plus',
    price: {
      monthly: 59,
      yearly: 590,
    },
    subscriber: 0.5,
    button: 'Purchase',
    option: [
      'All Basic features',
      'Multi-currency support',
      'Invoice payment tracking',
      'Priority customer support',
    ],
    category: ['monthly', 'yearly'],
    imgSrc: '/images/pricing/starthree.svg',
  },
]

const FooterLinks: footerlLinksData[] = [
  { label: 'Product', href: '/#product' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Sercives', href: '/#features ' },
  { label: 'Contact Us', href: '/#contact ' },
]

const SocialLinks: socialLinksData[] = [
  {
    imgSrc: 'fa-brands:facebook-f',
    link: 'www.facebook.com',
    width: 10,
  },
  {
    imgSrc: 'fa6-brands:instagram',
    link: 'www.instagram.com',
    width: 14,
  },
  {
    imgSrc: 'fa6-brands:twitter',
    link: 'www.twitter.com',
    width: 14,
  },
]

export const GET = () => {
  return NextResponse.json({
    HeaderData,
    FeatureData,
    PlansData,
    FooterLinks,
    SocialLinks,
  })
}
