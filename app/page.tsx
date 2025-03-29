import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50 text-gray-900 relative">
      {/* Hero Section with Dark Overlay */}
      <section className="relative w-full min-h-[60vh] flex flex-col items-center justify-center text-center p-6">
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <Image
          src="/hero.jpg"
          alt="Hero Background"
          fill
          className="opacity-50 object-cover"
        />
        <h2 className="text-4xl font-bold mb-4 text-white relative z-10">
          Velkomin/n til Fanntófells
        </h2>
        <p className="text-lg text-gray-200 mb-6 relative z-10">
          Við höfum sérhæft okkur í framleiðslu á hágæða borðplötum og
          innréttingum síðan 1987. Upplifðu fagmennsku, stíl og endingargæði með
          okkar sérfræðilausnum.
        </p>
        <Button
          size="lg"
          className="relative z-10 bg-red-500 hover:scale-105 transition-transform"
        >
          Fá tilboð
        </Button>
      </section>

      {/* Product Categories with Enhanced Styling */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10">
        {[
          {
            title: 'Borðplötur',
            img: '/bordplataoginnrettingar.jpg',
            text: 'Framleiðum borðplötur úr harðplasti, akrýlstein, límtréi og harðplötum.',
          },
          {
            title: 'Innréttingar',
            img: '/bordplataoginnrettingar2.jpg',
            text: 'Sérsmíðum innréttingar í öll rými fyrir einstaklinga og fyrirtæki.',
          },
          {
            title: 'Skilrúm og munaskápar',
            img: '/skilrum.jpg',
            text: 'Sérsmíðum skilrúm og munaskápa fyrir fyrirtæki.',
          },
          {
            title: 'Sérsmíði',
            img: '/sersmidi.jpg',
            text: 'Tökum að okkur ýmiskonar sérsmíði.',
          },
          {
            title: 'Innihurðir',
            img: '/hurdir2.jpg',
            text: 'Gæða innihurðir frá Þýskalandi.',
          },
          { title: 'Gólfefni', img: '/golfefni.jpg', text: 'Gólfefni frá LG' },
        ].map((category, index) => (
          <Card
            key={index}
            className="p-6 shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl rounded-lg overflow-hidden relative"
          >
            <div className="relative w-full h-48">
              <Image
                src={category.img}
                alt={category.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
            </div>
            <CardContent className="text-center p-4">
              <h3 className="text-xl font-semibold text-gray-900">
                {category.title}
              </h3>
              <p className="text-gray-600 mt-2">{category.text}</p>
              <Button
                variant="outline"
                className="mt-4 w-full flex justify-center items-center gap-2"
              >
                Skoða nánar →
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Why Choose Us Section */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-10 p-10">
        <div className="md:w-1/2 text-center md:text-left">
          <h3 className="text-3xl font-semibold mb-4">
            Af hverju að velja okkur?
          </h3>
          <p className="text-gray-600 mb-4">
            Við bjóðum upp á hágæða efni, faglega vinnu og samkeppnishæf verð.
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Endingargóðar og stílhreinar borðplötur</li>
            <li>Sérsniðnar innréttingarlausnir</li>
            <li>Fagleg uppsetningarþjónusta</li>
          </ul>
          <Button>Skoða meira</Button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/feature-image.jpg"
            alt="Quality Craftsmanship"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="p-10 bg-gray-100">
        <h3 className="text-3xl font-semibold text-center mb-6">
          What Our Customers Say
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            'Excellent craftsmanship and great service!',
            'Highly recommend for quality countertops!',
          ].map((testimonial, index) => (
            <Card key={index} className="p-4 shadow-md">
              <CardContent className="text-center">
                <p className="text-gray-600">"{testimonial}"</p>
                <h4 className="text-sm text-gray-500 mt-2">
                  - Satisfied Customer
                </h4>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Banner Before Footer */}
      <section className="relative bg-gradient-to-r from-red-700 to-red-500 text-white text-center py-10">
        <h3 className="text-2xl font-semibold mb-4">
          Ertu tilbúin/n að umbreyta rýminu þínu?
        </h3>
        <p className="text-lg mb-4">
          Hafðu samband við sérfræðinga okkar í dag og fáðu faglega ráðgjöf
          fyrir þína lausn.
        </p>
        <Button size="lg" className="bg-white text-red-600 hover:bg-gray-200">
          Fáðu ókeypis tilboð
        </Button>
      </section>

      {/* Footer with Quick Links */}
      <footer className="w-full flex flex-col items-center space-y-4 py-6 bg-white shadow-md mt-auto">
        <p className="text-gray-600">&copy; 2025 Fanntófell.</p>
        <div className="flex space-x-4">
          <FaTwitter className="text-xl cursor-pointer" />
          <FaGithub className="text-xl cursor-pointer" />
          <FaLinkedin className="text-xl cursor-pointer" />
        </div>
      </footer>
    </div>
  );
}
