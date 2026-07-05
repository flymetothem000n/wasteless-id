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
  Clock
} from 'lucide-react';

export default function App() {
  // State Autentikasi
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
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

  // Kamus Bahasa (Terjemahan)
  const dict = {
    id: {
      login_title: "Ubah Sampah",
      login_title2: "Jadi Nilai",
      login_desc: "Bergabunglah dengan ekosistem kami untuk mengubah kebiasaan ramah lingkungan Anda menjadi nilai ekonomi yang nyata.",
      welcome_back: "Selamat Datang Kembali!",
      login_prompt: "Silakan masuk ke akun Anda untuk melanjutkan.",
      email: "Email",
      password: "Kata Sandi",
      remember: "Ingat saya",
      forgot: "Lupa sandi?",
      login_btn: "Masuk",
      processing: "Memproses...",
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
      schedule_title: "Jadwalkan Penjemputan",
      pickup_date: "Tanggal Penjemputan",
      pickup_time: "Waktu",
      pickup_address: "Alamat Lengkap",
      waste_type: "Jenis Sampah",
      est_weight: "Estimasi Berat (kg)",
      submit_btn: "Buat Jadwal",
      schedule_success: "Jadwal penjemputan berhasil dibuat!"
    },
    en: {
      login_title: "Turn Waste",
      login_title2: "into Value",
      login_desc: "Join our ecosystem to transform your eco-friendly habits into real economic value.",
      welcome_back: "Welcome Back!",
      login_prompt: "Please log in to your account to continue.",
      email: "Email",
      password: "Password",
      remember: "Remember me",
      forgot: "Forgot password?",
      login_btn: "Login",
      processing: "Processing...",
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
      schedule_title: "Schedule Pickup",
      pickup_date: "Pickup Date",
      pickup_time: "Time",
      pickup_address: "Full Address",
      waste_type: "Waste Type",
      est_weight: "Estimated Weight (kg)",
      submit_btn: "Create Schedule",
      schedule_success: "Pickup schedule created successfully!"
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

  const LoginPage = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = (e) => {
      e.preventDefault();
      setIsLoading(true);
      setTimeout(() => {
        setIsLoggedIn(true);
        setIsLoading(false);
      }, 800);
    };

    return (
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="absolute top-4 right-4 flex space-x-2 z-10">
           <button onClick={toggleLang} className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-md text-gray-700 dark:text-gray-300 font-bold text-sm flex items-center">
             <Globe size={16} className="mr-1" /> {lang.toUpperCase()}
           </button>
           <button onClick={toggleTheme} className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-md text-gray-700 dark:text-gray-300">
             {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
           </button>
        </div>

        <div className="max-w-4xl w-full bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100 dark:border-gray-700">
          
          {/* Sisi Kiri: Branding */}
          <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-green-600 to-green-500 p-12 flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center space-x-3 mb-8">
                <div className="bg-white p-2 rounded-xl shadow-sm">
                  <img src="src/assets/wasteless.png" width="50" height="50" />
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
          <div className="w-full md:w-1/2 p-8 sm:p-12 bg-white dark:bg-gray-800 transition-colors">
            <div className="md:hidden text-center mb-8">
              <div className="mx-auto h-16 w-16 bg-gradient-to-tr from-green-100 to-green-50 rounded-full flex items-center justify-center mb-4 shadow-sm border border-green-200">
                <img src="src/assets/wasteless.png" width="50" height="50" />
              </div>
              <h2 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight">Wasteless ID</h2>
            </div>
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{t('welcome_back')}</h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2">{t('login_prompt')}</p>
            </div>

            <form className="space-y-6" onSubmit={handleLogin}>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('email')}</label>
                <input
                  type="email"
                  required
                  defaultValue="admin@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('password')}</label>
                <input
                  type="password"
                  required
                  defaultValue="password123"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="h-4 w-4 text-green-600 rounded border-gray-300 focus:ring-green-500" />
                  <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">{t('remember')}</span>
                </label>
                <button type="button" className="text-sm font-medium text-green-600 dark:text-green-400 hover:text-green-500">{t('forgot')}</button>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-3.5 px-4 rounded-xl shadow-lg shadow-green-500/30 text-sm font-bold text-white bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-70 transition-all transform active:scale-[0.98]"
              >
                {isLoading ? t('processing') : t('login_btn')}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };

  const HomeView = () => {
    return (
      <div className="space-y-6 max-w-4xl mx-auto">
        {/* Banner Welcome - Green Gradient */}
        <div className="bg-gradient-to-r from-green-600 to-green-400 rounded-3xl p-6 md:p-8 text-white shadow-xl shadow-green-500/20 relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <p className="text-green-50 font-medium mb-1">{t('good_morning')}</p>
              <h1 className="text-3xl font-black mb-4 tracking-tight">Administrator!</h1>
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

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button onClick={() => { setActiveTab('map'); showToast(lang === 'id' ? "Membuka Peta..." : "Opening Map..."); }}
            className="flex flex-col items-center justify-center p-5 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl hover:border-green-400 dark:hover:border-green-500 hover:shadow-lg transition-all group">
            <div className="bg-gradient-to-br from-green-100 to-green-50 dark:from-gray-700 dark:to-gray-600 p-4 rounded-full mb-3 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform shadow-sm">
              <MapPin size={28} />
            </div>
            <span className="text-sm font-bold text-gray-700 dark:text-gray-200 text-center">{t('find_drop')}</span>
          </button>
          
          <button onClick={() => setActiveTab('schedule')}
            className="flex flex-col items-center justify-center p-5 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl hover:border-green-400 dark:hover:border-green-500 hover:shadow-lg transition-all group">
            <div className="bg-gradient-to-br from-green-100 to-green-50 dark:from-gray-700 dark:to-gray-600 p-4 rounded-full mb-3 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform shadow-sm">
              <CalendarPlus size={28} />
            </div>
            <span className="text-sm font-bold text-gray-700 dark:text-gray-200 text-center">{t('schedule')}</span>
          </button>

          <button onClick={() => setActiveTab('scan')}
            className="flex flex-col items-center justify-center p-5 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl hover:border-green-400 dark:hover:border-green-500 hover:shadow-lg transition-all group md:hidden">
            <div className="bg-gradient-to-br from-green-100 to-green-50 dark:from-gray-700 dark:to-gray-600 p-4 rounded-full mb-3 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform shadow-sm">
              <QrCode size={28} />
            </div>
            <span className="text-sm font-bold text-gray-700 dark:text-gray-200 text-center">{t('scan_qr')}</span>
          </button>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Riwayat Aktivitas */}
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

          {/* Progress Bar */}
          <div className="bg-gray-900 dark:bg-gray-950 p-6 rounded-3xl text-white shadow-xl flex flex-col justify-between border border-gray-800">
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
              className="mt-6 w-full py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-xl font-bold transition flex items-center justify-center">
              {t('add_target')}
            </button>
          </div>
        </div>
      </div>
    );
  };

  const ScheduleView = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      // Simulasi loading ke server
      setTimeout(() => {
        setIsSubmitting(false);
        showToast(t('schedule_success'));
        setActiveTab('home'); // Kembali ke home setelah sukses
      }, 1500);
    };

    return (
      <div className="max-w-3xl mx-auto space-y-6">
         {/* Header Title with Back Button */}
         <div className="flex items-center space-x-4 mb-6">
            <button onClick={() => setActiveTab('home')} className="p-2.5 bg-white dark:bg-gray-800 rounded-full shadow-sm text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors border border-gray-100 dark:border-gray-700">
              <ArrowLeft size={24} />
            </button>
            <h2 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight">{t('schedule_title')}</h2>
         </div>

         {/* Form Card */}
         <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Tanggal */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                      <Calendar size={18} className="mr-2 text-green-500"/> {t('pickup_date')}
                    </label>
                    <input type="date" required className="w-full px-4 py-3.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 outline-none transition-colors" />
                  </div>
                  {/* Waktu */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                      <Clock size={18} className="mr-2 text-green-500"/> {t('pickup_time')}
                    </label>
                    <input type="time" required className="w-full px-4 py-3.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 outline-none transition-colors" />
                  </div>
               </div>
               
               {/* Alamat Lengkap */}
               <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                    <MapPin size={18} className="mr-2 text-green-500"/> {t('pickup_address')}
                  </label>
                  <textarea required rows="3" placeholder={lang === 'id' ? "Masukkan alamat lengkap Anda..." : "Enter your full address..."} className="w-full px-4 py-3.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 outline-none transition-colors resize-none"></textarea>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Jenis Sampah */}
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
                  {/* Estimasi Berat */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                      <Trophy size={18} className="mr-2 text-green-500"/> {t('est_weight')}
                    </label>
                    <input type="number" min="1" placeholder="Mis. 5" className="w-full px-4 py-3.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 outline-none transition-colors" />
                  </div>
               </div>

               {/* Tombol Submit */}
               <button type="submit" disabled={isSubmitting} className="w-full py-4 mt-4 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-xl font-bold shadow-lg shadow-green-500/30 hover:from-green-700 hover:to-green-600 transition-all transform active:scale-[0.98] disabled:opacity-70 flex justify-center items-center text-lg">
                  {isSubmitting ? t('processing') : t('submit_btn')}
               </button>
            </form>
         </div>
      </div>
    );
  };

  const RewardsView = () => {
    // E-Wallets Options
    const eWallets = [
      { id: 'dana', title: 'DANA Rp 20.000', cost: 200, icon: <Wallet size={24}/>, color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' },
      { id: 'gopay', title: 'GoPay Rp 20.000', cost: 200, icon: <Smartphone size={24}/>, color: 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400' },
      { id: 'shopeepay', title: 'ShopeePay Rp 50.000', cost: 450, icon: <CreditCard size={24}/>, color: 'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400' },
    ];

    // Physical/Voucher Rewards
    const rewardsList = [
      { id: 1, title: 'Voucher Kopi 20k', cost: 50, icon: <Gift size={24}/>, color: 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400' },
      { id: 2, title: 'Diskon Belanja 15%', cost: 100, icon: <Gift size={24}/>, color: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400' },
      { id: 3, title: 'Tumbler Eksklusif', cost: 250, icon: <Box size={24}/>, color: 'bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400' },
    ];

    const redeemReward = (cost, title) => {
      if (points >= cost) {
        setPoints(points - cost);
        showToast(lang === 'id' ? `Berhasil menukar ${title}!` : `Successfully redeemed ${title}!`);
      } else {
        showToast(lang === 'id' ? `Poin kurang ${cost - points} lagi.` : `Need ${cost - points} more points.`);
      }
    };

    return (
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header Saldo */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-black text-gray-900 dark:text-white">{t('catalog')}</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-1">{t('catalog_desc')}</p>
          </div>
          <div className="bg-gradient-to-br from-green-100 to-green-50 dark:from-green-900/40 dark:to-green-900/20 p-4 px-6 rounded-2xl flex flex-col items-center border border-green-200 dark:border-green-800">
            <span className="text-sm font-bold text-green-800 dark:text-green-400">{t('balance')}</span>
            <div className="flex items-center space-x-1 mt-1">
              <Trophy size={20} className="text-yellow-500 dark:text-yellow-400" />
              <span className="text-3xl font-black text-green-600 dark:text-green-500">{points}</span>
            </div>
          </div>
        </div>

        {/* E-Wallet Section */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <Smartphone className="mr-2 text-green-500" size={20}/> {t('ewallet_title')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {eWallets.map(wallet => (
              <div key={wallet.id} className="bg-white dark:bg-gray-800 p-5 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm flex items-center justify-between hover:border-green-300 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className={`p-3 rounded-xl ${wallet.color}`}>
                    {wallet.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-sm">{wallet.title}</h4>
                    <p className="text-green-600 dark:text-green-400 font-bold text-sm">{wallet.cost} pts</p>
                  </div>
                </div>
                <button onClick={() => redeemReward(wallet.cost, wallet.title)}
                  className={`px-4 py-2 rounded-lg text-sm font-bold transition-all transform active:scale-95 ${points >= wallet.cost ? 'bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900/50 dark:text-green-400 dark:hover:bg-green-800/80' : 'bg-gray-100 text-gray-400 dark:bg-gray-700 dark:text-gray-500 cursor-not-allowed'}`}>
                  {points >= wallet.cost ? t('redeem_btn') : (lang === 'id' ? 'Kurang' : 'Lock')}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Physical Rewards */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <Gift className="mr-2 text-green-500" size={20}/> Vouchers & Items
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {rewardsList.map(reward => (
              <div key={reward.id} className="bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-all">
                <div className={`p-4 rounded-full mb-4 ${reward.color}`}>
                  {reward.icon}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">{reward.title}</h3>
                <p className="text-green-600 dark:text-green-400 font-extrabold mb-6 text-lg">{reward.cost} Pts</p>
                <button onClick={() => redeemReward(reward.cost, reward.title)}
                  className={`w-full py-3 rounded-xl font-bold transition-all shadow-sm transform active:scale-95 ${points >= reward.cost ? 'bg-gradient-to-r from-green-600 to-green-500 text-white hover:from-green-700 hover:to-green-600' : 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'}`}>
                  {points >= reward.cost ? t('redeem_btn') : t('insufficient')}
                </button>
              </div>
            ))}
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
        {/* Placeholder map layer for dark mode integration without altering iframe source */}
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
      <div className="mx-auto w-24 h-24 bg-gradient-to-tr from-green-200 to-green-100 dark:from-green-900 dark:to-green-800 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mb-4 shadow-inner border border-green-50 dark:border-green-700">
        <User size={40} />
      </div>
      <h2 className="text-2xl font-black text-gray-900 dark:text-white">Administrator</h2>
      <p className="text-gray-500 dark:text-gray-400 mb-8">admin@email.com</p>
      
      <div className="space-y-4 text-left border-t border-gray-100 dark:border-gray-700 pt-6 mt-6">
        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
          <span className="font-medium text-gray-700 dark:text-gray-300">{lang === 'id' ? 'Bahasa' : 'Language'}</span>
          <div className="flex space-x-2">
            <button onClick={() => setLang('id')} className={`px-3 py-1 rounded-md text-sm font-bold ${lang === 'id' ? 'bg-green-600 text-white' : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-400'}`}>ID</button>
            <button onClick={() => setLang('en')} className={`px-3 py-1 rounded-md text-sm font-bold ${lang === 'en' ? 'bg-green-600 text-white' : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-400'}`}>EN</button>
          </div>
        </div>
        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
          <span className="font-medium text-gray-700 dark:text-gray-300">{lang === 'id' ? 'Mode Gelap' : 'Dark Mode'}</span>
          <button 
            onClick={toggleTheme} 
            className={`w-14 h-7 flex items-center rounded-full p-1 transition-colors duration-300 ease-in-out focus:outline-none ${isDarkMode ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'}`}
          >
            <div className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${isDarkMode ? 'translate-x-7' : 'translate-x-0'}`}></div>
          </button>
        </div>
      </div>

      <button onClick={() => setIsLoggedIn(false)}
        className="mt-8 w-full px-8 py-3.5 bg-red-50 hover:bg-red-100 dark:bg-red-900/20 dark:hover:bg-red-900/40 text-red-600 dark:text-red-400 rounded-xl font-bold transition">
        {t('logout')}
      </button>
    </div>
  );

  const Navigation = () => {
    const navItems = [
      { id: 'home', label: t('menu_home'), icon: <Home size={24} /> },
      { id: 'map', label: t('menu_map'), icon: <MapPin size={24} /> },
      { id: 'scan', label: t('menu_scan'), icon: <QrCode size={24} />, isPrimary: true },
      { id: 'rewards', label: t('menu_rewards'), icon: <Trophy size={24} /> },
      { id: 'profile', label: t('menu_profile'), icon: <User size={24} /> },
    ];

    return (
      <>
        {/* Sidebar Desktop */}
        <aside className="hidden md:flex flex-col w-72 h-screen bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 fixed left-0 top-0 transition-colors">
          <div className="p-8 flex items-center space-x-3 mb-4">
            <div className="bg-gradient-to-br from-green-500 to-green-600 p-0.5 rounded-xl shadow-sm">
              <img src="src/assets/wasteless.png" width="80" height="80" />
            </div>
            <h1 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight">Wasteless</h1>
          </div>

          <nav className="flex-1 px-5 space-y-2">
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
            <button onClick={() => setIsLoggedIn(false)} className="w-full flex items-center justify-center space-x-2 px-4 py-3 text-red-500 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl font-bold transition-colors">
              <LogOut size={20} />
              <span>{t('logout')}</span>
            </button>
          </div>
        </aside>

        {/* Bottom Nav Mobile */}
        <div className="md:hidden fixed bottom-0 left-0 w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 px-6 py-2 flex justify-between items-center z-40 rounded-t-3xl shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] pb-safe transition-colors">
          {navItems.map((item) => {
            if (item.isPrimary) {
              return (
                <div key={item.id} className="relative -top-6">
                  <button onClick={() => setActiveTab(item.id)}
                    className={`p-4 rounded-full shadow-xl shadow-green-500/30 transition-transform transform active:scale-95 bg-gradient-to-br from-green-500 to-green-600 text-white border-4 border-gray-50 dark:border-gray-900`}>
                    {item.icon}
                  </button>
                </div>
              );
            }
            return (
              <button key={item.id} onClick={() => setActiveTab(item.id)}
                className={`flex flex-col items-center p-2 transition-colors ${activeTab === item.id ? 'text-green-600 dark:text-green-400' : 'text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300'}`}>
                {item.icon}
                <span className="text-[10px] mt-1 font-bold">{item.label}</span>
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
              <img src="src/assets/wasteless.png" width="50" height="50" size={22} />
              <span className="font-black text-gray-900 dark:text-white tracking-tight">Wasteless ID</span>
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
            {activeTab === 'profile' && <ProfileView />}
            {activeTab === 'scan' && (
              <div className="flex flex-col items-center justify-center h-[70vh] text-center">
                <div className="relative mb-8">
                  <div className="absolute inset-0 border-4 border-green-500/30 rounded-3xl animate-pulse"></div>
                  <div className="p-8 bg-green-50 dark:bg-green-900/20 rounded-3xl border border-green-200 dark:border-green-800/50">
                    <QrCode size={80} className="text-green-600 dark:text-green-400" />
                  </div>
                </div>
                <h3 className="font-black text-2xl text-gray-900 dark:text-white mb-2">{t('scan_qr')}</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-xs">{t('scan_desc')}</p>
                <button onClick={() => { setPoints(points + 10); showToast("+10 Pts!"); setActiveTab('home'); }}
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
        {isLoggedIn ? <DashboardLayout /> : <LoginPage />}
      </div>
    </div>
  );
}