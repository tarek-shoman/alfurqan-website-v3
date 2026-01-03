import { BookOpen, Brain, Heart, Award, FileCheck } from "lucide-react";

export default function TrainingCourses() {
  const courses = [
    {
      icon: BookOpen,
      title: "إعداد معلمي نور البيان",
      description: "دورة مكثفة لتأهيل المعلمين والمعلمات لتدريس القراءة والكتابة ومنهج نور البيان.",
      features: [
        "مدة الدورة: 10 أيام متصلة.",
        "دراسة كتاب فتح المنان.",
        "تدريب عملي على طرق التدريس للأطفال.",
        "الحصول على شهادة معتمدة وإرسالها بالبريد.",
      ],
      price: "350 جنيهاً",
      details: "شاملة الدورة والشهادة والإرسال.",
      examOnly: "250 جنيهاً (للاختبار والشهادة فقط بدون حضور).",
      color: "emerald"
    },
    {
      icon: Award,
      title: "دورة أحكام التجويد (نظري)",
      description: "دورة للمبتدئين والمعلمين لدراسة أصول التجويد نظرياً وعملياً.",
      features: [
        "مدة الدورة: 10 أيام متصلة.",
        "شرح المخارج والصفات وأحكام النون والميم.",
        "تطبيقات عملية من المصحف.",
        "شهادة إتمام الدورة.",
      ],
      price: "300 جنيهاً",
      details: "شاملة الدورة والشهادة والإرسال.",
      examOnly: "200 جنيهاً (للاختبار والشهادة فقط).",
      color: "primary"
    },
    {
      icon: Brain,
      title: "دورة الحساب الذهني (Mental Math)",
      description: "تأهيل المدربين لتعليم الأطفال العمليات الحسابية السريعة وتنمية الذكاء.",
      features: [
        "مدة الدورة: 10 أيام متصلة.",
        "تعلم استخدام العداد (Abacus).",
        "طرق تدريس الجمع والطرح والضرب والقسمة.",
        "شهادة مدرب معتمد.",
      ],
      price: "400 جنيهاً",
      details: "شاملة الدورة والشهادة والإرسال.",
      examOnly: "250 جنيهاً (للاختبار والشهادة فقط).",
      color: "emerald"
    },
    {
      icon: Heart,
      title: "التربية كما يجب أن تكون",
      description: "دورة تربوية للأمهات والمعلمات لفهم سيكولوجية الطفل وحل المشكلات.",
      features: [
        "مدة الدورة: 11 يوماً متصلة.",
        "التعامل مع العناد، الكذب، والخوف عند الأطفال.",
        "غرس القيم الإيمانية.",
        "شهادة حضور.",
      ],
      price: "300 جنيهاً",
      details: "شاملة الشهادة.",
      examOnly: "خصم خاص للمجموعات والاشتراك العائلي.",
      color: "primary"
    },
    {
      icon: FileCheck,
      title: "دورة العلوم الشرعية (المكثفة)",
      description: "دورة مضغوطة في شهر واحد لدراسة أساسيات الدين.",
      features: [
        "المدة: شهر (محاضرتان أسبوعياً).",
        "عقيدة - فقه - سيرة.",
        "اختبار نهائي.",
        "شهادة إتمام.",
      ],
      price: "300 جنيهاً",
      details: "شاملة المحاضرات والشهادة.",
      examOnly: "متاح إرسال الشهادة لجميع المحافظات.",
      color: "emerald"
    }
  ];

  return (
    <section id="training" className="py-16 px-4 bg-white  dark:bg-dark-surface" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-800 dark:text-accent-500 mb-4">الدورات التدريبية وإعداد المعلمين</h2>
          <div className="w-24 h-1 bg-accent-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-dark-text">
            دورات مهنية مكثفة تستهدف المعلمين والمعلمات وأولياء الأمور لرفع الكفاءة التربوية والتعليمية.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div key={index} className="group relative bg-gray-50 dark:bg-dark-card rounded-2xl overflow-hidden hover:shadow-xl transition-all border border-gray-200 dark:border-gray-800 hover:scale-105 active:scale-95 md:hover:scale-100 md:active:scale-100">
              <div className={`h-2 w-full ${course.color === 'emerald' ? 'bg-emerald-500' : 'bg-primary-600'}`}></div>
              
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2.5 rounded-lg ${course.color === 'emerald' ? 'bg-emerald-100 text-emerald-700' : 'bg-primary-100 text-primary-700'}`}>
                    <course.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white">{course.title}</h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 h-10 leading-snug">{course.description}</p>
                
                <div className="space-y-2 mb-6 border-t border-gray-200 dark:border-gray-700 pt-4">
                  {course.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-gray-700 dark:text-dark-text">
                      <span className="text-accent-500 font-bold">•</span>
                      {feat}
                    </div>
                  ))}
                </div>

                <div className={`rounded-xl p-4 ${course.color === 'emerald' ? 'bg-emerald-50' : 'bg-primary-50'} dark:bg-dark-surface`}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-gray-600 dark:text-gray-300">سعر الدورة:</span>
                    <span className={`text-xl font-bold ${course.color === 'emerald' ? 'text-emerald-700' : 'text-primary-700'}`}>{course.price}</span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{course.details}</p>
                  
                  {course.examOnly && (
                    <div className="pt-2 border-t border-gray-200 dark:border-gray-700 mt-2">
                       <p className="text-xs font-medium text-gray-600 dark:text-gray-400">
                         {course.examOnly}
                       </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}