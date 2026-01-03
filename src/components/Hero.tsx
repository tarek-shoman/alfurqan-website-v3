import { BookOpen, Heart, User } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "/imgs/logo.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cream-50 to-cream-100 dark:from-dark-surface dark:to-dark-card"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center min-h-[480px] md:min-h-[600px]">
          <div className="text-right space-y-6 order-2 md:order-1">
            <div className="inline-flex items-center gap-2 bg-accent-100 px-4 py-2 rounded-full">
              <Heart className="w-5 h-5 text-accent-600" />
              <span className="text-accent-800 font-medium">منذ عام 1999</span>
            </div>
            <h1 className="sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-accent-600 leading-tight">
              أكاديمية الفرقان
              <span className="block text-emerald-600 dark:text-accent-500 mt-2">
                لتعليم وتحفيظ القرآن الكريم أونلاين
              </span>

            </h1>
            <p className="text-base sm:text-lg text-gray-700 dark:text-dark-text leading-relaxed">
              نوفر بيئة تعليمية آمنة ومحفزة لأطفالكم لتعليم القرآن الكريم بطريقة
              نور البيان، مع العناية الكاملة والاهتمام بنمو الطفل الروحي والعقلي
              والاجتماعي
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <Link
                to="/contact"
                className="bg-emerald-600 dark:bg-accent-600 text-white mt-8 sm:mt-12 lg:mt-16 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base hover:bg-emerald-700 dark:hover:bg-accent-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                سجل الآن
              </Link>
              <Link
                to="/programs"
                className="bg-white dark:bg-dark-card text-emerald-600 dark:text-accent-500 mt-8 sm:mt-12 lg:mt-16 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base border-2 border-emerald-600 dark:border-accent-500 hover:bg-emerald-50 dark:hover:bg-primary-800 transition-all duration-300"
              >
                تعرف على البرامج
              </Link>
            </div>
            {/* <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">
                  8000+
                </div>
                <div className="text-gray-600 mt-1">طالب</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">25+</div>
                <div className="text-gray-600 mt-1">معلم</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">17+</div>
                <div className="text-gray-600 mt-1">سنوات خبرة</div>
              </div>
            </div> */}
          </div>
          <div className="order-1 md:order-2 relative hidden md:block">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-emerald-500 to-emerald-600 dark:from-accent-500 dark:to-accent-700 flex items-center justify-center">
                <img src={logo} className="pt-6" alt="" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent"></div>
              <div className="absolute bottom-8 right-8 bg-white/95 dark:bg-dark-card/95 backdrop-blur-sm px-6 py-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-accent-600" />
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-gray-900 dark:text-accent-400">تعليم متميز</div>
                    <div className="text-sm text-gray-600 dark:text-dark-text">منهج نور البيان</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-amber-400 rounded-full blur-2xl opacity-60"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber-200 rounded-full blur-2xl opacity-60"></div>
          </div>

          {/* Mobile Landscape Mode - Simple card without logo */}
          <div className="order-1 md:order-2 relative md:hidden flex items-center justify-center">
            <div className="bg-white dark:bg-dark-card rounded-2xl shadow-lg border border-gray-200 dark:border-primary-800 p-4 max-w-xs w-full">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-emerald-100 dark:bg-accent-100 px-3 py-1.5 rounded-full mb-3">
                  <Heart className="w-3 h-3 text-emerald-600 dark:text-accent-600" />
                  <span className="text-emerald-800 dark:text-accent-800 font-medium text-xs">منذ عام 1999</span>
                </div>
                <h2 className="text-lg font-bold text-gray-900 dark:text-accent-500 mb-1">أكاديمية الفرقان</h2>
                <p className="text-xs text-gray-600 dark:text-dark-text mb-3">لتعليم وتحفيظ القرآن الكريم أونلاين</p>
                <div className="flex items-center justify-center gap-1.5 text-gray-500 dark:text-gray-400 text-xs border-t pt-2">
                  <span>إدارة الشيخ أحمد محيي</span>
                  <User className="w-2.5 h-2.5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
