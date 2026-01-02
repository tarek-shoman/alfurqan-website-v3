 import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      {/* Main footer content - hidden on mobile */}
      <footer className="bg-gradient-to-br from-primary-700 to-primary-800 dark:from-dark-surface dark:to-primary-900 text-white text-sm sm:text-[0.95rem] hidden sm:block" dir='rtl'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
            <div className="text-right">
              <div className="flex items-center gap-2 justify-right mb-4">
                <span className="text-xl font-bold ">أكاديمية الفرقان</span>
              </div>
              <p className="text-primary-200 dark:text-primary-300 leading-relaxed">
                مؤسسة تعليمية رائدة في تحفيظ القرآن الكريم وتعليم نور البيان
              </p>
            </div>

            <div className="text-center sm:text-right">
              <h3 className="text-base sm:text-lg font-bold mb-3 text-primary-100 dark:text-accent-100">روابط سريعة</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-primary-200 dark:text-primary-300 hover:text-accent-400 dark:hover:text-accent-500 transition-colors">
                    الرئيسية
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-primary-200 dark:text-primary-300 hover:text-accent-400 dark:hover:text-accent-500 transition-colors">
                    عن الأكاديمية
                  </Link>
                </li>
                <li>
                  <Link to="/programs" className="text-primary-200 dark:text-primary-300 hover:text-accent-400 dark:hover:text-accent-500 transition-colors">
                    البرامج التعليمية
                  </Link>
                </li>
                <li>
                  <Link to="/online-nursery" className="text-primary-200 dark:text-primary-300 hover:text-accent-400 dark:hover:text-accent-500 transition-colors">
                    حضانة أونلاين
                  </Link>
                </li>
                <li>
                  <Link to="/jobs" className="text-primary-200 dark:text-primary-300 hover:text-accent-400 dark:hover:text-accent-500 transition-colors">
                    الفرص الوظيفية
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-right hidden md:block">
              <h3 className="text-base sm:text-lg font-bold mb-3 text-primary-100 dark:text-accent-100">البرامج</h3>
              <ul className="space-y-2">
                <li className="text-primary-200 dark:text-primary-300">تحفيظ القرآن الكريم</li>
                <li className="text-primary-200 dark:text-primary-300">التربية الإسلامية</li>
                <li className="text-primary-200 dark:text-primary-300">الأنشطة التفاعلية</li>
              </ul>
            </div>

            <div className="text-center sm:text-right" dir='ltr'>
              <h3 className="text-base sm:text-lg font-bold mb-3 text-primary-100 dark:text-accent-100">تواصل معنا</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 justify-end text-primary-200 dark:text-primary-300">
                  <span className="dir-ltr">+20 111 229 2787</span>
                  <Phone className="w-5 h-5 text-accent-400" />
                </li>
                <li className="flex items-center gap-2 justify-end text-primary-200 dark:text-primary-300">
                  <span className="dir-ltr">info@alfurqan.com</span>
                  <Mail className="w-5 h-5 text-accent-400" />
                </li>
                <li className="flex items-center gap-2 justify-end text-primary-200 dark:text-primary-300">
                  <span className="dir-ltr">شرق المحطة، بجوار مستشفي الإيمان، بني مزار</span>
                  <MapPin className="w-5 h-5 text-accent-400" />
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-600 dark:border-primary-700 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-primary-200 dark:text-primary-300 text-sm">
                  جميع الحقوق محفوظة  2025 لدي <a className='text-accent-400 dark:text-accent-500 hover:underline' href="https://shoman.com">(© Shoman.com)</a> 
              </div>
              <div className="flex gap-4">
                <a href="#" className="text-primary-200 dark:text-primary-300 hover:text-accent-400 dark:hover:text-accent-500 transition-colors">
                  سياسة الخصوصية
                </a>
                <span className="text-primary-400 dark:text-primary-500">|</span>
                <a href="#" className="text-primary-200 dark:text-primary-300 hover:text-accent-400 dark:hover:text-accent-500 transition-colors">
                  الشروط والأحكام
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile footer - only bottom section */}
      <footer className="bg-gradient-to-br from-primary-700 to-primary-800 dark:from-dark-surface dark:to-primary-900 text-white text-sm sm:hidden" dir='rtl'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="border-t border-primary-600 dark:border-primary-700 pt-4">
            <div className="flex flex-col justify-between items-center gap-2 text-center">
              <div className="text-primary-200 dark:text-primary-300 text-xs">
                  جميع الحقوق محفوظة  2025 لدي <a className='text-accent-400 dark:text-accent-500 hover:underline' href="https://shoman.com">(© Shoman.com)</a> 
              </div>
              <div className="flex gap-3 text-xs">
                <a href="#" className="text-primary-200 dark:text-primary-300 hover:text-accent-400 dark:hover:text-accent-500 transition-colors">
                  سياسة الخصوصية
                </a>
                <span className="text-primary-400 dark:text-primary-500">|</span>
                <a href="#" className="text-primary-200 dark:text-primary-300 hover:text-accent-400 dark:hover:text-accent-500 transition-colors">
                  الشروط والأحكام
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
