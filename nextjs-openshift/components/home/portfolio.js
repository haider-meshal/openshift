export default ({ title, description, items }) => (
    <div id="portfolio" className="text-center ">
        <div className="container">
            <div className="section-title">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div className="row">
                <div className="portfolio-items">
                    {
                        items.map((item, key) => (
                            <div key={key} className="col-sm-6 col-md-4 col-lg-4">
                                <div className="portfolio-item">
                                    <div className="hover-bg">
                                        <a href={item.image_large} title={item.image_large_title} data-lightbox-gallery="gallery1">
                                        <div className="hover-text">
                                                <h4>{item.title}</h4>
                                        </div>
                                        <img src={item.image_small}  className="img-responsive" alt={item.image_small_title}  /> </a> </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
)
/*
    just 
    <div id="portfolio" className="text-center">
        <div className="container">
            <div className="section-title">
                <h2>Gallery</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
            </div>
            <div className="row">
                <div className="portfolio-items">
                    <div className="col-sm-6 col-md-4 col-lg-4">
                        <div className="portfolio-item">
                            <div className="hover-bg">
                                <a href="static/images/portfolio/01-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                                    <div className="hover-text">
                                        <h4>Lorem Ipsum</h4>
                                    </div>
                                    <img src="static/images/portfolio/01-small.jpg" className="img-responsive" alt="Project Title" /> </a> </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-4">
                        <div className="portfolio-item">
                            <div className="hover-bg"> <a href="static/images/portfolio/02-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                                <div className="hover-text">
                                    <h4>Adipiscing Elit</h4>
                                </div>
                                <img src="static/images/portfolio/02-small.jpg" className="img-responsive" alt="Project Title" /> </a> </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-4">
                        <div className="portfolio-item">
                            <div className="hover-bg"> <a href="static/images/portfolio/03-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                                <div className="hover-text">
                                    <h4>Lorem Ipsum</h4>
                                </div>
                                <img src="static/images/portfolio/03-small.jpg" className="img-responsive" alt="Project Title" /> </a> </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-4">
                        <div className="portfolio-item">
                            <div className="hover-bg"> <a href="static/images/portfolio/04-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                                <div className="hover-text">
                                    <h4>Lorem Ipsum</h4>
                                </div>
                                <img src="static/images/portfolio/04-small.jpg" className="img-responsive" alt="Project Title" /> </a> </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-4">
                        <div className="portfolio-item">
                            <div className="hover-bg"> <a href="static/images/portfolio/05-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                                <div className="hover-text">
                                    <h4>Adipiscing Elit</h4>
                                </div>
                                <img src="static/images/portfolio/05-small.jpg" className="img-responsive" alt="Project Title" /> </a> </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-4">
                        <div className="portfolio-item">
                            <div className="hover-bg"> <a href="static/images/portfolio/06-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                                <div className="hover-text">
                                    <h4>Dolor Sit</h4>
                                </div>
                                <img src="static/images/portfolio/06-small.jpg" className="img-responsive" alt="Project Title" /> </a> </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-4">
                        <div className="portfolio-item">
                            <div className="hover-bg"> <a href="static/images/portfolio/07-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                                <div className="hover-text">
                                    <h4>Dolor Sit</h4>
                                </div>
                                <img src="static/images/portfolio/07-small.jpg" className="img-responsive" alt="Project Title" /> </a> </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-4">
                        <div className="portfolio-item">
                            <div className="hover-bg"> <a href="static/images/portfolio/08-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                                <div className="hover-text">
                                    <h4>Lorem Ipsum</h4>
                                </div>
                                <img src="static/images/portfolio/08-small.jpg" className="img-responsive" alt="Project Title" /> </a> </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-4">
                        <div className="portfolio-item">
                            <div className="hover-bg"> <a href="static/images/portfolio/09-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                                <div className="hover-text">
                                    <h4>Adipiscing Elit</h4>
                                </div>
                                <img src="static/images/portfolio/09-small.jpg" className="img-responsive" alt="Project Title" /> </a> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
*/