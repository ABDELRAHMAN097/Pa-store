import JobCard from '../../../components/cards/JobCard';
const JobSearchContent = () => {
  return (
    <div id="store" className="col-md-9">
      

      {/* jobs */}
      <div className="grid grid-cols-1 gap-4">
        {Array.from({ length: 9 }, (_, index) => (
            <JobCard key={index} />
        ))}
      </div>
      {/* /store products */}

      {/* Store Bottom Filter */}
      <div className="store-filter clearfix">
        <span className="store-qty">Showing 20-100 products</span>
        <ul className="store-pagination">
          <li className="active">1</li>
          <li><a href="#">2</a></li>
          <li><a href="#">3</a></li>
          <li><a href="#">4</a></li>
          <li><a href="#"><i className="fa fa-angle-right"></i></a></li>
        </ul>
      </div>
    </div>
  );
};

export default JobSearchContent;
