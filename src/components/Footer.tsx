import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary-50 text-secondary-900 pt-20 pb-10 border-t border-primary-100">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Info */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-xl shadow-primary-500/10">
                                S
                            </div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-black tracking-tighter text-secondary-900 leading-none">
                                    STUDE<span className="text-primary-500">GRAM</span>
                                </span>
                                <span className="text-[10px] font-bold text-secondary-900/40 uppercase tracking-[0.2em] mt-1">
                                    The Trusted Gram for Students
                                </span>
                            </div>
                        </div>
                        <p className="text-secondary-900/60 font-medium leading-relaxed md:w-4/5">
                            Empowering students to achieve their global education dreams since 2018. The most trusted community for international studies and career guidance.
                        </p>
                        <div className="flex space-x-4">
                            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, idx) => (
                                <a
                                    key={idx}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white border border-secondary-200 flex items-center justify-center text-secondary-900 hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all duration-300"
                                >
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-black mb-8 text-secondary-900 tracking-widest uppercase">Quick Links</h4>
                        <ul className="space-y-4">
                            {['Study Destinations', 'Our Services', 'Success Stories', 'Book Consultation', 'Contact Us'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-secondary-900/70 font-bold hover:text-primary-600 transition-colors flex items-center group text-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary-600 opacity-0 group-hover:opacity-100 transition-opacity mr-2"></span>
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Destinations */}
                    <div>
                        <h4 className="text-sm font-black mb-8 text-secondary-900 tracking-widest uppercase">Popular Destinations</h4>
                        <ul className="space-y-4">
                            {['Study in UK', 'Study in Canada', 'Study in Australia', 'Study in Germany', 'Study in USA'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-secondary-900/70 font-bold hover:text-primary-600 transition-colors flex items-center group text-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary-600 opacity-0 group-hover:opacity-100 transition-opacity mr-2"></span>
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-sm font-black mb-8 text-secondary-900 tracking-widest uppercase">Contact Info</h4>
                        <ul className="space-y-6">
                            <li className="flex items-start space-x-4">
                                <div className="w-10 h-10 rounded-lg bg-white border border-secondary-200 flex items-center justify-center text-primary-600 flex-shrink-0">
                                    <MapPin size={22} />
                                </div>
                                <p className="text-secondary-900/70 font-medium transition-colors leading-relaxed text-sm">
                                    No. 26/398, Sheikh Square<br />Mavoor Road, Kozhikode<br />Kerala 673004, India
                                </p>
                            </li>
                            <li className="flex items-center space-x-4">
                                <div className="w-10 h-10 rounded-lg bg-white border border-secondary-200 flex items-center justify-center text-primary-600 flex-shrink-0">
                                    <Phone size={22} />
                                </div>
                                <a href="tel:+919847142205" className="text-secondary-900/70 font-bold hover:text-primary-600 transition-colors text-sm">
                                    +91 98471 42205
                                </a>
                            </li>
                            <li className="flex items-center space-x-4">
                                <div className="w-10 h-10 rounded-lg bg-white border border-secondary-200 flex items-center justify-center text-primary-600 flex-shrink-0">
                                    <Mail size={22} />
                                </div>
                                <a href="mailto:mail@indiaforfuture.com" className="text-secondary-900/70 font-bold hover:text-primary-600 transition-colors lowercase text-sm">
                                    mail@indiaforfuture.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="pt-8 border-t border-secondary-200 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-secondary-900/40 font-bold text-xs uppercase tracking-widest">
                    <p>© {currentYear} Studegram Education. All rights reserved.</p>
                    <div className="flex space-x-8">
                        <a href="#" className="hover:text-primary-600 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-primary-600 transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-primary-600 transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
