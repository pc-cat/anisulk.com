"use client";

import { useState, useMemo, useEffect } from "react";

interface BankAccount {
  name: string;
  accNo: string;
  holderName: string;
  branch: string;
  icon: string;
  color: string;
}

interface PaymentMethod {
  name: string;
  number: string;
  icon: string;
  color: string;
}

const mobileBanking: PaymentMethod[] = [
  { name: "bKash", number: "01827887541", icon: "b", color: "bg-pink-600" },
  { name: "Nagad", number: "01332123503", icon: "N", color: "bg-orange-500" },
];

const eWallet: PaymentMethod[] = [
  { name: "Touch 'n Go", number: "+60177176337", icon: "T", color: "bg-blue-500" },
  { name: "BigPay", number: "+60143804750", icon: "B", color: "bg-red-500" },
];

const bankAccounts: BankAccount[] = [
  {
    name: "Maybank",
    accNo: "1581 1850 1835",
    holderName: "Anisul Kazi Moyeen",
    branch: "Cyberjaya, Malaysia",
    icon: "M",
    color: "bg-yellow-500",
  },
  {
    name: "Sonali Bank PLC",
    accNo: "10058 01004212",
    holderName: "Anisul",
    branch: "Chattogram Cantonment Branch",
    icon: "S",
    color: "bg-emerald-600",
  },
];

const international: PaymentMethod[] = [
  { name: "PayPal", number: "helloanisul@gmail.com", icon: "P", color: "bg-blue-600" },
  { name: "Wise", number: "@kazimoyeena", icon: "W", color: "bg-green-500" },
];

