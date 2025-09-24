
import React, { useState, useEffect, useId } from 'react';
import { Calendar, MapPin, Award, Users, Mic, BarChart, Lightbulb, Leaf, BrainCircuit, HeartPulse, Building, Bus, Tractor, Sparkles, Menu, X, ChevronDown } from 'lucide-react';
import heroBackground from '../images/bg.png'; // Import your local image
import gdgLogo from '../images/gdgDark.png'; // Import powered by logo
import gdgLogodark from '../images/GDGLight.png'; // Import powered by logo
import gcloud from '../images/pngegg.png'; // Import Google Cloud logo
import kletech from '../images/kle.png'; // Import KLE Tech logo
import logo from '../images/logo.png'; // Import Hack Karnataka logo
import wtm from '../images/Group 107.png'; // Import WTM logo
import mlh from '../images/image.png'; // Import MLH logo
import kar from '../images/kar.png'; // Import Karnataka Tourism logo
import hack from '../images/hack.png'; // Import Hack Logo
import track1 from '../images/track1.png'; // Import Track 1 image
import track2 from '../images/track2.png'; // Import Track 2 image
import track3 from '../images/track3.png'; // Import Track 3 image
import track4 from '../images/yaksh.png'; // Import Track 4 image
import track6 from '../images/track6.png'; // Import Track 4 image
import track5 from '../images/track5.png'; // Import Track 5 image
import tbg1 from '../images/tracks/agri.jpeg'; // Import Track Background image
import tbg2 from '../images/tracks/aiforgood.png'; // Import Track Background image
import tbg3 from '../images/tracks/nature3.png'; // Import Track Background image
import tbg4 from '../images/tracks/health1.png'; // Import Track Background image
import tbg5 from '../images/tracks/culture.png'; // Import Track Background image
import speaker1 from '../images/speaker1.jpg'; // Import Speaker image
import speaker2 from '../images/speaker2.jpg'; // Import Speaker image
import speaker3 from '../images/speaker3.jpg'; // Import Speaker image
import speaker4 from '../images/speaker4.jpg'; // Import Speaker image
import speaker5 from '../images/speaker5.jpg'; // Import Speaker image
import speaker6 from '../images/speaker6.jpg'; // Import Speaker image
import devfolio from '../images/devfoilio.png'; // Import Devfolio logo
import eth from '../images/eth.png'; // Import ETHIndia logo
import apply from '../images/applydevfolio.png'; // Import Apply logo
import logoV from '../images/logoVertical.png'; // Import Hack Karnataka logo vertical
import kle from '../images/KLETech.png'; // Import KLE Tech logo
import { Speakers } from './speaker';
// Helper component for Icons
const IconWrapper = ({ children }) => (
  <div className="bg-indigo-100 dark:bg-indigo-900/50 p-3 rounded-full">
    {children}
  </div>
);

// Header Component
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Tracks', href: '#tracks' },
    { name: 'Sponsors', href: '#sponsors' },
    { name: 'Prizes', href: '#prizes' },
    { name: 'Partners', href: '#partners' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="bg-black/20 dark:bg-gray-900/40 backdrop-blur-lg fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
      
          <img src={logoV} alt="Hack Karnataka Logo" className="h-10 sm:h-12 p-1 mx-auto drop-shadow-[0_0_1px_rgba(100,100,100,0.8)]" />
       
        </div>
        <nav className="hidden md:flex space-x-8">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="text-white dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">{link.name}</a>
          ))}
        </nav>
        <div className="hidden md:block">
            <a href="https://hackkarnataka.in" target="_blank" rel="noopener noreferrer" className="bg-indigo-600 text-white px-5 py-2 lg:px-6 lg:py-3 rounded-full text-sm lg:text-lg font-semibold hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 inline-block">
              Register Now
            </a>
         </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 dark:text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">{link.name}</a>
            ))}
            <a href="#Register Now" onClick={() => setIsOpen(false)} className="bg-indigo-600 text-white px-6 py-4 rounded-full hover:bg-indigo-700 transition-all duration-300">Register Now</a>
          </nav>
        </div>
      )}
    </header>
  );
};


