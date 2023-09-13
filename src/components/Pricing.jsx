import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logomark } from '@/components/Logo'



const plans = [
  {
    name: 'Small',
    featured: false,
    price: { Monthly: '2 weeks', Annually: '0' },
    description:
      'You’re releasing it in two weeks but want to do it right. Get started now please!',
    button: {
      label: 'Buy now!',
      href: 'https://tables.area120.google.com/authform/bmhaF9EbhcvdZrD5JR1kbu/t/aZurRVtI9YD6nFD7hRjOZQ9UDaW3VeweDdFaNHOSrOteb0WalBNDH0Nc5yMP9h__Vj',
    },
    features: [
      'Ongoing Release Notes',
      'Small Doc Request A',
      'Small Doc Request B',
    ],
    logomarkClassName: 'fill-gray-300',
  },
  {
    name: 'Medium',
    featured: false,
    price: { Monthly: '4 weeks', Annually: '$70' },
    description:
      'You’ve been chewing on this for a while. The feature is going out later, there is some nuance.',
    button: {
      label: 'Buy now',
      href: 'https://tables.area120.google.com/authform/aUNER6c0D3ucfN-AO3x4oM/t/9Y2E4d4Uq3o5ffittHv4ftbuTeatI9KaVcQE3s11l_IYaTFCOwKFvQd4RZgGX1QO3e',
    },
    features: [
      'Ongoing Release Notes',
      'Small Doc Request A',
      'Small Doc Request B',
      'Medium Doc Request C',
      'Medium Doc Request D',
    ],
    logomarkClassName: 'fill-gray-500',
  },
  {
    name: 'Large',
    featured: false,
    price: { Monthly: '6 weeks', Annually: '$1,990' },
    description:
      'You’ve got a huge amount of shit and we need to make sure it gets communicated. To the moon!',
    button: {
      label: 'Buy now',
      href: 'https://tables.area120.google.com/authform/byJj4ZJGnj64ut7wFTYk1l/t/87B-LwicTMb72_VkWrs4dWbZq2ZIG6UeedKL26FYb__Rawn-dxp8FTY1jAOCumX_tp',
    },
    features: [

      'Ongoing Release Notes',
      'Small Doc Request A',
      'Small Doc Request B',
      'Medium Doc Request C',
      'Medium Doc Request D',
      'Large Doc Request E',
      'Large Doc Request F',
     ],
    logomarkClassName: 'fill-cyan-500',
  },

]

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
        fill="currentColor"
      />
      <circle
        cx="12"
        cy="12"
        r="8.25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Plan({
  name,
  price,
  description,
  button,
  features,
  featured = true,
  activePeriod,
  logomarkClassName,
}) {
  return (
    <section
      className={clsx(
        'flex flex-col overflow-hidden rounded-3xl p-6 shadow-lg shadow-gray-900/5',
        featured ? 'order-first bg-gray-900 lg:order-none' : 'bg-white'
      )}
    >
      <h3
        className={clsx(
          'flex items-center text-sm font-semibold',
          featured ? 'text-white' : 'text-gray-900'
        )}
      >
        <Logomark className={clsx('h-6 w-6 flex-none', logomarkClassName)} />
        <span className="ml-4">{name}</span>
      </h3>
      <p
        className={clsx(
          'relative mt-5 flex text-3xl tracking-tight',
          featured ? 'text-white' : 'text-gray-900'
        )}
      >
        {price.Monthly === price.Annually ? (
          price.Monthly
        ) : (
          <>
            <span
              aria-hidden={activePeriod === 'Annually'}
              className={clsx(
                'transition duration-300',
                activePeriod === 'Annually' &&
                  'pointer-events-none translate-x-6 select-none opacity-0'
              )}
            >
              {price.Monthly}
            </span>
            <span
              aria-hidden={activePeriod === 'Monthly'}
              className={clsx(
                'absolute left-0 top-0 transition duration-300',
                activePeriod === 'Monthly' &&
                  'pointer-events-none -translate-x-6 select-none opacity-0'
              )}
            >
              {price.Annually}
            </span>
          </>
        )}
      </p>
      <p
        className={clsx(
          'mt-3 text-sm',
          featured ? 'text-gray-300' : 'text-gray-700'
        )}
      >
        {description}
      </p>
      <div className="order-last mt-6">
        <ul
          role="list"
          className={clsx(
            '-my-2 divide-y text-sm',
            featured
              ? 'divide-gray-800 text-gray-300'
              : 'divide-gray-200 text-gray-700'
          )}
        >
          {features.map((feature) => (
            <li key={feature} className="flex py-2">
              <CheckIcon
                className={clsx(
                  'h-6 w-6 flex-none',
                  featured ? 'text-white' : 'text-cyan-500'
                )}
              />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <Button
        href={button.href}
        color={featured ? 'cyan' : 'gray'}
        className="mt-6"
        aria-label={`Get started with the ${name} plan for ${price}`}
      >
        {button.label}
      </Button>
    </section>
  )
}

export function Pricing() {
  let [activePeriod, setActivePeriod] = useState('Monthly')

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="border-t border-gray-200 bg-gray-100 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="pricing-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Technical Documentation, fee free.
          </h2>
          <p className="mt-2 text-lg text-gray-600">
          Write it right with us - Technical Writing Solutions for Every Need
          </p>
        </div>
 

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-10 sm:mt-20 lg:max-w-none lg:grid-cols-3">
          {plans.map((plan) => (
            <Plan key={plan.name} {...plan} activePeriod={activePeriod} />
          ))}
        </div>
      </Container>
    </section>
  )
}
