// export default function Contact() {
//   return (
//     <section className="max-w-4xl mx-auto py-16 px-6">
//       <h2 className="text-4xl font-bold text-red-600 mb-6 text-center">Contact Us</h2>
//       <p className="text-gray-700 text-center mb-8">
//         Get in touch with us for business inquiries or partnership opportunities.
//       </p>
//       <form className="space-y-4">
//         <input type="text" placeholder="Your Name" className="w-full border rounded-lg px-4 py-3" />
//         <input type="email" placeholder="Your Email" className="w-full border rounded-lg px-4 py-3" />
//         <textarea placeholder="Your Message" rows="5" className="w-full border rounded-lg px-4 py-3"></textarea>
//         <button type="submit" className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition">
//           Send Message
//         </button>
//       </form>
//       <div className="mt-10 text-center">
//         <p>Email: <span className="text-red-600">info@veer-bharat.com</span></p>
//         <p>Website: <span className="text-red-600">www.veer-bharat.com</span></p>
//       </div>
//     </section>
//   );
// }


import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiCheck,
  FiClock,
  FiPackage
} from 'react-icons/fi'

export default function Contact() {


  const contactInfo = [
    {
      icon: <FiMapPin className="w-6 h-6" />,
      title: 'Our Location',
      details: 'Office No 731, IT Home Tower B',
      subDetails: 'Sector 62, Electronic Metro Station',
      location: 'Noida, Uttar Pradesh',
      color: 'from-yellow-200 to-yellow-300',
      href: 'https://maps.google.com/?q=Noida+Sector+62'
    },
    {
      icon: <FiPhone className="w-6 h-6" />,
      title: 'Call Us',
      details: '+91 123 456 7890',
      subDetails: 'Mon - Sat (9:00 AM - 6:00 PM)',
      location: '',
      color: 'from-purple-200 to-purple-300',
      href: 'tel:+911234567890'
    },
    {
      icon: <FiMail className="w-6 h-6" />,
      title: 'Email Us',
      details: 'info@veerbharat.com',
      subDetails: 'We reply within 24 hours',
      location: '',
      color: 'from-yellow-200 to-purple-200',
      href: 'mailto:info@veerbharat.com'
    }
  ]

  const products = [
    '🌻 Soybean Oil',
    '🌿 Mustard Oil',
    '🌴 Palm Oil',
    '🥜 Groundnut Oil',
    '🌾 Rice Bran Oil',
    '🫒 Olive Oil'
  ]

  return (
    <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden bg-gradient-to-br from-[#fef9c3] via-white to-[#DFC6F6]">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#DFC6F6] rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#fef9c3] rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#fef9c3] to-[#DFC6F6] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-[#fef9c3] to-[#DFC6F6] border-2 border-red-600/20 mb-6 shadow-lg">
            <FiPackage className="w-5 h-5 text-red-600" />
            <span className="text-red-600 font-bold text-sm">Premium Quality Oils</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-red-600 mb-4">
            Get In <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Connect with <span className="font-bold text-red-600">Veer Bharat</span> for premium quality edible oils. 
            We're here to serve your business needs!
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          
          {/* Left Column - Contact Form */}
          <div className="relative">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 lg:p-10 shadow-2xl border-2 border-white/50">
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Send us a Message</h3>
                <p className="text-gray-600">Fill out the form and we'll respond promptly</p>
              </div>

                  <form action="https://formspree.io/f/mkgpgdov" method="POST" className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-[#fef9c3]/30 to-[#DFC6F6]/30 border-2 border-gray-200 focus:border-red-500 focus:outline-none transition-all duration-300 text-gray-900 placeholder-gray-500"
                          placeholder="Enter your name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-[#fef9c3]/30 to-[#DFC6F6]/30 border-2 border-gray-200 focus:border-red-500 focus:outline-none transition-all duration-300 text-gray-900 placeholder-gray-500"
                          placeholder="+91 1234567890"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                        <input
                          type="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-[#fef9c3]/30 to-[#DFC6F6]/30 border-2 border-gray-200 focus:border-red-500 focus:outline-none transition-all duration-300 text-gray-900 placeholder-gray-500"
                          placeholder="your@email.com"
                        />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-[#fef9c3]/30 to-[#DFC6F6]/30 border-2 border-gray-200 focus:border-red-500 focus:outline-none transition-all duration-300 text-gray-900"
                      >
                        <option value="">Select a subject</option>
                        <option value="bulk-order">Bulk Order Inquiry</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="distributor">Become a Distributor</option>
                        <option value="product-info">Product Information</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Your Message *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-[#fef9c3]/30 to-[#DFC6F6]/30 border-2 border-gray-200 focus:border-red-500 focus:outline-none transition-all duration-300 text-gray-900 placeholder-gray-500 resize-none"
                        placeholder="Tell us about your requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="group w-full px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3"
                    >
                      <FiSend className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </button>
                  </form>
            </div>
          </div>

          {/* Right Column - Contact Info & Map */}
          <div className="space-y-6">
            {/* Contact Cards */}
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                target={info.title === 'Our Location' ? '_blank' : '_self'}
                rel={info.title === 'Our Location' ? 'noopener noreferrer' : undefined}
                className="block group"
              >
                <div className={`bg-gradient-to-r ${info.color} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border-2 border-white/50`}>
                  <div className="flex items-start gap-4">
                    <div className="p-4 rounded-xl bg-white/80 text-red-600 group-hover:scale-110 transition-transform duration-300 shadow-md">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h4>
                      <p className="text-gray-800 font-semibold text-base mb-1">{info.details}</p>
                      {info.subDetails && (
                        <p className="text-gray-700 text-sm flex items-center gap-2">
                          {info.title === 'Call Us' && <FiClock className="w-4 h-4" />}
                          {info.subDetails}
                        </p>
                      )}
                      {info.location && (
                        <p className="text-gray-700 text-sm mt-1">{info.location}</p>
                      )}
                    </div>
                  </div>
                </div>
              </a>
            ))}

            {/* Products Section */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border-2 border-white/50">
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FiPackage className="w-5 h-5 text-red-600" />
                Our Premium Products
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {products.map((product, index) => (
                  <div
                    key={index}
                    className="px-4 py-3 rounded-xl bg-gradient-to-r from-[#fef9c3]/50 to-[#DFC6F6]/50 border border-gray-200 text-gray-800 font-medium text-sm hover:scale-105 transition-transform duration-300 text-center"
                  >
                    {product}
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-2 shadow-lg border-2 border-white/50 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.067938973857!2d77.36788431508!3d28.627090982422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5456ef36d9f%3A0x3b7191b1286136c8!2sSector%2062%2C%20Noida!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="280"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl p-8 md:p-10 shadow-2xl text-center text-white">
          <h3 className="text-2xl md:text-3xl font-black mb-3">Ready to Partner with Us?</h3>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            Join hands with Veer Bharat for quality edible oils. Perfect for retailers, distributors, and bulk buyers!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+911234567890"
              className="px-8 py-4 rounded-xl bg-white text-red-600 font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Call Us Now
            </a>
            <a
              href="mailto:info@veerbharat.com"
              className="px-8 py-4 rounded-xl border-2 border-white text-white font-bold hover:bg-white hover:text-red-600 transition-all duration-300 hover:scale-105"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>


    </section>
  )
}
