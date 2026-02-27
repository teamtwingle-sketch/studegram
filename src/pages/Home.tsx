import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Globe, GraduationCap, Landmark, Library, ClipboardList,
    CheckCircle, Star, Phone, ArrowRight, User, Mail, Send, Calendar,
    GraduationCap as School, MessageSquare
} from 'lucide-react';

// Destinations Data
const destinations = [
    { name: 'UK', flag: '🇬🇧', desc: 'World-class universities and vibrant culture.', bg: 'from-blue-600 to-red-600' },
    { name: 'Canada', flag: '🇨🇦', desc: 'High-quality education and diverse communities.', bg: 'from-red-600 to-white' },
    { name: 'Australia', flag: '🇦🇺', desc: 'Breathtaking landscapes and top-tier research.', bg: 'from-blue-800 to-red-500' },
    { name: 'Germany', flag: '🇩🇪', desc: 'Excellence in engineering and low tuition fees.', bg: 'from-yellow-400 via-red-600 to-black' },
    { name: 'USA', flag: '🇺🇸', desc: 'Innovation, opportunity, and world-renowned degrees.', bg: 'from-red-500 via-white to-blue-500' },
    { name: 'Ireland', flag: '🇮🇪', desc: 'Friendly atmosphere and high graduate employability.', bg: 'from-green-600 to-orange-500' },
];

// Services Data
const services = [
    { title: 'University Admission', icon: GraduationCap, desc: 'Expert guidance through the entire application process for top universities.' },
    { title: 'Visa Processing', icon: Globe, desc: 'Hassle-free visa assistance with a dedicated documentation team.' },
    { title: 'Scholarship Assistance', icon: Star, desc: 'Helping you secure financial aid and merit-based international scholarships.' },
    { title: 'SOP Guidance', icon: ClipboardList, desc: 'Professional assistance in drafting winning Statements of Purpose.' },
    { title: 'Education Loan Assistance', icon: Landmark, desc: 'Tie-ups with leading banks to ensure smooth financial planning.' },
    { title: 'IELTS / Test Prep', icon: Library, desc: 'In-house training for IELTS, TOEFL, PTE, and other essential exams.' },
];

// Process Steps
const steps = [
    { number: '01', title: 'Profile Evaluation', desc: 'We analyze your academic background and career goals.' },
    { number: '02', title: 'University Selection', desc: 'Shortlisting the best-fit universities and courses for you.' },
    { number: '03', title: 'Application Submission', desc: 'Handling all paperwork and submission to universities.' },
    { number: '04', title: 'Visa Processing', desc: 'Preparing your visa file and mock interview sessions.' },
    { number: '05', title: 'Pre-departure Support', desc: 'Assistance with flights, accommodation, and arrival.' },
];

