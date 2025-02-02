"use client";

import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-400">
              We are a modern e-commerce platform dedicated to providing high-quality products and an exceptional shopping experience.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-orange-500 transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#productList" className="text-gray-400 hover:text-orange-500 transition duration-300">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-gray-400 hover:text-orange-500 transition duration-300">
                  Cart
                </Link>
              </li>
              <li>
                <Link href="/checkout" className="text-gray-400 hover:text-orange-500 transition duration-300">
                  Checkout
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information Section */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="text-gray-400 space-y-2">
              <li>Email: support@bloostores.com</li>
              <li>Phone: +1 (123) 456-7890</li>
              <li>Address: 123 E-Commerce St, Tech City, NG</li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition duration-300"
              >
                <FaFacebook className="text-2xl" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition duration-300"
              >
                <FaTwitter className="text-2xl" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition duration-300"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition duration-300"
              >
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} BlooStores. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}