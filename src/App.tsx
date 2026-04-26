import { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageCircle, 
  ChevronDown, 
  CheckCircle2, 
  ArrowRight, 
  Menu, 
  X,
  Zap,
  Building2,
  Home,
  Battery,
  ShieldCheck,
  Award,
  BarChart3,
  Wrench,
  Construction,
  Users,
  Settings,
  Eye,
  HelpCircle,
  Clock
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Pakej', href: '#pakej' },
    { name: 'Projek', href: '#projek' },
    { name: 'Tentang Kami', href: '#tentang' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-100 transition-all duration-500 ${isScrolled ? 'solid-nav' : 'glass-nav py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center group cursor-pointer">
          <img 
            src="https://i.postimg.cc/W10hGQdF/image.png" 
            alt="Wibawa Mahir Solar Logo" 
            className="h-12 md:h-14 w-auto transition-all duration-500 group-hover:blue-glow group-hover:scale-110"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-white/60 hover:text-accent-blue font-medium transition-all text-sm uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <button className="blue-gradient hover:blue-gradient-hover text-white px-7 py-3 rounded-xl font-bold shadow-lg transition-all shadow-accent-blue/20 hover:scale-105 active:scale-95">
            Dapatkan Sebut Harga
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 w-full bg-brand-dark border-b border-white/5 p-6 space-y-4"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="block text-white/80 hover:text-brand-accent text-lg font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="w-full bg-brand-accent hover:bg-brand-accent-hover text-white py-3 rounded-lg font-bold">
              Dapatkan Sebut Harga
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <div className="relative h-screen w-full flex items-center overflow-hidden mask-hero bg-dark-primary">
      {/* Large faint watermark */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <img 
          src="https://i.postimg.cc/W10hGQdF/image.png" 
          alt="" 
          className="w-[120%] max-w-none opacity-[0.03] grayscale brightness-0 invert watermark-logo"
        />
      </div>

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark-primary via-dark-primary/60 to-accent-blue/5" />
      </div>

      {/* Hero radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-accent-blue/10 blur-[180px] rounded-full pointer-events-none" />
      
      <div className="absolute inset-0 z-10 hero-overlay" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 bg-accent-blue/10 border border-white/10 rounded-full mb-10 backdrop-blur-xl">
            <div className="w-2.5 h-2.5 bg-accent-blue rounded-full animate-pulse blue-glow shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
            <span className="text-accent-blue text-[11px] font-bold uppercase tracking-[0.45em]">Engineering Energy Transcendence</span>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-black text-white leading-[0.9] mb-10 tracking-tighter">
            Energy For <br />
            <span className="text-gradient-blue blue-glow italic">The Discerning</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-text-secondary mb-14 max-w-2xl leading-relaxed font-light">
            Luxury solar engineering designed for absolute efficiency. Experience clean energy that seamlessly adapts to your lifestyle.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="blue-gradient hover:blue-gradient-hover text-white px-12 py-6 rounded-[28px] font-bold text-xl transition-all shadow-[0_0_30px_-10px_rgba(59,130,246,0.5)] flex items-center justify-center gap-4 group">
              Start Your Transition
              <ArrowRight className="group-hover:translate-x-2 transition-transform duration-500" />
            </button>
            <button className="glass hover:bg-white/[0.05] text-white px-12 py-6 rounded-[28px] font-bold text-xl transition-all flex items-center justify-center gap-4 group border border-white/10">
              <MessageCircle size={28} className="text-accent-blue group-hover:blue-glow" />
              WhatsApp Specialist
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/30"
      >
        <ChevronDown size={32} />
      </motion.div>
    </div>
  );
};

const TrustStrip = () => {
  const partners = ['Huawei', 'Jinko', 'BYD', 'Solis', 'SMA', 'JA Solar'];
  return (
    <div className="bg-dark-primary py-16 border-b border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-center text-text-secondary text-[10px] font-bold uppercase tracking-[0.5em] mb-12">Authorized Engineering Partners</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-28 opacity-10 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
          {partners.map((partner) => (
            <div key={partner} className="text-3xl md:text-4xl font-black text-white tracking-tighter italic">
              {partner}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section id="tentang" className="py-32 bg-dark-primary overflow-hidden relative">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent-blue/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl relative z-10 border border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2058&auto=format&fit=crop" 
                alt="Solar Installation" 
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Decors */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent-blue/10 blur-3xl -z-0" />
            
            <div className="absolute top-10 right-10 glass p-8 rounded-3xl z-20 hidden md:block border border-white/10 shadow-2xl">
              <div className="flex items-center gap-5">
                <div className="p-4 bg-accent-blue/20 text-accent-blue rounded-2xl">
                  <CheckCircle2 size={36} className="blue-glow" />
                </div>
                <div>
                  <p className="text-3xl font-black text-white tracking-tighter">100%</p>
                  <p className="text-xs text-text-secondary font-bold uppercase tracking-widest">Satisfaction Rate</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent-blue font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Your Local Solar Energy Partner</span>
            <h2 className="text-5xl md:text-6xl font-black text-white mt-4 mb-8 leading-[1.1] tracking-tighter">
              Pakar Sistim Tenaga <br /> 
              <span className="text-gradient-blue italic">Solar Wibawa Mahir</span>
            </h2>
            <div className="space-y-8 text-text-secondary text-lg leading-relaxed mb-12 font-light">
              <p>
                Wibawa Mahir Solar adalah peneraju dalam penyelesaian tenaga boleh diperbaharui di Klang Valley. Kami komited untuk membantu pemilik rumah dan komuniti perniagaan mengurangkan kos operasi melalui teknologi solar yang efisien.
              </p>
              <p>
                Dengan pasukan jurutera berpengalaman dan komponen berkualiti premium, kami memastikan setiap pemasangan memenuhi piawaian keselamatan dan prestasi tertinggi di <span className="text-white font-medium">Malaysia</span>.
              </p>
            </div>
            <button className="glass hover:bg-white/[0.05] text-white px-10 py-5 rounded-2xl font-bold transition-all flex items-center gap-3 group border border-white/10">
              Ketahui Lebih Lanjut
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "Solar Residential",
      desc: "Penjimatan bil elektrik rumah sehingga 90% dengan sistim solar bumbung yang estetik.",
      image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=1974&auto=format&fit=crop",
      icon: <Home size={28} />
    },
    {
      title: "Solar Enterprise",
      desc: "Optimumkan kos operasi perniagaan dan tingkatkan ROI dengan pelaburan solar kejuruteraan tinggi.",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1974&auto=format&fit=crop",
      icon: <Building2 size={28} />
    },
    {
      title: "Energy Storage",
      desc: "Simpanan tenaga berlebihan untuk bekalan kuasa berterusan tanpa gangguan.",
      image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop",
      icon: <Battery size={28} />
    }
  ];

  return (
    <section id="pakej" className="py-32 bg-dark-section relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <span className="text-accent-blue font-bold tracking-[0.5em] uppercase text-[10px]">Strategic Solar Systems</span>
          <h2 className="text-6xl md:text-7xl font-black text-white mt-8 tracking-tighter leading-none italic">The New Standard</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((item, id) => (
            <motion.div 
              key={id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: id * 0.2, duration: 0.8 }}
              className="group relative h-[600px] rounded-[40px] overflow-hidden cursor-pointer flex flex-col justify-end p-12 border border-white/5"
            >
              <div className="absolute inset-0 z-0">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale brightness-50 transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0 group-hover:brightness-75" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-primary via-dark-primary/40 to-transparent opacity-95 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 glass text-accent-blue rounded-3xl flex items-center justify-center mb-10 group-hover:blue-glow transition-all duration-700 bg-white/[0.03]">
                  {item.icon}
                </div>
                <h3 className="text-4xl font-bold text-white mb-6 tracking-tighter">{item.title}</h3>
                <p className="text-text-secondary text-lg mb-10 group-hover:text-white transition-colors leading-relaxed font-light">{item.desc}</p>
                <button className="flex items-center gap-4 text-white font-bold group-hover:text-accent-blue transition-all uppercase tracking-widest text-sm">
                   Explore <ArrowRight size={20} className="group-hover:translate-x-3 transition-transform duration-500" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseSection = () => {
  const reasons = [
    {
      title: "Technical Excellence",
      desc: "Jurutera bertauliah SEDA dengan rekod pemasangan kejuruteraan yang cemerlang.",
      icon: <Users className="w-12 h-12 text-accent-blue" />
    },
    {
      title: "High-End Components",
      desc: "Hanya menggunakan jenama global premium seperti Huawei, Jinko & Solis.",
      icon: <Award className="w-12 h-12 text-accent-blue" />
    },
    {
      title: "Lifetime Support",
      desc: "Jaminan prestasi panel sehingga 25 tahun dengan servis penyelenggaraan eksklusif.",
      icon: <ShieldCheck className="w-12 h-12 text-accent-blue" />
    },
    {
      title: "Strategic Options",
      desc: "Pakej pelaburan tenaga dengan pilihan pembiayaan korporat yang fleksibel.",
      icon: <BarChart3 className="w-12 h-12 text-accent-blue" />
    }
  ];

  return (
    <section className="py-32 bg-dark-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-24">
          <span className="text-accent-blue font-bold tracking-[0.6em] uppercase text-[10px]">The Wibawa Advantage</span>
          <h2 className="text-6xl font-black text-white mt-8 tracking-tighter leading-none">Global Standards</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {reasons.map((reason, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -15 }}
              className="glass-card p-12 group flex flex-col items-center text-center"
            >
              <div className="mb-10 p-6 glass inline-block rounded-[32px] group-hover:blue-glow transition-all duration-700 bg-white/[0.02] border-white/5">{reason.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-6 tracking-tighter">{reason.title}</h3>
              <p className="text-text-secondary leading-relaxed font-light text-lg">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ExpertiseGrid = () => {
  const experts = [
    { title: "Solar Design", icon: <Settings size={28} /> },
    { title: "Installation", icon: <Construction size={28} /> },
    { title: "Maintenance", icon: <Wrench size={28} /> },
    { title: "Monitoring", icon: <Eye size={28} />, highlighted: true },
    { title: "Consultation", icon: <HelpCircle size={28} /> },
    { title: "Engineering", icon: <Clock size={28} /> },
    { title: "Financing", icon: <BarChart3 size={28} /> },
    { title: "Support", icon: <MessageCircle size={28} /> },
  ];

  return (
    <section className="py-24 bg-dark-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {experts.map((exp, i) => (
              <div 
                key={i} 
                className={`flex flex-col items-center justify-center p-8 rounded-[32px] transition-all duration-700 cursor-pointer border ${exp.highlighted ? 'blue-gradient text-white shadow-blue-glow border-accent-blue/30 scale-110 z-10' : 'glass text-white/40 hover:text-white hover:bg-white/[0.05] border-white/5'}`}
              >
                <div className={`mb-5 transition-all duration-700 ${exp.highlighted ? 'text-white blue-glow' : 'text-accent-blue group-hover:blue-glow'}`}>
                  {exp.icon}
                </div>
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-center leading-tight">{exp.title}</span>
              </div>
            ))}
         </div>
      </div>
    </section>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "Setia Alam Luxury Residence",
      location: "Shah Alam, Selangor",
      type: "Residential Solar (12kWp)",
      image: "https://images.unsplash.com/photo-1513694203232-719a285e022f?q=80&w=2069&auto=format&fit=crop"
    },
    {
      title: "Klang Logistics Hub",
      location: "Port Klang, Selangor",
      type: "Enterprise Solar (250kWp)",
      image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?q=80&w=1937&auto=format&fit=crop"
    },
    {
      title: "Cyberjaya Tech Park",
      location: "Cyberjaya",
      type: "Industrial Solar (500kWp)",
      image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=2064&auto=format&fit=crop"
    }
  ];

  return (
    <section id="projek" className="py-32 bg-dark-primary relative">
      <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-accent-blue font-bold tracking-[0.6em] uppercase text-[10px]">Architectural Innovations</span>
            <h2 className="text-6xl md:text-7xl font-black text-white mt-8 tracking-tighter italic leading-none">The Portfolio</h2>
          </div>
          <button className="glass hover:bg-white/[0.05] text-white px-12 py-5 rounded-[28px] font-bold transition-all flex items-center gap-4 group border border-white/10 text-lg">
            Global Archives
            <ArrowRight size={24} className="group-hover:translate-x-3 transition-transform duration-500" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -20 }}
              className="glass-card overflow-hidden group border border-white/5"
            >
              <div className="h-[400px] overflow-hidden relative">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale brightness-75 transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0 group-hover:brightness-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-primary/90 via-transparent to-transparent" />
              </div>
              <div className="p-12">
                <p className="text-accent-blue text-[10px] font-bold uppercase mb-6 tracking-[0.4em]">{project.location}</p>
                <h3 className="text-3xl font-bold text-white mb-8 leading-tight group-hover:text-accent-blue transition-colors tracking-tighter">{project.title}</h3>
                <div className="flex items-center gap-4 text-text-secondary text-base font-medium">
                  <div className="w-10 h-10 rounded-2xl glass flex items-center justify-center text-accent-blue group-hover:blue-glow transition-all">
                    <Zap size={18} />
                  </div>
                  {project.type}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const faqs = [
    { 
      q: "Berapakah anggaran kos pemasangan solar?", 
      a: "Kos bergantung kepada saiz sistim (kWp) yang diperlukan. Secara purata, sistim kediaman bermula dari RM15k ke atas. Hubungi kami untuk sebut harga tepat berdasarkan bil elektrik anda." 
    },
    { 
      q: "Berapa lamakah tempoh ROI (Return on Investment)?", 
      a: "Biasanya ROI dicapai dalam tempoh 4 hingga 6 tahun melalui penjimatan bil elektrik bulanan." 
    },
    { 
      q: "Adakah sistim solar memerlukan maintenance yang kerap?", 
      a: "Solar sangat 'low maintenance'. Pembersihan berkala (setiap 6 bulan) biasanya memadai untuk memastikan prestasi optimum." 
    },
    { 
      q: "Berapa lama tempoh pemasangan?", 
      a: "Pemasangan fizikal biasanya mengambil masa 2-3 hari. Proses permohonan dengan pihak berkuasa (TNB/SEDA) mungkin mengambil masa 2-4 minggu." 
    },
  ];

  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="py-32 bg-dark-primary">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-24">
          <span className="text-accent-blue font-bold tracking-[0.5em] uppercase text-[10px]">Frequent Questions</span>
          <h2 className="text-6xl font-black text-white mt-8 tracking-tighter italic leading-none">Intelligence Hub</h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="glass-card overflow-hidden border border-white/5">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                className="w-full text-left p-8 flex justify-between items-center group transition-colors"
              >
                <span className={`text-xl font-bold transition-all duration-300 ${openIdx === idx ? 'text-accent-blue' : 'text-white group-hover:text-accent-blue'}`}>
                  {faq.q}
                </span>
                <ChevronDown className={`transition-all duration-500 ${openIdx === idx ? 'rotate-180 text-accent-blue' : 'text-white/20'}`} />
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-8 pt-0 text-text-secondary leading-relaxed font-light border-t border-white/5 bg-white/[0.01]">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LeadFormSection = () => {
  return (
    <section className="relative py-40 overflow-hidden bg-dark-primary">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1611365892117-00ac5ef43759?q=80&w=2072&auto=format&fit=crop" 
          alt="Solar Background" 
          className="w-full h-full object-cover opacity-[0.03] grayscale"
        />
        <div className="absolute inset-0 hero-overlay opacity-80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-32 items-center">
        <div className="text-white">
          <h2 className="text-6xl md:text-7xl font-black mb-12 leading-[1.05] tracking-tighter">
            Quantify Your <br /><span className="text-gradient-blue italic">Future Savings</span>
          </h2>
          <div className="space-y-12">
            <div className="flex gap-8">
              <div className="w-16 h-16 glass rounded-3xl flex items-center justify-center shrink-0 border border-white/10 group hover:blue-glow transition-all duration-700 bg-white/[0.02]">
                <CheckCircle2 className="text-accent-blue" size={32} />
              </div>
              <div>
                <h4 className="font-bold text-3xl mb-4 tracking-tighter">Data-Driven Analysis</h4>
                <p className="text-text-secondary font-light leading-relaxed text-lg">We utilize advanced satellite imagery and consumption data to engineer your optimal system.</p>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="w-16 h-16 glass rounded-3xl flex items-center justify-center shrink-0 border border-white/10 group hover:blue-glow transition-all duration-700 bg-white/[0.02]">
                <CheckCircle2 className="text-accent-blue" size={32} />
              </div>
              <div>
                <h4 className="font-bold text-3xl mb-4 tracking-tighter">Premium Proposal</h4>
                <p className="text-text-secondary font-light leading-relaxed text-lg">Receive a comprehensive engineering report and a precise financial ROI roadmap.</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass p-12 md:p-16 rounded-[48px] shadow-2xl relative border border-white/5 bg-white/[0.01]"
        >
          <h3 className="text-4xl font-bold text-white mb-12 tracking-tighter italic">Get Started</h3>
          <form className="space-y-10">
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <label className="text-[10px] font-bold text-text-secondary uppercase tracking-[0.3em] ml-1">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full px-8 py-6 bg-white/[0.02] border border-white/5 rounded-3xl text-white placeholder:text-white/10 focus:outline-none focus:ring-2 focus:ring-accent-blue/20 focus:border-accent-blue/30 transition-all font-light text-lg" />
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-bold text-text-secondary uppercase tracking-[0.3em] ml-1">WhatsApp</label>
                <input type="tel" placeholder="+6012-3456789" className="w-full px-8 py-6 bg-white/[0.02] border border-white/5 rounded-3xl text-white placeholder:text-white/10 focus:outline-none focus:ring-2 focus:ring-accent-blue/20 focus:border-accent-blue/30 transition-all font-light text-lg" />
              </div>
            </div>
            <div className="space-y-4">
              <label className="text-[10px] font-bold text-text-secondary uppercase tracking-[0.3em] ml-1">Installation Site</label>
              <input type="text" placeholder="Location City" className="w-full px-8 py-6 bg-white/[0.02] border border-white/5 rounded-3xl text-white placeholder:text-white/10 focus:outline-none focus:ring-2 focus:ring-accent-blue/20 focus:border-accent-blue/30 transition-all font-light text-lg" />
            </div>
            <div className="space-y-4">
              <label className="text-[10px] font-bold text-text-secondary uppercase tracking-[0.3em] ml-1">Monthly Bill Average</label>
              <select className="w-full px-8 py-6 bg-white/[0.03] border border-white/10 rounded-3xl text-white appearance-none focus:outline-none focus:ring-2 focus:ring-accent-blue/40 focus:border-accent-blue transition-all font-light text-lg">
                <option className="bg-dark-primary">Below RM500</option>
                <option className="bg-dark-primary">RM501 - RM1,000</option>
                <option className="bg-dark-primary">RM1,001 - RM3,000</option>
                <option className="bg-dark-primary">Above RM3,000</option>
              </select>
            </div>
            <button className="w-full blue-gradient hover:blue-gradient-hover text-white py-7 rounded-[28px] font-bold text-2xl transition-all shadow-blue-glow tracking-tighter hover:scale-105 active:scale-95 leading-none">
              Initiate Inquiry
            </button>
            <p className="text-center text-[10px] text-text-secondary font-bold uppercase tracking-[0.4em] opacity-40">Privacy Protected Engine</p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-dark-primary pt-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-20 border-b border-white/5">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-20 text-white/60">
          <div className="space-y-10">
            <div className="flex items-center">
              <img 
                src="https://i.postimg.cc/W10hGQdF/image.png" 
                alt="Wibawa Mahir Solar Logo" 
                className="h-16 w-auto brightness-110"
              />
            </div>
            <p className="leading-relaxed font-light text-lg">
              Engineering the new standard of energy independence through absolute technical excellence and premium solar implementation.
            </p>
            <div className="flex gap-6">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-14 h-14 glass rounded-full flex items-center justify-center hover:bg-white/[0.08] hover:blue-glow transition-all duration-500 cursor-pointer border border-white/5 bg-white/[0.02]">
                  <div className="w-5 h-5 bg-white/20 rounded-sm" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-[0.4em] mb-12">Core Solutions</h4>
            <ul className="space-y-6 font-light text-lg">
              <li><a href="#" className="hover:text-accent-blue transition-all">Solar Residential</a></li>
              <li><a href="#" className="hover:text-accent-blue transition-all">Solar Enterprise</a></li>
              <li><a href="#" className="hover:text-accent-blue transition-all">Energy Storage</a></li>
              <li><a href="#" className="hover:text-accent-blue transition-all">Maintenance</a></li>
              <li><a href="#" className="hover:text-accent-blue transition-all">Project Archive</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-[0.4em] mb-12">Engineering HQ</h4>
            <div className="space-y-10 font-light text-lg">
              <p>
                Wibawa Mahir Solar HQ<br />
                Subang High-Tech Industrial Park,<br />
                40150 Shah Alam, Selangor.
              </p>
              <div className="space-y-5">
                <div className="flex items-center gap-4 text-white font-bold group cursor-pointer text-xl tracking-tighter overflow-hidden">
                  <Phone size={20} className="text-accent-blue" />
                  +6012-345 6789
                </div>
                <div className="flex items-center gap-4 text-white font-bold group cursor-pointer text-xl tracking-tighter overflow-hidden">
                  <MessageCircle size={20} className="text-accent-blue" />
                  +603-8888 7777
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-[0.4em] mb-12">Operations</h4>
            <ul className="space-y-6 font-light">
              <li className="flex justify-between border-b border-white/[0.03] pb-6">
                <span>Mon - Fri</span>
                <span className="font-bold text-white tracking-tighter">09:00 - 18:00</span>
              </li>
              <li className="flex justify-between border-b border-white/[0.03] pb-6">
                <span>Saturday</span>
                <span className="font-bold text-white tracking-tighter">09:00 - 13:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="font-bold text-accent-blue tracking-tighter">CLOSED</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-12 text-center text-white/20 text-[10px] font-bold uppercase tracking-[0.5em]">
        © {new Date().getFullYear()} Wibawa Mahir Solar. Premium Clean Energy Engineering. All Rights Reserved.
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/60123456789" 
      target="_blank" 
      rel="noreferrer"
      className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-3xl shadow-2xl hover:scale-110 active:scale-95 transition-all group flex items-center gap-3 px-8 blue-glow"
    >
      <span className="max-w-0 overflow-hidden font-bold whitespace-nowrap group-hover:max-w-xs transition-all duration-500 opacity-0 group-hover:opacity-100 tracking-tight uppercase text-xs">
        WhatsApp Kami
      </span>
      <MessageCircle size={28} className="fill-white" />
    </a>
  );
};

// --- Main App ---

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      <AnimatePresence>
        {loading && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="fixed inset-0 z-[200] bg-dark-primary flex items-center justify-center overflow-hidden"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-accent-blue/20 blur-[100px] rounded-full animate-pulse" />
              <motion.img 
                src="https://i.postimg.cc/W10hGQdF/image.png" 
                alt="Logo" 
                className="h-24 md:h-32 w-auto relative z-10 logo-pulse"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar />
      
      <main className="relative z-0">
        <Hero />
        <TrustStrip />
        <AboutSection />
        
        <ServicesSection />
        <WhyChooseSection />
        
        <div className="bg-dark-section">
          <ExpertiseGrid />
        </div>
        
        <section className="py-24 bg-dark-primary border-y border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 blur-3xl overflow-hidden pointer-events-none">
             <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent-blue/10 rounded-full" />
             <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent-blue/5 rounded-full" />
          </div>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center text-white relative z-10">
            <h4 className="text-text-secondary text-[10px] font-bold uppercase tracking-[0.6em] mb-16">Certified Excellence</h4>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-20 hover:opacity-100 transition-opacity duration-1000">
               <div className="text-4xl font-black italic tracking-tighter">SEDA</div>
               <div className="text-4xl font-black italic tracking-tighter">SURUHANJAYA TENAGA</div>
               <div className="text-4xl font-black italic tracking-tighter">CIDB</div>
               <div className="text-4xl font-black italic tracking-tighter">TNB</div>
            </div>
          </div>
        </section>

        <ProjectsSection />
        <FAQSection />
        <LeadFormSection />

        {/* Final CTA */}
        <section className="py-40 bg-dark-primary relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://i.postimg.cc/W10hGQdF/image.png" 
              alt="" 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-auto opacity-[0.02] grayscale brightness-0 invert pointer-events-none"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-accent-blue/10 blur-[200px] rounded-full pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-6xl md:text-8xl font-black text-white mb-20 leading-[0.95] tracking-tighter">
              Energy Independence <br /> <span className="text-gradient-blue italic blue-glow text-7xl md:text-9xl">Starts Now</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <button className="blue-gradient hover:blue-gradient-hover text-white px-14 py-7 rounded-[28px] font-bold text-xl transition-all shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)] hover:scale-105 active:scale-95">
                Get Your Proposal
              </button>
              <button className="glass border border-white/10 hover:bg-white/[0.05] text-white px-14 py-7 rounded-[28px] font-bold text-xl transition-all flex items-center justify-center gap-4 hover:scale-105 active:scale-95 group">
                 <MessageCircle className="text-accent-blue group-hover:blue-glow" size={32} />
                 WhatsApp Us
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
