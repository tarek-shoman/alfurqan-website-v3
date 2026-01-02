import { Wifi, Baby } from 'lucide-react';

export default function OnlineNursery() {
  return (
    <section id="online" dir='rtl' className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cream-50 to-cream-100 dark:from-dark-surface dark:to-dark-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-600 dark:text-accent-500 mb-4">
            حضانة أونلاين
          </h2>
          <div className="w-24 h-1 bg-primary-600 dark:bg-accent-500 mx-auto mb-6"></div>
        </div>

        <div className="max-w-3xl mx-auto border-2 border-primary-200 dark:border-primary-800 rounded-2xl">
          <div className="bg-white dark:bg-dark-card rounded-3xl shadow-xl p-8 sm:p-12 text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-accent-400 blur-2xl opacity-20 animate-pulse"></div>
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-emerald-600 to-emerald-600 dark:from-accent-500 dark:to-accent-600 rounded-full flex items-center justify-center">
                  <Wifi className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                </div>
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-primary-600 dark:text-accent-500 mb-4">
              قريباً بإذن الله
            </h3>

            <p className="text-base sm:text-lg text-gray-600 dark:text-dark-text mb-8 leading-relaxed">
              نعمل حالياً على تجهيز منصة حضانة أونلاين تُمكِّنكم من متابعة أبنائكم في
              حلقات القرآن ومنهج نور البيان من المنزل، مع الحفاظ على نفس الجودة
              والروح الإيمانية في الأكاديمية.
            </p>

            <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl p-6 sm:p-8 mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Baby className="w-6 h-6 text-primary-600 dark:text-accent-600" />
                <h4 className="text-lg sm:text-xl font-bold text-primary-700 dark:text-accent-400">هل تبحث عن خدمة أونلاين؟</h4>
              </div>
              <p className="text-gray-700 dark:text-dark-text leading-relaxed mb-6">
                ترقبوا إطلاق منصتنا قريباً، ويمكنكم التواصل معنا للاستفسار أو التسجيل المسبق
              </p>
              <div className="text-right bg-white dark:bg-dark-card rounded-xl p-6 space-y-3">
                <div className="flex items-center gap-3 justify-center">
                  <span className="text-gray-700 dark:text-dark-text text-center">أرسل استفسارك على البريد الإلكتروني</span>
                </div>
                <div className="flex items-center gap-3 justify-center">
                  <a href="mailto:info@alfurqan.com" className="font-semibold text-primary-600 dark:text-accent-600 underline">info@alfurqan.com</a>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 text-right">
              <div className="bg-primary-100 dark:bg-primary-900/20 p-6 rounded-xl">
                <h5 className="font-bold text-primary-800 dark:text-primary-400 mb-2">المميزات</h5>
                <ul className="space-y-2 text-gray-700 dark:text-dark-text text-sm">
                  <li>• متابعة مباشرة للحلقات</li>
                  <li>• نفس جودة الأكاديمية</li>
                  <li>• دعم فني مستمر</li>
                </ul>
              </div>
              <div className="bg-accent-100 dark:bg-accent-900/20 p-6 rounded-xl">
                <h5 className="font-bold text-accent-800 dark:text-accent-400 mb-2">متى تنطلق؟</h5>
                <ul className="space-y-2 text-gray-700 dark:text-dark-text text-sm">
                  <li>• قريباً بإذن الله</li>
                  <li>• إشعارات عند الإطلاق</li>
                  <li>• تسجيل مسبق متاح</li>
                </ul>
              </div>
            </div>

            <p className="text-gray-500 text-sm mt-8">
              سيتم تحديث هذا القسم قريباً بنظام تقديم إلكتروني متكامل
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}