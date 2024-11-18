import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice: number;
  description: string;
  images: string[];
  category: string;
  stockStatus: string;
}

interface ProductContextType {
  products: Product[];
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
};

export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  
  const [products] = useState<Product[]>([
    {
      id: 'kayfaTbe3Ehawaa',
      name: 'كيف تبيع الهواء',
      price: 2,
      oldPrice: 12,
      description: 'هل فكرت يوماً ما أنك تستطيعُ بيعَ شيءٍ غير ملموس مثل الهواء؟ "كيف تبيع الهواء" رحلةٌ غير اعتيادية في عالم البيع، يخبرك فيها أنك قادر على بيع أي شيء في الدنيا، حتى لو أردت بيع الهواء، ويتحدث الكاتب معك وكأنكما تجلسان في مقهى وتستمتعان بقهوة الصباح. التجربة الحياتية: كُتب هذا الكتاب في ظلِّ ظروفِ الحربِ على غزّة، مما يجعله يعكسُ تجربةً حياتيّةً حقيقيّةً عن البقاءِ والصمودِ، فهو ليس مجرّد كتابٍ عن المبيعاتِ، وسيفتح أمامك أبواباً من الفرص ستُحدث تحولاً ملموساً في حياتك. اللغة واللهجة: تمت كتابة الكتاب باللهجةِ البيضاء لتسهيل إيصال الأفكار للقرّاء من مختلفِ الفئاتِ، بهدفِ جعلهِ سهلَ الفهمِ ومناسبًا للجميع. الرسالة الأخيرة: البيع ليس مجرد مهارة، بل هو ركيزةٌ أساسيّة في الحياة، ويأخذك الكتاب في رحلة متأنية في مرحلة اللاوعي لاكتشاف أسرار البيع تبدأ من مرحلة ما قبل البيع ولا تنتهي أبدًا، ويطرحُ لكَ أفكارًا لبيعِ أشياءَ لم تتخيّلْ يومًا أنَّكَ تستطيعُ بيعَها، ويخبرك بأن على كلِّ إنسانٍ تعلُّمُها، فكلّما كنتَ أفضلَ في البيعِ، كلّما كانتْ حياتُك أفضلَ. أتمنى أن ألتقي بك مرة أخرى في كتابٍ جديد، حيث نواصلُ استكشافَ عالمِ الفرَص سويًا، لقد استمتعت في الحوار معك، وآمل أن تجد هذه الأفكار ملهمةً لك.',
      images: [
        '/img/home/start-work-category.jpeg',
        '/img/home/books-category.jpg',
        '/img/home/courses-category.webp',
      ],
      category: 'كتب',
      stockStatus: 'متوفر في المخزون',
    }, 
  ]);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
