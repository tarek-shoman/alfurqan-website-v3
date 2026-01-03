import { BookOpen, Star, ShieldCheck, GraduationCap, Mic2, Globe } from "lucide-react";

export default function QuranSchool() {
  const quranPrograms = [
    {
      icon: GraduationCap,
      title: "مسارات تحفيظ القرآن الكريم",
      description: "برامج تحفيظ تناسب جميع الأعمار (رجال - نساء - أطفال) بخطط زمنية محددة.",
      features: [
        "مسار الفائقين: حفظ مكثف (يومياً أو 4 أيام).",
        "مسار المتميزين: حفظ متوسط (3 أيام أسبوعياً).",
        "مسار الموظفين وربات البيوت: تخفيف الكم (يومان أسبوعياً).",
        "نظام الحلقة: متاح (فردي خاص) أو (مجموعات تنافسية).",
      ],
      duration: "من حصتين إلى 5 حصص أسبوعياً حسب الباقة.",
      priceEGP: "المصريين: من 300 ج إلى 900 ج شهرياً",
      priceUSD: "غير المصريين: من 20$ إلى 60$ شهرياً",
      note: "السعر يتحدد بناءً على عدد الحصص ونوع النظام (فردي/مجموعة).",
      color: "emerald",
    },
    {
      icon: Mic2,
      title: "تصحيح التلاوة والأداء القرآني",
      description: "جلسات متخصصة لضبط مخارج الحروف وصفاتها وتطبيق أحكام التجويد عملياً.",
      features: [
        "شرح تطبيقي لأحكام التجويد.",
        "تصحيح تلاوة من المصحف مباشرة.",
        "برنامج (سرد القرآن) للخاتميين لضبط المتشابهات.",
        "متاح للرجال والنساء.",
      ],
      duration: "حصتان أسبوعياً (30 دقيقة للفردي / ساعة للمجموعة).",
      priceEGP: "المصريين: 350 ج (مجموعة) - 500 ج (فردي)",
      priceUSD: "غير المصريين: 20$ (مجموعة) - 30$ (فردي)",
      note: "الاشتراك شهري.",
      color: "primary",
    },
    {
      icon: BookOpen,
      title: "تأسيس الأطفال (نور البيان)",
      description: "تعليم القراءة من المصحف للأطفال باستخدام منهج نور البيان وفتح المنان.",
      features: [
        "المستوى الأول: الحروف والحركات والمدود.",
        "المستوى الثاني: التنوين والشدات وأحكام التجويد.",
        "ختم جزء عم تلاوة.",
        "تأهيل الطفل لدخول حلقات التحفيظ.",
      ],
      duration: "دورة كاملة مدتها من 3 إلى 4 أشهر.",
      priceEGP: "المصريين: 500 ج (للمستوى الواحد) / 1200 ج (الدورة كاملة)",
      priceUSD: "غير المصريين: 25$ (للمستوى) / 50$ (الدورة كاملة)",
      note: "شامل الكتب والشهادة.",
      color: "emerald",
    },
    {
      icon: Star,
      title: "الإجازات والأسانيد المتصلة",
      description: "برنامج خاص للمتقنين للحصول على السند المتصل عن رسول الله ﷺ.",
      features: [
        "إجازة برواية حفص عن عاصم.",
        "إجازة برواية شعبة.",
        "إجازة في المتون (التحفة - الجزرية).",
        "يشترط إتقان الحفظ والتلاوة.",
      ],
      duration: "جلسة أسبوعية (ساعة) أو جلستان (نصف ساعة).",
      priceEGP: "المصريين: تبدأ من 150 ج (متون) وتصل لـ 800 ج (ختمة)",
      priceUSD: "غير المصريين: تبدأ من 10$ وتصل لـ 40$",
      note: "يتم تحديد الرسوم بدقة بعد مقابلة الشيخ/الشيخة.",
      color: "primary",
    },
    {
      icon: ShieldCheck,
      title: "الدراسة الشرعية التأسيسية",
      description: "دراسة (ما لا يسع المسلم جهله) في العقيدة والفقه والسيرة.",
      features: [
        "منهج مبسط يناسب العوام والمبتدئين.",
        "دراسة كتاب (فقه السنة) و (تفسير السعدي) وغيرها.",
        "لقاء أسبوعي مباشر.",
        "اختبارات شهرية.",
      ],
      duration: "محاضرة واحدة أسبوعياً.",
      priceEGP: "المصريين: 100 جنيهاً شهرياً",
      priceUSD: "غير المصريين: 10 دولار شهرياً",
      note: "متاح للرجال والنساء.",
      color: "emerald",
    }
  ];

  return (
    <section id="quran-school" className="py-16 px-4 bg-gray-50 dark:bg-dark-surface" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-800 dark:text-accent-500 mb-4">مدرسة القرآن الكريم</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-dark-text max-w-2xl mx-auto">
            منظومة تعليمية متكاملة (أونلاين) تخدم كتاب الله وسنة نبيه، تستهدف جميع الفئات (رجال - نساء - أطفال) بنظام مرن يراعي الفروق الفردية.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quranPrograms.map((program, index) => (
            <div key={index} className="bg-white dark:bg-dark-card rounded-2xl shadow-lg border border-gray-200 dark:border-primary-800 overflow-hidden hover:shadow-2xl transition-all hover:scale-105 active:scale-95 md:hover:scale-100 md:active:scale-100">
              {/* Header */}
              <div className={`p-6 ${program.color === 'emerald' ? 'bg-emerald-600' : 'bg-primary-700'} text-white`}>
                <program.icon className="w-10 h-10 bg-white/20 p-2 rounded-lg mb-4" />
                <h3 className="text-xl font-bold">{program.title}</h3>
              </div>
              
              {/* Body */}
              <div className="p-6">
                <p className="text-gray-600 dark:text-dark-text text-sm mb-6 min-h-[48px] leading-relaxed">
                  {program.description}
                </p>
                
                <h4 className="font-bold text-primary-800 dark:text-primary-400 text-sm mb-3">المميزات والنظام:</h4>
                <ul className="space-y-2 mb-6">
                  {program.features.map((feat, i) => (
                    <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-500 shrink-0"></span>
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* Pricing Section */}
                <div className="bg-gray-50 dark:bg-primary-900/10 p-4 rounded-xl border border-gray-100 dark:border-primary-800">
                  <div className="flex items-center gap-2 mb-3">
                    <Globe className="w-4 h-4 text-primary-600 dark:text-accent-500" />
                    <span className="font-bold text-sm text-gray-800 dark:text-white">نظام الاشتراك:</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">{program.priceEGP}</p>
                    <p className="text-sm font-semibold text-blue-700 dark:text-blue-400">{program.priceUSD}</p>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 border-t pt-2 border-gray-200 dark:border-gray-700">
                    * {program.note}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}