// /* eslint-disable @typescript-eslint/no-unused-vars */
// import React from 'react';
// import { BookOpen, Users, Award, Heart } from 'lucide-react';

// export default function Gallery() {
//   const galleryItems = [
//     {
//       icon: 'src/imgs/halqat.jpg',
//       title: 'حلقات التحفيظ',
//       description: 'حلقات منظمة لتحفيظ القرآن الكريم',
//       color: 'emerald'
//     },
//     {
//       icon: 'src/imgs/fosol.jpg!w700wp',
//       title: 'الفصول الدراسية',
//       description: 'فصول مجهزة بأحدث الوسائل التعليمية',
//       color: 'teal'
//     },
//     {
//       icon: 'src/imgs/takharog.jpg',
//       title: 'حفلات التخرج',
//       description: 'احتفالات بإنجازات الطلاب',
//       color: 'amber'
//     },
//     {
//       icon: 'src/imgs/fosol.jpg!w700wp',
//       title: 'الأنشطة الترفيهية',
//       description: 'أنشطة متنوعة لتنمية مهارات الطفل',
//       color: 'cyan'
//     },
//     {
//       icon: 'src/imgs/fosol.jpg!w700wp',
//       title: 'المكتبة القرآنية',
//       description: 'مكتبة غنية بالمصاحف والكتب',
//       color: 'emerald'
//     },
//     {
//       icon: 'src/imgs/fosol.jpg!w700wp',
//       title: 'الرحلات التعليمية',
//       description: 'رحلات هادفة وممتعة للطلاب',
//       color: 'teal'
//     }
//   ];

//   return (
//     <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
//             معرض الصور
//           </h2>
//           <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             لمحات من أنشطتنا اليومية وفعالياتنا المتنوعة في أكاديمية الفرقان
//           </p>
//         </div>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {galleryItems.map((item, index) => (
//             <div
//               key={index}
//               className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-[4/3]"
//             >
//               <div className={`absolute inset-0 bg-gradient-to-br from-${item.color}-400 to-${item.color}-600 group-hover:scale-105 transition-transform duration-300`}>
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <img src={item.icon} className="h-[100%] w-[100%] text-white opacity-[0.9]" />
//                 </div>
//               </div>  

//               <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

//               <div className="absolute bottom-0 right-0 left-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
//                 <h3 className="text-xl font-bold mb-2 text-right">{item.title}</h3>
//                 <p className="text-white/90 text-sm text-right opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
//                   {item.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="mt-16 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl p-8 sm:p-12 text-center text-white shadow-2xl">
//           <h3 className="text-2xl sm:text-3xl font-bold mb-4">شاهد المزيد من أنشطتنا</h3>
//           <p className="text-emerald-50 mb-8 max-w-2xl mx-auto text-lg">
//             تابعنا على وسائل التواصل الاجتماعي لمشاهدة أحدث الأنشطة والفعاليات
//           </p>
//           <div className="flex flex-wrap justify-center gap-4">
//             <button className="bg-white text-emerald-600 px-8 py-3 rounded-xl font-semibold hover:bg-emerald-50 transition-all duration-300">
//               فيسبوك
//             </button>
//             <button className="bg-white text-emerald-600 px-8 py-3 rounded-xl font-semibold hover:bg-emerald-50 transition-all duration-300">
//               إنستغرام
//             </button>
//             <button className="bg-white text-emerald-600 px-8 py-3 rounded-xl font-semibold hover:bg-emerald-50 transition-all duration-300">
//               يوتيوب
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
