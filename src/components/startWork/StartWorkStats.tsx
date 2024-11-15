import { useEffect, useState, useRef } from 'react';

const StartWorkStats = () => {
  const [hired, setHired] = useState(0);
  const [partnerships, setPartnerships] = useState(0);
  const [experience, setExperience] = useState(0);
  const ref = useRef(null); 

  const stats = [
    { label: 'تم توظيفهم', target: 1500, setter: setHired },
    { label: 'شراكة مع الشركات', target: 20, setter: setPartnerships },
    { label: 'سنين خبرة', target: 10, setter: setExperience },
  ];

  useEffect(() => {
    const handleCount = () => {
      stats.forEach(({ target, setter }) => {
        let count = 0;
        const increment = Math.ceil(target / 100); 
        const interval = setInterval(() => {
          count += increment;
          if (count >= target) {
            clearInterval(interval);
            setter(target);
          } else {
            setter(count);
          }
        }, 50); 
      });
    };

   
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          handleCount();
          observer.disconnect(); 
        }
      },
      { threshold: 0.1 } 
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect(); 
    };
  }, []);

  return (
    <div ref={ref}>
      <div className="mx-auto max-w-screen-xl bg-white px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">موثوق به من قبل الشركات</h2>
          <p className="mt-4 text-gray-500 sm:text-xl">
            نحن نقدم لك دعمًا شاملاً من خلال منصات متعددة لضمان حصولك على الدعم الذي تحتاجه لتحقيق أهدافك المهنية.
          </p>
        </div>

        <dl className="mt-6 grid grid-cols-1 gap-4 divide-y divide-gray-100 sm:mt-8  sm:divide-x sm:divide-y-0 md:grid-cols-3">
          {stats.map(({ label }, index) => (
            <div key={index} className="flex flex-col px-4 py-8 text-center">
              <dt className="order-last text-4xl font-bold text-gray-500">{label}</dt>
              <dd className="text-5xl font-extrabold text-primary-text md:text-7xl">
                {index === 0 ? hired : index === 1 ? partnerships : experience}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default StartWorkStats;
