import { useState, useEffect } from 'react';
import { Button, Drawer, Collapse, IconButton } from '@mui/material'; 
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './styles/storeSearchSidebar.css'; 
import OutlineButton from '../helpers/buttons/OutlineButton';

const JobsSidebar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); 
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [openJobType, setOpenJobType] = useState(true);
  const [openExperience, setOpenExperience] = useState(true);
  const [openWorkType, setOpenWorkType] = useState(true);
  const [openLocation, setOpenLocation] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 991);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderJobTypeCheckboxes = () => (
    <div className="checkbox-filter">
      {['حرفة', 'مجال البرمجة', 'مجال الهندسة', 'مجال طبي'].map((jobType, index) => (
        <div className="input-checkbox" key={index}>
          <input type="checkbox" id={`job-type-${index + 1}`} />
          <label htmlFor={`job-type-${index + 1}`}>
            <span></span>
            {jobType}
          </label>
        </div>
      ))}
    </div>
  );

  const renderExperienceCheckboxes = () => (
    <div className="checkbox-filter">
      {['Fresh', 'Junior', 'Mid', 'Senior', 'Team Lead'].map((experience, index) => (
        <div className="input-checkbox" key={index}>
          <input type="checkbox" id={`experience-${index + 1}`} />
          <label htmlFor={`experience-${index + 1}`}>
            <span></span>
            {experience}
          </label>
        </div>
      ))}
    </div>
  );

  const renderWorkTypeCheckboxes = () => (
    <div className="checkbox-filter">
      {['دوام كامل', 'دوام جزئي'].map((workType, index) => (
        <div className="input-checkbox" key={index}>
          <input type="checkbox" id={`work-type-${index + 1}`} />
          <label htmlFor={`work-type-${index + 1}`}>
            <span></span>
            {workType}
          </label>
        </div>
      ))}
    </div>
  );

  const renderLocationCheckboxes = () => (
    <div className="checkbox-filter">
      {['من المكتب', 'من المنزل', 'هايبرد'].map((location, index) => (
        <div className="input-checkbox" key={index}>
          <input type="checkbox" id={`location-${index + 1}`} />
          <label htmlFor={`location-${index + 1}`}>
            <span></span>
            {location}
          </label>
        </div>
      ))}
    </div>
  );

  return (
    <>
      {isMobile && (
        <Button variant="contained" sx={{margin:'auto', fontSize: '1.5rem'}} className='!bg-primary-text !font-bold !mb-[20px] w-[90%] !py-2  hover:!bg-white duration-300 hover:text-primary-text' onClick={() => setIsDrawerOpen(true)}>
          فلاتر
        </Button>
      )}

      <Drawer anchor="right" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <div style={{ width: 250, padding: 20 }} dir='rtl'>
          {/* Job Type Checkboxes */}
          <div className="aside">
            <div onClick={() => setOpenJobType(!openJobType)} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <h3 className="aside-title">نوع الوظيفة</h3>
              <IconButton size="small">
                <ExpandMoreIcon style={{ transform: openJobType ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.2s' }} />
              </IconButton>
            </div>
            <Collapse in={openJobType}>
              {renderJobTypeCheckboxes()}
            </Collapse>
          </div>

          {/* Experience Level Checkboxes */}
          <div className="aside">
            <div onClick={() => setOpenExperience(!openExperience)} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <h3 className="aside-title">خبرة</h3>
              <IconButton size="small">
                <ExpandMoreIcon style={{ transform: openExperience ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.2s' }} />
              </IconButton>
            </div>
            <Collapse in={openExperience}>
              {renderExperienceCheckboxes()}
            </Collapse>
          </div>

          {/* Work Type Checkboxes */}
          <div className="aside">
            <div onClick={() => setOpenWorkType(!openWorkType)} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <h3 className="aside-title">نوع الدوام</h3>
              <IconButton size="small">
                <ExpandMoreIcon style={{ transform: openWorkType ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.2s' }} />
              </IconButton>
            </div>
            <Collapse in={openWorkType}>
              {renderWorkTypeCheckboxes()}
            </Collapse>
          </div>

          {/* Location Checkboxes */}
          <div className="aside">
            <div onClick={() => setOpenLocation(!openLocation)} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <h3 className="aside-title">مكان العمل</h3>
              <IconButton size="small">
                <ExpandMoreIcon style={{ transform: openLocation ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.2s' }} />
              </IconButton>
            </div>
            <Collapse in={openLocation}>
              {renderLocationCheckboxes()}
            </Collapse>
          </div>

          <OutlineButton text="بحث" isLink={false} LinkclassNames='w-full' classNames='w-full' />
        </div>
      </Drawer>

      {/* Regular view for larger screens */}
      {!isMobile && (
        <div id="aside" className="col-md-3 fixed-sidebar" dir='rtl'>
          {/* Job Type Checkboxes */}
          <div className="aside">
            <div onClick={() => setOpenJobType(!openJobType)} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <h3 className="aside-title">نوع الوظيفة</h3>
              <IconButton size="small">
                <ExpandMoreIcon style={{ transform: openJobType ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.2s' }} />
              </IconButton>
            </div>
            <Collapse in={openJobType}>
              {renderJobTypeCheckboxes()}
            </Collapse>
          </div>

          {/* Experience Level Checkboxes */}
          <div className="aside">
            <div onClick={() => setOpenExperience(!openExperience)} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <h3 className="aside-title">خبرة</h3>
              <IconButton size="small">
                <ExpandMoreIcon style={{ transform: openExperience ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.2s' }} />
              </IconButton>
            </div>
            <Collapse in={openExperience}>
              {renderExperienceCheckboxes()}
            </Collapse>
          </div>

          {/* Work Type Checkboxes */}
          <div className="aside">
            <div onClick={() => setOpenWorkType(!openWorkType)} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <h3 className="aside-title">نوع الدوام</h3>
              <IconButton size="small">
                <ExpandMoreIcon style={{ transform: openWorkType ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.2s' }} />
              </IconButton>
            </div>
            <Collapse in={openWorkType}>
              {renderWorkTypeCheckboxes()}
            </Collapse>
          </div>

          {/* Location Checkboxes */}
          <div className="aside">
            <div onClick={() => setOpenLocation(!openLocation)} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <h3 className="aside-title">مكان العمل</h3>
              <IconButton size="small">
                <ExpandMoreIcon style={{ transform: openLocation ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.2s' }} />
              </IconButton>
            </div>
            <Collapse in={openLocation}>
              {renderLocationCheckboxes()}
            </Collapse>
          </div>

          <OutlineButton text="بحث" isLink={false} LinkclassNames='w-full' classNames='w-full' />
        </div>
      )}
    </>
  );
};

export default JobsSidebar;
