export default function About() {
  return (
    <div className="flex flex-col items-center p-8 max-w-6xl mx-auto">
      {/* Header Section */}
      <header className="text-center my-8">
        <h1 className="text-4xl font-bold text-slate-700">About L Estate</h1>
        <p className="text-lg text-gray-500 mt-4">
          Your trusted partner in finding the perfect place to call home.
        </p>
      </header>

      {/* Company Overview */}
      <section className="my-12 text-center">
        <h2 className="text-3xl font-semibold text-slate-600">Who We Are</h2>
        <p className="text-md text-gray-600 mt-4 leading-relaxed max-w-3xl mx-auto">
          L Estate is a leading online real estate platform dedicated to making your property search experience seamless and efficient. With a vast database of listings and a user-friendly interface, we aim to connect buyers, sellers, and renters with their ideal properties effortlessly.
        </p>
      </section>

      {/* Mission Section */}
      <section className="my-12 text-center">
        <h2 className="text-3xl font-semibold text-slate-600">Our Mission</h2>
        <p className="text-md text-gray-600 mt-4 leading-relaxed max-w-3xl mx-auto">
          Our mission is to simplify the real estate process by providing a comprehensive and intuitive platform where users can find their dream homes or investment properties. We strive to offer unparalleled service, accurate listings, and valuable resources to assist our users at every step of their journey.
        </p>
      </section>

      {/* Services Section */}
      <section className="my-12 text-center">
        <h2 className="text-3xl font-semibold text-slate-600">What We Offer</h2>
        <ul className="list-disc text-md text-gray-600 mt-4 leading-relaxed max-w-3xl mx-auto">
          <li className="my-2">Extensive property listings for sale and rent</li>
          <li className="my-2">Detailed property information and high-quality images</li>
          <li className="my-2">Advanced search filters to find properties that match your criteria</li>
          <li className="my-2">Expert advice and resources for buyers, sellers, and renters</li>
          <li className="my-2">User-friendly interface and seamless navigation</li>
        </ul>
      </section>

      {/* Values Section */}
      <section className="my-12 text-center">
        <h2 className="text-3xl font-semibold text-slate-600">Our Values</h2>
        <p className="text-md text-gray-600 mt-4 leading-relaxed max-w-3xl mx-auto">
          At L Estate, we are committed to:
        </p>
        <ul className="list-disc text-md text-gray-600 mt-4 leading-relaxed max-w-3xl mx-auto">
          <li className="my-2">Integrity: Upholding the highest standards of honesty and transparency</li>
          <li className="my-2">Innovation: Continuously improving our platform to better serve our users</li>
          <li className="my-2">Customer Focus: Prioritizing the needs and satisfaction of our clients</li>
          <li className="my-2">Excellence: Delivering outstanding service and exceeding expectations</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="my-12 text-center">
        <h2 className="text-3xl font-semibold text-slate-600">Get in Touch</h2>
        <p className="text-md text-gray-600 mt-4 leading-relaxed max-w-3xl mx-auto">
          We'd love to hear from you! Whether you have questions, feedback, or need assistance, our team is here to help.
        </p>
        <a
          href="mailto:vinaysankargokavarapu@gmail.com"
          className="text-blue-800 font-bold hover:underline mt-4"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}
