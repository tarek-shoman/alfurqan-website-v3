import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    age: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      child_age: formData.age, 
      message: formData.message,
    };

    emailjs.send(
      'service_dw8ex5g', 
      'template_fder17m', 
      templateParams,
      'TvE4UGlNyzvAUT9Fb' 
    )
    .then(() => {
      Swal.fire({
        title: 'تم الإرسال بنجاح!',
        text: 'شكراً لتواصلك مع أكاديمية الفرقان، سيتم التواصل معك قريباً.',
        icon: 'success',
        confirmButtonText: 'حسناً',
        confirmButtonColor: '#1a2e21',
      }).then(() => {
        setFormData({ name: "", phone: "", email: "", age: "", message: "" });
      });
    })
    .catch((err) => {
      console.error('FAILED...', err);
      Swal.fire({
        title: 'خطأ!',
        text: 'عذراً، حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.',
        icon: 'error',
        confirmButtonText: 'حسناً'
      });
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cream-50 to-cream-100 dark:from-dark-surface dark:to-dark-card"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-600 dark:text-accent-500 mb-4">
            تواصل معنا
          </h2>
          <div className="w-24 h-1 bg-primary-600 dark:bg-accent-500 mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-gray-600 dark:text-dark-text max-w-3xl mx-auto">
            نسعد بتواصلكم معنا للاستفسار عن البرامج أو التسجيل لأطفالكم
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-8">
            <div className="bg-white dark:bg-dark-card p-6 sm:p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-primary-600 dark:text-accent-500 mb-6 text-right">
                معلومات التواصل
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 dark:bg-accent-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-600 dark:text-accent-600" />
                  </div>
                  <div className="flex-1 text-right">
                    <h4 className="font-semibold text-primary-700 dark:text-accent-400 mb-1">الهاتف</h4>
                    <p className="text-gray-600 dark:text-dark-text dir-ltr text-right">+20 111 229 2787</p>
                    <p className="text-gray-600 dark:text-dark-text dir-ltr text-right">+20 102 439 4390</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 dark:bg-accent-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-600 dark:text-accent-600" />
                  </div>
                  <div className="flex-1 text-right">
                    <h4 className="font-semibold text-primary-700 dark:text-accent-400 mb-1">البريد الإلكتروني</h4>
                    <p className="dark:text-dark-text">info@alfurqan.com</p>
                    <p className="dark:text-dark-text">admission@alfurqan.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 dark:bg-accent-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-600 dark:text-accent-600" />
                  </div>
                  <div className="flex-1 text-right">
                    <h4 className="font-semibold text-primary-700 dark:text-accent-400 mb-1">العنوان</h4>
                    <p className="dark:text-dark-text">شرق المحطة، بجوار مستشفى الإيمان، بني مزار</p>
                    <p className="dark:text-dark-text">المنيا، مصر</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 dark:bg-accent-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary-600 dark:text-accent-600" />
                  </div>
                  <div className="flex-1 text-right">
                    <h4 className="font-semibold text-primary-700 dark:text-accent-400 mb-1">أوقات العمل</h4>
                    <p className="dark:text-dark-text">السبت - الخميس: 7:00 ص - 5:00 م</p>
                    <p className="dark:text-dark-text">الجمعة: مغلق</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-600 to-primary-700 dark:from-accent-600 dark:to-accent-700 p-6 sm:p-8 rounded-2xl shadow-lg text-white">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-right">احجز موعد زيارة</h3>
              <p className="text-primary-100 dark:text-accent-100 mb-6 text-right leading-relaxed">
                يمكنكم زيارة الأكاديمية للتعرف على المكان والبرامج والتحدث مع الإدارة. نرحب بكم في أي وقت خلال أوقات العمل.
              </p>
              <a href="tel:+201112292787" className="inline-block bg-white dark:bg-dark-card text-primary-700 dark:text-accent-600 px-6 py-3 sm:px-8 rounded-xl font-semibold hover:bg-primary-50 transition-all">
                اتصل للحجز
              </a>
            </div>
          </div>

          {/* نموذج التسجيل */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-right">نموذج التسجيل</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-right text-gray-700 font-semibold mb-2">اسم ولي الأمر *</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border-2 border-cream-500 text-right" placeholder="أدخل اسمك الكامل" />
              </div>
              <div>
                <label className="block text-right text-gray-700 font-semibold mb-2">رقم الهاتف *</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border-2 border-cream-500 text-right" placeholder="01234567890" />
              </div>
              <div>
                <label className="block text-right text-gray-700 font-semibold mb-2">البريد الإلكتروني</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border-2 border-cream-500 text-right" placeholder="example@email.com" />
              </div>
              <div>
                <label className="block text-right text-gray-700 font-semibold mb-2">عمر الطفل *</label>
                <input type="text" name="age" value={formData.age} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border-2 border-cream-500 text-right" placeholder="مثال: 5 سنوات" />
              </div>
              <div>
                <label className="block text-right text-gray-700 font-semibold mb-2">ملاحظات أو استفسارات</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-4 py-3 rounded-xl border-2 border-cream-500 text-right resize-none" placeholder="اكتب أي استفسار أو ملاحظات"></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold flex items-center justify-center gap-2 group ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-xl'}`}
              >
                <span>{isSubmitting ? 'جاري الإرسال...' : 'إرسال الطلب'}</span>
                {!isSubmitting && <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}