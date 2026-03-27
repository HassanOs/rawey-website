'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: 'What makes Rawey fragrances unique?',
    answer: 'Rawey fragrances are crafted by master perfumers using the finest ingredients sourced from around the world. Each scent is a carefully composed blend that balances tradition with modernity, resulting in fragrances that are both timeless and contemporary.',
  },
  {
    question: 'How long do Rawey fragrances last?',
    answer: 'Our Eau de Parfum concentrations typically last 8-12 hours on skin, depending on individual chemistry and application. For longest wear, apply to pulse points such as wrists, neck, and behind the ears. The fragrance will evolve beautifully throughout the day.',
  },
  {
    question: 'Do you offer samples or travel sizes?',
    answer: 'Yes, we offer 2ml sample vials for most of our fragrances, allowing you to experience the scent before committing to a full bottle. Travel sizes (30ml) are also available for many of our popular fragrances.',
  },
  {
    question: 'What is your return policy?',
    answer: 'We offer a 30-day return policy for unopened fragrances in their original packaging. Due to the nature of perfumes, we cannot accept returns on opened bottles unless there is a defect. We want you to love your fragrance, so please reach out if you have any concerns.',
  },
  {
    question: 'Do you ship internationally?',
    answer: 'Yes, we ship worldwide. International shipping typically takes 5-10 business days. Customs duties and taxes may apply depending on your country. Free shipping is available on orders over $200 within the EU and $300 internationally.',
  },
  {
    question: 'Are Rawey fragrances cruelty-free?',
    answer: 'Yes, all Rawey fragrances are cruelty-free. We do not test on animals, and we require our suppliers to adhere to the same standards. We are committed to ethical practices throughout our supply chain.',
  },
  {
    question: 'How should I store my fragrance?',
    answer: 'To preserve your fragrance, store it in a cool, dry place away from direct sunlight and temperature fluctuations. Avoid storing in bathrooms where humidity can affect the composition. Properly stored, our fragrances maintain their quality for 3-5 years.',
  },
  {
    question: 'Can I layer Rawey fragrances?',
    answer: 'Absolutely. Layering fragrances is a wonderful way to create a signature scent. We recommend pairing fragrances from the same collection or complementary scent families. Start with a heavier base scent and layer lighter scents on top.',
  },
  {
    question: 'What is the difference between Eau de Parfum and Eau de Toilette?',
    answer: 'Eau de Parfum contains a higher concentration of fragrance oils (15-20%) compared to Eau de Toilette (5-15%). This results in longer-lasting wear and greater projection. All Rawey fragrances are formulated as Eau de Parfum for optimal performance.',
  },
  {
    question: 'Do you offer gift wrapping?',
    answer: 'Yes, complimentary gift wrapping is available for all orders. You can select this option at checkout. We also offer gift cards in various denominations for the perfect present.',
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="bg-secondary/30 border-b border-border/50">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 py-16">
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl mb-4">FAQ</h1>
            <p className="text-muted-foreground">
              Find answers to common questions about our fragrances and services.
            </p>
          </motion.div>
        </div>
      </div>

      {/* FAQ List */}
      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-16">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border bg-secondary/20 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-secondary/40 transition-colors"
              >
                <span className="font-medium pr-8">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 flex-shrink-0 text-muted-foreground" />
                ) : (
                  <ChevronDown className="w-5 h-5 flex-shrink-0 text-muted-foreground" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-2 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6">
            Still have questions? We are here to help.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-sm tracking-wide hover:bg-primary/90 transition-colors"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </div>
  );
}