// Countdown Timer Component
const CountdownTimer = () => {
    const calculateTimeLeft = () => {
        const difference = +new Date("2025-11-08T09:00:00") - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach(interval => {
        if (!timeLeft[interval] && timeLeft[interval] !== 0) {
            return;
        }
        timerComponents.push(
            <div key={interval} className="text-center">
                <div className="text-2xl md:text-4xl font-bold text-white">
                    {String(timeLeft[interval]).padStart(2, '0')}
                </div>
                <div className="text-sm uppercase text-indigo-200">{interval}</div>
            </div>
        );
    });

    return (
        <div className="flex justify-center space-x-4 md:space-x-8 my-8">
            {timerComponents.length ? timerComponents : <span className="text-2xl text-white font-bold">The event has started!</span>}
        </div>
    );
};


// Hero Section
const Hero = () => (
  <section className="relative flex min-h-screen items-center justify-center overflow-hidden text-white">
    <div 
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBackground})` }}
    ></div>
    {/* This div creates a dark overlay to ensure text is readable */}
    <div className="absolute inset-0 bg-black/60"></div>
    <div className="container relative z-10 mx-auto mt-10 sm:mt-24 px-4 lg:px-6 py-20 lg:py-20">
      <div className="grid lg:grid-cols-2 gap-4 lg:gap-16 items-center">
        {/* Left Section */}
        <div className="text-center lg:text-left">
          <img src={hack} alt="Hack Logo" className="h-24 sm:h-30 mx-auto lg:mx-0 mb-6 animate-fade-in-down" />
          <h1 className="text-6xl lg:text-8xl xl:text-9xl font-extrabold leading-tight animate-fade-in-down">
            KARNATAKA
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mt-8 text-indigo-300 mb-6 tracking-wider font-light animate-fade-in-up">
            Heritage | Nature | Future
          </p>
          <p className="text-base md:text-lg text-white/70 max-w-xl my-8 animate-fade-in-up tracking-wide" style={{animationDelay: '0.2s'}}>Shaping tomorrow with Agentic systems & Generative AI.</p>
          
        </div>
        {/* Right Section */}
        <div className="text-center ">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-8 text-base sm:text-lg">
            <div className="flex items-center space-x-2">
              <Calendar className="text-indigo-400" />
              <span>November 8th - 9th, 2025</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="text-indigo-400" />
              <span>KLE Technological University, Hubli</span>
            </div>
          </div>
          <CountdownTimer />
          <div className="space-x-4 mt-8">
            {/* <a href="https://hackkarnataka.in" target="_blank" rel="noopener noreferrer" className="bg-indigo-600 text-white px-5 py-2 lg:px-6 lg:py-3 rounded-full text-sm lg:text-lg font-semibold hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 inline-block">
              Register Now
            </a> */}
           <div
            className="apply-button"
            data-hackathon-slug="hack-karnataka"
            data-button-theme="light"
            style={{ height: "44px", width: "312px" }}
          ></div>

             <a href="#about" className="bg-white/20 text-white px-5 py-2 lg:px-6 lg:py-3 rounded-full text-sm lg:text-lg font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105 inline-block">
              Learn More
            </a>
          </div>
          <div className="mt-10 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
            <p className="text-sm text-gray-400 mb-4">Powered By</p>
            <div className="flex justify-center items-center space-x-4">
              <img src={kletech} alt="KLE Technological University Logo" className="h-6 sm:h-12" />
              <img src={gdgLogo} alt="Google Developer Group Hubli Logo" className="h-9 sm:h-16" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// About Section
const About = () => (
  <section id="about" className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden">
    <div 
      className="absolute inset-0 bg-cover bg-center opacity-[0.03] dark:opacity-[0.02] blur-sm"
      style={{ backgroundImage: `url(${heroBackground})` }}
    ></div>
    <div className="container relative z-10 mx-auto px-6">
      <div className="text-center mb-12">
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tighter text-gray-600 dark:text-gray-200">
            About -  Hack Karnataka
          </h1>
        {/* <h2 className="text-4xl font-bold text-gray-800 dark:text-white">What is Hack Karnataka?</h2> */}
        <p className="text-indigo-500 dark:text-indigo-400 mt-2 text-lg">Igniting Innovation, Problem-Solving, and Entrepreneurial Thinking</p>
      </div>
      <div className="max-w-6xl mx-auto text-lg text-gray-600 dark:text-gray-300 leading-relaxed space-y-6 lg:text-justify text-center">
        {/* Desktop Content */}
        <div className="hidden md:block space-y-6">
          <p>
          Hack Karnataka is a first-of-its-kind 30-hour in-person hackathon hosted at KLE Technological University, Hubballi. The event will bring together students from 350+ colleges, startups, industry leaders, and government agencies to collaborate on next-generation solutions.
          With a strong emphasis on Generative AI and Agentic AI, participants will explore future-ready innovations across domains such as smart living, AgriTech, and open innovation. The hackathon will feature keynote session and various workshops led by experts from Google, Amazon AWS, Microsoft, Kaggle Grandmasters, and ACM ICPC winners, providing participants with world-class mentorship and exposure.
          </p>
          <p>
          Offering ₹10 lakh+ worth of prizes, networking opportunities, internships, and startup incubation pathways, HackKarnataka is not just a competition but a movement to inspire innovation, entrepreneurship, and problem-solving at scale. Backed by 50+ industry partners and supported by academia and government, HackKarnataka positions Hubballi and KLE Technological University as a hub for AI-driven innovation and future-ready talent.
          By partnering with government agencies, industry leaders, startups, and educational institutions, we aim to create a vibrant ecosystem. We bring all stakeholders together to brainstorm ideas, tackle real-world problems, and empower young hackers to push the boundaries of what's possible with the latest technologies.
          </p>
        </div>
        {/* Mobile Content */}
        <div className="block md:hidden">
            <p>
            Hack Karnataka is a 30-hour in-person hackathon at KLE Technological University, Hubballi, uniting students and entrepreneurs to innovate with Generative and Agentic AI. Featuring workshops from industry experts and over ₹10 lakh in prizes, it's a unique opportunity for networking, learning, and building future-ready solutions.
            </p>
        </div>
      </div>
    </div>
  </section>
);

// Sponsorship Card Component
const SponsorshipCard = ({ tier, cost, features, isFeatured }) => (
    <div className={`border-2 ${isFeatured ? 'border-indigo-500' : 'border-gray-200 dark:border-gray-700'} rounded-lg p-8 flex flex-col h-full shadow-lg ${isFeatured ? 'transform md:scale-105 bg-gray-50 dark:bg-gray-800' : 'bg-white dark:bg-gray-800'}`}>
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{tier}</h3>
        <p className="text-3xl sm:text-4xl font-extrabold my-4 text-gray-900 dark:text-white">${cost}<span className="text-base font-normal text-gray-500 dark:text-gray-400">/event</span></p>
        <ul className="space-y-3 text-gray-600 dark:text-gray-300 mb-8 flex-grow">
            {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                </li>
            ))}
        </ul>
        <a href="mailto:sponsors@hackkarnataka.in" className={`w-full text-center py-3 rounded-full font-semibold transition-all duration-300 ${isFeatured ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200 dark:bg-indigo-900/50 dark:text-white dark:hover:bg-indigo-900'}`}>
            Become a Sponsor
        </a>
    </div>
);

