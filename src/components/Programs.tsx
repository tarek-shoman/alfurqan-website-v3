import { BookOpen, Brain, Star, ShieldCheck, Heart } from "lucide-react";

export default function Programs() {
  // الدورات التدريبية (تم تحديثها بناءً على الصورة المرفقة)
  const trainingCourses = [
    {
      icon: BookOpen,
      title: "دورة نور البيان وفتح المنان لتعليم لغة القرآن",
      description: "دورة شاملة لتعلم طرق تعليم القراءة والكتابة والقرآن للأطفال والمبتدئين.",
      features: [
        "مدة الدورة: 10 أيام متصلة.",
        "شاملة الشهادة والإرسال بالبريد.",
        "دورة مسجلة مع موعد لقاء أول محاضرة ولقاءات مراجعة مباشرة.",
        "الحصول على الشهادة متاح لمن يحضر الاختبار فقط.",
      ],
      duration: "10 أيام متصلة (أونلاين).",
      sacondDuration: "لقاءات مراجعة مباشرة ومتابعة دورية.",
      price: "سعر الدورة: 350 جنيهاً (شاملة الشهادة والإرسال).",
      secondPrice: "سعر الاختبار والشهادة فقط: 250 جنيهاً.",
      color: "emerald",
      ageRange: "للمعلمين والمعلمات",
    },
    {
      icon: Star,
      title: "دورة أحكام التجويد",
      description: "إتقان أحكام التجويد النظرية والعملية مع شرح مبسط للمتون.",
      features: [
        "مدة الدورة: 10 أيام متصلة.",
        "شاملة الشهادة والإرسال بالبريد.",
        "توضيح مخارج الحروف وصفاتها بشكل دقيق.",
        "مناقشات مباشرة لتصحيح التلاوة.",
      ],
      duration: "10 أيام متصلة.",
      sacondDuration: "ساعة ونصف لكل لقاء.",
      price: "سعر الدورة: 300 جنيهاً (شاملة الشهادة والإرسال).",
      secondPrice: "سعر الاختبار والشهادة فقط: 200 جنيهاً.",
      color: "primary",
      ageRange: "للمعلمين والمتميزين",
    },
    {
      icon: Brain,
      title: "دورة الحساب الذهني",
      description: "تطوير مهارات العمليات الحسابية السريعة للأطفال والمدربين.",
      features: [
        "مدة الدورة: 10 أيام متصلة.",
        "شاملة الشهادة والإرسال بالبريد.",
        "تعلم استراتيجيات الجمع والطرح والضرب السريع.",
        "تأهيل لتصبح مدرب حساب ذهني معتمد.",
      ],
      duration: "10 أيام متصلة.",
      sacondDuration: "تدريبات عملية مكثفة.",
      price: "سعر الدورة: 400 جنيهاً (شاملة الشهادة والإرسال).",
      secondPrice: "سعر الاختبار والشهادة فقط: 250 جنيهاً.",
      color: "emerald",
      ageRange: "مدربين وأطفال",
    },
    {
      icon: Heart,
      title: "دورة التربية كما يجب أن تكون",
      description: "دورة تربوية متخصصة للأمهات والمعلمين لفهم سيكولوجية الطفل.",
      features: [
        "مدة الدورة: 11 يوم متصلة.",
        "دراسة الأساليب التربوية النبوية والحديثة.",
        "حل المشكلات السلوكية الشائعة عند الأطفال.",
        "شهادة معتمدة من الأكاديمية بنهاية الدورة.",
      ],
      duration: "11 يوم متصلة.",
      sacondDuration: "محاضرات تفاعلية.",
      price: "سعر الدورة: 300 جنيهاً (شاملة الشهادة).",
      secondPrice: "خصم خاص للمجموعات.",
      color: "primary",
      ageRange: "أولياء أمور ومعلمين",
    },
    {
      icon: ShieldCheck,
      title: "دورة العلوم الشرعية (عقيدة - فقه - سيرة)",
      description: "تأصيل شرعي للمبتدئين في أهم العلوم التي لا يسع المسلم جهلها.",
      features: [
        "مدة الدورة: شهر كامل.",
        "دراسة مبسطة في العقيدة والفقه والسيرة النبوية.",
        "اختبارات أسبوعية لتقييم الاستيعاب.",
        "شهادة إتمام الدورة بالبريد.",
      ],
      duration: "مدة الدورة: شهر.",
      sacondDuration: "محاضرتان أسبوعياً.",
      price: "سعر الدورة: 300 جنيهاً (شاملة الشهادة).",
      secondPrice: "إرسال الشهادة متاح لجميع المحافظات.",
      color: "emerald",
      ageRange: "عام",
    }
  ];

  return (
    <section id="programs" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cream-50 to-cream-100 dark:from-dark-surface dark:to-dark-card" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
          {trainingCourses.map((course, index) => (
            <div key={index} className="bg-white dark:bg-dark-card rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-200 dark:border-primary-700">
              <div className={`bg-gradient-to-br ${course.color === 'emerald' ? 'from-emerald-500 to-emerald-600' : 'from-primary-600 to-primary-700'} dark:from-accent-500 dark:to-accent-600 p-6 sm:p-8`}>
                <div className="flex justify-between items-start mb-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <course.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium">
                    {course.ageRange}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 text-right">{course.title}</h3>
                <p className="text-white/90 text-right leading-relaxed">{course.description}</p>
              </div>

              <div className="p-6 sm:p-8">
                <h4 className="font-bold text-gray-900 dark:text-accent-400 mb-4 text-right text-lg">مميزات الدورة:</h4>
                <ul className="space-y-3">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-right">
                      <div className={`w-2 h-2 rounded-full mt-2 ${course.color === 'emerald' ? 'bg-emerald-500' : 'bg-primary-500'} dark:bg-accent-500 flex-shrink-0`}></div>
                      <span className="text-gray-700 dark:text-dark-text text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <h6 className="font-bold text-gray-900 dark:text-accent-400 mb-2 text-right mt-6">التكلفة:</h6>
                <div className="space-y-1">
                  <p className="text-gray-700 dark:text-dark-text text-sm text-right font-medium">{course.price}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs text-right italic">{course.secondPrice}</p>
                </div>

                <h6 className="font-bold text-gray-900 dark:text-accent-400 mb-2 text-right mt-6">المواعيد والنظام:</h6>
                <ul className="space-y-1">
                  <li className="text-gray-700 dark:text-dark-text text-sm text-right">• {course.duration}</li>
                  <li className="text-gray-700 dark:text-dark-text text-sm text-right">• {course.sacondDuration}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}