import React, { useState } from 'react';
import Breadcrumb from '../components/Breadcrumbs';

interface ProductItemProps {
    imageUrl: string;
    title: string;
    size: string;
    price: string;
    quantity: number;
}

const Cart: React.FC = () => {
    return (
        <>
            <Breadcrumb />
            <div className="container  mx-auto bg-white py-4" >
                <h1 className="text-4xl lg:text-5xl font-bold text-primary-text text-center">عربة التسوق</h1>

                <div className="grid md:grid-cols-3 gap-8 mt-16">
                    <div className="md:col-span-2 space-y-4">
                        <ProductItem
                            imageUrl='https://readymadeui.com/images/product14.webp'
                            title='حذاء مخملي'
                            size='MD'
                            price='20.00 دولار'
                            quantity={2}
                        />
                        <hr className="border-gray-300" />
                        <ProductItem
                            imageUrl='https://readymadeui.com/images/watch5.webp'
                            title='ساعة ذكية تيمكس'
                            size='SM'
                            price='60.00 دولار'
                            quantity={1}
                        />
                        <hr className="border-gray-300" />
                        <ProductItem
                            imageUrl='https://readymadeui.com/images/watch4.webp'
                            title='فرنسي اتصال'
                            size='LG'
                            price='40.00 دولار'
                            quantity={1}
                        />
                        <hr className="border-gray-300" />
                        <ProductItem
                            imageUrl='https://readymadeui.com/images/watch7.webp'
                            title='ساعة ذكية'
                            size='LG'
                            price='60.00 دولار'
                            quantity={1}
                        />
                    </div>

                    <div className="bg-white shadow-lg border border-primary-text p-6 rounded-md  h-max">
                        <h3 className="text-lg max-sm:text-base font-bold text-gray-800 border-b border-gray-300 pb-2">ملخص الطلب</h3>
                        <OrderSummary />
                    </div>
                </div>
            </div>
        </>
    );
};

const ProductItem: React.FC<ProductItemProps> = ({ imageUrl, title, size, price, quantity }) => (
    <div className="grid grid-cols-3 items-start gap-4">
        <div className="col-span-2 flex items-start gap-4">
            <div className="w-40 h-40 max-sm:w-24 max-sm:h-24 shrink-0 bg-gray-100 p-2 rounded-md">
                <img src={imageUrl} alt={title} className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
                <h3 className="font-bold text-3xl text-gray-800">{title}</h3>
                <p className="text-2xl font-semibold text-gray-500 mt-0.5"><span className='text-primary-text'>المقاس:</span> {size}</p>
                <button type="button" className="mt-6 font-semibold text-primary-text text-xl flex items-center gap-1 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-current inline" viewBox="0 0 24 24">
                        <path d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z" />
                        <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z" />
                    </svg>
                    حذف
                </button>
            </div>
        </div>
        <div className="ml-auto">
            <h4 className="text-3xl font-bold text-gray-800">{price}</h4>
            <QuantityButton initialQuantity={quantity} />
        </div>
    </div>
);

const QuantityButton: React.FC<{ initialQuantity: number }> = ({ initialQuantity }) => {
    const [quantity, setQuantity] = useState(initialQuantity);

    const increment = () => setQuantity((prev) => prev + 1);
    const decrement = () => {
        if (quantity > 1) setQuantity((prev) => prev - 1);
    };

    return (
        <div className="mt-6 flex items-center">
            <button onClick={decrement} className="px-3 py-1.5 border border-gray-300 text-gray-800 text-lg rounded-md">
                -
            </button>
            <span className="mx-3 font-bold text-2xl">{quantity}</span>
            <button onClick={increment} className="px-3 py-1.5 border border-gray-300 text-gray-800 text-lg rounded-md">
                +
            </button>
        </div>
    );
};

const OrderSummary: React.FC = () => {
    return (
        <form className="mt-6">
            <div>
                <h3 className="text-xl text-gray-800 font-semibold mb-4">أدخل التفاصيل</h3>
                <div className="space-y-3">
                    <InputField placeholder="الاسم الكامل" type="text" />
                    <InputField placeholder="البريد الإلكتروني" type="email" />
                    <InputField placeholder="رقم الهاتف" type="number" />
                </div>
            </div>
            <OrderTotals />
            <CheckoutButtons />
        </form>
    );
};

const InputField: React.FC<{ placeholder: string; type: string }> = ({ placeholder, type }) => (
    <div className="relative flex items-center">
        <input type={type} placeholder={placeholder} className="px-4 py-2.5 bg-white text-gray-800 rounded-md w-full text-lg border-b focus:border-gray-800 outline-none" />
        <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" className="w-4 h-4 absolute right-4" viewBox="0 0 24 24">
            <circle cx="10" cy="7" r="6" />
            <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" />
        </svg>
    </div>
);

const OrderTotals: React.FC = () => (
    <ul className="text-gray-800 mt-6 space-y-3">
        <li className="flex flex-wrap gap-4 text-lg">المجموع الفرعي <span className="ml-auto font-bold">$200.00</span></li>
        <li className="flex flex-wrap gap-4 text-lg">الشحن <span className="ml-auto font-bold">$2.00</span></li>
        <li className="flex flex-wrap gap-4 text-lg">المجموع الكلي <span className="ml-auto font-bold text-2xl">$202.00</span></li>
    </ul>
);

const CheckoutButtons: React.FC = () => (
    <div className="flex justify-between mt-4">
        <button type="button" className="border border-gray-300 w-[49%] rounded-md py-2 bg-gray-100 font-bold text-lg text-gray-800 hover:bg-gray-200 transition-all">إلغاء</button>
        <button type="submit" className="border border-gray-300 w-[49%] rounded-md py-2 bg-primary-text font-bold text-lg text-white hover:bg-red-950 transition-all">الدفع</button>
    </div>
);

export default Cart;