const Home = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        whatsapp: '',
        country: '',
        course: '',
        qualification: '',
        passingYear: '',
        budget: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Form Validation (Simple)
        if (!formData.fullName || !formData.phone || !formData.email) {
            alert("Please fill in required fields: Name, Phone, and Email.");
            setIsSubmitting(false);
            return;
        }

        // Prepare WhatsApp Message
        const message = `*New Studegram Lead:*
*Name:* ${formData.fullName}
*Phone:* ${formData.phone}
*WhatsApp:* ${formData.whatsapp || formData.phone}
*Email:* ${formData.email}
*Country:* ${formData.country}
*Course:* ${formData.course}
*Qualification:* ${formData.qualification}
*Year:* ${formData.passingYear}
*Budget:* ${formData.budget}
*Message:* ${formData.message}`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/919876543210?text=${encodedMessage}`;

        // Simulate Backend Submission
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);

            // Open WhatsApp
            window.open(whatsappUrl, '_blank');

            // Reset form after delay
            setTimeout(() => setIsSuccess(false), 5000);
        }, 1500);
    };

    return (
        <div className="overflow-x-hidden">
            {/* 1. HERO SECTION */}
            <section className="relative min-h-screen flex items-center pt-20 bg-white overflow-hidden">
                {/* Minimal Background Overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary-50/50 to-white pointer-events-none"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <div className="inline-flex items-center space-x-2 bg-primary-50 px-4 py-2 rounded-full border border-primary-100">
                                <CheckCircle size={14} className="text-primary-600" />
                                <span className="text-xs font-bold tracking-wider uppercase text-primary-700">
                                    Trusted Education Partner
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-secondary-900 tracking-tight">
                                Your Global <br />
                                Education <span className="text-primary-600">Begins Here</span>
                            </h1>

                            <p className="text-lg md:text-xl text-secondary-900/60 leading-relaxed max-w-lg font-medium">
                                Comprehensive Visa Experts • Scholarship Guidance • Global Admissions. Join the most trusted community for international students.
                            </p>

                            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
                                <button
                                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-secondary-900 rounded-2xl font-bold text-lg shadow-xl shadow-primary-500/20 transition-all flex items-center justify-center group"
                                >
                                    Book Free Consultation
                                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button
                                    onClick={() => document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="px-8 py-4 bg-white border border-secondary-200 text-secondary-900 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all flex items-center justify-center"
                                >
                                    Explore Destinations
                                </button>
                            </div>

                            <div className="flex items-center space-x-6 pt-6">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className={`w-12 h-12 rounded-full border-2 border-white dark:border-secondary-900 bg-gray-200 overflow-hidden`}>
                                            <img src={`https://i.pravatar.cc/150?u=${i}`} alt="Student" />
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <div className="flex text-yellow-500">
                                        {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={16} fill="currentColor" />)}
                                    </div>
                                    <p className="text-sm font-medium text-secondary-900/60 dark:text-white/60">
                                        Trusted by <span className="text-secondary-900 dark:text-white font-bold">1000+ Students</span>
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="relative hidden lg:block"
                        >


                            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl border border-secondary-100">
                                <img
                                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop"
                                    alt="Students Abroad"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 -left-6 z-20 bg-white p-5 rounded-2xl shadow-xl border border-secondary-100">
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                                        <CheckCircle size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xl font-bold text-secondary-900">100%</p>
                                        <p className="text-xs font-medium text-secondary-500 uppercase tracking-wider">Visa Success Rate</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. ABOUT SECTION */}
            <section id="about" className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
                        <h2 className="text-primary-600 font-bold uppercase tracking-[0.3em] text-sm">Our Mission</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-secondary-900">Studegram: The Trusted Gram for Students</h3>
                        <p className="text-lg text-secondary-900/60 leading-relaxed">We simplify international admissions with a focus on transparency, success, and student well-being. Your career is our global priority.</p>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { label: 'Successful Placements', value: '1,200+' },
                            { label: 'University Partners', value: '500+' },
                            { label: 'Years of Experience', value: '7+' },
                            { label: 'Countries Covered', value: '15+' },
                        ].map((stat, idx) => (
                            <motion.div
                                key={idx}
                                whileInView={{ opacity: 1, y: 0 }}
                                initial={{ opacity: 0, y: 20 }}
                                viewport={{ once: true }}
                                className="p-8 bg-primary-50 rounded-[2rem] text-center border border-primary-100"
                            >
                                <h4 className="text-4xl font-bold text-primary-600 mb-2">{stat.value}</h4>
                                <p className="text-sm font-bold text-secondary-900/60 uppercase tracking-widest">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. STUDY DESTINATIONS */}
            <section id="destinations" className="py-24 bg-primary-50/50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div className="space-y-4">
                            <h2 className="text-primary-600 font-bold uppercase tracking-widest text-sm">Destinations</h2>
                            <h3 className="text-4xl md:text-5xl font-bold text-secondary-900">Where do you want to study?</h3>
                        </div>
                        <a href="#" className="flex items-center text-primary-600 font-bold hover:translate-x-2 transition-all">
                            View All Destinations <ArrowRight className="ml-2" size={20} />
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {destinations.map((dest) => (
                            <motion.div
                                key={dest.name}
                                whileHover={{ y: -10 }}
                                className="group relative overflow-hidden rounded-2xl bg-white shadow-xl border border-primary-100"
                            >
                                <div className="p-10 bg-white rounded-t-[2.5rem] relative">
                                    <div className="text-5xl mb-6">{dest.flag}</div>
                                    <h4 className="text-2xl font-bold text-secondary-900 mb-4">{dest.name}</h4>
                                    <p className="text-secondary-900/60 mb-8 leading-relaxed">{dest.desc}</p>
                                    <button className="w-full py-4 border-2 border-primary-600/30 group-hover:border-primary-600 group-hover:bg-primary-600 group-hover:text-secondary-900 text-primary-600 font-bold rounded-2xl transition-all">
                                        Explore Opportunities
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. SERVICES SECTION */}
            <section id="services" className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
                        <h2 className="text-primary-600 font-bold uppercase tracking-widest text-sm">Our Services</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-secondary-900">End-to-End Support</h3>
                        <p className="text-lg text-secondary-900/60">From choosing the right course to settling in a new country, we are with you at every step of your journey.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, idx) => (
                            <div key={idx} className="p-10 bg-primary-50/30 rounded-2xl hover:bg-white transition-all duration-500 hover:shadow-2xl border border-primary-100/50 group">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                                    <service.icon className="text-primary-600" size={32} />
                                </div>
                                <h4 className="text-2xl font-bold text-secondary-900 mb-4">{service.title}</h4>
                                <p className="text-secondary-900/60 leading-relaxed">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. PROCESS SECTION */}
            <section id="process" className="py-24 bg-primary-600 text-white relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-white/80 font-bold uppercase tracking-widest text-sm mb-4">The Studegram Way</h2>
                        <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Working Process</h3>
                    </div>

                    <div className="relative">
                        {/* Dynamic Line */}
                        <div className="hidden lg:block absolute top-[40px] left-0 w-full h-1 bg-white/20"></div>

                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12">
                            {steps.map((step, idx) => (
                                <div key={idx} className="relative z-10 text-center space-y-6">
                                    <div className="w-20 h-20 bg-white text-primary-600 rounded-full flex items-center justify-center text-3xl font-bold mx-auto shadow-2xl border-4 border-primary-100">
                                        {step.number}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold mb-3 text-white">{step.title}</h4>
                                        <p className="text-white/80 text-sm leading-relaxed font-medium">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. TESTIMONIALS */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-primary-600 font-bold uppercase tracking-widest text-sm mb-4">Testimonials</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-secondary-900">What Our Students Say</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="p-10 bg-primary-50/50 rounded-2xl border border-primary-100/50">
                                <div className="flex text-primary-600 mb-6">
                                    {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={18} fill="currentColor" />)}
                                </div>
                                <p className="text-lg italic text-secondary-900/80 mb-10 leading-relaxed font-medium">
                                    "Studegram made my dream of studying in the UK come true. Their visa assistance was exceptional, and I got my visa within 14 days!"
                                </p>
                                <div className="flex items-center space-x-4">
                                    <div className="w-14 h-14 rounded-2xl bg-white border border-primary-100 overflow-hidden">
                                        <img src={`https://i.pravatar.cc/150?u=student-${i}`} alt="Student" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-secondary-900">Rahul Sharma</h4>
                                        <p className="text-sm text-primary-600 font-bold uppercase tracking-widest">MSc Data Science, UK</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. REGISTRATION / LEAD FORM */}
            <section id="contact" className="py-24 bg-primary-50/50 overflow-hidden relative">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-primary-100">
                        <div className="grid grid-cols-1 lg:grid-cols-5">
                            {/* Contact Info (Side) */}
                            <div className="lg:col-span-2 p-12 lg:p-16 bg-primary-600 text-white flex flex-col justify-between">
                                <div>
                                    <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Ready to Start Your Journey?</h3>
                                    <p className="text-xl text-white/80 mb-12 font-medium">Fill out the form and our senior counselor will get in touch with you within 24 hours.</p>

                                    <div className="space-y-8">
                                        <div className="flex items-center space-x-6">
                                            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white">
                                                <Phone size={28} />
                                            </div>
                                            <div>
                                                <p className="text-white/60 font-bold uppercase tracking-widest text-xs mb-1">Call Us Anywhere</p>
                                                <a href="tel:+919876543210" className="text-2xl font-bold hover:text-primary-100 transition-colors">+91 98765 43210</a>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-6">
                                            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white">
                                                <Mail size={28} />
                                            </div>
                                            <div>
                                                <p className="text-white/60 font-bold uppercase tracking-widest text-xs mb-1">Email Us</p>
                                                <a href="mailto:hello@studegram.com" className="text-2xl font-bold hover:text-primary-100 transition-colors">hello@studegram.com</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-12 border-t border-white/20 mt-12">
                                    <p className="font-bold tracking-widest uppercase text-sm mb-4">Our Offices</p>
                                    <div className="flex flex-wrap gap-4">
                                        {['Delhi', 'Mumbai', 'London', 'Toronto'].map(city => (
                                            <span key={city} className="px-4 py-2 bg-white/10 rounded-full text-sm font-bold">{city}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Lead Form (Main) */}
                            <div className="lg:col-span-3 p-8 md:p-12 lg:p-16 bg-white dark:bg-secondary-800">
                                {!isSuccess ? (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {/* Name */}
                                            <div className="space-y-2 group">
                                                <label className="text-sm font-bold text-secondary-900/60 dark:text-white/60 group-focus-within:text-primary-600 transition-colors">Full Name *</label>
                                                <div className="relative">
                                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                                    <input
                                                        type="text"
                                                        name="fullName"
                                                        required
                                                        value={formData.fullName}
                                                        onChange={handleChange}
                                                        placeholder="John Doe"
                                                        className="w-full pl-12 pr-6 py-4 rounded-2xl bg-secondary-50 dark:bg-white/5 border border-transparent focus:border-primary-600 focus:bg-white dark:focus:bg-white/10 outline-none transition-all dark:text-white"
                                                    />
                                                </div>
                                            </div>
                                            {/* Email */}
                                            <div className="space-y-2 group">
                                                <label className="text-sm font-bold text-secondary-900/60 dark:text-white/60 group-focus-within:text-primary-600 transition-colors">Email Address *</label>
                                                <div className="relative">
                                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        required
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        placeholder="john@example.com"
                                                        className="w-full pl-12 pr-6 py-4 rounded-2xl bg-secondary-50 dark:bg-white/5 border border-transparent focus:border-primary-600 focus:bg-white dark:focus:bg-white/10 outline-none transition-all dark:text-white"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {/* Phone */}
                                            <div className="space-y-2 group">
                                                <label className="text-sm font-bold text-secondary-900/60 dark:text-white/60 group-focus-within:text-primary-600 transition-colors">Phone Number *</label>
                                                <div className="relative">
                                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        required
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        placeholder="+91 00000 00000"
                                                        className="w-full pl-12 pr-6 py-4 rounded-2xl bg-secondary-50 dark:bg-white/5 border border-transparent focus:border-primary-600 focus:bg-white dark:focus:bg-white/10 outline-none transition-all dark:text-white"
                                                    />
                                                </div>
                                            </div>
                                            {/* WhatsApp */}
                                            <div className="space-y-2 group">
                                                <label className="text-sm font-bold text-secondary-900/60 dark:text-white/60 group-focus-within:text-primary-600 transition-colors">WhatsApp Number</label>
                                                <div className="relative">
                                                    <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                                    <input
                                                        type="tel"
                                                        name="whatsapp"
                                                        value={formData.whatsapp}
                                                        onChange={handleChange}
                                                        placeholder="+91 00000 00000"
                                                        className="w-full pl-12 pr-6 py-4 rounded-2xl bg-secondary-50 dark:bg-white/5 border border-transparent focus:border-primary-600 focus:bg-white dark:focus:bg-white/10 outline-none transition-all dark:text-white"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {/* Preferred Country */}
                                            <div className="space-y-2 group">
                                                <label className="text-sm font-bold text-secondary-900/60 dark:text-white/60 group-focus-within:text-primary-600 transition-colors">Preferred Country</label>
                                                <div className="relative">
                                                    <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                                    <select
                                                        name="country"
                                                        value={formData.country}
                                                        onChange={handleChange}
                                                        className="w-full pl-12 pr-6 py-4 rounded-2xl bg-secondary-50 dark:bg-white/5 border border-transparent focus:border-primary-600 focus:bg-white dark:focus:bg-white/10 outline-none transition-all dark:text-white appearance-none"
                                                    >
                                                        <option value="">Select Country</option>
                                                        <option value="UK">United Kingdom</option>
                                                        <option value="Canada">Canada</option>
                                                        <option value="Australia">Australia</option>
                                                        <option value="Germany">Germany</option>
                                                        <option value="USA">USA</option>
                                                        <option value="Ireland">Ireland</option>
                                                    </select>
                                                </div>
                                            </div>
                                            {/* Course */}
                                            <div className="space-y-2 group">
                                                <label className="text-sm font-bold text-secondary-900/60 dark:text-white/60 group-focus-within:text-primary-600 transition-colors">Course Interested</label>
                                                <div className="relative">
                                                    <School className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                                    <input
                                                        type="text"
                                                        name="course"
                                                        value={formData.course}
                                                        onChange={handleChange}
                                                        placeholder="e.g. MBA, Data Science"
                                                        className="w-full pl-12 pr-6 py-4 rounded-2xl bg-secondary-50 dark:bg-white/5 border border-transparent focus:border-primary-600 focus:bg-white dark:focus:bg-white/10 outline-none transition-all dark:text-white"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            {/* Qualification */}
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-secondary-900/60 dark:text-white/60">Current Qualification</label>
                                                <input
                                                    type="text"
                                                    name="qualification"
                                                    value={formData.qualification}
                                                    onChange={handleChange}
                                                    placeholder="e.g. Bachelor's"
                                                    className="w-full px-6 py-4 rounded-2xl bg-secondary-50 dark:bg-white/5 border border-transparent focus:border-primary-600 outline-none transition-all dark:text-white"
                                                />
                                            </div>
                                            {/* Passing Year */}
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-secondary-900/60 dark:text-white/60">Year of Passing</label>
                                                <div className="relative">
                                                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                                    <input
                                                        type="text"
                                                        name="passingYear"
                                                        value={formData.passingYear}
                                                        onChange={handleChange}
                                                        placeholder="2023"
                                                        className="w-full pl-12 pr-6 py-4 rounded-2xl bg-secondary-50 dark:bg-white/5 border border-transparent focus:border-primary-600 outline-none transition-all dark:text-white"
                                                    />
                                                </div>
                                            </div>
                                            {/* Budget */}
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-secondary-900/60 dark:text-white/60">Budget Range</label>
                                                <select
                                                    name="budget"
                                                    value={formData.budget}
                                                    onChange={handleChange}
                                                    className="w-full px-6 py-4 rounded-2xl bg-secondary-50 dark:bg-white/5 border border-transparent focus:border-primary-600 outline-none transition-all dark:text-white appearance-none"
                                                >
                                                    <option value="">Select Budget</option>
                                                    <option value="< 15 Lakhs">Below 15 Lakhs</option>
                                                    <option value="15-25 Lakhs">15 - 25 Lakhs</option>
                                                    <option value="25-40 Lakhs">25 - 40 Lakhs</option>
                                                    <option value="40+ Lakhs">40+ Lakhs</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-secondary-900/60 dark:text-white/60">Message</label>
                                            <textarea
                                                name="message"
                                                rows={3}
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Any specifics you'd like to share?"
                                                className="w-full px-6 py-4 rounded-2xl bg-secondary-50 dark:bg-white/5 border border-transparent focus:border-primary-600 outline-none transition-all dark:text-white resize-none"
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className={`w-full py-5 bg-secondary-900 dark:bg-primary-600 text-white rounded-2xl font-bold text-xl hover:bg-primary-600 dark:hover:bg-primary-700 transition-all shadow-xl hover:shadow-primary-600/20 flex items-center justify-center space-x-3 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                                                    <span>Processing...</span>
                                                </>
                                            ) : (
                                                <>
                                                    <Send size={24} />
                                                    <span>Get Free Consultation</span>
                                                </>
                                            )}
                                        </button>

                                        <p className="text-center text-xs text-secondary-900/40 dark:text-white/40">
                                            * Your data is secure with us. By submitting, you agree to being contacted via Phone/WhatsApp.
                                        </p>
                                    </form>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="h-full flex flex-col items-center justify-center text-center space-y-8 py-20"
                                    >
                                        <div className="w-24 h-24 bg-green-100 dark:bg-green-600/20 text-green-600 rounded-full flex items-center justify-center">
                                            <CheckCircle size={60} />
                                        </div>
                                        <div className="space-y-4">
                                            <h3 className="text-4xl font-bold text-secondary-900 dark:text-white">Thank You!</h3>
                                            <p className="text-xl text-secondary-900/60 dark:text-white/60 max-w-md">
                                                Your inquiry has been received. Our senior counselor will contact you shortly to plan your global future.
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => setIsSuccess(false)}
                                            className="text-primary-600 font-bold hover:underline"
                                        >
                                            Send another inquiry
                                        </button>
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* WhatsApp Floating Button */}
            <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all z-50 flex items-center justify-center hover:scale-110 group"
            >
                <div className="absolute -left-32 bg-white text-secondary-900 px-4 py-2 rounded-xl text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    Chat with us!
                </div>
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
            </a>

            {/* Trust Badges Bar */}
            <section className="py-12 bg-white border-t border-primary-100">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
                        {['Visa Approved', 'British Council Certified', 'ICEF Accredited', '1000+ Success Stories'].map(text => (
                            <span key={text} className="text-sm font-bold uppercase tracking-[0.2em] text-secondary-900">{text}</span>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
