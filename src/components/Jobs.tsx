import { Briefcase, MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '201112292787'; 

const jobs = [
  {
    id: 'quran-teacher',
    title: 'معلم/ـة قرآن كريم',
    type: 'أجرة الساعة: 60 - 150 ج',
    description: 'تحفيظ وتعليم القرآن الكريم أونلاين، مع ضرورة الإلمام بأحكام التجويد والقرص والأسانيد.',
    details: [
      'اجتياز المقابلة (سماع القراءة + أسئلة في أحكام الطهارة و الصلاة, اسئلة في العقيدة والسيرة)',
      'شهادة إتمام ختم القرآن الكريم',
      'شهادة إتمام دورة فتح المنان لتعليم لغة القرآن من الأكادمية',
      'امتلاك جهاز كمبيوتر/لاب توب وإنترنت قوي',
      'شهادة إتمام دراسة أحكام التجويد (التحفة أو الجزرية)'
    ],
  },
  {
    id: 'kindergarten-teacher',
    title: 'معلمة حضانة أونلاين',
    type: 'أجرة الساعة: 60 - 150 ج',
    description: 'تدريس المناهج التعليمية والتربوية للأطفال في مرحلة الحضانة عبر الإنترنت.',
    details: [
      'اجتياز المقابلة الشخصية',
      'شهادة إتمام دورة فتح المنان لتعليم لغة القرآن من الأكادمية',
      'شهادة إتمام كيفية تدريس دورة فتح المنان للأطفال من الأكاديمية',
      'امتلاك جهاز كمبيوتر/لاب توب واتصال إنترنت مستقر'
    ],
  },
  {
    id: 'mental-math-trainer',
    title: 'مدرب/ـة حساب ذهني',
    type: 'أجرة الساعة: 100 - 300 ج',
    description: 'تدريس دورات الحساب الذهني وتطوير المهارات العقلية للطلاب.',
    details: [
      'اجتياز المقابلة الفنية',
      'الحصول على كارنيه مدرب معتمد من أكاديمية الفرقان في المادة',
      'امتلاك جهاز كمبيوتر/لاب توب وإنترنت قوي'
    ],
  },
{
    id: 'fath-al-mannan-trainer',
    title: 'مدرب/ـة فتح المنان لتعليم لغة القرآن',
    type: 'أجرة الساعة  : 100 - 300 ج',
    description: 'تقديم دورات متخصصة في منهج "فتح المنان" لتمكين الطلاب من إتقان لغة القرآن.',
    details: [
      'اجتياز المقابلة الفنية والتمكن من شرح أصول منهج فتح المنان',
      'الحصول على كارنيه مدرب معتمد من أكاديمية الفرقان في المادة',
      'امتلاك جهاز كمبيوتر/لاب توب وسرعة إنترنت تدعم التدريس أونلاين بوضوح'
    ],
  },
  {
    id: 'ten-readings-teacher',
    title: 'معلم/ـة القراءات العشر',
    type: 'أجرة الساعة: 100 - 300 ج',
    description: 'تعليم القرآن الكريم بالقراءات العشر (الصغرى والكبرى) وإجازة الطلاب بالسند المتصل.',
    details: [
      'اجتياز المقابلة الفنية',
      'حاصل على إجازة بالسند المتصل في القراءات العشر (الصغرى أو الكبرى)',
      'شهادة إتمام دورة فتح المنان لتعليم لغة القرآن من الأكاديمية'
    ],
  },
];

function buildWhatsAppLink(jobTitle: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  const message = `السلام عليكم، أرغب في التقديم على وظيفة: ${jobTitle}.\n\n(تذكير من الموقع: برجاء كتابة اسم الوظيفة في رسالة الواتس).`;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export default function Jobs() {
  return (
    <section
      dir='rtl'
      id="jobs"
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cream-50 to-cream-100 dark:from-dark-surface dark:to-dark-card"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-accent-500 mb-4">
            الوظائف المتاحة
          </h2>
          <div className="w-24 h-1 bg-emerald-500 dark:bg-accent-500 mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-gray-600 dark:text-dark-text max-w-3xl mx-auto leading-relaxed">
            يمكنكم التقديم على الوظائف المتاحة عبر واتساب مباشرة، مع مراعاة كتابة اسم الوظيفة في رسالة التقديم.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="group bg-white dark:bg-dark-card rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 text-right border border-gray-200 dark:border-primary-700"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 flex-row-reverse">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 dark:from-accent-500 dark:to-accent-600 flex items-center justify-center text-white">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-accent-400 text-lg">{job.title}</h3>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-emerald-50 dark:bg-primary-900/20 text-emerald-700 dark:text-primary-400 font-semibold">
                    {job.type}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-dark-text mb-4 text-sm leading-relaxed">{job.description}</p>
                <ol className="list-decimal list-inside text-gray-700 dark:text-dark-text text-sm space-y-1 pr-2">
                  {job.details.map((item, idx) => (
                    <li  key={idx}>{item}</li>
                  ))}
                </ol>
              </div>

              <div className="mt-6 space-y-2">
                <a
                  href={buildWhatsAppLink(job.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 dark:bg-accent-600 text-white px-4 py-2.5 rounded-xl font-semibold text-sm hover:bg-emerald-700 dark:hover:bg-accent-700 transition-all duration-300 shadow-md hover:shadow-xl"
                >
                  <span>تقديم عبر واتساب</span>
                  <MessageCircle className="w-4 h-4" />
                </a>
                <p className="text-[13px] text-gray-600 dark:text-gray-100 text-center">
                  تذكير: برجاء كتابة <span className="font-bold text-emerald-700 dark:text-accent-500">اسم الوظيفة</span> في رسالة الواتس عند التقديم 
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto hidden md:block">
          <div className="bg-white dark:bg-dark-card rounded-3xl shadow-xl p-6 sm:p-8 text-right border border-gray-200 dark:border-primary-700">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-accent-500 mb-4">شروط عامة للتقديم</h3>
            <div className="grid sm:grid-cols-2 gap-4 text-right">
              <div className="bg-emerald-50 dark:bg-primary-900/20 p-6 rounded-xl">
                <h5 className="font-bold text-emerald-800 dark:text-primary-400 mb-2">المتطلبات الأساسية</h5>
                <ul className="space-y-2 text-gray-700 dark:text-dark-text text-sm">
                  <li>• التزام بالضوابط الشرعية والأخلاقية.</li>
                  <li>• القدرة على العمل ضمن فريق.</li>
                  <li>• الرغبة في التطوير المستمر.</li>
                </ul>
              </div>
              <div className="bg-accent-50 dark:bg-accent-900/20 p-6 rounded-xl">
                <h5 className="font-bold text-accent-800 dark:text-accent-400 mb-2">ما نوفره</h5>
                <ul className="space-y-2 text-gray-700 dark:text-dark-text text-sm">
                  <li>• بيئة عمل قرآنية وتربوية مميزة.</li>
                  <li>• رواتب مناسبة وحوافز دورية.</li>
                  <li>• برامج تدريب وتطوير مستمرة.</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-100 text-sm mt-6 text-center ">
              في حال عدم توفر وظيفة مناسبة حالياً، يمكنكم إرسال السيرة الذاتية على البريد
              <a href="mailto:jobs@alfurqan.com" className="text-emerald-700 dark:text-accent-500 font-semibold underline"> jobs@alfurqan.com </a>
              ليتم التواصل عند توفر شواغر جديدة
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
