"use client";

import { useState } from "react";

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

function CopyToast({ message, show }: { message: string; show: boolean }) {
  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
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
      className="flex items-center gap-4 px-5 py-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-purple-500/40 transition-all duration-300 cursor-pointer group"
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
    <div className="rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-purple-500/40 transition-all duration-300 p-5 relative group">
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

      {/* Twinkling Stars */}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }
        .star {
          position: absolute;
          width: 3px;
          height: 3px;
          background: white;
          border-radius: 50%;
          pointer-events: none;
        }
      `}</style>
      {[
        { top: "5%", left: "10%", delay: "0s", dur: "3s" },
        { top: "8%", left: "25%", delay: "1.2s", dur: "2.5s" },
        { top: "3%", left: "45%", delay: "0.5s", dur: "4s" },
        { top: "12%", left: "65%", delay: "2s", dur: "3.5s" },
        { top: "6%", left: "80%", delay: "0.8s", dur: "2.8s" },
        { top: "15%", left: "90%", delay: "1.5s", dur: "3.2s" },
        { top: "18%", left: "15%", delay: "0.3s", dur: "4.2s" },
        { top: "22%", left: "55%", delay: "2.5s", dur: "3s" },
        { top: "10%", left: "35%", delay: "1.8s", dur: "2.2s" },
        { top: "25%", left: "75%", delay: "0.7s", dur: "3.8s" },
        { top: "2%", left: "58%", delay: "3s", dur: "2.6s" },
        { top: "20%", left: "5%", delay: "1s", dur: "3.4s" },
      ].map((s, i) => (
        <div
          key={i}
          className="star"
          style={{
            top: s.top,
            left: s.left,
            animation: `twinkle ${s.dur} ${s.delay} infinite ease-in-out`,
          }}
        />
      ))}

      {/* Mosque Silhouettes */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none opacity-[0.06]">
        <svg viewBox="0 0 1200 200" className="w-full" fill="white">
          <rect x="50" y="120" width="8" height="80" />
          <rect x="80" y="100" width="40" height="100" />
          <ellipse cx="100" cy="100" rx="20" ry="25" />
          <rect x="95" y="75" width="2" height="15" />
          <circle cx="96" cy="72" r="4" />
          <rect x="40" y="80" width="12" height="120" />
          <polygon points="34,80 52,80 46,55" />
          <rect x="44" y="48" width="2" height="10" />
          <circle cx="45" cy="46" r="3" />
          <rect x="1080" y="110" width="50" height="90" />
          <ellipse cx="1105" cy="110" rx="25" ry="30" />
          <rect x="1100" y="80" width="2" height="15" />
          <circle cx="1101" cy="77" r="4" />
          <rect x="1140" y="85" width="10" height="115" />
          <polygon points="1135,85 1155,85 1150,60" />
          <rect x="1144" y="52" width="2" height="10" />
          <circle cx="1145" cy="50" r="3" />
        </svg>
      </div>

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
        <p className="text-center text-zinc-600 text-xs pt-6">
          Made with 💜 to share the joy of Eid.
        </p>
      </div>

      {/* Copy Toast */}
      <CopyToast message={toast.message} show={toast.show} />
    </main>
  );
}
