import Breadcrumb from '../components/Breadcrumbs'
import ProductDetails from '../components/product/ProductDetails'
import ProductSlider from '../components/sliders/ProductsSlider'
import MulitSectionProductsSlider from '../components/sliders/MultiSectionProductsSlider';

const Product = () => {
  return (
    <div>
      <Breadcrumb />
      <ProductDetails />
      <ProductSlider title='منتجات مماثلة' buttonTitle='اظهر جميع المنتجات'  />
      <MulitSectionProductsSlider />
    </div>
  )
}

export default Product