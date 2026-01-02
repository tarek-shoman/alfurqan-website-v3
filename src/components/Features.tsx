import { CheckCircle2, Shield, Clock, Users, Heart, Briefcase , Award , BookOpenCheck, Baby} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Features() {  

  function buildWhatsAppLink(jobTitle: string) {
    const WHATSAPP_NUMBER = '201112292787';
    const base = `https://wa.me/${WHATSAPP_NUMBER}`;
    const message = `السلام عليكم، أرغب في التقديم على وظيفة: ${jobTitle}.\n\n(تذكير من الموقع: برجاء كتابة اسم الوظيفة في رسالة الواتس).`;
    return `${base}?text=${encodeURIComponent(message)}`;
}
  const features = [
    {
      icon: Shield,
      title: 'بيئة آمنة',
      description: 'نوفر بيئة آمنة ونظيفة مع مراقبة مستمرة لضمان سلامة أطفالكم'
    },
    {
      icon: Users,
      title: 'فصول صغيرة',
      description: 'عدد طلاب محدود في كل فصل لضمان الاهتمام الفردي بكل طالب'
    },
    {
      icon: Clock,
      title: 'مرونة في الأوقات',
      description: 'فترات صباحية تناسب جميع أولياء الأمور'
    },
    {
      icon: Heart,
      title: 'رعاية شاملة',
      description: 'اهتمام بالجوانب التربوية والنفسية والصحية للطفل'
    },
    {
      icon: Award,
      title: 'معلمون مؤهلون',
      description: 'كادر تعليمي متخصص وحاصل على شهادات معتمدة'
    },
    {
      icon: CheckCircle2,
      title: 'متابعة دورية',
      description: 'تقارير شهرية لأولياء الأمور عن تطور الطفل'
    }
  ];
const departments = [
    {
      title: 'مدرسة القرآن الكريم',
      description: 'تعليم قراءة القرآن الكريم للكبار والصغار نساء ورجال ، مع ضبط التلاوة والأحكام، في حلقات مرنة (فردية أو جماعية) تناسب جميع الأوقات.',
      icon: BookOpenCheck,
      borderColorClass: 'border-emerald-500 dark:border-accent-500',
      iconBgClass: 'bg-emerald-100 dark:bg-accent-100',
      iconColorClass: 'text-emerald-600 dark:text-accent-600',
      whatsappMsg: 'دورة نور البيان التأسيسية'
    },
    {
      title: 'حضانة اونلاين',
      description: 'تأسيس متكامل يشمل: القرآن، اللغة العربية، الإنجليزية، والحساب (العادي والذهني)، مع التركيز على تقويم السلوك والآداب بأسلوب تفاعلي.',
      icon: Baby,
      borderColorClass: 'border-accent-500 dark:border-accent-400',
      iconBgClass: 'bg-accent-100',
      iconColorClass: 'text-accent-600',
      whatsappMsg: 'دورة تحفيظ القرآن الكريم'
    },
    {
      title: 'الدورات التدريبية',
      description: "دورات مهنية بشهادات معتمدة في: طرق تدريس 'فتح البيان'، أحكام التجويد، الحساب الذهني، والعلوم الشرعية، لتأهيل المعلمين لسوق العمل.",
      icon: Award,
      borderColorClass: 'border-teal-500 dark:border-primary-500',
      iconBgClass: 'bg-teal-100 dark:bg-accent-100',
      iconColorClass: 'text-teal-600 dark:text-accent-600',
      whatsappMsg: 'دورة التلاوة المجوَّدة'
    },
    {
      title: 'الوظائف المتاحة',
      description: 'مطلوب للعمل أونلاين: معلمو قرآن، معلمات رياض أطفال، ومدربون بشرط الإتقان والخبرة واجتياز المقابلة انضم لفريقنا المتميز',
      icon: Briefcase,
      borderColorClass: 'border-amber-500 dark:border-primary-700',
      iconBgClass: 'bg-amber-100 dark:bg-accent-100',
      iconColorClass: 'text-amber-600 dark:text-accent-600',
      whatsappMsg: 'دورة التربية الإيمانية والسلوكية'
    }
  ];

  return (
<section className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-tr from-cream-50 to-cream-100 dark:from-dark-surface dark:to-dark-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-accent-500 mb-4">
            لماذا أكاديمية الفرقان؟
          </h2>
          <div className="w-24 h-1 bg-emerald-500 dark:bg-accent-500 mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-gray-600 dark:text-dark-text max-w-3xl mx-auto">
            نتميز بمجموعة من المزايا التي تجعلنا الخيار الأفضل لتعليم وتربية أطفالكم
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-dark-card border-2 border-cream-400 dark:border-primary-700 p-6 sm:p-8 rounded-2xl hover:border-emerald-300 dark:hover:border-accent-600 hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-100 dark:bg-accent-100 rounded-bl-full rounded-tr-[110rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 dark:from-accent-500 dark:to-accent-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-accent-400 mb-3 text-right cursor-default">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-dark-text text-right leading-relaxed cursor-default">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-accent-500 mb-4">
            الأقسام
          </h2>
          <div className="w-24 h-1 bg-emerald-500 dark:bg-accent-500 mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-gray-600 dark:text-dark-text max-w-3xl mx-auto">
            يوجد لدينا 4 أقسام وهي
          </p>
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-accent-500 mb-4">
            تواصل معنا
          </h2>
          <div className="w-24 h-1 bg-emerald-500 dark:bg-accent-500 mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-gray-600 dark:text-dark-text max-w-3xl mx-auto">
            هل لديك أي استفسار؟ لا تتردد في التواصل معنا لأي استفسار أو انضمام لأكاديمية الفرقان
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/contact"
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/50"
            >
              تواصل معنا الآن
            </Link>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {departments.map((dept, index) => (
            <div
              key={index}
              className={`bg-white/90 dark:bg-dark-card/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 flex flex-col items-end text-right border-t-4 ${dept.borderColorClass}`}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${dept.iconBgClass}`}>
                <dept.icon className={`w-6 h-6 ${dept.iconColorClass}`} />
              </div>
              <h3 className="font-bold text-lg text-gray-900 dark:text-accent-400 mb-2">
                {dept.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-dark-text mb-4">
                {dept.description}
              </p>
              <a
                href={buildWhatsAppLink(dept.whatsappMsg)}
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-semibold bg-emerald-600 dark:bg-accent-600 text-white hover:bg-emerald-700 dark:hover:bg-accent-700 transition-colors mt-auto"
              >
                تواصل معنا الآن
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
