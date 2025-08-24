import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-base-200 text-secondary mt-12">
            <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Contact</h3>
                    <p>Email: support@greennest.com</p>
                    <p>Phone: +880 1234 567 890</p>
                    <p>Address: Dhaka, Bangladesh</p>
                </div>

                {/* Terms & Policies */}
                <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Useful Links</h3>
                    <ul className="space-y-1">
                        <li>
                            <a href="/terms" className="hover:text-primary transition">
                                Terms & Conditions
                            </a>
                        </li>
                        <li>
                            <a href="/privacy" className="hover:text-primary transition">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="/faq" className="hover:text-primary transition">
                                FAQ
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Social Links */}
                <div className="md:text-end">
                    <h3 className="text-lg font-semibold text-primary mb-2">Follow Us</h3>
                    <div className="flex justify-center md:justify-end gap-4 text-2xl">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-primary transition">
                            <FaFacebook />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-primary transition">
                            <FaTwitter />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-primary transition">
                            <FaInstagram />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-primary transition">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-300 text-center py-4 text-sm">
                © {new Date().getFullYear()} GreenNest. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
