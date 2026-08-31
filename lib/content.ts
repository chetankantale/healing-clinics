export type TreatmentItem = {
  slug: string;
  title: string;
  summary: string;
  heroImage: string;
  overview: string;
  benefits: string[];
  steps: string[];
  results: string;
  faqs: { question: string; answer: string }[];
};

export const treatmentItems: TreatmentItem[] = [
  {
    slug: 'acne-treatment',
    title: 'Acne Treatment',
    summary: 'Clinical care for clearer, more balanced skin with medical acne protocols.',
    heroImage: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80',
    overview: 'Our acne treatment combines medical-grade therapies and a customized maintenance plan to reduce breakouts, inflammation, and acne-related texture concerns.',
    benefits: ['Reduce active acne and inflammation', 'Improve skin texture and tone', 'Support long-term clarity and resilience'],
    steps: ['In-depth skin assessment and history review', 'Targeted clinical therapy and treatment delivery', 'Follow-up care plan with maintenance recommendations'],
    results: 'Clearer, calmer skin with a professional program designed to prevent future breakouts and minimize acne scarring.',
    faqs: [
      { question: 'Is acne treatment safe for all ages?', answer: 'Yes. Our acne protocols are tailored for adult and adolescent skin, with medical supervision throughout treatment.' },
      { question: 'How many sessions are typically needed?', answer: 'Most clients see visible improvement in 4 to 6 sessions, depending on skin type and acne severity.' },
      { question: 'Will treatment reduce scarring?', answer: 'Our combined approach targets active acne and helps improve skin texture, reducing the appearance of scars over time.' }
    ]
  },
  {
    slug: 'pigmentation-treatment',
    title: 'Pigmentation Treatment',
    summary: 'Advanced pigmentation solutions for even tone, brightened skin, and renewed confidence.',
    heroImage: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=900&q=80',
    overview: 'Pigmentation treatment at Healing Clinic blends clinical peels, laser therapy, and bespoke skincare to fade dark spots and harmonize skin tone.',
    benefits: ['Reduce unwanted brown marks', 'Enhance skin luminosity', 'Balance uneven tone and texture'],
    steps: ['Skin tone analysis and targeted treatment mapping', 'Precision light therapy or peel application', 'Post-care regimen to support sustainable results'],
    results: 'A smoother, more radiant complexion with reduced pigmentation and refreshed skin clarity.',
    faqs: [
      { question: 'How soon will I see improvement?', answer: 'Many clients notice brighter, more even skin within 2 to 4 weeks after treatment starts.' },
      { question: 'Is the treatment painful?', answer: 'Comfort protocols are used to keep sessions gentle, and most clients describe only mild warmth or tingling.' },
      { question: 'Can I receive this year-round?', answer: 'Yes, with proper sun protection and follow-up care, pigmentation management is effective throughout the year.' }
    ]
  },
  {
    slug: 'hair-growth',
    title: 'Hair Growth Treatment',
    summary: 'PRP and personalized scalp care to support healthier, fuller-looking hair.',
    heroImage: 'https://images.unsplash.com/photo-1511424443515-9d6a1461f5d4?auto=format&fit=crop&w=900&q=80',
    overview: 'Our hair growth programs combine PRP therapy, scalp assessment, and personalized clinical care to help reduce hair fall and support stronger, healthier growth.',
    benefits: ['Support fuller-looking, healthier hair', 'Improve scalp health and hair resilience', 'Build a sustainable growth and maintenance plan'],
    steps: ['Consultation and scalp assessment', 'Personalized PRP or hair-growth treatment plan', 'Progress monitoring and home-care guidance'],
    results: 'Stronger, healthier-looking hair with a professional plan designed to support gradual, natural improvement.',
    faqs: [
      { question: 'How soon can I expect improvement?', answer: 'Hair growth takes time. Many clients begin to notice reduced shedding and early improvement after a few months of consistent care.' },
      { question: 'Is PRP suitable for hair growth?', answer: 'PRP can be an effective option for many clients. Your clinician will assess your scalp, hair pattern, and goals before recommending a plan.' },
      { question: 'How many sessions are needed?', answer: 'The number of sessions depends on your needs. Most plans begin with a series of treatments followed by maintenance guidance.' }
    ]
  },
  {
    slug: 'prp-therapy',
    title: 'PRP Therapy',
    summary: 'Regenerative PRP therapy for hair growth, skin rejuvenation, and natural performance.',
    heroImage: 'https://images.unsplash.com/photo-1542736667-069246bdbc5e?auto=format&fit=crop&w=900&q=80',
    overview: 'PRP therapy uses your body’s natural growth factors to stimulate hair follicles and refresh skin tone while supporting healthy tissue renewal.',
    benefits: ['Support hair regrowth and density', 'Improve skin firmness and texture', 'Use natural healing factors for gentle rejuvenation'],
    steps: ['Blood collection and platelet concentration', 'Targeted PRP injections into treatment areas', 'Recovery support for optimal regenerative response'],
    results: 'Stronger hair, smoother skin, and a revitalized appearance powered by your body’s own healing potential.',
    faqs: [
      { question: 'Is PRP safe for hair and skin?', answer: 'Yes. PRP is an autologous treatment using your own platelets and is well tolerated by most clients.' },
      { question: 'How many treatments are needed?', answer: 'A typical course includes 3 treatments spaced 4 to 6 weeks apart, with maintenance sessions afterward.' },
      { question: 'Are there side effects?', answer: 'Minimal downtime is expected, with mild redness or tenderness that resolves quickly.' }
    ]
  },
  {
    slug: 'laser-hair-removal',
    title: 'Laser Hair Removal',
    summary: 'Comfortable laser hair removal for smooth, long-lasting results on face and body.',
    heroImage: 'https://images.unsplash.com/photo-1502720705749-3c1907d1c945?auto=format&fit=crop&w=900&q=80',
    overview: 'Laser hair removal at Healing Clinic delivers precise, safe reduction of unwanted hair with advanced energy systems and expert skin assessment.',
    benefits: ['Reduce hair growth with long-lasting results', 'Treat sensitive and large areas safely', 'Enjoy smoother skin with minimal downtime'],
    steps: ['Skin analysis and device selection', 'Controlled laser treatment session', 'Aftercare guidance for comfort and healing'],
    results: 'A smoother, hair-free complexion with fewer maintenance sessions and professional care from start to finish.',
    faqs: [
      { question: 'Is laser hair removal permanent?', answer: 'Laser reduces hair growth significantly; multiple sessions create long-lasting smoothness.' },
      { question: 'Does it work on all skin tones?', answer: 'Yes, we customize settings for safe and effective treatment across skin and hair types.' },
      { question: 'Is treatment painful?', answer: 'Most clients feel mild warmth; cooling and comfort measures help minimize discomfort.' }
    ]
  },
  {
    slug: 'anti-aging',
    title: 'Anti Aging',
    summary: 'Non-surgical anti-aging care to smooth lines, restore volume, and enhance skin vitality.',
    heroImage: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
    overview: 'Our anti-aging treatments combine physician-led skincare, injectables, and advanced modalities to help skin look firmer, brighter and more youthful.',
    benefits: ['Smooth fine lines and wrinkles', 'Restore facial volume and contour', 'Boost skin radiance and elasticity'],
    steps: ['Comprehensive aesthetic consultation', 'Precision treatment selection and delivery', 'Customized maintenance plan to sustain results'],
    results: 'Refreshed, more youthful skin with natural-looking improvement and a premium treatment experience.',
    faqs: [
      { question: 'Can anti-aging care be customized?', answer: 'Yes. Every plan is tailored to your skin goals and medical needs.' },
      { question: 'Will results look natural?', answer: 'Our approach prioritizes subtle, elegant improvement rather than dramatic change.' },
      { question: 'How long do results last?', answer: 'Results depend on the treatment; many clients enjoy visible benefits for months with proper follow-up.' }
    ]
  },
  {
    slug: 'chemical-peel',
    title: 'Chemical Peel',
    summary: 'Clinical chemical peels to refresh texture, brighten skin, and improve tone safely.',
    heroImage: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80',
    overview: 'Chemical peels at Healing Clinic target dullness, uneven tone, and surface imperfections with medical-grade formulations and personalized depth control.',
    benefits: ['Renew skin texture and glow', 'Reduce discoloration and roughness', 'Refresh complexion with minimal downtime'],
    steps: ['Skin evaluation and peel selection', 'Professional peel application', 'Guided post-treatment care and recovery support'],
    results: 'A brighter, smoother complexion with improved clarity and skin health after each treatment.',
    faqs: [
      { question: 'How long does recovery take?', answer: 'Recovery depends on peel depth; superficial peels usually require 1 to 3 days of gentle care.' },
      { question: 'Is it safe for sensitive skin?', answer: 'Yes, the formula and depth are chosen carefully for your skin type and tolerance.' },
      { question: 'How often should I have a peel?', answer: 'Many clients benefit from a series of treatments scheduled every 4 to 8 weeks.' }
    ]
  }
];

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'modern-skin-care',
    title: 'Modern skin care strategies for lasting radiance',
    category: 'Skin Care',
    summary: 'Clinical skincare approaches to protect, nourish, and renew your complexion with expert precision.',
    content: 'Discover modern skincare strategies including dermatologist-recommended routines, targeted actives, and preventive treatments that help maintain glowing skin year-round.'
  },
  {
    slug: 'prp-hair-restoration',
    title: 'How PRP therapy supports natural hair restoration',
    category: 'Hair Care',
    summary: 'Learn how platelet-rich plasma enhances hair growth and supports thicker, healthier follicles naturally.',
    content: 'PRP therapy uses growth factors from your own blood to stimulate hair follicles. It is a gentle, regenerative approach that complements clinical hair restoration programs.'
  },
  {
    slug: 'advanced-acne-solutions',
    title: 'Advanced acne solutions for clearer skin',
    category: 'Acne',
    summary: 'Find out how clinical treatments and personalized skincare can deliver sustained acne control and skin confidence.',
    content: 'Advanced acne care brings together medical therapies, lifestyle guidance, and maintenance plans to address breakouts at the root and protect skin health over time.'
  }
];

