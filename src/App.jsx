import React, { useState, useEffect } from 'react';
import { 
  Leaf, 
  MapPin, 
  CalendarPlus, 
  Trophy, 
  User, 
  Home, 
  QrCode, 
  LogOut, 
  BatteryWarning,
  Box,
  Gift,
  Bell,
  CheckCircle2,
  Moon,
  Sun,
  Globe,
  Wallet,
  Smartphone,
  CreditCard,
  ArrowLeft,
  Calendar,
  Clock,
  Check,
  Zap,
  Building2,
  UserPlus,
  LogIn,
  Fingerprint,
  BarChart3,
  Lock,
  Download,
  TrendingUp,
  ShieldCheck
} from 'lucide-react';
import logoWeb from './assets/wasteless.PNG';

export default function App() {
  // State Autentikasi & Alur
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authStage, setAuthStage] = useState('login'); // 'login', 'register', 'plans'
  
  // State UI & Tema
  const [activeTab, setActiveTab] = useState('home');
  const [toastMessage, setToastMessage] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [lang, setLang] = useState('id'); // 'id' atau 'en'
  
  // State Data Pengguna (Simulasi)
  const [points, setPoints] = useState(150);
  const [target, setTarget] = useState(300);
  const [activities, setActivities] = useState([
    { id: 1, type: 'E-Waste Drop', status: 'Berhasil diserahkan', statusEn: 'Successfully dropped', points: 20, icon: 'battery', color: 'blue' },
    { id: 2, type: 'Eco Packaging', status: 'Pembelian terverifikasi', statusEn: 'Purchase verified', points: 15, icon: 'box', color: 'orange' }
  ]);
  const [userPlan, setUserPlan] = useState('free'); // Default plan: 'free', 'premium', 'b2b'

  // Kamus Bahasa (Terjemahan)
  const dict = {
    id: {
      login_title: "Ubah Sampah",
      login_title2: "Jadi Nilai",
      login_desc: "Bergabunglah dengan ekosistem kami untuk mengubah kebiasaan ramah lingkungan Anda menjadi nilai ekonomi yang nyata.",
      welcome_back: "Selamat Datang Kembali!",
      login_prompt: "Silakan masuk ke akun Anda untuk melanjutkan.",
      create_account: "Buat Akun Baru",
      register_prompt: "Mulai perjalanan ramah lingkunganmu hari ini.",
      fullname: "Nama Lengkap",
      email: "Email",
      password: "Kata Sandi",
      confirm_password: "Konfirmasi Kata Sandi",
      remember: "Ingat saya",
      forgot: "Lupa sandi?",
      login_btn: "Masuk",
      register_btn: "Daftar Akun",
      processing: "Memproses...",
      to_register: "Belum punya akun? Daftar di sini",
      to_login: "Sudah punya akun? Masuk",
      choose_plan: "Pilih Paket Anda",
      plan_desc: "Pilih paket langganan yang paling sesuai dengan kebutuhan Anda untuk memulai.",
      continue_btn: "Lanjutkan ke Dashboard",
      plan_free: "Gratis",
      plan_premium: "Premium",
      plan_b2b: "B2B SaaS",
      feat_free_1: "Pelacakan dan pencatatan sampah dasar",
      feat_premium_1: "Reward ekstra",
      feat_premium_2: "Pengganda kredit lebih tinggi",
      feat_premium_3: "Penawaran mitra eksklusif",
      feat_b2b_1: "Dashboard ESG",
      feat_b2b_2: "Analitik mendalam",
      feat_b2b_3: "Ekspor pelaporan data",
      price_free: "Gratis",
      price_premium: "Rp 20.000 / bulan",
      price_b2b: "Rp 5jt - 20jt / tahun",
      b2b_note: "(berjenjang sesuai cakupan data)",
      good_morning: "Selamat pagi,",
      pts: "Poin",
      find_drop: "Cari Titik Drop",
      schedule: "Jadwalkan Penjemputan",
      scan_qr: "Scan QR Code",
      today_act: "Aktivitas Hari Ini",
      see_all: "Lihat Semua",
      progress: "Progress Tahapan",
      next_target: "Target Berikutnya",
      add_target: "+ Tambah Target",
      catalog: "Katalog Rewards",
      catalog_desc: "Tukarkan poin Anda dengan hadiah menarik.",
      balance: "Saldo Poin",
      ewallet_title: "Tarik ke E-Wallet",
      redeem_btn: "Tukar Poin",
      insufficient: "Poin Tidak Cukup",
      search_placeholder: "Cari titik drop terdekat...",
      nearby_drop: "Titik Drop Terdekat",
      route: "Rute",
      scan_desc: "Arahkan kamera ke mesin Drop Box.",
      simulate_scan: "Simulasi Berhasil Scan",
      logout: "Keluar Akun",
      menu_home: "Beranda",
      menu_map: "Peta",
      menu_scan: "Scan",
      menu_rewards: "Rewards",
      menu_profile: "Profil",
      menu_b2b: "ESG Analytics",
      menu_subscription: "Langganan",
      schedule_title: "Jadwalkan Penjemputan",
      pickup_date: "Tanggal Penjemputan",
      pickup_time: "Waktu",
      pickup_address: "Alamat Lengkap",
      waste_type: "Jenis Sampah",
      est_weight: "Estimasi Berat (kg)",
      submit_btn: "Buat Jadwal",
      schedule_success: "Jadwal penjemputan berhasil dibuat!",
      or_login_with: "Atau masuk dengan",
      bio_login: "Sidik Jari / Wajah",
      bio_scanning: "Memindai Biometrik...",
      bio_success: "Autentikasi Berhasil!",
      bio_instruction: "Tahan sidik jari pada sensor atau hadapkan wajah ke kamera.",
      sub_title: "Kelola Langganan",
      sub_desc: "Tingkatkan pengalaman Anda dengan fitur eksklusif dari paket premium atau B2B kami.",
      current_plan: "Paket Saat Ini",
      choose_this_plan: "Pilih Paket Ini",
      plan_updated: "Paket langganan berhasil diperbarui!",
      b2b_dashboard_title: "Dashboard ESG Perusahaan",
      b2b_dashboard_desc: "Pantau metrik keberlanjutan dan dampak lingkungan perusahaan Anda secara real-time.",
      b2b_locked_title: "Fitur Eksklusif B2B",
      b2b_locked_desc: "Tingkatkan paket Anda ke B2B SaaS untuk mengakses analitik mendalam, pelaporan ESG (Environmental, Social, and Governance), dan manajemen data keberlanjutan perusahaan.",
      upgrade_now: "Tingkatkan ke B2B Sekarang",
      metric_carbon: "Karbon Terhindari",
      metric_waste: "Sampah Dikelola",
      metric_employee: "Partisipasi Karyawan",
      export_report: "Unduh Laporan ESG"
    },
    en: {
      login_title: "Turn Waste",
      login_title2: "into Value",
      login_desc: "Join our ecosystem to transform your eco-friendly habits into real economic value.",
      welcome_back: "Welcome Back!",
      login_prompt: "Please log in to your account to continue.",
      create_account: "Create New Account",
      register_prompt: "Start your eco-friendly journey today.",
      fullname: "Full Name",
      email: "Email",
      password: "Password",
      confirm_password: "Confirm Password",
      remember: "Remember me",
      forgot: "Forgot password?",
      login_btn: "Login",
      register_btn: "Sign Up",
      processing: "Processing...",
      to_register: "Don't have an account? Sign up",
      to_login: "Already have an account? Log in",
      choose_plan: "Choose Your Plan",
      plan_desc: "Select the subscription plan that best fits your needs to get started.",
      continue_btn: "Continue to Dashboard",
      plan_free: "Free",
      plan_premium: "Premium",
      plan_b2b: "B2B SaaS",
      feat_free_1: "Basic waste tracking and logging",
      feat_premium_1: "Extra rewards",
      feat_premium_2: "Higher credit multipliers",
      feat_premium_3: "Exclusive partner deals",
      feat_b2b_1: "ESG dashboard",
      feat_b2b_2: "Deep analytics",
      feat_b2b_3: "Reporting exports",
      price_free: "Free",
      price_premium: "IDR 20,000 / month",
      price_b2b: "IDR 5M - 20M / year",
      b2b_note: "(tiered by data scope)",
      good_morning: "Good morning,",
      pts: "Points",
      find_drop: "Find Drop Point",
      schedule: "Schedule Pickup",
      scan_qr: "Scan QR Code",
      today_act: "Today's Activity",
      see_all: "See All",
      progress: "Stage Progress",
      next_target: "Next Target",
      add_target: "+ Add Target",
      catalog: "Rewards Catalog",
      catalog_desc: "Redeem your points for exciting rewards.",
      balance: "Point Balance",
      ewallet_title: "Withdraw to E-Wallet",
      redeem_btn: "Redeem",
      insufficient: "Insufficient Points",
      search_placeholder: "Search nearby drop points...",
      nearby_drop: "Nearby Drop Points",
      route: "Route",
      scan_desc: "Point camera at the Drop Box machine.",
      simulate_scan: "Simulate Scan Success",
      logout: "Log Out",
      menu_home: "Home",
      menu_map: "Map",
      menu_scan: "Scan",
      menu_rewards: "Rewards",
      menu_profile: "Profile",
      menu_b2b: "ESG Analytics",
      menu_subscription: "Subscription",
      schedule_title: "Schedule Pickup",
      pickup_date: "Pickup Date",
      pickup_time: "Time",
      pickup_address: "Full Address",
      waste_type: "Waste Type",
      est_weight: "Estimated Weight (kg)",
      submit_btn: "Create Schedule",
      schedule_success: "Pickup schedule created successfully!",
      or_login_with: "Or log in with",
      bio_login: "Fingerprint / Face ID",
      bio_scanning: "Scanning Biometrics...",
      bio_success: "Authentication Successful!",
      bio_instruction: "Hold your fingerprint on the sensor or face the camera.",
      sub_title: "Manage Subscription",
      sub_desc: "Upgrade your experience with exclusive features from our premium or B2B plans.",
      current_plan: "Current Plan",
      choose_this_plan: "Choose This Plan",
      plan_updated: "Subscription plan updated successfully!",
      b2b_dashboard_title: "Corporate ESG Dashboard",
      b2b_dashboard_desc: "Monitor your company's sustainability metrics and environmental impact in real-time.",
      b2b_locked_title: "B2B Exclusive Feature",
      b2b_locked_desc: "Upgrade your plan to B2B SaaS to access deep analytics, ESG reporting, and corporate sustainability data management.",
      upgrade_now: "Upgrade to B2B Now",
      metric_carbon: "Carbon Saved",
      metric_waste: "Waste Managed",
      metric_employee: "Employee Participation",
      export_report: "Export ESG Report"
    }
  };

  const t = (key) => dict[lang][key];
  const toggleLang = () => setLang(lang === 'id' ? 'en' : 'id');
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  // Fungsi Notifikasi
  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const Toast = () => {
    if (!toastMessage) return null;
    return (
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-gray-900 dark:bg-white dark:text-gray-900 text-white px-6 py-3 rounded-full shadow-xl flex items-center space-x-2 animate-bounce border dark:border-gray-200 border-transparent">
        <CheckCircle2 size={20} className="text-green-500" />
        <span className="text-sm font-medium">{toastMessage}</span>
      </div>
    );
  };

  // Helper function untuk Data Paket agar bisa digunakan di Auth dan Dashboard
  const getPlansData = () => [
    {
      id: 'free',
      name: t('plan_free'),
      price: t('price_free'),
      note: '',
      icon: <Leaf size={24} className="text-green-500" />,
      features: [t('feat_free_1')],
      color: 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20'
    },
    {
      id: 'premium',
      name: t('plan_premium'),
      price: t('price_premium'),
      note: '',
      icon: <Zap size={24} className="text-yellow-500" />,
      features: [t('feat_premium_1'), t('feat_premium_2'), t('feat_premium_3')],
      color: 'border-yellow-300 dark:border-yellow-600 bg-yellow-50 dark:bg-yellow-900/20',
      badge: 'POPULAR'
    },
    {
      id: 'b2b',
      name: t('plan_b2b'),
      price: t('price_b2b'),
      note: t('b2b_note'),
      icon: <Building2 size={24} className="text-blue-500" />,
      features: [t('feat_b2b_1'), t('feat_b2b_2'), t('feat_b2b_3')],
      color: 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20'
    }
  ];

  // --- KOMPONEN AUTENTIKASI --- //
  
  const AuthFlow = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [selectedPlanId, setSelectedPlanId] = useState('free');
    const [isBiometricScanning, setIsBiometricScanning] = useState(false);

    const plansData = getPlansData();

    const handleLogin = (e) => {
      e.preventDefault();
      setIsLoading(true);
      setTimeout(() => {
        setIsLoggedIn(true);
        setIsLoading(false);
        showToast(lang === 'id' ? 'Berhasil Masuk!' : 'Login Successful!');
      }, 1000);
    };

    const handleRegister = (e) => {
      e.preventDefault();
      setIsLoading(true);
      setTimeout(() => {
        setAuthStage('plans'); // Lanjut ke halaman pemilihan paket
        setIsLoading(false);
      }, 1000);
    };

    const handleBiometricLogin = () => {
      setIsBiometricScanning(true);
      setTimeout(() => {
        setIsBiometricScanning(false);
        setIsLoggedIn(true);
        showToast(t('bio_success'));
      }, 2000);
    };

    const handlePlanSubmit = () => {
      setIsLoading(true);
      setUserPlan(selectedPlanId);
      setTimeout(() => {
        setIsLoggedIn(true);
        setIsLoading(false);
        showToast(lang === 'id' ? 'Akun berhasil dibuat!' : 'Account created successfully!');
      }, 1000);
    };

    if (authStage === 'plans') {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 bg-gray-50 dark:bg-gray-900 relative">
          <div className="absolute top-4 right-4 flex space-x-2 z-10">
             <button onClick={toggleLang} className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-md text-gray-700 dark:text-gray-300 font-bold text-sm flex items-center">
               <Globe size={16} className="mr-1" /> {lang.toUpperCase()}
             </button>
             <button onClick={toggleTheme} className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-md text-gray-700 dark:text-gray-300">
               {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
             </button>
          </div>

          <div className="max-w-5xl w-full mx-auto animate-fade-in-up">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center p-3 bg-green-100 dark:bg-green-900/30 rounded-2xl mb-4">
                <CheckCircle2 size={32} className="text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white tracking-tight">{t('choose_plan')}</h2>
              <p className="text-gray-500 dark:text-gray-400 mt-3 text-lg max-w-xl mx-auto">{t('plan_desc')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {plansData.map((plan) => (
                <div 
                  key={plan.id}
                  onClick={() => setSelectedPlanId(plan.id)}
                  className={`relative p-6 rounded-3xl border-2 transition-all cursor-pointer transform hover:scale-[1.02] ${selectedPlanId === plan.id ? 'border-green-500 ring-4 ring-green-500/20 shadow-xl' : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:border-green-300'}`}
                >
                  {plan.badge && (
                    <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-950 text-xs font-black px-3 py-1 rounded-full shadow-sm tracking-wider">
                      {plan.badge}
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl ${plan.color}`}>
                      {plan.icon}
                    </div>
                    {selectedPlanId === plan.id ? (
                      <div className="h-6 w-6 bg-green-500 rounded-full flex items-center justify-center">
                        <Check size={14} className="text-white" />
                      </div>
                    ) : (
                      <div className="h-6 w-6 border-2 border-gray-300 dark:border-gray-600 rounded-full"></div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{plan.name}</h3>
                  <div className="mt-2 mb-4">
                    <span className="text-xl md:text-2xl font-black text-gray-900 dark:text-white">{plan.price}</span>
                    {plan.note && <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{plan.note}</p>}
                  </div>
                  
                  <div className="h-px w-full bg-gray-100 dark:bg-gray-700 mb-4"></div>
                  
                  <ul className="space-y-3">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check size={18} className="text-green-500 mr-2 shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <button 
                onClick={handlePlanSubmit}
                disabled={isLoading}
                className="px-10 py-4 rounded-xl shadow-lg shadow-green-500/30 text-lg font-bold text-white bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 focus:outline-none disabled:opacity-70 transition-all transform active:scale-[0.98] w-full md:w-auto min-w-[300px]"
              >
                {isLoading ? t('processing') : t('continue_btn')}
              </button>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative">
        {/* Modal Simulasi Biometrik */}
        {isBiometricScanning && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/60 backdrop-blur-sm">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-2xl flex flex-col items-center max-w-xs w-full mx-4 animate-fade-in-up border border-green-500/30">
              <div className="relative mb-6 w-24 h-24 flex items-center justify-center">
                <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
                <div className="p-5 bg-green-50 dark:bg-green-900/30 rounded-full text-green-600 dark:text-green-400 relative z-10 border border-green-200 dark:border-green-800">
                  <Fingerprint size={48} className="animate-pulse" />
                </div>
                {/* Garis scan animasi */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-green-500 shadow-[0_0_10px_rgba(34,197,94,1)] animate-scan z-20 rounded-full w-12 mx-auto"></div>
              </div>
              <h3 className="text-xl font-black text-gray-900 dark:text-white mb-2 text-center">{t('bio_scanning')}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-xs text-center font-medium leading-relaxed">
                {t('bio_instruction')}
              </p>
            </div>
          </div>
        )}

        <div className="absolute top-4 right-4 flex space-x-2 z-10">
           <button onClick={toggleLang} className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-md text-gray-700 dark:text-gray-300 font-bold text-sm flex items-center">
             <Globe size={16} className="mr-1" /> {lang.toUpperCase()}
           </button>
           <button onClick={toggleTheme} className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-md text-gray-700 dark:text-gray-300">
             {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
           </button>
        </div>

        <div className="max-w-5xl w-full bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100 dark:border-gray-700">
          
          {/* Sisi Kiri: Branding */}
          <div className={`hidden md:flex md:w-5/12 bg-gradient-to-br from-green-600 to-green-500 p-12 flex-col justify-between relative overflow-hidden transition-all duration-500 ease-in-out ${authStage === 'register' ? 'order-2' : 'order-1'}`}>
            <div className="relative z-10">
              <div className="flex items-center space-x-3 mb-8">
                <div className="bg-white p-2 rounded-xl shadow-sm">
                  {logoWeb ? <img src={logoWeb} alt="Logo" width="40" height="40" className="object-contain" onError={(e) => e.target.style.display='none'} /> : <Leaf className="text-green-600" size={32}/>}
                </div>
                <h1 className="text-3xl font-black text-white tracking-tight">Wasteless ID</h1>
              </div>
              <h2 className="text-4xl font-extrabold text-white leading-tight mb-4">
                {t('login_title')}<br />{t('login_title2')}
              </h2>
              <p className="text-green-50 text-lg">
                {t('login_desc')}
              </p>
            </div>
            {/* Dekorasi Background */}
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
          </div>

          {/* Sisi Kanan: Form */}
          <div className={`w-full md:w-7/12 p-8 sm:p-12 lg:px-16 bg-white dark:bg-gray-800 transition-colors order-1 ${authStage === 'register' ? 'md:order-1' : 'md:order-2'}`}>
            <div className="md:hidden text-center mb-8">
              <div className="mx-auto h-16 w-16 bg-gradient-to-tr from-green-100 to-green-50 rounded-full flex items-center justify-center mb-4 shadow-sm border border-green-200">
                 {logoWeb ? <img src={logoWeb} alt="Logo" width="32" height="32" onError={(e) => e.target.style.display='none'}/> : <Leaf className="text-green-600" size={32}/>}
              </div>
              <h2 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight">Wasteless ID</h2>
            </div>
            
            <div className="mb-8 animate-fade-in-up">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {authStage === 'login' ? t('welcome_back') : t('create_account')}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {authStage === 'login' ? t('login_prompt') : t('register_prompt')}
              </p>
            </div>

            {/* Form Dinamis */}
            <form className="space-y-5 animate-fade-in-up" onSubmit={authStage === 'login' ? handleLogin : handleRegister}>
              {authStage === 'register' && (
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">{t('fullname')}</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User size={18} className="text-gray-400" />
                    </div>
                    <input type="text" required placeholder={lang === 'id' ? "Contoh: Budi Santoso" : "e.g., John Doe"} className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors" />
                  </div>
                </div>
              )}
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">{t('email')}</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Globe size={18} className="text-gray-400" />
                    </div>
                  <input type="email" required defaultValue={authStage === 'login' ? "admin@email.com" : ""} placeholder="nama@email.com" className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">{t('password')}</label>
                <input type="password" required defaultValue={authStage === 'login' ? "password123" : ""} placeholder="••••••••" className="w-full px-4 py-3.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors" />
              </div>

              {authStage === 'register' && (
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">{t('confirm_password')}</label>
                  <input type="password" required placeholder="••••••••" className="w-full px-4 py-3.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors" />
                </div>
              )}

              {authStage === 'login' && (
                <div className="flex items-center justify-between pt-1">
                  <label className="flex items-center cursor-pointer">
                    <input type="checkbox" className="h-4 w-4 text-green-600 rounded border-gray-300 focus:ring-green-500 cursor-pointer" />
                    <span className="ml-2 text-sm text-gray-600 dark:text-gray-400 font-medium">{t('remember')}</span>
                  </label>
                  <button type="button" className="text-sm font-bold text-green-600 dark:text-green-400 hover:text-green-500 transition-colors">{t('forgot')}</button>
                </div>
              )}

              <button type="submit" disabled={isLoading} className="w-full flex justify-center py-4 px-4 rounded-xl shadow-lg shadow-green-500/30 text-lg font-bold text-white bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 focus:outline-none disabled:opacity-70 transition-all transform active:scale-[0.98] mt-6">
                {isLoading ? t('processing') : (authStage === 'login' ? t('login_btn') : t('register_btn'))}
              </button>

              {authStage === 'login' && (
                <div className="mt-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-white dark:bg-gray-800 text-gray-400 font-medium">{t('or_login_with')}</span>
                    </div>
                  </div>
                  <button type="button" onClick={handleBiometricLogin} className="mt-6 w-full flex justify-center items-center py-4 px-4 rounded-xl border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-green-500 dark:hover:border-green-500 text-gray-700 dark:text-gray-300 font-bold transition-all transform active:scale-[0.98]">
                    <Fingerprint size={22} className="mr-2 text-green-600 dark:text-green-400" />
                    {t('bio_login')}
                  </button>
                </div>
              )}
            </form>

            <div className="mt-8 text-center">
              <button type="button" onClick={() => setAuthStage(authStage === 'login' ? 'register' : 'login')} className="text-sm font-bold text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors inline-flex items-center">
                {authStage === 'login' ? (
                  <><UserPlus size={16} className="mr-2"/> {t('to_register')}</>
                ) : (
                  <><LogIn size={16} className="mr-2"/> {t('to_login')}</>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // --- KOMPONEN APLIKASI UTAMA --- //

  const HomeView = () => (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="bg-gradient-to-r from-green-600 to-green-400 rounded-3xl p-6 md:p-8 text-white shadow-xl shadow-green-500/20 relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <p className="text-green-50 font-medium mb-1">{t('good_morning')}</p>
            <div className="flex items-center space-x-3 mb-4">
              <h1 className="text-3xl font-black tracking-tight">EcoWarrior!</h1>
              {userPlan !== 'free' && (
                <span className="bg-yellow-400 text-yellow-950 text-xs font-bold px-2.5 py-1 rounded-lg uppercase tracking-wider shadow-sm flex items-center">
                  <Zap size={12} className="mr-1"/> {userPlan}
                </span>
              )}
            </div>
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md py-2 px-4 rounded-2xl border border-white/30 shadow-inner">
              <Trophy size={20} className="text-yellow-300" />
              <span className="font-bold text-lg">{points} {t('pts')}</span>
            </div>
          </div>
          <div className="hidden md:block">
            <Leaf size={110} className="text-white opacity-20 absolute -right-6 -bottom-6 transform rotate-12 drop-shadow-2xl" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <button onClick={() => { setActiveTab('map'); showToast(lang === 'id' ? "Membuka Peta..." : "Opening Map..."); }}
          className="flex flex-col items-center justify-center p-5 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl hover:border-green-400 dark:hover:border-green-500 hover:shadow-lg transition-all group">
          <div className="bg-gradient-to-br from-green-100 to-green-50 dark:from-gray-700 dark:to-gray-600 p-4 rounded-full mb-3 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform shadow-sm"><MapPin size={28} /></div>
          <span className="text-sm font-bold text-gray-700 dark:text-gray-200 text-center">{t('find_drop')}</span>
        </button>
        <button onClick={() => setActiveTab('schedule')}
          className="flex flex-col items-center justify-center p-5 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl hover:border-green-400 dark:hover:border-green-500 hover:shadow-lg transition-all group">
          <div className="bg-gradient-to-br from-green-100 to-green-50 dark:from-gray-700 dark:to-gray-600 p-4 rounded-full mb-3 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform shadow-sm"><CalendarPlus size={28} /></div>
          <span className="text-sm font-bold text-gray-700 dark:text-gray-200 text-center">{t('schedule')}</span>
        </button>
        <button onClick={() => setActiveTab('scan')}
          className="flex flex-col items-center justify-center p-5 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl hover:border-green-400 dark:hover:border-green-500 hover:shadow-lg transition-all group md:hidden">
          <div className="bg-gradient-to-br from-green-100 to-green-50 dark:from-gray-700 dark:to-gray-600 p-4 rounded-full mb-3 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform shadow-sm"><QrCode size={28} /></div>
          <span className="text-sm font-bold text-gray-700 dark:text-gray-200 text-center">{t('scan_qr')}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm">
          <div className="flex justify-between items-center mb-5">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">{t('today_act')}</h3>
            <button className="text-sm text-green-600 dark:text-green-400 font-bold hover:underline">{t('see_all')}</button>
          </div>
          <div className="space-y-3">
            {activities.map((act) => (
              <div key={act.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-2xl border border-transparent hover:border-gray-200 dark:hover:border-gray-600 transition">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-xl ${act.color === 'blue' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400' : 'bg-orange-100 text-orange-600 dark:bg-orange-900/40 dark:text-orange-400'}`}>
                    {act.icon === 'battery' ? <BatteryWarning size={20} /> : <Box size={20} />}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">{act.type}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">{lang === 'id' ? act.status : act.statusEn}</p>
                  </div>
                </div>
                <span className="font-black text-green-600 dark:text-green-400">+{act.points} pts</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 dark:bg-gray-950 p-6 rounded-3xl text-white shadow-xl flex flex-col justify-between border border-gray-800 relative overflow-hidden">
           {userPlan === 'premium' && <Zap size={100} className="absolute -bottom-4 -right-4 text-yellow-500/10 transform rotate-12" />}
           {userPlan === 'b2b' && <Building2 size={100} className="absolute -bottom-4 -right-4 text-blue-500/10 transform rotate-12" />}
          <div>
            <div className="flex justify-between items-end mb-4">
              <h3 className="font-bold text-lg">{t('progress')}</h3>
              <span className="text-sm font-bold text-green-400">{t('next_target')}: {target} pts</span>
            </div>
            <div className="relative pt-1">
              <div className="overflow-hidden h-4 mb-4 text-xs flex rounded-full bg-gray-800 shadow-inner">
                <div style={{ width: `${Math.min((points / target) * 100, 100)}%` }} 
                     className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-green-500 to-green-400 transition-all duration-1000 ease-out relative">
                  <div className="absolute top-0 right-0 bottom-0 left-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSI+PC9yZWN0Pgo8cGF0aCBkPSJNMCAwTDggOFpNOCAwTDAgOFoiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIj48L3BhdGg+Cjwvc3ZnPg==')] opacity-20"></div>
                </div>
              </div>
              <p className="text-sm text-gray-400 text-right font-medium">{points} / {target}</p>
            </div>
          </div>
          <button onClick={() => { setTarget(target + 50); showToast(lang === 'id' ? "Target diperbarui!" : "Target updated!"); }}
            className="mt-6 w-full py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-xl font-bold transition flex items-center justify-center relative z-10">
            {t('add_target')}
          </button>
        </div>
      </div>
    </div>
  );

  const SubscriptionView = () => {
    const plansData = getPlansData();

    const handleUpgrade = (id) => {
      setUserPlan(id);
      showToast(t('plan_updated'));
    };

    return (
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center p-4 bg-green-100 dark:bg-green-900/30 rounded-full mb-4">
            <ShieldCheck size={32} className="text-green-600 dark:text-green-400" />
          </div>
          <h2 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">{t('sub_title')}</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2 max-w-xl mx-auto">{t('sub_desc')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plansData.map((plan) => {
            const isCurrent = userPlan === plan.id;
            return (
              <div key={plan.id} className={`relative p-6 rounded-3xl border-2 transition-all flex flex-col ${isCurrent ? 'border-green-500 ring-4 ring-green-500/10 shadow-xl bg-white dark:bg-gray-800' : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 hover:border-green-300'}`}>
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-950 text-xs font-black px-3 py-1 rounded-full shadow-sm tracking-wider">
                    {plan.badge}
                  </div>
                )}
                
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl ${plan.color}`}>{plan.icon}</div>
                  {isCurrent && <span className="bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-400 text-xs font-bold px-2 py-1 rounded-md">{t('current_plan')}</span>}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{plan.name}</h3>
                <div className="mt-2 mb-4">
                  <span className="text-2xl font-black text-gray-900 dark:text-white">{plan.price}</span>
                  {plan.note && <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{plan.note}</p>}
                </div>
                
                <div className="h-px w-full bg-gray-200 dark:bg-gray-700 mb-4"></div>
                
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check size={18} className="text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">{feat}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => handleUpgrade(plan.id)}
                  disabled={isCurrent}
                  className={`w-full py-3.5 rounded-xl font-bold transition-all ${isCurrent ? 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-green-600 to-green-500 text-white shadow-lg shadow-green-500/20 hover:from-green-700 hover:to-green-600 transform active:scale-[0.98]'}`}>
                  {isCurrent ? t('current_plan') : t('choose_this_plan')}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    );
  };

  const B2BDashboardView = () => {
    // Tampilan Terkunci jika user bukan B2B
    if (userPlan !== 'b2b') {
      return (
        <div className="flex flex-col items-center justify-center h-[70vh] text-center max-w-lg mx-auto">
          <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-full mb-6 border border-blue-200 dark:border-blue-800">
            <Lock size={64} className="text-blue-500" />
          </div>
          <h2 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight mb-4">{t('b2b_locked_title')}</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
            {t('b2b_locked_desc')}
          </p>
          <button onClick={() => setActiveTab('subscription')} className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl font-bold shadow-lg shadow-blue-500/30 transform active:scale-95 transition-all">
            {t('upgrade_now')}
          </button>
        </div>
      );
    }

    // Tampilan Dashboard B2B
    return (
      <div className="space-y-6 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-black text-gray-900 dark:text-white">{t('b2b_dashboard_title')}</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-1">{t('b2b_dashboard_desc')}</p>
          </div>
          <button onClick={() => showToast(lang === 'id' ? 'Mengunduh laporan...' : 'Downloading report...')} className="flex items-center space-x-2 px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-bold hover:bg-gray-50 dark:hover:bg-gray-700 transition shadow-sm">
            <Download size={18} />
            <span>{t('export_report')}</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-3xl text-white shadow-lg relative overflow-hidden">
             <Leaf className="absolute -right-4 -bottom-4 opacity-20" size={80} />
             <div className="relative z-10">
               <p className="font-medium text-green-100 mb-1">{t('metric_carbon')}</p>
               <h3 className="text-4xl font-black tracking-tight mb-2">1,240 <span className="text-lg font-bold text-green-200">kg CO2</span></h3>
               <div className="flex items-center text-sm font-medium bg-white/20 inline-flex px-2 py-1 rounded-lg">
                 <TrendingUp size={14} className="mr-1" /> +12.5% this month
               </div>
             </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col justify-between">
             <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl"><Box size={24} /></div>
             </div>
             <div>
               <p className="text-gray-500 dark:text-gray-400 font-medium mb-1">{t('metric_waste')}</p>
               <h3 className="text-3xl font-black text-gray-900 dark:text-white">4,550 <span className="text-lg text-gray-500">kg</span></h3>
             </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col justify-between">
             <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-xl"><User size={24} /></div>
             </div>
             <div>
               <p className="text-gray-500 dark:text-gray-400 font-medium mb-1">{t('metric_employee')}</p>
               <h3 className="text-3xl font-black text-gray-900 dark:text-white">182 <span className="text-lg text-gray-500">Active</span></h3>
             </div>
          </div>
        </div>

        {/* Dummy Chart Section */}
        <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm mt-6">
           <h3 className="font-bold text-gray-900 dark:text-white mb-6">Waste Reduction Trend (YTD)</h3>
           <div className="h-64 flex items-end justify-between space-x-2 pt-10">
              {[40, 60, 45, 80, 65, 95, 75, 100].map((val, i) => (
                <div key={i} className="w-full bg-green-100 dark:bg-green-900/20 rounded-t-lg relative group">
                  <div style={{height: `${val}%`}} className="absolute bottom-0 w-full bg-gradient-to-t from-green-600 to-green-400 rounded-t-lg transition-all duration-1000 group-hover:from-green-500 group-hover:to-green-300"></div>
                  <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs font-bold py-1 px-2 rounded transition-opacity">
                    {val * 10}kg
                  </div>
                </div>
              ))}
           </div>
           <div className="flex justify-between mt-4 text-xs font-bold text-gray-400">
             <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span>
           </div>
        </div>
      </div>
    );
  };

  const ScheduleView = () => {
    // ... logic tetap sama ...
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleSubmit = (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        showToast(t('schedule_success'));
        setActiveTab('home');
      }, 1500);
    };

    return (
      <div className="max-w-3xl mx-auto space-y-6">
         <div className="flex items-center space-x-4 mb-6">
            <button onClick={() => setActiveTab('home')} className="p-2.5 bg-white dark:bg-gray-800 rounded-full shadow-sm text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors border border-gray-100 dark:border-gray-700">
              <ArrowLeft size={24} />
            </button>
            <h2 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight">{t('schedule_title')}</h2>
         </div>

         <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                      <Calendar size={18} className="mr-2 text-green-500"/> {t('pickup_date')}
                    </label>
                    <input type="date" required className="w-full px-4 py-3.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                      <Clock size={18} className="mr-2 text-green-500"/> {t('pickup_time')}
                    </label>
                    <input type="time" required className="w-full px-4 py-3.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 outline-none transition-colors" />
                  </div>
               </div>
               
               <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                    <MapPin size={18} className="mr-2 text-green-500"/> {t('pickup_address')}
                  </label>
                  <textarea required rows="3" placeholder={lang === 'id' ? "Masukkan alamat lengkap Anda..." : "Enter your full address..."} className="w-full px-4 py-3.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 outline-none transition-colors resize-none"></textarea>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                      <Box size={18} className="mr-2 text-green-500"/> {t('waste_type')}
                    </label>
                    <select className="w-full px-4 py-3.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 outline-none transition-colors">
                      <option>E-Waste (Elektronik)</option>
                      <option>Plastik & Kertas</option>
                      <option>Baterai & Lampu</option>
                      <option>Campuran (Mixed)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                      <Trophy size={18} className="mr-2 text-green-500"/> {t('est_weight')}
                    </label>
                    <input type="number" min="1" placeholder="Mis. 5" className="w-full px-4 py-3.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 outline-none transition-colors" />
                  </div>
               </div>

               <button type="submit" disabled={isSubmitting} className="w-full py-4 mt-4 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-xl font-bold shadow-lg shadow-green-500/30 hover:from-green-700 hover:to-green-600 transition-all transform active:scale-[0.98] disabled:opacity-70 flex justify-center items-center text-lg">
                  {isSubmitting ? t('processing') : t('submit_btn')}
               </button>
            </form>
         </div>
      </div>
    );
  };

  const RewardsView = () => {
    // ... logic tetap sama ...
    const eWallets = [
      { id: 'dana', title: 'DANA Rp 20.000', cost: 200, icon: <Wallet size={24}/>, color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' },
      { id: 'gopay', title: 'GoPay Rp 20.000', cost: 200, icon: <Smartphone size={24}/>, color: 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400' },
      { id: 'shopeepay', title: 'ShopeePay Rp 50.000', cost: 450, icon: <CreditCard size={24}/>, color: 'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400' },
    ];

    const rewardsList = [
      { id: 1, title: 'Voucher Kopi 20k', cost: 50, icon: <Gift size={24}/>, color: 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400' },
      { id: 2, title: 'Diskon Belanja 15%', cost: 100, icon: <Gift size={24}/>, color: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400' },
      { id: 3, title: 'Tumbler Eksklusif', cost: 250, icon: <Box size={24}/>, color: 'bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400' },
    ];

    const redeemReward = (cost, title) => {
      // Diskon untuk Premium & B2B
      const isPrivileged = userPlan === 'premium' || userPlan === 'b2b';
      const finalCost = isPrivileged ? Math.floor(cost * 0.9) : cost; 

      if (points >= finalCost) {
        setPoints(points - finalCost);
        showToast(lang === 'id' ? `Berhasil menukar ${title}!` : `Successfully redeemed ${title}!`);
      } else {
        showToast(lang === 'id' ? `Poin kurang ${finalCost - points} lagi.` : `Need ${finalCost - points} more points.`);
      }
    };

    return (
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-black text-gray-900 dark:text-white">{t('catalog')}</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-1">{t('catalog_desc')}</p>
            {(userPlan === 'premium' || userPlan === 'b2b') && (
              <span className="inline-flex items-center text-xs font-bold text-yellow-600 dark:text-yellow-400 mt-2 bg-yellow-100 dark:bg-yellow-900/30 px-2.5 py-1 rounded-lg">
                <Zap size={14} className="mr-1"/> Exclusive Benefit: 10% Discount on Rewards
              </span>
            )}
          </div>
          <div className="bg-gradient-to-br from-green-100 to-green-50 dark:from-green-900/40 dark:to-green-900/20 p-4 px-6 rounded-2xl flex flex-col items-center border border-green-200 dark:border-green-800">
            <span className="text-sm font-bold text-green-800 dark:text-green-400">{t('balance')}</span>
            <div className="flex items-center space-x-1 mt-1">
              <Trophy size={20} className="text-yellow-500 dark:text-yellow-400" />
              <span className="text-3xl font-black text-green-600 dark:text-green-500">{points}</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <Smartphone className="mr-2 text-green-500" size={20}/> {t('ewallet_title')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {eWallets.map(wallet => {
              const isPrivileged = userPlan === 'premium' || userPlan === 'b2b';
              const displayCost = isPrivileged ? Math.floor(wallet.cost * 0.9) : wallet.cost;
              return (
                <div key={wallet.id} className="bg-white dark:bg-gray-800 p-5 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm flex items-center justify-between hover:border-green-300 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-xl ${wallet.color}`}>{wallet.icon}</div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white text-sm">{wallet.title}</h4>
                      <p className="text-green-600 dark:text-green-400 font-bold text-sm">
                        {displayCost} pts {isPrivileged && <span className="line-through text-gray-400 text-xs font-normal ml-1">{wallet.cost}</span>}
                      </p>
                    </div>
                  </div>
                  <button onClick={() => redeemReward(wallet.cost, wallet.title)}
                    className={`px-4 py-2 rounded-lg text-sm font-bold transition-all transform active:scale-95 ${points >= displayCost ? 'bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900/50 dark:text-green-400 dark:hover:bg-green-800/80' : 'bg-gray-100 text-gray-400 dark:bg-gray-700 dark:text-gray-500 cursor-not-allowed'}`}>
                    {points >= displayCost ? t('redeem_btn') : (lang === 'id' ? 'Kurang' : 'Lock')}
                  </button>
                </div>
              )
            })}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <Gift className="mr-2 text-green-500" size={20}/> Vouchers & Items
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {rewardsList.map(reward => {
               const isPrivileged = userPlan === 'premium' || userPlan === 'b2b';
               const displayCost = isPrivileged ? Math.floor(reward.cost * 0.9) : reward.cost;
               return (
                <div key={reward.id} className="bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-all">
                  <div className={`p-4 rounded-full mb-4 ${reward.color}`}>{reward.icon}</div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">{reward.title}</h3>
                  <p className="text-green-600 dark:text-green-400 font-extrabold mb-6 text-lg">
                    {displayCost} Pts {isPrivileged && <span className="line-through text-gray-400 text-sm font-normal ml-1">{reward.cost}</span>}
                  </p>
                  <button onClick={() => redeemReward(reward.cost, reward.title)}
                    className={`w-full py-3 rounded-xl font-bold transition-all shadow-sm transform active:scale-95 ${points >= displayCost ? 'bg-gradient-to-r from-green-600 to-green-500 text-white hover:from-green-700 hover:to-green-600' : 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'}`}>
                    {points >= displayCost ? t('redeem_btn') : t('insufficient')}
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    );
  };

  const MapView = () => (
    <div className="flex flex-col h-full bg-white dark:bg-gray-800 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm relative min-h-[70vh]">
      <div className="absolute top-4 left-4 right-4 z-10 md:left-8 md:right-auto md:w-80">
         <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-3 flex items-center space-x-3 border border-gray-100 dark:border-gray-700">
           <MapPin className="text-green-600 dark:text-green-400" size={20} />
           <input type="text" placeholder={t('search_placeholder')} className="w-full text-sm bg-transparent outline-none dark:text-white" defaultValue="Medan, Sumatera Utara" />
         </div>
      </div>
      
      <div className="flex-1 w-full bg-gray-200 dark:bg-gray-700 flex flex-col relative">
        {isDarkMode && <div className="absolute inset-0 bg-black/20 pointer-events-none mix-blend-overlay z-0"></div>}
        <iframe title="Map" width="100%" height="100%" style={{ border: 0, minHeight: '400px', flexGrow: 1 }} loading="lazy" src="https://maps.google.com/maps?q=Politeknik%20Negeri%20Medan&t=&z=15&ie=UTF8&iwloc=&output=embed"></iframe>
      </div>
      
      <div className="bg-white dark:bg-gray-800 p-5 border-t border-gray-100 dark:border-gray-700 relative z-10">
         <div className="w-12 h-1.5 bg-gray-200 dark:bg-gray-600 rounded-full mx-auto mb-4 md:hidden"></div>
         <h3 className="font-bold text-gray-900 dark:text-white mb-3">{t('nearby_drop')}</h3>
         <div className="space-y-3">
           <div className="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-green-100/50 dark:from-green-900/20 dark:to-green-800/10 border border-green-200 dark:border-green-800/50 rounded-xl">
             <div>
               <p className="font-bold text-green-900 dark:text-green-100 text-sm">Drop Box Kampus Polmed</p>
               <p className="text-xs text-green-600 dark:text-green-400 mt-0.5">0.5 km • 24H</p>
             </div>
             <button onClick={() => showToast(lang === 'id' ? "Rute disiapkan..." : "Routing...")} className="px-4 py-2 bg-gradient-to-r from-green-600 to-green-500 text-white font-bold text-xs rounded-lg shadow-sm">
                {t('route')}
              </button>
           </div>
         </div>
      </div>
    </div>
  );

  const ProfileView = () => (
    <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm text-center">
      <div className="mx-auto w-24 h-24 bg-gradient-to-tr from-green-200 to-green-100 dark:from-green-900 dark:to-green-800 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mb-4 shadow-inner border border-green-50 dark:border-green-700 relative">
        <User size={40} />
        {userPlan === 'premium' && (
          <div className="absolute bottom-0 right-0 bg-yellow-500 rounded-full p-1.5 border-2 border-white dark:border-gray-800">
            <Zap size={14} className="text-white"/>
          </div>
        )}
        {userPlan === 'b2b' && (
          <div className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-1.5 border-2 border-white dark:border-gray-800">
            <Building2 size={14} className="text-white"/>
          </div>
        )}
      </div>
      <h2 className="text-2xl font-black text-gray-900 dark:text-white">EcoWarrior</h2>
      <p className="text-gray-500 dark:text-gray-400 mb-4">user@email.com</p>
      
      {/* Tombol ke Menu Subscription */}
      <button onClick={() => setActiveTab('subscription')} className="inline-flex items-center bg-gray-100 dark:bg-gray-700 px-5 py-2 rounded-xl mb-8 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors shadow-sm cursor-pointer group">
        <span className="text-sm font-bold text-gray-700 dark:text-gray-300 mr-2">Plan:</span>
        <span className={`text-sm font-black uppercase ${userPlan === 'free' ? 'text-green-600 dark:text-green-400' : (userPlan === 'premium' ? 'text-yellow-500' : 'text-blue-500')}`}>
          {userPlan}
        </span>
        <span className="ml-3 px-2 py-1 bg-white dark:bg-gray-800 rounded-md text-xs font-bold text-gray-500 dark:text-gray-400 shadow-sm group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">Ubah</span>
      </button>
      
      <div className="space-y-4 text-left border-t border-gray-100 dark:border-gray-700 pt-6">
        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
          <span className="font-medium text-gray-700 dark:text-gray-300">{lang === 'id' ? 'Bahasa' : 'Language'}</span>
          <div className="flex space-x-2">
            <button onClick={() => setLang('id')} className={`px-3 py-1 rounded-md text-sm font-bold ${lang === 'id' ? 'bg-green-600 text-white' : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-400'}`}>ID</button>
            <button onClick={() => setLang('en')} className={`px-3 py-1 rounded-md text-sm font-bold ${lang === 'en' ? 'bg-green-600 text-white' : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-400'}`}>EN</button>
          </div>
        </div>
        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
          <span className="font-medium text-gray-700 dark:text-gray-300">{lang === 'id' ? 'Mode Gelap' : 'Dark Mode'}</span>
          <button onClick={toggleTheme} className={`w-14 h-7 flex items-center rounded-full p-1 transition-colors duration-300 ease-in-out focus:outline-none ${isDarkMode ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'}`}>
            <div className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${isDarkMode ? 'translate-x-7' : 'translate-x-0'}`}></div>
          </button>
        </div>
      </div>

      <button onClick={() => { setIsLoggedIn(false); setAuthStage('login'); }}
        className="mt-8 w-full px-8 py-3.5 bg-red-50 hover:bg-red-100 dark:bg-red-900/20 dark:hover:bg-red-900/40 text-red-600 dark:text-red-400 rounded-xl font-bold transition">
        {t('logout')}
      </button>
    </div>
  );

  const Navigation = () => {
    // Memperbarui list Navigasi dengan B2B & Subscription
    const navItems = [
      { id: 'home', label: t('menu_home'), icon: <Home size={24} /> },
      { id: 'map', label: t('menu_map'), icon: <MapPin size={24} /> },
      { id: 'scan', label: t('menu_scan'), icon: <QrCode size={24} />, isPrimary: true },
      { id: 'rewards', label: t('menu_rewards'), icon: <Trophy size={24} /> },
      { id: 'b2b_dashboard', label: t('menu_b2b'), icon: <BarChart3 size={24} /> },
      { id: 'subscription', label: t('menu_subscription'), icon: <CreditCard size={24} /> },
      { id: 'profile', label: t('menu_profile'), icon: <User size={24} /> },
    ];

    return (
      <>
        {/* Sidebar Desktop */}
        <aside className="hidden md:flex flex-col w-72 h-screen bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 fixed left-0 top-0 transition-colors">
          <div className="p-8 flex items-center space-x-3 mb-4">
            <div className="bg-gradient-to-br from-green-500 to-green-600 p-0.5 rounded-xl shadow-sm">
               {logoWeb ? <img src={logoWeb} alt="Logo" width="36" height="36" onError={(e) => e.target.style.display='none'}/> : <Leaf className="text-white m-2" size={24}/>}
            </div>
            <h1 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight">Wasteless</h1>
          </div>

          <nav className="flex-1 px-5 space-y-2 overflow-y-auto hide-scrollbar pb-4">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-4 px-4 py-3.5 rounded-xl transition-all ${
                  activeTab === item.id 
                    ? 'bg-gradient-to-r from-green-50 to-green-100/50 dark:from-green-900/30 dark:to-green-800/10 text-green-700 dark:text-green-400 font-bold border border-green-200/50 dark:border-green-800/50 shadow-sm' 
                    : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white font-medium'
                }`}>
                <div className={`${activeTab === item.id ? 'text-green-600 dark:text-green-400' : 'text-gray-400 dark:text-gray-500'}`}>
                  {item.icon}
                </div>
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="p-6 border-t border-gray-100 dark:border-gray-800 space-y-4">
            <div className="flex justify-between px-2">
               <button onClick={toggleLang} className="text-gray-500 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400 flex items-center text-sm font-bold transition-colors">
                 <Globe size={18} className="mr-1.5" /> {lang.toUpperCase()}
               </button>
               <button onClick={toggleTheme} className="text-gray-500 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400 transition-colors">
                 {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
               </button>
            </div>
            <button onClick={() => { setIsLoggedIn(false); setAuthStage('login'); }} className="w-full flex items-center justify-center space-x-2 px-4 py-3 text-red-500 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl font-bold transition-colors">
              <LogOut size={20} />
              <span>{t('logout')}</span>
            </button>
          </div>
        </aside>

        {/* Bottom Nav Mobile (Scrollable horizontally agar muat banyak menu) */}
        <div className="md:hidden fixed bottom-0 left-0 w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 px-4 py-2 flex items-center z-40 rounded-t-3xl shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] pb-safe transition-colors overflow-x-auto hide-scrollbar space-x-2">
          {navItems.map((item) => {
            if (item.isPrimary) {
              return (
                <div key={item.id} className="relative -top-6 flex-shrink-0 px-2">
                  <button onClick={() => setActiveTab(item.id)}
                    className={`p-4 rounded-full shadow-xl shadow-green-500/30 transition-transform transform active:scale-95 bg-gradient-to-br from-green-500 to-green-600 text-white border-4 border-gray-50 dark:border-gray-900`}>
                    {item.icon}
                  </button>
                </div>
              );
            }
            return (
              <button key={item.id} onClick={() => setActiveTab(item.id)}
                className={`flex flex-col items-center p-2 min-w-[65px] flex-shrink-0 transition-colors ${activeTab === item.id ? 'text-green-600 dark:text-green-400' : 'text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300'}`}>
                {item.icon}
                <span className="text-[10px] mt-1 font-bold whitespace-nowrap">{item.label}</span>
              </button>
            );
          })}
        </div>
      </>
    );
  };

  const DashboardLayout = () => {
    return (
      <div className="flex w-full">
        <Navigation />
        <main className="flex-1 md:ml-72 relative min-h-screen">
          {/* Header Mobile */}
          <div className="md:hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-md px-6 py-4 flex justify-between items-center sticky top-0 z-30 border-b border-gray-100 dark:border-gray-800 transition-colors">
            <div className="flex items-center space-x-2">
              {logoWeb ? <img src={logoWeb} alt="Logo" width="28" height="28" onError={(e) => e.target.style.display='none'}/> : <Leaf className="text-green-600" size={24}/>}
              <span className="font-black text-gray-900 dark:text-white tracking-tight ml-1">Wasteless</span>
            </div>
            <div className="flex space-x-3 items-center text-gray-500 dark:text-gray-400">
              <button onClick={toggleLang} className="font-bold text-sm">{lang.toUpperCase()}</button>
              <button onClick={toggleTheme}>{isDarkMode ? <Sun size={20} /> : <Moon size={20} />}</button>
              <button className="hover:text-green-600 dark:hover:text-green-400"><Bell size={20} /></button>
            </div>
          </div>

          <div className="p-4 md:p-8 pb-32 md:pb-8">
            {activeTab === 'home' && <HomeView />}
            {activeTab === 'map' && <MapView />}
            {activeTab === 'schedule' && <ScheduleView />}
            {activeTab === 'rewards' && <RewardsView />}
            {activeTab === 'b2b_dashboard' && <B2BDashboardView />}
            {activeTab === 'subscription' && <SubscriptionView />}
            {activeTab === 'profile' && <ProfileView />}
            
            {activeTab === 'scan' && (
              <div className="flex flex-col items-center justify-center h-[70vh] text-center">
                <div className="relative mb-8">
                  <div className="absolute inset-0 border-4 border-green-500/30 rounded-3xl animate-pulse"></div>
                  <div className="p-8 bg-green-50 dark:bg-green-900/20 rounded-3xl border border-green-200 dark:border-green-800/50 relative z-10 bg-opacity-90 backdrop-blur">
                    <QrCode size={80} className="text-green-600 dark:text-green-400" />
                  </div>
                </div>
                <h3 className="font-black text-2xl text-gray-900 dark:text-white mb-2">{t('scan_qr')}</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-xs">{t('scan_desc')}</p>
                <button onClick={() => { 
                    const multiplier = (userPlan === 'premium' || userPlan === 'b2b') ? 1.5 : 1;
                    const bonusPts = 10 * multiplier;
                    setPoints(points + bonusPts); 
                    showToast(`+${bonusPts} Pts! ${multiplier > 1 ? '(Premium Multiplier)' : ''}`); 
                    setActiveTab('home'); 
                  }}
                  className="px-8 py-3.5 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-xl font-bold shadow-lg shadow-green-500/30 transform active:scale-95 transition-all">
                  {t('simulate_scan')}
                </button>
              </div>
            )}
          </div>
        </main>
      </div>
    );
  };

  return (
    <div className={`${isDarkMode ? 'dark' : ''} font-sans`}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Toast />
        {isLoggedIn ? <DashboardLayout /> : <AuthFlow />}
      </div>
      
      {/* CSS Styles tambahan untuk efek fade dan scrollbar */}
      <style dangerouslySetInnerHTML={{__html: `
        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out forwards;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scan {
          0%, 100% { top: 10%; opacity: 0; }
          10%, 90% { opacity: 1; }
          50% { top: 90%; }
        }
        .animate-scan {
          animation: scan 2s infinite ease-in-out;
        }
        /* Hide scrollbar for Chrome, Safari and Opera */
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}} />
    </div>
  );
}
