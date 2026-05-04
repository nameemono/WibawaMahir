import { useState, useEffect } from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link, 
  useParams, 
  useLocation 
} from 'react-router-dom';
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
  Home as HomeIcon,
  Cpu,
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
  Clock,
  Sun,
  MapPin,
  TrendingDown,
  Calculator,
  Calendar,
  Share2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './components/Logo';

// --- SEO Helper ---
const SEO = ({ title, description }: { title: string; description: string }) => {
  useEffect(() => {
    document.title = title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
  }, [title, description]);
  return null;
};

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Harga 2026', href: '/harga-solar-panel-malaysia-2026' },
    { name: 'Cara Kerja', href: '/bagaimana-ia-berfungsi' },
    { name: 'Blog', href: '/blog/adakah-solar-berbaloi-di-malaysia' },
  ];

  const handleWhatsApp = () => {
    window.open("https://api.whatsapp.com/send/?phone=60198363806&text=Hi+Mr.+Fazli,+saya+ingin+tahu+lebih+lanjut+tentang+solar.&type=phone_number&app_absent=0", "_blank");
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${isScrolled ? 'solid-nav py-4' : 'glass-nav py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex-1 flex items-center">
          <Link 
            to="/"
            className="flex items-center group cursor-pointer outline-none"
            aria-label="Go to home"
          >
            <Logo 
              size={32} 
              className="text-[#B9C9E8] group-hover:scale-110 group-hover:brightness-125 glow-breathing" 
            />
          </Link>
        </div>

        {/* Center: Desktop Menu */}
        <div className="hidden lg:flex items-center justify-center gap-10 flex-[2]">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href}
              className={`nav-link ${location.pathname === link.href ? 'text-[#B9C9E8]' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <div className="relative group">
            <button className="nav-link flex items-center gap-1">
              Lokasi <ChevronDown size={14} />
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 glass rounded-2xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-white/5 shadow-2xl">
              {['Kajang', 'Bangi', 'Shah Alam', 'Puchong', 'Klang'].map(city => (
                <Link 
                  key={city}
                  to={`/lokasi/${city.toLowerCase().replace(' ', '-')}`}
                  className="block px-6 py-4 text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                >
                  {city}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Right: CTA Button */}
        <div className="hidden lg:flex items-center justify-end flex-1">
          <button onClick={handleWhatsApp} className="cta-button-nav">
            Consultation Percuma
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 w-full bg-[#0B0F14] border-b border-white/5 p-8 space-y-6 shadow-2xl overflow-hidden"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href}
                className="block text-white/80 hover:text-[#B9C9E8] text-xl font-medium tracking-tight"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button onClick={handleWhatsApp} className="w-full cta-button-nav py-4 text-base">
              WhatsApp Sekarang
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-[#0B0F14]">
      {/* Background Image with Premium Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("https://i.postimg.cc/N0SH9H9r/hero-solar.webp")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'brightness(0.9) contrast(1.1)'
          }}
        />
        <div 
          className="absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(90deg, rgba(11, 15, 20, 0.95) 0%, rgba(11, 15, 20, 0.9) 35%, rgba(11, 15, 20, 0.6) 65%, rgba(11, 15, 20, 0.3) 100%)'
          }}
        />
      </div>

      {/* Hero radial glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[800px] bg-[#6EA8FF]/5 blur-[150px] rounded-full pointer-events-none z-10" />
      
      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-[#6EA8FF]/10 border border-[#6EA8FF]/20 rounded-full mb-12 backdrop-blur-xl">
            <div className="w-2.5 h-2.5 bg-[#6EA8FF] rounded-full animate-pulse shadow-[0_0_15px_rgba(110,168,255,0.8)]" />
            <span className="text-[#6EA8FF] text-[12px] font-bold uppercase tracking-[0.45em]">Pakar Solar Malaysia (11+ Tahun Pengalaman)</span>
          </div>
          
          <h1 
            className="text-6xl md:text-8xl font-black text-white leading-[1.05] mb-10 tracking-tighter"
            style={{ textShadow: '0px 2px 10px rgba(0,0,0,0.6)' }}
          >
            Henti Bayar TNB <br />
            <span 
              className="text-[#6EA8FF] italic pr-4"
              style={{ textShadow: '0px 0px 12px rgba(110,168,255,0.4)' }}
            >
              RM300–RM800 Sebulan
            </span>
          </h1>
          
          <div className="mb-10">
            <span className="text-white font-bold text-4xl md:text-5xl tracking-tighter">Jimat 70% Bil Elektrik</span>
          </div>
          
          <p className="text-xl md:text-2xl text-[#D1D5DB] mb-14 max-w-2xl leading-[1.6] font-light">
            Pasang solar sekarang & dapatkan ROI dalam masa 2–3 tahun sahaja. Nikmati elektrik percuma selepas itu.
          </p>
          
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/harga-solar-panel-malaysia-2026" className="bg-[#B9C9E8] hover:bg-[#8FA7D6] text-[#0B0F14] px-12 py-6 rounded-full font-bold text-xl transition-all shadow-xl flex items-center justify-center gap-4 group text-center">
                Check Kiraan Penjimatan
                <ArrowRight className="group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
              <a href="https://api.whatsapp.com/send/?phone=60198363806&text=Hi+Mr.+Fazli,+saya+ingin+tahu+lebih+lanjut+tentang+solar.&type=phone_number&app_absent=0" className="bg-[#25D366] hover:bg-[#128C7E] text-white px-12 py-6 rounded-full font-bold text-xl transition-all shadow-xl flex items-center justify-center gap-4 group">
                <MessageCircle size={28} className="fill-white" />
                WhatsApp Sekarang
              </a>
            </div>
            
            <div className="flex flex-col gap-2">
              <p className="text-[#9CA3AF] text-sm font-medium tracking-wide">
                Komponen dipercayai: <span className="text-white font-semibold">Huawei • Jinko • BYD</span>
              </p>
              <div className="text-[#6EA8FF]/60 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                <div className="w-1 h-1 bg-[#6EA8FF] rounded-full" />
                Slot pemasangan terhad setiap bulan
              </div>
            </div>
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

const ProblemSection = () => {
  return (
    <section className="py-32 bg-dark-section overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="glass-card p-12 border border-red-500/20 bg-red-500/5">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-red-500/20 text-red-500 rounded-2xl">
                  <TrendingDown size={32} />
                </div>
                <h3 className="text-3xl font-black text-white tracking-tighter">Kos Elektrik Tersembunyi</h3>
              </div>
              <div className="space-y-6">
                {[
                  "Bil RM400/bulan = RM4,800/tahun",
                  "Dalam 20 tahun = RM96,000 terbuang",
                  "Ini tidak termasuk kenaikan tarif TNB",
                  "Duit hangus tanpa sebarang aset"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3 text-red-100/70 border-b border-red-500/10 pb-4">
                    <X size={18} className="text-red-500" /> {text}
                  </div>
                ))}
              </div>
              <div className="mt-10 p-6 bg-red-500 text-white rounded-2xl text-center font-bold">
                Total Kerugian Di Jangka: RM100k - RM250k
              </div>
            </div>
          </motion.div>

          <div className="order-1 lg:order-2">
            <span className="text-red-500 font-bold tracking-[0.5em] uppercase text-[10px]">The Reality</span>
            <h2 className="text-5xl md:text-6xl font-black text-white mt-4 mb-8 tracking-tighter leading-none">
              Anda Sedang <br />
              <span className="text-red-500 italic">Overpaying TNB</span>
            </h2>
            <p className="text-lg text-[#9CA3AF] mb-8 font-light leading-relaxed">
              Setiap hari anda menangguh pemasangan solar, anda sedang membazir duit yang sepatutnya menjadi simpanan untuk masa depan keluarga.
            </p>
            <div className="flex items-center gap-6 text-white font-bold text-xl">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-dark-primary bg-gray-800" />
                ))}
              </div>
              <span className="text-sm font-medium text-gray-400">Join 500+ homeowners in Klang Valley saving monthly</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const QuickROISection = () => {
  return (
    <section className="py-24 bg-dark-primary border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div className="p-10 glass rounded-[40px] border border-accent-blue/20">
            <div className="text-[#6EA8FF] mb-6 inline-block p-4 bg-[#6EA8FF]/10 rounded-2xl"><Calculator size={40} /></div>
            <p className="text-white/60 font-bold text-xs uppercase tracking-widest mb-4">Savings Pattern</p>
            <p className="text-4xl font-black text-white tracking-tighter">RM180+ / mth</p>
            <p className="text-sm text-gray-400 mt-4">Anggaran penjimatan untuk bil RM300</p>
          </div>
          <div className="p-10 glass rounded-[40px] border border-accent-blue/20 scale-110 blue-glow bg-accent-blue/5">
            <div className="text-[#6EA8FF] mb-6 inline-block p-4 bg-[#6EA8FF]/10 rounded-2xl"><Clock size={40} /></div>
            <p className="text-white/60 font-bold text-xs uppercase tracking-widest mb-4">ROI Period</p>
            <p className="text-4xl font-black text-white tracking-tighter">2 - 3 Tahun</p>
            <p className="text-sm text-gray-400 mt-4">Pulangan modal paling pantas di pasaran</p>
          </div>
          <div className="p-10 glass rounded-[40px] border border-accent-blue/20">
            <div className="text-[#6EA8FF] mb-6 inline-block p-4 bg-[#6EA8FF]/10 rounded-2xl"><CheckCircle2 size={40} /></div>
            <p className="text-white/60 font-bold text-xs uppercase tracking-widest mb-4">Maintenance</p>
            <p className="text-4xl font-black text-white tracking-tighter">Ultra Low</p>
            <p className="text-sm text-gray-400 mt-4">Jaminan prestasi sehingga 25 tahun</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const SolarProcessSection = () => {
  return (
    <section className="py-32 bg-dark-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
         <div className="text-center mb-24">
           <span className="text-[#6EA8FF] font-black tracking-[0.6em] uppercase text-[10px]">How It Works</span>
           <h2 className="text-6xl font-black text-white mt-8 tracking-tighter leading-none italic">The Solar Lifestyle</h2>
         </div>
         <div className="grid md:grid-cols-4 gap-8">
           {[
             { t: "Siang", d: "Solar kuasakan rumah anda sepenuhnya secara terus.", i: <Sun className="text-yellow-400" /> },
             { t: "Lebihan", d: "Tenaga berlebihan dieksport ke TNB untuk kredit bil (NEM).", i: <Share2 className="text-blue-400" /> },
             { t: "Malam", d: "Gunakan tenaga grid TNB seperti biasa atau bateri.", i: <Clock className="text-purple-400" /> },
             { t: "Hujung Bulan", d: "Bil ditolak dengan kredit solar. Jimat sehingga 70%!", i: <BarChart3 className="text-green-400" /> }
           ].map((step, idx) => (
              <div key={idx} className="glass-card p-10 group hover:blue-glow transition-all">
                <div className="w-14 h-14 glass flex items-center justify-center rounded-2xl mb-8 group-hover:scale-110 transition-transform">
                  {step.i}
                </div>
                <h4 className="text-2xl font-bold text-white mb-4 tracking-tight">{step.t}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{step.d}</p>
              </div>
           ))}
         </div>
         <div className="mt-20 text-center">
            <Link to="/bagaimana-ia-berfungsi" className="inline-flex items-center gap-4 text-white font-bold hover:text-accent-blue transition-all border-b border-white/10 pb-2 uppercase tracking-widest text-sm">
                Lihat Penjelasan Terperinci <ArrowRight size={20} />
            </Link>
         </div>
      </div>
    </section>
  );
};

const ExperienceSection = () => {
  return (
    <section className="py-32 bg-dark-primary">
       <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-20 items-center">
             <div className="flex-1">
               <h2 className="text-5xl font-black text-white tracking-tighter mb-8 leading-tight">11+ Tahun Pengalaman <br />Pasang Solar di Malaysia</h2>
               <p className="text-xl text-gray-400 font-light mb-10">Kami telah membantu ratusan pemilik rumah di Selangor, KL, Kajang, dan Bangi menjadi "Prosumer" tenaga hijau.</p>
               <div className="flex gap-10">
                  <div>
                    <p className="text-4xl font-black text-[#6EA8FF] tracking-tighter">500+</p>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mt-2">Pemasangan Siap</p>
                  </div>
                  <div className="w-px h-16 bg-white/5" />
                  <div>
                    <p className="text-4xl font-black text-[#6EA8FF] tracking-tighter">RM2M+</p>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mt-2">Total Jimat Bil</p>
                  </div>
               </div>
             </div>
             <div className="flex-1 w-full">
                <div className="glass-card p-12 relative">
                  <Logo className="absolute top-10 right-10 opacity-10" size={80} />
                  <p className="text-2xl italic text-white/90 mb-8 leading-relaxed">"Best decision ever. Bil asalnya RM450 sebulan, sekarang cuma RM50-RM80 saja. Terutama sekarang cuaca panas, aircond on 24 jam pun tak takut bil tinggi."</p>
                  <div className="flex items-center gap-4">
                     <div className="w-14 h-14 rounded-full bg-accent-blue/20" />
                     <div>
                       <p className="text-white font-bold">En. Fazli</p>
                       <p className="text-xs text-gray-500">Kajang Homeowner</p>
                     </div>
                  </div>
                </div>
             </div>
          </div>
       </div>
    </section>
  );
};

const FinalCTABlock = () => {
  return (
    <section className="py-40 bg-[#111827] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[500px] bg-accent-blue/10 blur-[120px] -translate-y-1/2" />
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-black text-white mb-12 tracking-tighter italic">Book FREE Site Visit + Proposal</h2>
        <p className="text-xl text-gray-300 mb-16 font-light">Kami akan ke rumah anda, buat check bumbung, dan sediakan proposal ROI lengkap tanpa sebarang kos.</p>
        <button 
          onClick={() => window.open("https://api.whatsapp.com/send/?phone=60198363806&text=Saya+ingin+book+free+site+visit+solar.&type=phone_number&app_absent=0", "_blank")}
          className="blue-gradient px-16 py-8 rounded-full text-2xl font-black text-white shadow-blue-glow hover:scale-105 transition-all flex items-center justify-center gap-4 mx-auto"
        >
          Claim Site Visit Percuma Sekarang
          <ArrowRight />
        </button>
      </div>
    </section>
  );
};

const PricingPage = () => {
  return (
    <main className="pt-40 pb-32 bg-dark-primary">
      <SEO 
        title="Harga Solar Panel Malaysia 2026 – Full Cost Breakdown" 
        description="Detailed guide on solar panel prices in Malaysia for 2026. Breakdown of costs for 4kWp to 10kWp systems based on your TNB bill. Learn about ROI and solar savings."
      />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-[#6EA8FF] font-black tracking-[0.6em] uppercase text-[10px]">Pricing Guide 2026</span>
          <h1 className="text-6xl md:text-8xl font-black text-white mt-8 tracking-tighter italic leading-none">Harga Solar Panel Malaysia</h1>
          <p className="text-xl text-gray-400 mt-10 max-w-2xl mx-auto font-light">Ketahui anggaran kos pemasangan solar berdasarkan purata bil elektrik bulanan anda.</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8 mb-32">
          {[
            { bill: "RM100", cap: "4.96 kWp", price: "~RM16.5k", hint: "Basic Home" },
            { bill: "RM200", cap: "6.20 kWp", price: "RM18k - 20k", hint: "Standard Home", recommended: true },
            { bill: "RM300", cap: "7.44 kWp", price: "RM20k - 23k", hint: "Large Family" },
            { bill: "RM400", cap: "8.68 kWp", price: "RM22k - 24k", hint: "High Usage" }
          ].map((plan, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className={`glass-card p-10 flex flex-col border transition-all ${plan.recommended ? 'border-accent-blue scale-105 blue-glow z-10' : 'border-white/5'}`}
            >
              {plan.recommended && <div className="bg-accent-blue text-white text-[10px] font-bold py-1 px-3 rounded-full self-start mb-6">MOST POPULAR</div>}
              <p className="text-gray-500 font-bold text-xs uppercase tracking-widest mb-2">Jika Bil Anda</p>
              <p className="text-5xl font-black text-white tracking-tighter mb-10">{plan.bill}</p>
              <div className="space-y-6 mb-12">
                <div className="flex justify-between border-b border-white/5 pb-4">
                  <span className="text-gray-400 text-sm">System Capacity</span>
                  <span className="text-white font-bold">{plan.cap}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-4">
                  <span className="text-gray-400 text-sm">Estimated Price</span>
                  <span className="text-white font-bold">{plan.price}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 text-sm">Savings Monthly</span>
                  <span className="text-green-400 font-bold">RM150 - RM250</span>
                </div>
              </div>
              <button onClick={() => window.open(`https://api.whatsapp.com/send/?phone=60198363806&text=Saya+ingin+pakej+solar+bil+${plan.bill}.&type=phone_number&app_absent=0`, "_blank")} className={`w-full py-5 rounded-2xl font-bold transition-all ${plan.recommended ? 'blue-gradient text-white' : 'glass text-white border-white/10 hover:bg-white/5'}`}>
                Inquiry Pakej {plan.bill}
              </button>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <h2 className="text-4xl font-black text-white mb-8 tracking-tighter">Mengapa Harga Berbeza?</h2>
            <div className="space-y-6">
              {[
                { t: "Jenis Bumbung", d: "Bumbung genting vs metal deck memerlukan mounting kit berbeza." },
                { t: "Jenama Inverter", d: "Inverter Huawei atau Solis mempunyai perbezaan harga dan features." },
                { t: "Lokasi Rumah", d: "Jarak installation dan cabaran struktur bumbung." },
                { t: "NEM Approval", d: "Proses dokumentasi dan permohonan pihak berkuasa." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-12 h-12 glass rounded-full flex items-center justify-center shrink-0 text-accent-blue"><CheckCircle2 size={24} /></div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">{item.t}</h4>
                    <p className="text-gray-400 text-sm font-light">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="glass p-12 rounded-[48px] border border-white/5 bg-accent-blue/5">
            <h3 className="text-3xl font-black text-white mb-8 tracking-tighter italic">Kiraan ROI Solar</h3>
            <div className="space-y-8">
              <div className="bg-dark-primary/40 p-8 rounded-3xl border border-white/5">
                <p className="text-sm text-gray-500 font-bold tracking-widest mb-4">CONTOH BIL RM300</p>
                <div className="space-y-4">
                  <div className="flex justify-between"><span className="text-gray-300">Kos Pemasangan</span><span className="text-white font-bold">RM20,000</span></div>
                  <div className="flex justify-between"><span className="text-gray-300">Penjimatan/Bulan</span><span className="text-green-400 font-bold">RM200</span></div>
                  <div className="flex justify-between border-t border-white/5 pt-4"><span className="text-gray-300">Penjimatan/Tahun</span><span className="text-white font-bold">RM2,400</span></div>
                  <div className="flex justify-between"><span className="text-gray-300">ROI (Tahun)</span><span className="text-[#6EA8FF] font-black text-2xl">~2.7 Tahun</span></div>
                </div>
              </div>
              <p className="text-gray-400 text-sm font-light italic text-center">Selepas 2.7 tahun, elektrik anda adalah PERCUMA sehingga 25 tahun.</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-black text-white mb-16 tracking-tighter text-center">FAQ Solar Malaysia</h2>
          <div className="space-y-6">
            {[
              { q: "Adakah solar berbaloi di Malaysia?", a: "Sangat berbaloi. Malaysia mempunyai sinaran matahari yang kuat sepanjang tahun, menjadikannya salah satu kawasan terbaik di dunia untuk solar." },
              { q: "Apa berlaku pada waktu malam?", a: "Waktu malam, anda gunakan tenaga dari grid TNB. Kredit yang anda kumpul pada waktu siang (NEM) akan menolak kos penggunaan malam anda." },
              { q: "Adakah bumbung saya akan bocor?", a: "Tidak jika dipasang oleh pakar. Kami menggunakan teknik flashing & waterproofing yang khusus untuk setiap jenis bumbung." },
              { q: "Berapa lama jaminan (Warranty)?", a: "Panel solar biasanya mempunyai jaminan prestasi 25 tahun. Inverter pula antara 5 ke 10 tahun bergantung pada jenama." }
            ].map((faq, i) => (
              <div key={i} className="glass-card p-10 border border-white/5">
                <h4 className="text-xl font-bold text-white mb-6 tracking-tight">{faq.q}</h4>
                <p className="text-gray-400 font-light leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

const HowItWorksPage = () => {
  return (
    <main className="pt-40 pb-32 bg-dark-primary">
      <SEO 
        title="How Solar Works in Malaysia - Simple Explanation" 
        description="Learn how solar energy works for Malaysian homes. Explanation of the NEM scheme, export to TNB, and monthly bill offsetting. Simple & visual guide."
      />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-32">
          <span className="text-[#6EA8FF] font-black tracking-[0.6em] uppercase text-[10px]">Simple Science</span>
          <h1 className="text-6xl md:text-8xl font-black text-white mt-8 tracking-tighter italic leading-none">Bagaimana Solar Berfungsi?</h1>
          <p className="text-xl text-gray-400 mt-10 font-light">Memahami sistim solar rumah anda dalam 4 langkah mudah.</p>
        </div>

        <div className="space-y-40">
          {[
             { 
               num: "01", 
               title: "Penangkapan Tenaga", 
               desc: "Panel solar di atas bumbung menyerap cahaya matahari dan menukarkannya kepada arus DC.",
               image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop"
             },
             { 
               num: "02", 
               title: "Inversion (Tukar Arus)", 
               desc: "Inverter pintar menukarkan arus DC kepada arus AC yang sedia digunakan oleh peralatan rumah anda.",
               image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2058&auto=format&fit=crop"
             },
             { 
               num: "03", 
               title: "Penggunaan Secara Layak", 
               desc: "Rumah anda akan menggunakan tenaga solar dahulu. Sebarang baki tenaga akan 'dieksport' kembali ke TNB melalui meter NEM.",
               image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1974&auto=format&fit=crop"
             },
             { 
               num: "04", 
               title: "Net Energy Metering (NEM)", 
               desc: "Hujung bulan, bil anda akan dihitung: Penggunaan Grid - Eksport Solar. Anda cuma bayar bakinya sahaja!",
               image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop"
             }
          ].map((step, i) => (
            <div key={i} className={`flex flex-col lg:flex-row gap-20 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1">
                <span className="text-8xl font-black text-[#6EA8FF]/10 leading-none">{step.num}</span>
                <h3 className="text-4xl font-black text-white mt-4 mb-6 tracking-tighter italic">{step.title}</h3>
                <p className="text-xl text-gray-400 font-light leading-relaxed">{step.desc}</p>
              </div>
              <div className="flex-1 w-full aspect-video rounded-[60px] overflow-hidden border border-white/10 shadow-2xl">
                <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

const BlogPage = () => {
  return (
    <main className="pt-40 pb-32 bg-dark-primary">
      <SEO 
        title="Is Solar Worth It in Malaysia? (2026 Guide)" 
        description="A complete analysis of whether solar is worth it for Malaysian homeowners in 2026. ROI breakdown, cost comparison, and real-world examples."
      />
      <article className="max-w-4xl mx-auto px-6 lg:px-8">
        <header className="mb-20">
          <span className="text-[#6EA8FF] font-black tracking-[0.6em] uppercase text-[10px]">Article • 5 Min Read</span>
          <h1 className="text-5xl md:text-7xl font-black text-white mt-8 tracking-tighter leading-tight italic">Adakah Solar Berbaloi di Malaysia?</h1>
          <div className="flex items-center gap-4 mt-8">
            <div className="w-12 h-12 rounded-full bg-gray-800" />
            <div>
              <p className="text-white font-bold">Mr. Fazli</p>
              <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Solar Expert Malaysia</p>
            </div>
          </div>
        </header>

        <div className="prose prose-invert prose-xl max-w-none text-gray-300 font-light leading-relaxed space-y-10">
          <p>
            Tanya mana-mana pemilik rumah hari ini, dan mereka akan beritahu anda perkara yang sama: <strong>Bil TNB semakin hari semakin mahal.</strong> Dengan kenaikan tarif dan penggunaan aircond yang lebih kerap akibat cuaca panas, bil RM300–RM500 telah menjadi satu kebiasaan.
          </p>
          
          <h2 className="text-3xl font-black text-white tracking-tighter uppercase italic mt-16 pt-16 border-t border-white/5">Hukum \"Duit Hangus\" TNB</h2>
          <p>
            Ramai yang tidak sedar bahawa bil bulanan adalah liabiliti yang tidak berfaedah. Jika anda membayar RM400 sebulan ke TNB, dalam 5 tahun anda telah menghabiskan <strong>RM24,000</strong>. Jika anda gunakan RM24,000 itu untuk solar, anda mempunyai aset yang menjana elektrik percuma selama 25 tahun.
          </p>

          <div className="bg-accent-blue/5 p-12 rounded-[40px] border border-accent-blue/20 my-16">
            <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">Kiraan ROI Solar 2.0</h3>
            <ul className="space-y-4">
              <li>• Purata Harga Pemasangan: RM18k - RM22k</li>
              <li>• Purata Penjimatan Bil: RM250/bulan</li>
              <li>• Penjimatan Setahun: RM3,000</li>
              <li>• Pulangan Modal (ROI): 5 - 6 Tahun (Lagi Cepat Jika Bil Tinggi)</li>
              <li>• Keuntungan Bersih: Elektrik Free Lepas 6 Tahun</li>
            </ul>
          </div>

          <h2 className="text-3xl font-black text-white tracking-tighter uppercase italic mt-16">Kesimpulan: Berbaloi atau Tidak?</h2>
          <p>
            Jawapannya ringkas: <strong>YA.</strong> Jika bil elektrik anda melebihi RM200 sebulan, anda sebenarnya sedang membayar untuk sistim solar tetapi tidak memilikinya. Pasang sekarang, jimat sekarang.
          </p>
          
          <div className="mt-24 p-12 glass rounded-[48px] border border-white/10 text-center">
            <h3 className="text-4xl font-black text-white mb-8 tracking-tighter">Dapatkan Analisis Percuma</h3>
            <p className="mb-12">Adakah bumbung anda sesuai? Berapa kWp yang anda perlukan?</p>
            <button onClick={() => window.open("https://api.whatsapp.com/send/?phone=60198363806&text=Hi+Mr.+Fazli,+saya+baru+baca+blog+solar+anda+dan+berminat.&type=phone_number&app_absent=0", "_blank")} className="blue-gradient px-12 py-6 rounded-full font-bold text-xl transition-all inline-flex items-center gap-4">
              WhatsApp Mr. Fazli Sekarang <ArrowRight />
            </button>
          </div>
        </div>
      </article>
    </main>
  );
};

const LocationPage = () => {
  const { city } = useParams();
  const cityName = city?.charAt(0).toUpperCase() + city?.slice(1);
  
  return (
    <main className="pt-40 pb-32 bg-dark-primary">
      <SEO 
        title={`Solar Panel Installation in ${cityName} - Save 70% Bil`} 
        description={`Expert solar panel installation for homeowners in ${cityName}. Get a free site visit and custom proposal for your home in KL & Selangor.`}
      />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
          <div>
            <span className="text-[#6EA8FF] font-black tracking-[0.6em] uppercase text-[10px]">Local Experts In {cityName}</span>
            <h1 className="text-6xl md:text-8xl font-black text-white mt-8 tracking-tighter italic leading-none">Pemasangan Solar di {cityName}</h1>
            <p className="text-xl text-gray-400 mt-10 font-light leading-relaxed">Kami faham komuniti {cityName}. Dari kawasan perumahan elit ke lot industri, kami pakar tenaga solar anda.</p>
            <div className="mt-12 flex gap-4 text-[#6EA8FF] font-bold uppercase tracking-widest text-xs items-center">
              <MapPin size={18} /> Covered: {cityName}, Bangi, Putrajaya & Klang Valley
            </div>
            <button onClick={() => window.open(`https://api.whatsapp.com/send/?phone=60198363806&text=Saya+homeowner+di+${cityName}+berminat+solar.&type=phone_number&app_absent=0`, "_blank")} className="mt-16 blue-gradient px-12 py-6 rounded-3xl font-black text-xl flex items-center gap-4 shadow-blue-glow">
              Book Site Visit {cityName} <ArrowRight />
            </button>
          </div>
          <div className="glass-card rounded-[60px] overflow-hidden aspect-square border border-white/5 relative">
             <img src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=1974&auto=format&fit=crop" className="w-full h-full object-cover grayscale brightness-50" />
             <div className="absolute inset-0 flex items-center justify-center">
               <div className="glass p-12 rounded-full border border-white/20 animate-pulse">
                 <IconLogo size={120} className="text-[#6EA8FF] blue-glow" />
               </div>
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-32">
           {[
             { t: "Quick Response", d: `Team teknikal kami berada di area ${cityName} setiap hari.` },
             { t: "Custom Design", d: "Reka bentuk sistim mengikut struktur bumbung rumah anda." },
             { t: "TNB Liaison", d: "Kami uruskan permohonan meter baru & NEM dengan TNB Selangor." }
           ].map((item, i) => (
             <div key={i} className="p-12 glass border border-white/5 rounded-[40px]">
               <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">{item.t}</h3>
               <p className="text-gray-400 font-light leading-relaxed">{item.d}</p>
             </div>
           ))}
        </div>
      </div>
    </main>
  );
};

const IconLogo = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    <circle cx="12" cy="12" r="4" />
  </svg>
);

const Home = () => {
  return (
    <>
      <SEO 
        title="Stop Paying TNB RM300–RM800 Every Month | Solar Panel Malaysia" 
        description="Install solar panels for your home in Malaysia and save up to 70% on electricity. ROI in 2-3 years. Expert solar rumah installation in KL, Selangor, Kajang & Klang Valley."
      />
      <Hero />
      <ProblemSection />
      <QuickROISection />
      <SolarProcessSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      <ExperienceSection />
      <ProjectsSection />
      <FAQSection />
      <FinalCTABlock />
    </>
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
                src="https://i.postimg.cc/br6Yn0Gn/Whats-App-Image-2026-05-02-at-22-55-53-(2).jpg" 
                alt="Solar Installation" 
                className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
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
            <span className="text-accent-blue font-bold tracking-[0.5em] uppercase text-[10px] mb-6 block">Trusted Solar Expertise</span>
            <h2 className="text-5xl md:text-6xl font-black text-white mt-4 mb-4 tracking-tighter leading-none">
              Pakar Solar Dipercayai <br />
              <span className="text-gradient-blue italic">di Klang Valley</span>
            </h2>
            <p className="text-lg text-[#9CA3AF] mb-12 font-light">
              Kami bantu anda jimat bil elektrik dengan sistem solar berkualiti tinggi.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {[
                { title: "Jimat Sehingga 70%", desc: "Kurangkan bil elektrik setiap bulan", icon: <Zap size={24} className="text-[#6EA8FF]" /> },
                { title: "Pemasangan Pakar", desc: "Pasukan berpengalaman & profesional", icon: <Construction size={24} className="text-[#6EA8FF]" /> },
                { title: "Komponen Premium", desc: "Huawei, Jinko, BYD", icon: <Cpu size={24} className="text-[#6EA8FF]" /> },
                { title: "Untuk Rumah & Bisnes", desc: "Sesuai untuk semua jenis hartanah", icon: <HomeIcon size={24} className="text-[#6EA8FF]" /> }
              ].map((card, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="bg-[#111827] p-8 rounded-[16px] border border-white/5 hover:border-[#6EA8FF]/20 transition-all group hover:shadow-[0_10px_40px_-20px_rgba(110,168,255,0.3)]"
                >
                  <div className="mb-4 p-3 bg-[#6EA8FF]/10 w-fit rounded-xl group-hover:scale-110 transition-transform">
                    {card.icon}
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2">{card.title}</h4>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-2 text-[#9CA3AF]/60 text-xs font-bold uppercase tracking-widest border-t border-white/5 pt-8 mb-12">
              <span>Jenama dipercayai:</span>
              <span className="text-[#9CA3AF] tracking-normal capitalize font-medium">Huawei • Jinko • BYD</span>
            </div>

            <button className="glass hover:bg-white/[0.05] text-white px-10 py-5 rounded-[24px] font-bold transition-all flex items-center gap-4 group border border-white/10 text-lg">
              Ketahui Lebih Lanjut
              <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-500" />
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
      image: "/src/assets/images/regenerated_image_1777742931963.jpg",
      icon: <HomeIcon size={28} />
    },
    {
      title: "Solar Enterprise",
      desc: "Optimumkan kos operasi perniagaan dan tingkatkan ROI dengan pelaburan solar kejuruteraan tinggi.",
      image: "/src/assets/images/regenerated_image_1777742934671.jpg",
      icon: <Building2 size={28} />
    },
    {
      title: "Energy Storage",
      desc: "Simpanan tenaga berlebihan untuk bekalan kuasa berterusan tanpa gangguan.",
      image: "/src/assets/images/regenerated_image_1777742936852.jpg",
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
              className="group relative h-[600px] rounded-[40px] overflow-hidden cursor-pointer flex flex-col justify-start p-10 border border-white/5 shadow-2xl"
            >
              <div className="absolute inset-0 z-0">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover brightness-50 transition-all duration-1000 group-hover:scale-110 group-hover:brightness-75" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F14]/95 via-[#0B0F14]/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 glass text-accent-blue rounded-2xl flex items-center justify-center mb-8 group-hover:blue-glow transition-all duration-700 bg-white/[0.03]">
                  {item.icon}
                </div>
                <h3 className="text-3xl font-black text-white mb-4 tracking-tighter uppercase italic leading-none">{item.title}</h3>
                <p className="text-white/60 text-sm mb-8 group-hover:text-white/90 transition-colors leading-relaxed font-medium max-w-[240px]">{item.desc}</p>
                <div className="flex items-center gap-3 text-white/40 font-bold group-hover:text-accent-blue transition-all uppercase tracking-[0.2em] text-[10px]">
                   Explore <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-500" />
                </div>
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
      desc: "Jurutera bertauliah SEDA dengan rekod pemasangan.",
      icon: <Users className="w-10 h-10" />
    },
    {
      title: "High-End Components",
      desc: "Hanya menggunakan jenama global premium.",
      icon: <Award className="w-10 h-10" />
    },
    {
      title: "Lifetime Support",
      desc: "Jaminan prestasi panel sehingga 25 tahun.",
      icon: <ShieldCheck className="w-10 h-10" />
    },
    {
      title: "Strategic Options",
      desc: "Pilihan pembiayaan korporat yang fleksibel.",
      icon: <BarChart3 className="w-10 h-10" />
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden group">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.postimg.cc/Y0X2FN4N/Whats-App-Image-2026-05-02-at-22-55-54-(3).jpg" 
          alt="Clean Energy" 
          className="w-full h-full object-cover brightness-[0.2] transition-transform duration-[10s] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-primary via-transparent to-dark-primary" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent-blue font-bold tracking-[0.5em] uppercase text-[10px]"
          >
            The Wibawa Advantage
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-black text-white mt-6 tracking-tighter leading-none italic uppercase"
          >
            Built for <span className="text-accent-blue">Performance</span>
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/5 backdrop-blur-md p-10 rounded-[32px] border border-white/10 hover:border-accent-blue/30 transition-all group/card"
            >
              <div className="mb-8 text-accent-blue opacity-50 group-hover/card:opacity-100 group-hover/card:scale-110 transition-all duration-500">
                {reason.icon}
              </div>
              <h3 className="text-xl font-black text-white mb-3 tracking-tight uppercase italic">{reason.title}</h3>
              <p className="text-white/50 leading-relaxed font-medium text-sm group-hover:text-white/80 transition-colors">{reason.desc}</p>
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
                <img src={project.image} alt={project.title} className="w-full h-full object-cover brightness-90 transition-all duration-1000 group-hover:scale-110 group-hover:brightness-100" />
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
            <Link 
              to="/"
              className="flex items-center group cursor-pointer outline-none"
              aria-label="Go to top"
            >
              <Logo size={48} className="text-[#B9C9E8] brightness-125 group-hover:scale-110 transition-transform" />
            </Link>
            <p className="leading-relaxed font-light text-lg">
              Engineering the new standard of energy independence through absolute technical excellence and premium solar implementation in Malaysia.
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
            <h4 className="font-bold text-white text-xs uppercase tracking-[0.4em] mb-12">Solusi Solar</h4>
            <ul className="space-y-6 font-light text-lg">
              <li><Link to="/harga-solar-panel-malaysia-2026" className="hover:text-accent-blue transition-all">Harga Solar 2026</Link></li>
              <li><Link to="/bagaimana-ia-berfungsi" className="hover:text-accent-blue transition-all">Cara Kerja</Link></li>
              <li><Link to="/blog/adakah-solar-berbaloi-di-malaysia" className="hover:text-accent-blue transition-all">Solar Berbaloi?</Link></li>
              <li><Link to="/lokasi/kajang" className="hover:text-accent-blue transition-all">Solar Kajang</Link></li>
              <li><Link to="/lokasi/shah-alam" className="hover:text-accent-blue transition-all">Solar Shah Alam</Link></li>
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
                <a 
                  href="https://api.whatsapp.com/send/?phone=60198363806&text=Hi+Mr.+Fazli&type=phone_number&app_absent=0" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-4 text-white font-bold group cursor-pointer text-xl tracking-tighter overflow-hidden hover:text-[#25D366] transition-all"
                >
                  <div className="p-3 bg-[#25D366]/10 rounded-xl group-hover:bg-[#25D366] transition-all">
                    <MessageCircle size={20} className="text-[#25D366] group-hover:text-white fill-current" />
                  </div>
                  WhatsApp: +6019-836 3806
                </a>
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

const FloatingCTA = () => {
  const [state, setState] = useState<'pill' | 'expanded' | 'result'>('pill');
  const [bill, setBill] = useState("");
  const [savings, setSavings] = useState(0);
  
  const handleCalculate = () => {
    const billNum = parseFloat(bill);
    if (billNum > 0) {
      setSavings(Math.round(billNum * 0.70));
      setState('result');
    }
  };

  const handleWhatsApp = () => {
    const text = bill 
      ? `Hi, my monthly bill is RM${bill}, can you calculate my solar savings?`
      : "Hi, I'm interested in solar savings for my home.";
    const url = `https://api.whatsapp.com/send/?phone=60198363806&text=${encodeURIComponent(text)}&type=phone_number&app_absent=0`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-12 right-8 z-[100] flex flex-col items-end">
      <AnimatePresence mode="wait">
        {state === 'pill' && (
          <motion.div
            key="pill"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="flex flex-col items-center gap-3"
          >
            <motion.p 
              animate={{ opacity: [0.3, 0.7, 0.3], y: [0, -2, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="text-[10px] text-white/40 font-bold uppercase tracking-[0.15em] italic"
            >
              Most homes save RM150–RM400/month
            </motion.p>
            <motion.button
              onClick={() => setState('expanded')}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(34, 197, 94, 0.2)" }}
              animate={{ 
                boxShadow: ["0 0 0 0px rgba(34, 197, 94, 0)", "0 0 0 15px rgba(34, 197, 94, 0.1)", "0 0 0 0px rgba(34, 197, 94, 0)"]
              }}
              transition={{ 
                boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                scale: { duration: 0.2 }
              }}
              className="bg-[#0f172a] border border-white/10 rounded-full h-16 pl-8 pr-3 flex items-center gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.3)] group transition-all"
            >
              <div className="flex flex-col items-start">
                <span className="text-[10px] font-bold text-[#22c55e] uppercase tracking-[0.2em] leading-none mb-1.5 opacity-80">Overpaying TNB?</span>
                <span className="text-white font-black text-sm tracking-tight leading-none">Check Your Savings</span>
              </div>
              <div className="w-12 h-12 bg-[#22c55e] rounded-full flex items-center justify-center text-[#0f172a] shadow-lg group-hover:rotate-12 transition-transform">
                <Zap size={22} fill="currentColor" />
              </div>
            </motion.button>
          </motion.div>
        )}

        {state === 'expanded' && (
          <motion.div
            key="expanded"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-[#0f172a] p-8 rounded-[40px] border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.5)] w-[320px] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#22c55e]/10 blur-[60px] rounded-full -mr-16 -mt-16" />
            
            <div className="flex justify-between items-start mb-8 relative z-10">
              <h4 className="text-white font-black text-2xl tracking-tighter leading-tight italic">Find Your<br />Monthly Savings</h4>
              <button onClick={() => setState('pill')} className="text-white/20 hover:text-white transition-colors p-2 -mr-2">
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4 relative z-10">
              <div className="relative group">
                <div className="absolute left-6 top-1/2 -translate-y-1/2 text-[#22c55e] font-black text-sm opacity-50 group-focus-within:opacity-100 transition-opacity">RM</div>
                <input 
                  autoFocus
                  type="number" 
                  placeholder="Your monthly bill..."
                  className="w-full bg-white/5 border border-white/5 rounded-2xl py-5 pl-14 pr-6 text-white font-bold text-lg focus:outline-none focus:border-[#22c55e]/30 transition-all placeholder:text-white/10"
                  value={bill}
                  onChange={(e) => setBill(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleCalculate()}
                />
              </div>
              <button 
                onClick={handleCalculate}
                className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-[#0f172a] py-5 rounded-2xl font-black text-sm transition-all shadow-xl shadow-[#22c55e]/10 uppercase tracking-widest active:scale-[0.98]"
              >
                Calculate Now
              </button>
            </div>
            <p className="text-[10px] text-white/20 font-bold uppercase tracking-widest mt-6 text-center">Free ROI Estimate in 2 Seconds</p>
          </motion.div>
        )}

        {state === 'result' && (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="bg-[#0f172a] p-8 rounded-[40px] border border-[#22c55e]/30 shadow-[0_30px_100px_rgba(34,197,94,0.15)] w-[320px] text-center"
          >
            <div className="w-16 h-16 bg-[#22c55e]/10 rounded-full flex items-center justify-center text-[#22c55e] mx-auto mb-6 shadow-inner">
              <CheckCircle2 size={32} />
            </div>
            <p className="text-[#22c55e] text-[10px] uppercase font-black tracking-widest mb-3 opacity-80">Calculation Ready</p>
            <h4 className="text-white font-black text-4xl tracking-tighter mb-1 select-none">
              RM <span className="text-[#22c55e]">{savings}</span>
              <span className="text-lg opacity-20 ml-1">/mo</span>
            </h4>
            <p className="text-white/40 text-xs mb-8 tracking-tight">You could save up to RM {savings * 12} per year.</p>
            
            <div className="space-y-3">
              <button 
                onClick={handleWhatsApp}
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-5 rounded-2xl font-black flex items-center justify-center gap-3 transition-all shadow-xl shadow-[#25D366]/10 active:scale-[0.98]"
              >
                <MessageCircle size={20} fill="white" />
                Full Proposal
              </button>
              <button 
                onClick={() => { setState('expanded'); setBill(""); }}
                className="w-full text-white/20 hover:text-white text-[10px] font-black uppercase tracking-widest transition-colors py-2"
              >
                Recalculate
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [loading, setLoading] = useState(true);
  const heroImageUrl = "https://i.postimg.cc/N0SH9H9r/hero-solar.webp";

  useEffect(() => {
    const img = new Image();
    img.src = heroImageUrl;
    img.onload = () => {
      // Add a small delay for smooth transition
      setTimeout(() => {
        setLoading(false);
      }, 500);
    };
    // Fallback if image fails to load
    img.onerror = () => setLoading(false);
  }, []);

  return (
    <Router>
      <div className="bg-[#0B0F14] selection:bg-accent-blue selection:text-white">
        <AnimatePresence>
          {loading && (
            <motion.div 
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="fixed inset-0 z-[1000] bg-[#0B0F14] flex flex-col items-center justify-center overflow-hidden"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="flex flex-col items-center"
              >
                <div className="relative logo-shimmer glow-breathing bg-transparent mb-8">
                  <Logo size={120} className="text-[#B9C9E8]" />
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                  className="text-[#B9C9E8]/90 font-light tracking-[0.35em] text-sm md:text-base uppercase mb-12"
                >
                  Wibawa Mahir Solar
                </motion.p>
                
                <div className="w-64 h-px bg-white/5 relative overflow-hidden">
                  <motion.div 
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-[#6EA8FF] to-transparent"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/harga-solar-panel-malaysia-2026" element={<PricingPage />} />
          <Route path="/bagaimana-ia-berfungsi" element={<HowItWorksPage />} />
          <Route path="/blog/adakah-solar-berbaloi-di-malaysia" element={<BlogPage />} />
          <Route path="/lokasi/:city" element={<LocationPage />} />
        </Routes>

        <Footer />
        <FloatingCTA />
      </div>
    </Router>
  );
}
