// src/view/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 mt-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Information */}
        <div>
          <h2 className="text-xl font-bold mb-4">Company</h2>
          <ul>
            <li className="mb-2"><a href="/about" className="hover:underline">About Us</a></li>
            <li className="mb-2"><a href="/careers" className="hover:underline">Careers</a></li>
            <li className="mb-2"><a href="/blog" className="hover:underline">Blog</a></li>
            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h2 className="text-xl font-bold mb-4">Customer Service</h2>
          <ul>
            <li className="mb-2"><a href="/help" className="hover:underline">Help Center</a></li>
            <li className="mb-2"><a href="/returns" className="hover:underline">Returns & Refunds</a></li>
            <li className="mb-2"><a href="/shipping" className="hover:underline">Shipping Information</a></li>
            <li><a href="/faqs" className="hover:underline">FAQs</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <ul className="flex space-x-4">
            <li>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="/assets/icons/facebook-icon.svg" alt="Facebook" className="h-6 w-6"/>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <img src="/assets/icons/twitter-icon.svg" alt="Twitter" className="h-6 w-6"/>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="/assets/icons/instagram-icon.svg" alt="Instagram" className="h-6 w-6"/>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src="/assets/icons/linkedin-icon.svg" alt="LinkedIn" className="h-6 w-6"/>
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h2 className="text-xl font-bold mb-4">Newsletter</h2>
          <p className="mb-4">Subscribe to our newsletter to get the latest updates on new products and upcoming sales.</p>
          <form>
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 w-full mb-2 text-black rounded"
            />
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded w-full">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="mt-10 text-center">
        <p>&copy; 2024 Dripstr. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