function StarsBackground({ count = 40 }: { count?: number }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stars = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 45}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
      dur: `${2 + Math.random() * 3}s`,
      scale: 0.5 + Math.random(),
    }));
  }, [count]);

  if (!mounted) return null;

  return (
    <>
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 1; }
        }
        .star {
          position: absolute;
          background: white;
          border-radius: 50%;
          pointer-events: none;
        }
      `}</style>
      {stars.map((s) => (
        <div
          key={s.id}
          className="star"
          style={{
            top: s.top,
            left: s.left,
            width: `${2 * s.scale}px`,
            height: `${2 * s.scale}px`,
            animation: `twinkle ${s.dur} ${s.delay} infinite ease-in-out`
          }}
        />
      ))}
    </>
  );
}

function MosqueSilhouettes() {
  return (
    <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-0">
      <svg viewBox="0 -20 1400 320" className="w-full h-auto drop-shadow-2xl" preserveAspectRatio="xMidYMax meet">
        <defs>
          <linearGradient id="mosque-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3b0764" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#000000" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="mosque-back" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2e1065" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {/* Background Layer (fainter silhouette for depth/parallax) */}
        <g fill="url(#mosque-back)">
          {/* Large backdrop dome */}
          <path d="M 400 300 C 350 150 500 80 700 30 C 900 80 1050 150 1000 300 Z" />
          {/* Backdrop minarets */}
          <rect x="300" y="80" width="10" height="220" />
          <polygon points="295,80 315,80 305,30" />
          <rect x="1090" y="80" width="10" height="220" />
          <polygon points="1085,80 1105,80 1095,30" />
        </g>

        {/* Foreground Layer (main intricate structures) */}
        <g fill="url(#mosque-grad)">
          {/* Main Domes */}
          <path d="M 620 280 C 580 170 660 100 700 60 C 740 100 820 170 780 280 Z" />
          <path d="M 520 280 C 490 220 550 160 580 120 C 610 160 670 220 640 280 Z" />
          <path d="M 760 280 C 730 220 790 160 820 120 C 850 160 910 220 880 280 Z" />

          {/* Central Dome Spire */}
          <rect x="698" y="30" width="4" height="30" />
          <circle cx="700" cy="25" r="5" />
          <path d="M700,18 A 6,6 0 1,1 700,6 A 8,8 0 1,0 700,18 Z" />

          {/* Side Dome Spires */}
          <rect x="578" y="100" width="4" height="20" />
          <circle cx="580" cy="98" r="3" />
          <path d="M580,92 A 4,4 0 1,1 580,84 A 5,5 0 1,0 580,92 Z" />
          <rect x="818" y="100" width="4" height="20" />
          <circle cx="820" cy="98" r="3" />
          <path d="M820,92 A 4,4 0 1,1 820,84 A 5,5 0 1,0 820,92 Z" />

          {/* Left Minaret */}
          <rect x="440" y="60" width="20" height="220" />
          <path d="M435 180 L465 180 L465 190 L440 190 Z" />
          <path d="M435 110 L465 110 L465 120 L440 120 Z" />
          <polygon points="435,60 465,60 450,10" />
          <rect x="449" y="0" width="2" height="10" />
          <path d="M450,-2 A 3,3 0 1,1 450,-8 A 4,4 0 1,0 450,-2 Z" />

          {/* Right Minaret */}
          <rect x="940" y="60" width="20" height="220" />
          <path d="M935 180 L965 180 L965 190 L940 190 Z" />
          <path d="M935 110 L965 110 L965 120 L940 120 Z" />
          <polygon points="935,60 965,60 950,10" />
          <rect x="949" y="0" width="2" height="10" />
          <path d="M950,-2 A 3,3 0 1,1 950,-8 A 4,4 0 1,0 950,-2 Z" />

          {/* Left Outer Building */}
          <path d="M 180 280 C 160 220 220 180 250 140 C 280 180 340 220 320 280 Z" />
          <rect x="142" y="100" width="16" height="180" />
          <polygon points="138,100 162,100 150,50" />
          <rect x="149" y="40" width="2" height="10" />
          <path d="M150,38 A 3,3 0 1,1 150,32 A 4,4 0 1,0 150,38 Z" />
          <path d="M138 160 L162 160 L162 165 L142 165 Z" />

          {/* Right Outer Building */}
          <path d="M 1080 280 C 1060 220 1120 180 1150 140 C 1180 180 1240 220 1220 280 Z" />
          <rect x="1242" y="100" width="16" height="180" />
          <polygon points="1238,100 1262,100 1250,50" />
          <rect x="1249" y="40" width="2" height="10" />
          <path d="M1250,38 A 3,3 0 1,1 1250,32 A 4,4 0 1,0 1250,38 Z" />
          <path d="M1238 160 L1262 160 L1262 165 L1242 165 Z" />

          {/* Ground Base */}
          <rect x="0" y="260" width="1400" height="40" />
          <rect x="440" y="240" width="520" height="20" />
        </g>


      </svg>
    </div>
  );
}

function CopyToast({ message, show }: { message: string; show: boolean }) {
  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
    >
      <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-green-600 text-white text-sm font-medium shadow-lg shadow-green-900/40">
        <span>✅</span>
        <span>{message}</span>
      </div>
    </div>
  );
}

function CopyCard({
  method,
  onCopy,
}: {
  method: PaymentMethod;
  onCopy: (msg: string) => void;
}) {
  const handleCopy = () => {
    navigator.clipboard.writeText(method.number);
    onCopy(`Copied ${method.name}: ${method.number}`);
  };

  return (
    <div
      onClick={handleCopy}
      className="flex items-center gap-4 px-5 py-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-purple-500/40 hover:bg-zinc-800/90 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-900/20 active:scale-[0.98] transition-all duration-300 cursor-pointer group"
    >
      <div
        className={`w-10 h-10 ${method.color} rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0`}
      >
        {method.icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-zinc-300">{method.name}</p>
        <p className="text-purple-400 text-sm font-mono truncate">{method.number}</p>
      </div>
      <span className="shrink-0 text-xs px-3 py-1.5 rounded-full bg-purple-600/20 border border-purple-500/30 text-purple-300 group-hover:bg-purple-600/40 group-hover:text-white transition-all duration-200">
        📋 Copy
      </span>
    </div>
  );
}

function BankCard({
  account,
  onCopy,
}: {
  account: BankAccount;
  onCopy: (msg: string) => void;
}) {
  const handleCopy = () => {
    navigator.clipboard.writeText(account.accNo);
    onCopy(`Copied ${account.name} Account No: ${account.accNo}`);
  };

  return (
    <div
      onClick={handleCopy}
      className="rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-purple-500/40 hover:bg-zinc-800/90 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-900/20 active:scale-[0.98] transition-all duration-300 p-5 relative cursor-pointer group"
    >
      {/* Header row */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 ${account.color} rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0`}
          >
            {account.icon}
          </div>
          <h3 className="text-base font-bold text-white">{account.name}</h3>
        </div>
        <button
          onClick={handleCopy}
          className="text-xs px-3 py-1.5 rounded-full bg-purple-600/20 border border-purple-500/30 text-purple-300 hover:bg-purple-600/40 hover:text-white transition-all duration-200 cursor-pointer"
        >
          📋 Copy Acc No
        </button>
      </div>

      {/* Details */}
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-zinc-500">Acc No:</span>
          <span className="text-purple-400 font-mono font-semibold">{account.accNo}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-zinc-500">Name:</span>
          <span className="text-zinc-200 font-semibold text-right">{account.holderName}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-zinc-500">Branch:</span>
          <span className="text-zinc-200 font-semibold text-right">{account.branch}</span>
        </div>
      </div>
    </div>
  );
}

