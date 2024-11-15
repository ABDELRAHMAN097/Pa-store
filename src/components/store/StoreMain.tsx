import StoreSearchProducts from './StoreSearchProducts';
import StoreSearchSidebar from '../sidebars/StoreSearchSidebar';

const StoreMain = () => {
  return (
    <div className="section" >
      <div className="container">
        <div className="flex flex-col lg:flex-row-reverse">
          <StoreSearchSidebar />
          <StoreSearchProducts />
        </div>

      </div>
    </div>
  );
};

export default StoreMain;