export const faqItems = [
  { question: 'What should I bring to my first appointment?', answer: 'Please bring any recent skincare products, medical history, and a list of concerns or questions for the clinician.' },
  { question: 'Do you offer payment plans?', answer: 'We provide flexible payment options for select treatments. Contact our patient care team for details.' },
  { question: 'How do I prepare for my treatment?', answer: 'We will send tailored preparation guidelines based on the specific treatment you choose.' }
];

export const galleryItems = [
  { category: 'Before & After Results', label: 'Before & After Result 1', image: '/images/gallery/before-after/Img%201.jpeg' },
  { category: 'Before & After Results', label: 'Before & After Result 2', image: '/images/gallery/before-after/Img%202.jpeg' },
  { category: 'Before & After Results', label: 'Before & After Result 3', image: '/images/gallery/before-after/Img%203.jpeg' },
  { category: 'Before & After Results', label: 'Before & After Result 4', image: '/images/gallery/before-after/Img%204.jpeg' },
  { category: 'Before & After Results', label: 'Before & After Result 5', image: '/images/gallery/before-after/Img%205.jpeg' },
  { category: 'Before & After Results', label: 'Before & After Result 6', image: '/images/gallery/before-after/Img%206.jpeg' },
  { category: 'Before & After Results', label: 'Before & After Result 7', image: '/images/gallery/before-after/Img%207.jpeg' },
  { category: 'Before & After Results', label: 'Before & After Result 8', image: '/images/gallery/before-after/Img%208.jpeg' },
  { category: 'Before & After Results', label: 'Before & After Result 9', image: '/images/gallery/before-after/Img%209.jpeg' },
  { category: 'Before & After Results', label: 'Before & After Result 10', image: '/images/gallery/before-after/Img%2010.jpeg' },
  { category: 'Before & After Results', label: 'Before & After Result 11', image: '/images/gallery/before-after/Img%2011.jpeg' },
  { category: 'Before & After Results', label: 'Before & After Result 12', image: '/images/gallery/before-after/Img%2012.jpeg' },
  { category: 'Before & After Results', label: 'Before & After Result 13', image: '/images/gallery/before-after/Img%2013.jpeg' },
  { category: 'Before & After Results', label: 'Before & After Result 14', image: '/images/gallery/before-after/Img%2014.jpeg' },
  { category: 'Before & After Results', label: 'Before & After Result 15', image: '/images/gallery/before-after/Img%2015.jpeg' },
  { category: 'Before & After Results', label: 'Before & After Result 16', image: '/images/gallery/before-after/Img%2016.jpeg' },
  { category: 'Before & After Results', label: 'Before & After Result 17', image: '/images/gallery/before-after/Img%2017.jpeg' },
  { category: 'Before & After Results', label: 'Before & After Result 18', image: '/images/gallery/before-after/Img%2018.jpeg' },
  { category: 'Before & After Results', label: 'Before & After Result 19', image: '/images/gallery/before-after/Img%2019.jpeg' },
  { category: 'Before & After Results', label: 'Before & After Result 20', image: '/images/gallery/before-after/Img%2020.jpeg' },
  { category: 'Clinic Gallery', label: 'Healing Clinic gallery 1', image: '/images/gallery/gallery1.jpg' },
  { category: 'Clinic Gallery', label: 'Healing Clinic gallery 2', image: '/images/gallery/gallery2.jpg' },
  { category: 'Clinic Gallery', label: 'Healing Clinic gallery 3', image: '/images/gallery/gallery3.jpg' },
  { category: 'Clinic Gallery', label: 'Healing Clinic gallery 4', image: '/images/gallery/gallery4.jpg' },
  { category: 'Clinic Gallery', label: 'Healing Clinic gallery 5', image: '/images/gallery/gallery5.jpg' },
  { category: 'Clinic Gallery', label: 'Healing Clinic gallery 6', image: '/images/gallery/gallery6.jpg' },
  { category: 'Clinic Gallery', label: 'Healing Clinic gallery 7', image: '/images/gallery/gallery7.jpg' },
  { category: 'Clinic Gallery', label: 'Healing Clinic gallery 8', image: '/images/gallery/gallery8.jpg' },
  { category: 'Clinic Gallery', label: 'Healing Clinic gallery 9', image: '/images/gallery/gallery9.jpg' },
  { category: 'Clinic Gallery', label: 'Healing Clinic gallery 10', image: '/images/gallery/gallery10.jpg' },
  { category: 'Clinic Gallery', label: 'Healing Clinic gallery 11', image: '/images/gallery/gallery11.jpg' }
];

export const testimonials = [
  { name: 'Akash R.', role: 'Acne Treatment Client', quote: 'The clinic delivered thoughtful care and visible results. My skin feels clearer and more confident than ever.', rating: 5 },
  { name: 'Nutan G.', role: 'Hair Restoration Client', quote: 'My hair journey was supported with precision and empathy. The results exceeded my expectations.', rating: 5 },
  { name: 'Priyanka D.', role: 'Pigmentation Client', quote: 'I appreciated the detailed consultation and gentle treatment. My complexion has never looked brighter.', rating: 5 }
];
