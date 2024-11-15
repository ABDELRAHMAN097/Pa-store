import React, { useState } from 'react';
import './style/startWorkMain.css'; // Import your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

interface FAQ {
  question: string;
  answer: string;
}

const StartWorkFAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqData: FAQ[] = [
    {
      question: "ما هو الغرض من هذا القلم؟",
      answer: "هذا القلم مصمم لتوفير كود قاعدة لمطوري الويب لعمل Accordion للأسئلة الشائعة.",
    },
    {
      question: "ما هو Accordion؟",
      answer: "Accordion هو قائمة رأسية متكدسة من العناوين التي يمكن للمستخدمين النقر عليها للكشف عن المزيد من المعلومات.",
    },
    {
      question: "كيف يمكنني تخصيص Accordion؟",
      answer: "يمكنك تخصيص Accordion عن طريق تعديل أنماط CSS وتغيير الهيكل HTML حسب احتياجاتك.",
    },
    {
      question: "هل هذا Accordion متجاوب؟",
      answer: "نعم، هذا Accordion مصمم ليكون متجاوبًا وسيتكيف مع حجم الشاشة لضمان تجربة مستخدم جيدة على كل من أجهزة الكمبيوتر المكتبية والأجهزة المحمولة.",
    },
    {
      question: "هل يمكنني استخدام هذا Accordion في مشروعي؟",
      answer: "بالتأكيد! لا تتردد في استخدام هذا Accordion في مشاريعك. يمكنك تعديله وتكييفه حسب احتياجاتك.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='bg-gray-900 container-fluid pb-[50px]'>
      <div className="container  bg-gray-900" dir='rtl'>
      <div className="accordion__wrapper bg-gray-900">
        <h1 className="accordion__title  !text-primary-text">الأسئلة الشائعة</h1>
        {faqData.map((item, index) => (
          <div className="accordion" key={index}>
            <div className="accordion__header" onClick={() => toggleAccordion(index)}>
              <h2 className="accordion__question !text-white">{item.question}</h2>
              <span className="accordion__icon">
                <FontAwesomeIcon icon={activeIndex === index ? faMinus : faPlus} />
              </span>
            </div>
            <div className="accordion__content" style={{ height: activeIndex === index ? `${item.answer.length * 0.1}rem` : '0' }}>

              <p className="accordion__answer text-white">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default StartWorkFAQ;