// Why Sponsor Section
const WhySponsor = () => {
    const tiers = [
        {
            tier: 'Title',
            cost: 1000,
            features: [
                'All Platinum benefits',
                'Inaugural/Closing Remarks',
                'Primary branding as Title Sponsor',
                'Dedicated booth space',
            ],
            isFeatured: true,
        },
        {
            tier: 'Platinum',
            cost: 750,
            features: [
                'All Gold benefits',
                'Keynote Speaker Status',
                'Logo on main stage banner',
                'Dedicated Problem Statements',
            ],
            isFeatured: false,
        },
        {
            tier: 'Gold',
            cost: 500,
            features: [
                'All Silver benefits',
                'Send Mentors/Judges',
                'Logo on T-shirt/Certificates',
                'Webinar/Tech Talk',
            ],
            isFeatured: false,
        },
        {
            tier: 'Silver',
            cost: 300,
            features: ['Send Swags/Goodies', 'Brand Promotion on Social Media & Website'],
            isFeatured: false,
        }
    ];

    return (
        <section id="sponsors" className="py-20 bg-gray-10 dark:bg-gray-800">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Sponsorship Packages</h2>
                    <p className="text-indigo-500 dark:text-indigo-400 mt-2 text-lg">Connect with the next generation of tech leaders.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto items-stretch">
                    {tiers.map(tier => <SponsorshipCard key={tier.tier} {...tier} />)}
                </div>
                 <div className="text-center mt-12 text-lg text-gray-600 dark:text-gray-300">
                    <p>We are open to custom packages and in-kind sponsorships. Please contact us for further details!</p>
                    <a href="mailto:sponsors@hackkarnataka.in" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline mt-2 inline-block">
                        sponsors@hackkarnataka.in
                    </a>
                </div>
            </div>
        </section>
    );
};


