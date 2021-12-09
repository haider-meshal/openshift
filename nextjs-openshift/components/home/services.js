export default ({ title, description, items }) => (
    <div id="services" className="text-center">
        <div className="container">
            <div className="section-title">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div className="row">
                {
                    items.map((item, key) => {
                       return <div key={key} className="col-md-4"> <i className={`fa ${item.icon_font_class}`}></i>
                            <div className="service-desc">
                                <h3>{item.title}</h3>
                                <p>{item.content}</p>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    </div>

)
/*
   <div id="services" className="text-center">
        <div className="container">
            <div className="section-title">
                <h2>Our Services</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
            </div>
            <div className="row">
                <div className="col-md-4"> <i className="fa fa-wordpress"></i>
                    <div className="service-desc">
                        <h3>Lorem ipsum dolor</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.</p>
                    </div>
                </div>
                <div className="col-md-4"> <i className="fa fa-cart-arrow-down"></i>
                    <div className="service-desc">
                        <h3>Consectetur adipiscing</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className="col-md-4"> <i className="fa fa-cloud-download"></i>
                    <div className="service-desc">
                        <h3>Lorem ipsum dolor</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4"> <i className="fa fa-language"></i>
                    <div className="service-desc">
                        <h3>Consectetur adipiscing</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.</p>
                    </div>
                </div>
                <div className="col-md-4"> <i className="fa fa-plane"></i>
                    <div className="service-desc">
                        <h3>Lorem ipsum dolor</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.</p>
                    </div>
                </div>
                <div className="col-md-4"> <i className="fa fa-pie-chart"></i>
                    <div className="service-desc">
                        <h3>Consectetur adipiscing</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

*/