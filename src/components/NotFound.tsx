import { useEffect, useState, useMemo } from 'react';
import { Home, ArrowLeft, Terminal, ShieldAlert, Timer, Search, Globe } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface MatrixChar {
  id: number;
  char: string;
  left: number;
  animationDuration: number;
  animationDelay: number;
  fontSize: number;
}

export default function NotFound() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(40);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const phrases = useMemo(() => [
    'يا ريس، الصفحة دي فص ملح ودابت!',
    'شكلك دخلت حارة سد في السيستم..',
    '404.. حتى الهاكرز مش عارفين هي فين!',
    'السيستم بيطردك.. هترجع الرئيسية حالا!',
    'يا برنس، السيرفر بيقولك مشفتهاش والله!'
  ], []);

  useEffect(() => {
    const duration = 40 * 1000; 
    const now = Date.now();
    let targetTime = localStorage.getItem('404_redirect_timestamp');

    if (!targetTime) {
      targetTime = (now + duration).toString();
      localStorage.setItem('404_redirect_timestamp', targetTime);
    }

    const calculateRemaining = () => {
      const remaining = Math.max(0, Math.floor((parseInt(targetTime!) - Date.now()) / 1000));
      setCountdown(remaining);
      
      if (remaining <= 0) {
        localStorage.removeItem('404_redirect_timestamp');
        navigate('/');
      }
    };

    calculateRemaining();
    const timerId = setInterval(calculateRemaining, 1000);
    return () => clearInterval(timerId);
  }, [navigate]);

  // 2. أنيميشن الكتابة
  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];
      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));
      setTypingSpeed(isDeleting ? 40 : 100);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, phrases]);

  // 3. خلفية الماتريكس
  const [matrixChars, setMatrixChars] = useState<MatrixChar[]>([]);
  useEffect(() => {
    const arabicChars = 'ابتثجحخدذرزسشصضطظعغفقكلمنهوي٠١٢٣٤٥٦٧٨٩';
    const count = window.innerWidth < 640 ? 35 : 85;
    const newMatrix = Array.from({ length: count }, (_, i) => ({
      id: i,
      char: arabicChars[Math.floor(Math.random() * arabicChars.length)],
      left: Math.random() * 100,
      animationDuration: 5 + Math.random() * 10,
      animationDelay: Math.random() * 5,
      fontSize: Math.floor(Math.random() * 10) + 12
    }));
    setMatrixChars(newMatrix);
  }, []);

  // دالة لتنظيف الـ Storage عند الضغط على الروابط يدوياً
  const clearRedirect = () => localStorage.removeItem('404_redirect_timestamp');

  return (
    <div className="min-h-screen bg-[#050505] text-emerald-500 relative overflow-hidden flex items-center justify-center py-10" dir="rtl">
      {/* Matrix Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        {matrixChars.map((char) => (
          <div key={char.id} className="absolute text-emerald-500/40 font-mono whitespace-nowrap leading-none"
            style={{
              left: `${char.left}%`,
              fontSize: `${char.fontSize}px`,
              animation: `matrix-fall ${char.animationDuration}s linear ${char.animationDelay}s infinite`,
              writingMode: 'vertical-rl'
            }}
          >
            {char.char}
          </div>
        ))}
      </div>

      <div className="relative z-10 w-full px-4 max-w-2xl mx-auto">
        <div className="bg-[#0a0a0a] border border-emerald-900/50 rounded-xl shadow-[0_0_50px_rgba(16,185,129,0.1)] overflow-hidden">
          
          <div className="bg-emerald-950/20 border-b border-emerald-900/30 px-4 py-3 flex items-center justify-between">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/50"></div>
            </div>
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-emerald-500/60 font-mono font-bold">
              <Terminal size={12} />
              ALFURQAN_SECURE_KERNEL
            </div>
          </div>

          <div className="p-6 sm:p-10 text-center">
            <h1 className="text-8xl sm:text-9xl font-black text-emerald-500 font-mono tracking-tighter custom-glitch mb-6" data-text="404">
              404
            </h1>

            <div className="mb-8 min-h-[40px]">
              <span className="text-xl sm:text-2xl font-bold text-white/90 font-mono">
                {text}
                <span className="inline-block w-2 h-6 bg-emerald-500 ml-1 animate-pulse align-middle"></span>
              </span>
            </div>

            {/* Status Logs */}
            <div className="bg-black/40 rounded-lg p-5 mb-8 font-mono text-sm text-right space-y-3 border border-emerald-900/20">
              <div className="flex items-start gap-2 text-red-400">
                <ShieldAlert size={16} className="shrink-0 mt-0.5" />
                <span>[ERROR] لم يتم العثور على المسار المطلوب.</span>
              </div>
              
              <div className="flex items-start gap-2 text-emerald-500/80">
                <Search size={16} className="shrink-0 mt-0.5" />
                <span>$ الحالة: جاري البحث في الأرشيف.. ملقيناش حاجة.</span>
              </div>

              <div className="flex items-start gap-2 text-blue-400/80">
                <Globe size={16} className="shrink-0 mt-0.5" />
                <span>$ المصدر: {window.location.host}</span>
              </div>

              <div className="pr-6 text-yellow-500 font-bold border-r-2 border-yellow-500/50 animate-pulse">
                $ نصيحة: متلفش ورايا كتير، ارجع للرئيسية أحسن.
              </div>
            </div>

            {/* Forced Countdown Progress */}
            <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-4 mb-8">
               <div className="flex items-center justify-between text-xs font-mono text-emerald-400 mb-2">
                  <span className="flex items-center gap-2">
                    <Timer size={14} className="animate-spin-slow" />
                    تصفية الجلسة إجبارياً
                  </span>
                  <span className="font-bold">{countdown}s</span>
               </div>
               <div className="w-full h-1 bg-emerald-900/30 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-emerald-500 transition-all duration-1000 ease-linear shadow-[0_0_10px_#10b981]"
                    style={{ width: `${(countdown / 40) * 100}%` }}
                  ></div>
               </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/" 
                onClick={clearRedirect}
                className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-black px-8 py-3 rounded-lg font-bold transition-all hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
              >
                <Home size={18} />
               إهرب بسرعة 
              </Link>
              <button 
                onClick={() => { clearRedirect(); window.history.back(); }}
                className="flex items-center justify-center gap-2 border border-emerald-800 hover:bg-emerald-900/20 text-emerald-500 px-8 py-3 rounded-lg font-bold transition-all"
              >
                <ArrowLeft size={18} />
                العودة للخلف
              </button>
            </div>
          </div>

          <div className="bg-emerald-950/10 px-6 py-2 border-t border-emerald-900/20 text-center text-[9px] font-mono text-emerald-500/30 tracking-[0.2em] uppercase">
             Session Lockdown Active // IP_LOGGED: TRUE
          </div>
        </div>
      </div>

      <style>{`
        @keyframes matrix-fall {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.8; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        .animate-spin-slow { animation: spin 3s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .custom-glitch {
          position: relative;
          text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75), -0.025em -0.05em 0 rgba(0, 255, 0, 0.75), 0.025em 0.05em 0 rgba(0, 255, 0, 0.75);
          animation: glitch 500ms infinite;
        }
        @keyframes glitch {
          0%, 14% { text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75), -0.05em -0.025em 0 rgba(0, 255, 0, 0.75); }
          15%, 49% { text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75), 0.025em 0.025em 0 rgba(0, 255, 0, 0.75); }
          50%, 99% { text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75), 0.05em 0 0 rgba(0, 255, 0, 0.75); }
          100% { text-shadow: -0.025em 0 0 rgba(255, 0, 0, 0.75), -0.025em -0.025em 0 rgba(0, 255, 0, 0.75); }
        }
      `}</style>
    </div>
  );
}