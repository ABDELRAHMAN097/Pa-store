import { useState, useEffect } from 'react';
import { Button, Drawer, Collapse, Slider, IconButton } from '@mui/material'; 
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './styles/storeSearchSidebar.css'; 
import OutlineButton from '../helpers/buttons/OutlineButton';

const StoreSearchSidebar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); 
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(true);
  const [isPriceOpen, setIsPriceOpen] = useState(true);
  const [isFeaturedOpen, setIsFeaturedOpen] = useState(true); // New state for Featured Filters
  const [selectedType, setSelectedType] = useState<'books' | 'courses'>('books');
  const [priceRange, setPriceRange] = useState<number[]>([0, 100]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handlePriceChange = (_event: Event, newValue: number | number[]) => {
    setPriceRange(newValue as number[]);
  };
  
  const toggleFilter = (filter: string) => {
    switch (filter) {
      case 'categories':
        setIsCategoriesOpen(!isCategoriesOpen);
        break;
      case 'price':
        setIsPriceOpen(!isPriceOpen);
        break;
      case 'featured':
        setIsFeaturedOpen(!isFeaturedOpen); // Toggle Featured Filters
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 991);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isMobile && (
        <Button variant="contained" className='!bg-primary-text hover:!bg-white duration-300 hover:text-primary-text' onClick={() => setIsDrawerOpen(true)}>
          فلاتر
        </Button>
      )}
      
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <div style={{ width: 250, padding: 20 }} dir='rtl'>
          {/* Type Selection */}
          <div className="aside">
            <h3 className="aside-title">نوع البحث</h3>
            <div className="flex gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="type"
                  value="books"
                  checked={selectedType === 'books'}
                  onChange={() => setSelectedType('books')}
                  className="peer hidden"
                />
                <span className="cursor-pointer px-4 py-2 border border-gray-300 rounded-md text-gray-700 peer-checked:border-primary-text peer-checked:text-primary-text">
                  Books
                </span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="type"
                  value="courses"
                  checked={selectedType === 'courses'}
                  onChange={() => setSelectedType('courses')}
                  className="peer hidden"
                />
                <span className="cursor-pointer px-4 py-2 border border-gray-300 rounded-md text-gray-700 peer-checked:border-primary-text peer-checked:text-primary-text">
                  Courses
                </span>
              </label>
            </div>
          </div>

          {/* Categories Filter */}
          <div className="aside">
            <div onClick={() => toggleFilter('categories')} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <h3 className="aside-title">النوع</h3>
              <IconButton size="small">
                <ExpandMoreIcon style={{ transform: isCategoriesOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.2s' }} />
              </IconButton>
            </div>
            <Collapse in={isCategoriesOpen}>
              <div className="checkbox-filter">
                {selectedType === 'books' && ['تاريخ', 'فيزياء', 'عليوم', 'رياضايات'].map((category, index) => (
                  <div className="input-checkbox" key={index}>
                    <input type="checkbox" id={`book-category-${index + 1}`} />
                    <label htmlFor={`book-category-${index + 1}`}>
                      <span></span>
                      {category}
                      <small>(120)</small>
                    </label>
                  </div>
                ))}
                {selectedType === 'courses' && ['برمجة', 'جرافيك ديزاين', 'ديجيتال ماركيتينج', 'soft skills'].map((category, index) => (
                  <div className="input-checkbox" key={index}>
                    <input type="checkbox" id={`course-category-${index + 1}`} />
                    <label htmlFor={`course-category-${index + 1}`}>
                      <span></span>
                      {category}
                      <small>(120)</small>
                    </label>
                  </div>
                ))}
              </div>
            </Collapse>
          </div>

          {/* Price Filter */}
          <div className="aside">
            <div onClick={() => toggleFilter('price')} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <h3 className="aside-title">Price</h3>
              <IconButton size="small">
                <ExpandMoreIcon style={{ transform: isPriceOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.2s' }} />
              </IconButton>
            </div>
            <Collapse in={isPriceOpen}>
              <div className="price-filter" dir='ltr'>
                <label>Price Range: {priceRange[0]} - {priceRange[1]}</label>
                <Slider
                  value={priceRange}
                  onChange={handlePriceChange}
                  valueLabelDisplay="auto"
                  color="error"
                  min={0}
                  max={200}
                  step={1}
                  style={{ marginTop: '10px' }} 
                />
              </div>
            </Collapse>
          </div>

          {/* Featured Filters */}
          <div className="aside">
            <div onClick={() => toggleFilter('featured')} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <h3 className="aside-title">مميز</h3>
              <IconButton size="small">
                <ExpandMoreIcon style={{ transform: isFeaturedOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.2s' }} />
              </IconButton>
            </div>
            <Collapse in={isFeaturedOpen}>
              <div className="checkbox-filter">
                {['جديد', 'خصم', 'الافضل'].map((feature, index) => (
                  <div className="input-checkbox" key={index}>
                    <input type="checkbox" id={`feature-${index + 1}`} />
                    <label htmlFor={`feature-${index + 1}`}>
                      <span></span>
                      {feature}
                    </label>
                  </div>
                ))}
              </div>
            </Collapse>
          </div>
          
          <OutlineButton text="بحث" isLink={false} LinkclassNames='w-full' classNames='w-full' />
        </div>
      </Drawer>

      {/* Regular view for larger screens */}
      {!isMobile && (
        <div id="aside" className="col-md-3 fixed-sidebar" dir='rtl'>
          {/* Type Selection */}
          <div className="aside">
            <h3 className="aside-title">نوع البحث</h3>
            <div className="flex gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="type"
                  value="books"
                  checked={selectedType === 'books'}
                  onChange={() => setSelectedType('books')}
                  className="peer hidden"
                />
                <span className="cursor-pointer px-4 py-2 border border-gray-300 rounded-md text-gray-700 peer-checked:border-primary-text peer-checked:text-primary-text">
                  Books
                </span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="type"
                  value="courses"
                  checked={selectedType === 'courses'}
                  onChange={() => setSelectedType('courses')}
                  className="peer hidden"
                />
                <span className="cursor-pointer px-4 py-2 border border-gray-300 rounded-md text-gray-700 peer-checked:border-primary-text peer-checked:text-primary-text">
                  Courses
                </span>
              </label>
            </div>
          </div>

          {/* Categories Filter */}
          <div className="aside">
            <div onClick={() => toggleFilter('categories')} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <h3 className="aside-title">النوع</h3>
              <IconButton size="small">
                <ExpandMoreIcon style={{ transform: isCategoriesOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.2s' }} />
              </IconButton>
            </div>
            <Collapse in={isCategoriesOpen}>
              <div className="checkbox-filter">
                {selectedType === 'books' && ['تاريخ', 'فيزياء', 'عليوم', 'رياضايات'].map((category, index) => (
                  <div className="input-checkbox" key={index}>
                    <input type="checkbox" id={`book-category-${index + 1}`} />
                    <label htmlFor={`book-category-${index + 1}`}>
                      <span></span>
                      {category}
                      <small>(120)</small>
                    </label>
                  </div>
                ))}
                {selectedType === 'courses' && ['برمجة', 'جرافيك ديزاين', 'ديجيتال ماركيتينج', 'soft skills'].map((category, index) => (
                  <div className="input-checkbox" key={index}>
                    <input type="checkbox" id={`course-category-${index + 1}`} />
                    <label htmlFor={`course-category-${index + 1}`}>
                      <span></span>
                      {category}
                      <small>(120)</small>
                    </label>
                  </div>
                ))}
              </div>
            </Collapse>
          </div>

          {/* Price Filter */}
          <div className="aside">
            <div onClick={() => toggleFilter('price')} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <h3 className="aside-title">Price</h3>
              <IconButton size="small">
                <ExpandMoreIcon style={{ transform: isPriceOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.2s' }} />
              </IconButton>
            </div>
            <Collapse in={isPriceOpen}>
              <div className="price-filter" dir='ltr'>
                <label>Price Range: {priceRange[0]} - {priceRange[1]}</label>
                <Slider
                  value={priceRange}
                  onChange={handlePriceChange}
                  valueLabelDisplay="auto"
                  color="error"
                  min={0}
                  max={200}
                  step={1}
                  style={{ marginTop: '10px' }} 
                />
              </div>
            </Collapse>
          </div>

          {/* Featured Filters */}
          <div className="aside">
            <div onClick={() => toggleFilter('featured')} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <h3 className="aside-title">مميز</h3>
              <IconButton size="small">
                <ExpandMoreIcon style={{ transform: isFeaturedOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.2s' }} />
              </IconButton>
            </div>
            <Collapse in={isFeaturedOpen}>
              <div className="checkbox-filter">
                {['جديد', 'خصم', 'الافضل'].map((feature, index) => (
                  <div className="input-checkbox" key={index}>
                    <input type="checkbox" id={`feature-${index + 1}`} />
                    <label htmlFor={`feature-${index + 1}`}>
                      <span></span>
                      {feature}
                    </label>
                  </div>
                ))}
              </div>
            </Collapse>
          </div>
          
          <OutlineButton text="بحث" isLink={false} LinkclassNames='w-full' classNames='w-full' />
        </div>
      )}
    </>
  );
};

export default StoreSearchSidebar;
