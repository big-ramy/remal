
import type { NavLink, Project, Solution } from './types';

export const NAV_LINKS: NavLink[] = [
  { path: '/', label: { ar: 'الرئيسية', en: 'Home' } },
  { path: '/solutions', label: { ar: 'حلولنا', en: 'Solutions' } },
  { path: '/maintenance', label: { ar: 'الصيانة والتحديث', en: 'Maintenance' } },
  { path: '/projects', label: { ar: 'مشاريعنا', en: 'Projects' } },
  { path: '/safety', label: { ar: 'الأمان', en: 'Safety' } },
  { path: '/contact', label: { ar: 'تواصل معنا', en: 'Contact Us' } },
];

export const NOTIFICATION_MESSAGES: Record<string, string>[] = [
    {
        ar: "نصيحة اليوم: الصيانة الدورية للمصعد مو بس تزيد من عمره الافتراضي، هي ضمان لسلامة كل اللي يستخدمونه.",
        en: "Today's Tip: Regular elevator maintenance not only extends its lifespan, it's a guarantee of safety for everyone who uses it."
    },
    {
        ar: "هل تعلم؟ المصاعد البانورامية تضيف لمسة جمالية ترفع من قيمة المبنى بشكل كبير.",
        en: "Did you know? Panoramic elevators add an aesthetic touch that significantly increases the value of the building."
    },
    {
        ar: "لأصحاب الفلل: عندنا حلول مصاعد منزلية ذكية وصغيرة ما تاخذ مساحة وتضيف فخامة لبيتك.",
        en: "For villa owners: We have smart and compact home elevator solutions that don't take up space and add luxury to your home."
    },
    {
        ar: "نفتخر بكوننا وكلاء معتمدون لأفضل العلامات التجارية الأوروبية في عالم المصاعد.",
        en: "We are proud to be certified agents for the best European brands in the world of elevators."
    },
    {
        ar: "سلامتكم أولويتنا. جميع مصاعدنا مجهزة بأحدث تقنيات الأمان العالمية.",
        en: "Your safety is our priority. All our elevators are equipped with the latest international safety technologies."
    }
];

export const PROJECTS_DATA: Project[] = [
  { id: 1, title: { ar: "برج المملكة", en: "Kingdom Tower" }, category: 'Commercial', image: 'https://picsum.photos/seed/project1/800/600', description: { ar: "تركيب مجموعة مصاعد عالية السرعة للمكاتب الفاخرة.", en: "Installation of high-speed elevators for luxury offices." }, details: {ar: ["20 مصعد ركاب", "سرعة 6 م/ث", "نظام تحكم ذكي"], en: ["20 Passenger Elevators", "6 m/s Speed", "Smart Control System"]} },
  { id: 2, title: { ar: "مجمع فلل الياسمين", en: "Al Yasmin Villas Compound" }, category: 'Residential', image: 'https://picsum.photos/seed/project2/800/600', description: { ar: "حلول مصاعد منزلية مخصصة لكل فيلا.", en: "Custom home elevator solutions for each villa." }, details: {ar: ["مصاعد هيدروليكية", "تصاميم داخلية فاخرة", "تشغيل هادئ"], en: ["Hydraulic Elevators", "Luxury Interior Designs", "Quiet Operation"]} },
  { id: 3, title: { ar: "مستشفى الحبيب", en: "Al Habib Hospital" }, category: 'Hospitals', image: 'https://picsum.photos/seed/project3/800/600', description: { ar: "مصاعد أسرة ومصاعد خدمة بمعايير صحية صارمة.", en: "Bed and service elevators with strict health standards." }, details: {ar: ["مصاعد مخصصة للأسرة", "مقاومة للبكتيريا", "نظام طوارئ متكامل"], en: ["Bed-specific Elevators", "Antibacterial materials", "Integrated Emergency System"]} },
  { id: 4, title: { ar: "ذا زون مول", en: "The Zone Mall" }, category: 'Commercial', image: 'https://picsum.photos/seed/project4/800/600', description: { ar: "مصاعد بانورامية وسلالم كهربائية لتعزيز تجربة التسوق.", en: "Panoramic elevators and escalators to enhance the shopping experience." }, details: {ar: ["8 مصاعد بانورامية", "16 سلم كهربائي", "زجاج مقاوم"], en: ["8 Panoramic Elevators", "16 Escalators", "Resistant Glass"]} },
];

export const SOLUTIONS_DATA: Solution[] = [
    { id: 1, title: { ar: "مصاعد الركاب", en: "Passenger Elevators" }, image: 'https://picsum.photos/seed/solution1/600/400', description: { ar: "حلول فعالة وآمنة للمباني السكنية والتجارية، بتصاميم عصرية وتقنيات متطورة.", en: "Efficient and safe solutions for residential and commercial buildings, with modern designs and advanced technologies." } },
    { id: 2, title: { ar: "المصاعد البانورامية", en: "Panoramic Elevators" }, image: 'https://picsum.photos/seed/solution2/600/400', description: { ar: "أضف لمسة من الفخامة والجمال لمبناك مع مصاعدنا الزجاجية التي توفر إطلالات خلابة.", en: "Add a touch of luxury and beauty to your building with our glass elevators that offer breathtaking views." } },
    { id: 3, title: { ar: "مصاعد البضائع", en: "Goods Elevators" }, image: 'https://picsum.photos/seed/solution3/600/400', description: { ar: "مصاعد قوية ومتينة مصممة لنقل الحمولات الثقيلة بكفاءة وأمان في المصانع والمستودعات.", en: "Strong and durable elevators designed to transport heavy loads efficiently and safely in factories and warehouses." } },
    { id: 4, title: { ar: "مصاعد المستشفيات", en: "Hospital Elevators" }, image: 'https://picsum.photos/seed/solution4/600/400', description: { ar: "مصممة خصيصاً لتلبية المتطلبات الصارمة للمرافق الصحية، مع التركيز على النظافة والراحة والأمان.", en: "Specially designed to meet the strict requirements of healthcare facilities, with a focus on hygiene, comfort, and safety." } },
    { id: 5, title: { ar: "المصاعد المنزلية", en: "Home Elevators" }, image: 'https://picsum.photos/seed/solution5/600/400', description: { ar: "حلول مدمجة وأنيقة للفلل والمنازل متعددة الطوابق، توفر الراحة وتزيد من قيمة عقارك.", en: "Compact and elegant solutions for villas and multi-story homes, providing convenience and increasing your property's value." } },
    { id: 6, title: { ar: "السلالم المتحركة", en: "Escalators" }, image: 'https://picsum.photos/seed/solution6/600/400', description: { ar: "نوفر سلالم ومماشي كهربائية عالية الجودة للمجمعات التجارية والمطارات ومحطات النقل العام.", en: "We provide high-quality escalators and moving walks for shopping malls, airports, and public transport stations." } },
];
