'use client';

import { motion } from 'framer-motion';
import { Sparkles, Award, Leaf, Heart } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Sparkles,
      title: 'Exceptional Quality',
      description: 'We source only the finest ingredients from around the world, ensuring every fragrance meets our exacting standards.',
    },
    {
      icon: Leaf,
      title: 'Thoughtful Sourcing',
      description: 'Our ingredients are ethically sourced, with respect for both nature and the communities that cultivate them.',
    },
    {
      icon: Award,
      title: 'Master Perfumers',
      description: 'Each scent is crafted by renowned perfumers with decades of experience in the art of fragrance.',
    },
    {
      icon: Heart,
      title: 'Made with Passion',
      description: 'Every bottle contains not just scent, but the passion and artistry of those who created it.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-secondary/50 to-background">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center px-6 max-w-4xl mx-auto"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6 block">
            Our Story
          </span>
          <h1 className="text-5xl md:text-7xl mb-8">
            The Art of
            <br />
            <span className="italic text-muted-foreground">Perfumery</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Rawey was born from a desire to create fragrances that transcend trends,
            capturing timeless elegance in every bottle.
          </p>
        </motion.div>
      </div>

      {/* Story Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl mb-8 text-center">Our Philosophy</h2>
            <div className="prose prose-lg mx-auto text-muted-foreground leading-relaxed space-y-6">
              <p>
                At Rawey, we believe that fragrance is more than a scent—it is an expression
                of identity, a memory captured in liquid form, and an art that transcends
                the ordinary.
              </p>
              <p>
                Our journey began with a simple yet profound vision: to create perfumes
                that honor the rich heritage of perfumery while speaking to the modern
                individual. Each Rawey fragrance is a composition of rare ingredients,
                meticulously selected and masterfully blended to create something truly
                extraordinary.
              </p>
              <p>
                We work exclusively with renowned perfumers who share our commitment to
                excellence. Their expertise, combined with the finest raw materials,
                results in fragrances that are complex, nuanced, and utterly captivating.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-4">What Defines Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every aspect of our craft.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-14 h-14 mx-auto mb-6 bg-secondary/50 flex items-center justify-center">
                  <value.icon className="w-6 h-6 text-muted-foreground" />
                </div>
                <h3 className="font-medium mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Craft Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
              The Process
            </span>
            <h2 className="text-3xl md:text-4xl mt-4 mb-12">Crafting Excellence</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: '01',
                  title: 'Selection',
                  description: 'Hand-picking the world\'s finest raw materials.',
                },
                {
                  step: '02',
                  title: 'Creation',
                  description: 'Master perfumers blend ingredients with precision.',
                },
                {
                  step: '03',
                  title: 'Refinement',
                  description: 'Each formula is perfected through countless iterations.',
                },
              ].map((item) => (
                <div key={item.step} className="p-6">
                  <div className="text-5xl font-light text-muted-foreground/30 mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-medium mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl mb-6">Experience Rawey</h2>
            <p className="text-lg text-primary-foreground/70 mb-10">
              Discover the fragrance that speaks to you.
            </p>
            <a
              href="/shop"
              className="inline-flex items-center gap-3 px-10 py-5 bg-background text-foreground text-sm tracking-wide hover:bg-background/90 transition-colors"
            >
              Shop Collection
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