export default function SalamiPage() {
  const [toast, setToast] = useState({ show: false, message: "" });

  const showToast = (message: string) => {
    setToast({ show: true, message });
    setTimeout(() => setToast({ show: false, message: "" }), 2500);
  };

  return (
    <main
      className="min-h-screen text-white flex flex-col items-center px-6 py-16 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #1a0a2e 0%, #0d0015 40%, #000000 100%)",
      }}
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[30%] right-0 w-[300px] h-[300px] bg-fuchsia-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-0 w-[250px] h-[250px] bg-purple-700/10 rounded-full blur-[80px] pointer-events-none" />

      <StarsBackground count={50} />
      <MosqueSilhouettes />

      {/* Greeting Header */}
      <div className="text-center mb-12 mt-8 relative z-10">
        <p className="text-5xl mb-4">🌙</p>
        <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-black tracking-tight leading-none">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-purple-500">
            Eid Mubarak!
          </span>
        </h1>
        <p className="text-zinc-400 mt-4 text-lg">
          May this Eid bring joy, happiness, and lots of Salami! ✨
        </p>
        <div className="mt-6 inline-block px-6 py-3 rounded-full bg-zinc-900/80 border border-zinc-700">
          <span className="text-zinc-400 text-sm">
            Share the joy of Salami with{" "}
          </span>
          <span className="text-white font-bold text-sm">
            Kazi Moyeen Anisul
          </span>
        </div>
      </div>

      {/* Payment Sections */}
      <div className="w-full max-w-2xl space-y-10 relative z-10">
        {/* Mobile Banking */}
        <section>
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
            <span>📱</span> Mobile Banking (Send Money)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {mobileBanking.map((m) => (
              <CopyCard key={m.name} method={m} onCopy={showToast} />
            ))}
          </div>
        </section>

        {/* E-Wallet */}
        <section>
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
            <span>👛</span> E-Wallet
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {eWallet.map((m) => (
              <CopyCard key={m.name} method={m} onCopy={showToast} />
            ))}
          </div>
        </section>

        {/* Bank Transfer */}
        <section>
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
            <span>🏦</span> Bank Transfer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {bankAccounts.map((m) => (
              <BankCard key={m.name} account={m} onCopy={showToast} />
            ))}
          </div>
        </section>

        {/* International */}
        <section>
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
            <span>🌐</span> International
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {international.map((m) => (
              <CopyCard key={m.name} method={m} onCopy={showToast} />
            ))}
          </div>
        </section>

        {/* Footer */}

      </div>

      {/* Copy Toast */}
      <CopyToast message={toast.message} show={toast.show} />
    </main>
  );
}
