import  { useState } from 'react';
import Breadcrumb from '../components/Breadcrumbs';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const [isShippingDifferent, setIsShippingDifferent] = useState(false);
  const [createAccount, setCreateAccount] = useState(false);
  
  return (
    <div dir='rtl'>
      <Breadcrumb />
      <div className="section">
        {/* Container */}
        <div className="container">
          {/* Row */}
          <div className="row">

            <div className="col-md-7">
              {/* تفاصيل الفوترة */}
              <div className="billing-details">
                <div className="section-title">
                  <h3 className="title">عنوان الفوترة</h3>
                </div>
                <div className="form-group">
                  <input className="input" type="text" name="first-name" placeholder="الاسم الأول" />
                </div>
                <div className="form-group">
                  <input className="input" type="text" name="last-name" placeholder="اسم العائلة" />
                </div>
                <div className="form-group">
                  <input className="input" type="email" name="email" placeholder="البريد الإلكتروني" />
                </div>
                <div className="form-group">
                  <input className="input" type="text" name="address" placeholder="العنوان" />
                </div>
                <div className="form-group">
                  <input className="input" type="text" name="city" placeholder="المدينة" />
                </div>
                <div className="form-group">
                  <input className="input" type="text" name="country" placeholder="الدولة" />
                </div>
                <div className="form-group">
                  <input className="input" type="text" name="zip-code" placeholder="الرمز البريدي" />
                </div>
                <div className="form-group">
                  <input className="input" type="tel" name="tel" placeholder="الهاتف" />
                </div>
                <div className="form-group">
                  <div className="input-checkbox">
                    <input
                      type="checkbox"
                      id="create-account"
                      checked={createAccount}
                      onChange={() => setCreateAccount(!createAccount)}
                    />
                    <label htmlFor="create-account">
                      <span></span>
                      إنشاء حساب؟
                    </label>
                    {createAccount && (
                      <div className="caption">
                        <p>لوريم إيبسوم دولار سيت أميت، كونسيكتيتور أديبيسيسينغ إليت، سيد دو إييوسمد تيمبور إنسيديدونت.</p>
                        <input className="input" type="password" name="password" placeholder="أدخل كلمة المرور الخاصة بك" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {/* /تفاصيل الفوترة */}

              {/* تفاصيل الشحن */}
              <div className="shipping-details">
                <div className="section-title">
                  <h3 className="title">عنوان الشحن</h3>
                </div>
                <div className="input-checkbox">
                  <input
                    type="checkbox"
                    id="shipping-address"
                    checked={isShippingDifferent}
                    onChange={() => setIsShippingDifferent(!isShippingDifferent)}
                  />
                  <label htmlFor="shipping-address">
                    <span></span>
                    الشحن إلى عنوان مختلف؟
                  </label>
                  {isShippingDifferent && (
                    <div className="caption">
                      <div className="form-group">
                        <input className="input" type="text" name="first-name" placeholder="الاسم الأول" />
                      </div>
                      <div className="form-group">
                        <input className="input" type="text" name="last-name" placeholder="اسم العائلة" />
                      </div>
                      <div className="form-group">
                        <input className="input" type="email" name="email" placeholder="البريد الإلكتروني" />
                      </div>
                      <div className="form-group">
                        <input className="input" type="text" name="address" placeholder="العنوان" />
                      </div>
                      <div className="form-group">
                        <input className="input" type="text" name="city" placeholder="المدينة" />
                      </div>
                      <div className="form-group">
                        <input className="input" type="text" name="country" placeholder="الدولة" />
                      </div>
                      <div className="form-group">
                        <input className="input" type="text" name="zip-code" placeholder="الرمز البريدي" />
                      </div>
                      <div className="form-group">
                        <input className="input" type="tel" name="tel" placeholder="الهاتف" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {/* /تفاصيل الشحن */}

              {/* ملاحظات الطلب */}
              <div className="order-notes">
                <textarea className="input" placeholder="ملاحظات الطلب"></textarea>
              </div>
              {/* /ملاحظات الطلب */}
            </div>

            {/* تفاصيل الطلب */}
            <div className="col-md-5 order-details">
              <div className="section-title text-center">
                <h3 className="title">طلبك</h3>
              </div>
              <div className="order-summary">
                <div className="order-col">
                  <div><strong>المنتج</strong></div>
                  <div><strong>الإجمالي</strong></div>
                </div>
                <div className="order-products">
                  <div className="order-col">
                    <div>1x اسم المنتج هنا</div>
                    <div>$980.00</div>
                  </div>
                  <div className="order-col">
                    <div>2x اسم المنتج هنا</div>
                    <div>$980.00</div>
                  </div>
                </div>
                <div className="order-col">
                  <div>الشحن</div>
                  <div><strong>مجاني</strong></div>
                </div>
                <div className="order-col">
                  <div><strong>الإجمالي</strong></div>
                  <div><strong className="order-total">$2940.00</strong></div>
                </div>
              </div>
              <div className="payment-method">
                <div className="input-radio">
                  <input type="radio" name="payment" id="payment-1" />
                  <label htmlFor="payment-1">
                    <span></span>
                    التحويل البنكي المباشر
                  </label>
                  <div className="caption">
                    <p>لوريم إيبسوم دولار سيت أميت، كونسيكتيتور أديبيسيسينغ إليت، سيد دو إييوسمد تيمبور إنسيديدونت.</p>
                  </div>
                </div>
                <div className="input-radio">
                  <input type="radio" name="payment" id="payment-2" />
                  <label htmlFor="payment-2">
                    <span></span>
                    الدفع بواسطة شيك
                  </label>
                  <div className="caption">
                    <p>لوريم إيبسوم دولار سيت أميت، كونسيكتيتور أديبيسيسينغ إليت، سيد دو إييوسمد تيمبور إنسيديدونت.</p>
                  </div>
                </div>
                <div className="input-radio">
                  <input type="radio" name="payment" id="payment-3" />
                  <label htmlFor="payment-3">
                    <span></span>
                    نظام باي بال
                  </label>
                  <div className="caption">
                    <p>لوريم إيبسوم دولار سيت أميت، كونسيكتيتور أديبيسيسينغ إليت، سيد دو إييوسمد تيمبور إنسيديدونت.</p>
                  </div>
                </div>
              </div>
              <div className="input-checkbox">
                <input type="checkbox" id="terms" />
                <label htmlFor="terms">
                  <span></span>
                  لقد قرأت وأقبل <Link to="#">الشروط والأحكام</Link>
                </label>
              </div>
              <Link to="#" className="primary-btn order-submit">تقديم الطلب</Link>
            </div>
            {/* /تفاصيل الطلب */}
          </div>
          {/* /Row */}
        </div>
        {/* /Container */}
      </div>
    </div>
  );
};

export default Checkout;
