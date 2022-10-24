import Link from 'next/link'

import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'How do I know the documentation helps?',
      answer:
        'The documentation helps because it provides a clear and concise explanation of how the software works. It is easy to follow and understand, and it provides step-by-step instructions for using the software.',
    },

    {
      question: 'This is kind of complicated?',
      answer:
        'It is always a complicated situation. There are many different factors at play and it is not easy to know what to do. While it can be a difficult decision to make, let get started somewhere,'
    },
  ],
  [
    {
      question: 'Do the people actually use this?',
      answer:
        'Again I would argue this was a good try. People make their own choices. If we don’t try new things we might just get stuck'
    },
 
    {
      question: 'Isn’t this a waste of time?',
      answer:
        'This is way too much work, but it was fun so we did it anyways. We had a blast doing it and we loved every minute of it. We would do it again in a heartbeat',
    },
  ],
  [
    {
      question: 'How does this work?',
      answer:
        'Honestly we built this using Tailscale UI, but we eventually just put it together by editing random pieces of text together.',
    },
 
    {
      question: 'How do I become an technical writer?',
      answer:
        'Contact me with some details on the form when you click buy now. Once approved, I’ll send you a some followup for things that I want to figure out.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            If you have anything else you want to ask,{' '}
            <Link
              href="mailto:lchan@vistarmedia.com"
              className="text-gray-900 underline"
            >
              reach out to us
            </Link>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