// Tracks Section
const Tracks = () => {
  const tracks = [
    // { name: 'Nature & Sustainability', icon: <Leaf className="w-10 h-10 text-white" />, description: 'Develop solutions for environmental challenges, promoting a greener future.', bgImage: heroBackground },
    // { name: 'Generative AI for Good', icon: <BrainCircuit className="w-10 h-10 text-white" />, description: 'Leverage generative AI to address social issues and create positive impact.', bgImage: heroBackground },
    // { name: 'HealthTech & Wellness', icon: <HeartPulse className="w-10 h-10 text-white" />, description: 'Innovate in healthcare with technology to improve patient outcomes and well-being.', bgImage: heroBackground },
    // { name: 'Culture & Tourism Tech', icon: <Building className="w-10 h-10 text-white" />, description: 'Enhance cultural heritage and tourism experiences through digital solutions.', bgImage: heroBackground },
    // { name: 'Smart Cities & Future Living', icon: <Bus className="w-10 h-10 text-white" />, description: 'Build technologies for smarter, more efficient, and sustainable urban environments.', bgImage: heroBackground },
    // { name: 'AgriTech & Rural Innovation', icon: <Tractor className="w-10 h-10 text-white" />, description: 'Create solutions to modernize agriculture and empower rural communities.', bgImage: heroBackground },
    
    { name: 'Nature & Sustainability', icon: track1, description: 'Develop solutions for environmental challenges, promoting a greener future.', bgImage: tbg5 },
    { name: 'Generative AI for Good', icon: track2, description: 'Leverage generative AI to address social issues and create positive impact.', bgImage: tbg2 },
    { name: 'HealthTech & Wellness', icon: track3, description: 'Innovate in healthcare with technology to improve patient outcomes and well-being.', bgImage: tbg4 },
    { name: 'AgriTech & Rural Innovation', icon: track5, description: 'Create solutions to modernize agriculture and empower rural communities.', bgImage: tbg1 },
    { name: 'Culture & Tourism Tech', icon: track4, description: 'Enhance cultural heritage and tourism experiences through digital solutions.', bgImage: heroBackground },
    { name: 'Smart Cities & Future Living', icon: track6, description: 'Build technologies for smarter, more efficient, and sustainable urban environments.', bgImage: heroBackground },
    // { name: 'Open Innovation', icon: <Sparkles className="w-8 h-8 text-pink-500" />, description: 'Bring your most creative and groundbreaking ideas to life, with no thematic constraints.' },
  ];

  return (
    <section id="tracks" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-12 lg:px-48">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Hackathon Tracks</h2>
          <p className="text-indigo-500 dark:text-indigo-400 mt-2 text-lg">Innovate across diverse and impactful themes.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
          {tracks.map((track, index) => (
            <div key={index} className="group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg hover:shadow-indigo-500/30 hover:shadow-2xl transition-all duration-300">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${track.bgImage})` }}
              ></div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors duration-300"></div>

              {/* Content */}
              <div className="relative h-full flex flex-col items-center justify-center p-6 text-center text-white transition-all duration-300">
                <div className="transition-transform duration-300 group-hover:-translate-y-4">
                  <img src={track.icon} alt={`${track.name} Icon`} className="h-24 sm:h-32 mx-auto mb-4" />
                  <h3 className="mt-4 text-2xl font-bold">{track.name}</h3>
                </div>
                <p className="mt-2 text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-xs">
                  {track.description}
                </p>
              </div>
              {index >= tracks.length - 2 && (
                <div className="absolute inset-0 bg-black/70 dark:bg-gray-900/90 backdrop-blur-md flex items-center justify-center rounded-2xl z-10">
                  <p className="text-xl font-bold text-white text-center px-4">
                    Stay tuned! Track will be announced shortly
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Highlights Section
const Highlights = () => {
    const highlights = [
        // "Key speakers from Google, AWS, and Microsoft",
        "Workshops by Renowned Industry Experts",
        "₹10 Lakhs+ Worth of Prizes",
        "30-Hour In-Person Hackathon",
        "1000+ Students from 350+ Colleges",
        "Networking & Internship Opportunities",
        "Ideation and Startup Incubation Support",
    ];

    return (
        <section id="highlights" className="relative py-20 bg-gray-50 dark:bg-gray-800 overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-[0.03] dark:opacity-[0.02] blur-sm"
              style={{ backgroundImage: `url(${heroBackground})` }}
            ></div>
            <div className="container relative z-10 mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Event Highlights</h2>
                    <p className="text-indigo-500 dark:text-indigo-400 mt-2 text-lg">An experience packed with learning, networking, and fun.</p>
                </div>
                <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
                    {highlights.map((highlight, index) => (
                        <div key={index} className="w-full sm:w-72 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-indigo-500/20 hover:-translate-y-2 transition-all duration-300 text-center">
                            <div className="flex justify-center">
                                <IconWrapper><CheckCircle className="w-7 h-7 text-indigo-500" /></IconWrapper>
                            </div>
                            <p className="text-lg font-medium text-gray-700 dark:text-gray-200 mt-5">{highlight}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const CheckCircle = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);


// Prizes Section
const Prizes = () => (
  <section id="prizes" className="relative overflow-hidden py-20 bg-gray-100 dark:bg-gray-900">
    <div className="absolute inset-0 z-0 overflow-hidden">
        <Award className="absolute -left-24 -top-24 w-80 h-80 text-gray-200 dark:text-gray-700 opacity-40 rotate-12" />
        <Award className="absolute -right-24 -bottom-24 w-80 h-80 text-gray-200 dark:text-gray-700 opacity-40 -rotate-12" />
    </div>
    <div className="container mx-auto px-6 relative z-10">
      <div className="text-center mb-12">
        <Award className="mx-auto text-yellow-500 w-16 h-16 mb-4" />
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Prizes & Recognition</h2>
        <p className="text-indigo-500 dark:text-indigo-400 mt-2 text-lg">Over ₹10 Lakhs in prizes to be won!</p>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
        <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center border-2 border-gray-300 dark:border-gray-700 w-full max-w-sm order-2 md:order-1">
          <p className="text-xl sm:text-2xl font-semibold text-gray-500 dark:text-gray-400">2nd Place</p>
          <p className="text-4xl sm:text-5xl font-bold text-gray-800 dark:text-white my-4">₹50,000</p>
          <p className="text-gray-600 dark:text-gray-300">Cash Prize</p>
        </div>
        <div className="bg-gradient-to-br from-yellow-300 to-orange-400 p-8 rounded-lg shadow-2xl text-center text-white transform md:scale-110 border-2 border-yellow-500 w-full max-w-sm order-1 md:order-2">
          <p className="text-xl sm:text-2xl font-semibold">1st Place</p>
          <p className="text-5xl sm:text-6xl font-bold my-4">₹75,000</p>
          <p className="font-medium">Cash Prize</p>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center border-2 border-gray-300 dark:border-gray-700 w-full max-w-sm order-3">
          <p className="text-xl sm:text-2xl font-semibold text-gray-500 dark:text-gray-400">3rd Place</p>
          <p className="text-4xl sm:text-5xl font-bold text-gray-800 dark:text-white my-4">₹25,000</p>
          <p className="text-gray-600 dark:text-gray-300">Cash Prize</p>
        </div>
      </div>
       <div className="text-center mt-12">
            <div className="bg-indigo-100 px-8 sm:px-12 py-8 dark:bg-indigo-900/50 inline-block rounded-lg">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-500 dark:text-indigo-200">Track Prizes</h3>
                <p className="text-3xl sm:text-4xl font-bold text-black-600 dark:text-indigo-400 mt-2">₹20,000</p>
                <p className="text-indigo-700 dark:text-indigo-300 mt-1">for each track winner!</p>
            </div>
        </div>
    </div>
  </section>
);


// Partner Card Component
const PartnerCard = ({ name, logoUrl, websiteUrl, alt }) => (
    <a href={websiteUrl} target="_blank" rel="noopener noreferrer" className="block bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-64">
        <img 
            src={logoUrl} 
            alt={alt || `${name} Logo`}
            className="h-20 mx-auto object-contain grayscale-[10%] hover:grayscale-0 transition-all duration-300"
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/200x100/ffffff/333333?text=Logo+Not+Found'; }}
        />
        <p className="text-center mt-4 font-semibold text-gray-700 dark:text-gray-200">{name}</p>
    </a>
);


// Partners Section
const Partners = () => {
    const esteemedPartners = [
        // { name: "Google Cloud", logoUrl: gcloud, websiteUrl: "#" },
        { name: "KLE Technological University", logoUrl: kle, websiteUrl: "https://www.kletech.ac.in/", alt: "KLE Technological University" },
        // { name: "Karnataka Tourism Dept", logoUrl: kar , websiteUrl: "#" },
        // { name: "To be announced", logoUrl: "" , websiteUrl: "#" },
    ];
    const Sponsors = [
      // { name: "Google Cloud", logoUrl: gcloud, websiteUrl: "#" },
      { name: "Devfoilo", logoUrl: devfolio , websiteUrl: "https://devfolio.co", alt: "DEVFOLIO LOGO" },
      { name: "ETHIndia", logoUrl: eth , websiteUrl: "https://ethindia.co ", alt: "ETHINDIA LOGO" },
      // { name: "To be announced", logoUrl: "" , websiteUrl: "#" },
  ];
    
    const communityPartners = [
        { name: "Google Developer Group Hubli", logoUrl: gdgLogodark, websiteUrl: "#" },
        // { name: "To be announced", logoUrl: "" , websiteUrl: "#" },
        { name: "Women Techmakers", logoUrl: wtm, websiteUrl: "" },
    ];

    return (
        <section id="partners" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Our Supporters</h2>
                    <p className="text-indigo-500 dark:text-indigo-400 mt-2 text-lg">Proudly backed by industry and community leaders.</p>
                </div>

                <div>
                    <h3 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">Esteemed Partners</h3>
                    <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
                        {esteemedPartners.map(partner => <PartnerCard key={partner.name} {...partner}   />)}
                    </div>
                </div>
                <div className="mt-20">
                    <h3 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">Sponsors</h3>
                    <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
                        {Sponsors.map(partner => <PartnerCard key={partner.name} {...partner}  />)}
                    </div>
                </div>

                <div className="mt-20">
                    <h3 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">Community Partners</h3>
                    <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
                        {communityPartners.map(partner => <PartnerCard key={partner.name} {...partner}  />)}
                    </div>
                </div>
            </div>
        </section>
    );
};


// FAQ Section
const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-200 dark:border-gray-700 py-4">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center text-left">
                <h3 className="text-lg font-medium text-gray-800 dark:text-white">{question}</h3>
                <ChevronDown className={`w-5 h-5 text-indigo-500 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && <p className="mt-4 text-gray-600 dark:text-gray-300">{answer}</p>}
        </div>
    );
};

const FAQ = () => {
    const faqs = [
        { question: "Who can participate?", answer: "The hackathon is open to all university students, recent graduates, and startup enthusiasts. If you love to code and build things, you are welcome!" },
        { question: "Is this an in-person or virtual event?", answer: "Hack Karnataka is a fully in-person 30-hour hackathon held at KLE Technological University in Hubli. After the initial screening of online submissions, the selected finialist will be invite for the in-person hackathon." },
        { question: "How much does it cost to participate?", answer: "Participation is completely free for all selected hackers. This includes meals, snacks, and a place to hack for the entire duration." },
        { question: "What should I bring?", answer: "You'll need your laptop, charger, any other hardware you plan to use, and your enthusiasm! We'll provide the rest." },
        { question: "What if I don't have a team?", answer: "No problem! We'll have dedicated team formation sessions at the beginning of the event. You can also connect with other participants on our Discord server beforehand." },
        { question: "What can I build?", answer: "You can build anything you want, as long as it aligns with one of the hackathon tracks. We encourage you to be creative and innovative!" },
    ];
    return (
        <section id="faq" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Frequently Asked Questions</h2>
                </div>
                <div className="max-w-3xl mx-auto">
                    {faqs.map((faq, index) => <FaqItem key={index} question={faq.question} answer={faq.answer} />)}
                </div>
            </div>
        </section>
    );
};


// Footer
const Footer = () => (
  <footer className="bg-gray-900 text-white">
    <div className="container mx-auto px-6 py-12 text-center md:text-left">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Hack Karnataka</h3>
          <p className="text-gray-400">Heritage | Nature | Futuree</p>
          <p className="text-gray-500 mt-2 text-sm italic">Shaping tomorrow with Agentic systems and Generative AI.</p>
          <p className="text-gray-400 mt-4">November 8th-9th, 2025</p>
          <p className="text-gray-400">KLE Technological University, Hubli</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
            <li><a href="#tracks" className="text-gray-400 hover:text-white">Tracks</a></li>
            <li><a href="#sponsors" className="text-gray-400 hover:text-white">Sponsors</a></li>
            <li><a href="#faq" className="text-gray-400 hover:text-white">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="text-gray-400">For general inquiries:</p>
          <a href="mailto:gdghubli@gmail.com" className="text-indigo-400 hover:text-indigo-300">support@hackkarnataka.in</a>
           <p className="text-gray-400 mt-4">For sponsorship:</p>
          <a href="mailto:gdghubli@gmail.com" className="text-indigo-400 hover:text-indigo-300">support@hackkarnataka.in</a>
        </div>
      </div>
      <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Hack Karnataka. All rights reserved.</p>
        <p className="text-sm mt-2">Website: <a href="https://" className="text-indigo-400 hover:text-indigo-300">hackkarnataka.in</a></p>
      </div>
    </div>
  </footer>
);


// Main App Component
export default function LandingPage() {
  // A simple dark mode toggle for demonstration
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <div className={`${isDarkMode ? 'dark' : ''} bg-white dark:bg-gray-900 overflow-hidden`}>
        <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="fixed bottom-5 right-5 bg-gray-800 dark:bg-gray-100 text-white dark:text-black p-3 rounded-full z-50 shadow-lg"
            aria-label="Toggle Dark Mode"
        >
            {isDarkMode ? '☀️' : '🌙'}
        </button>
      <Header />
      <main>
        <Hero />
        <About />
        <Highlights />
        <Tracks />
        <Speakers/>
        <Prizes />
        <Partners />
        {/* <WhySponsor /> */}
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
