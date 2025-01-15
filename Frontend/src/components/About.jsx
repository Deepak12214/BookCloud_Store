import React from 'react';

const About = () => {
  return (
    <div className="about-container p-6  mt-20">
      <h1 className="text-4xl font-bold mb-4 text-purple-700">About Our Bookstore</h1>
      <p className="text-lg mb-4">
        Welcome to <strong>Book Haven</strong>! We are passionate about connecting book lovers with their favorite titles across various genres. Our online bookstore offers a diverse selection of books, from timeless classics to the latest bestsellers, catering to readers of all ages and interests.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
      <p className="text-lg mb-4">
        At <strong>Book Haven</strong>, our mission is to create a seamless and delightful book-buying experience for readers everywhere. Whether you're looking for fiction, non-fiction, self-help, or children's books, we aim to make discovering and purchasing books easier than ever.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Features We Offer</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Vast collection of books from various genres and categories.</li>
        <li>Easy-to-use search and filtering options to find the perfect read.</li>
        <li>Book previews, descriptions, and ratings to help you make informed choices.</li>
        <li>Recommendations based on your browsing and reading preferences.</li>
        <li>Seamless purchasing process with secure payment options.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Why Choose Us?</h2>
      <p className="text-lg mb-4">
        We believe that books can change lives, and our goal is to make them more accessible to everyone. Whether you're a book enthusiast or just starting your reading journey, we strive to provide an exceptional experience, with curated book collections and a personalized approach to every reader's needs.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Get in Touch</h2>
      <p className="text-lg mb-4">
        Have questions or need help finding your next read? Contact us at <a href="mailto:info@bookhaven.com" className="text-blue-500">info@bookhaven.com</a>. We're here to assist you!
      </p>

      <p className="text-lg italic">
        "A book is a dream that you hold in your hand." — Neil Gaiman
      </p>
    </div>
  );
};

export default About;

