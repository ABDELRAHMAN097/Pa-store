import JobsSidebar from "../../components/sidebars/JobsSidebar";
import JobSearchContent from "./components/JobSearchContent";

const BrowseJobs = () => {
  return (
    <div className="section" >
      <div className="container">
        <div className="flex flex-col lg:flex-row-reverse">
          <JobsSidebar />
          <JobSearchContent />
        </div>

      </div>
    </div>
  );
};

export default BrowseJobs;
