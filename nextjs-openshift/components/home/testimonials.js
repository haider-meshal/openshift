export default ({ title, items }) => (
    <div id="testimonials">
        <div className="container">
            <div className="section-title text-center">
                <h2>{title}</h2>
            </div>
            <div className="row">
                {
                    items.map((item, key) => (
                        <div key={key} className="col-md-4">
                            <div className="testimonial">
                                <div className="testimonial-image"> <img src={item.image} alt={item.image_title} /> </div>
                                <div className="testimonial-content">
                                    <p>{item.paragraph}</p>
                                    <div className="testimonial-meta"> {item.name} </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>

)
/*
 <div id="testimonials">
        <div className="container">
            <div className="section-title text-center">
                <h2>What our clients say</h2>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="testimonial">
                        <div className="testimonial-image"> <img src="static/images/testimonials/01.jpg" alt="" /> </div>
                        <div className="testimonial-content">
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."</p>
                            <div className="testimonial-meta"> - John Doe </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="testimonial">
                        <div className="testimonial-image"> <img src="static/images/testimonials/02.jpg" alt="" /> </div>
                        <div className="testimonial-content">
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis."</p>
                            <div className="testimonial-meta"> - Johnathan Doe </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="testimonial">
                        <div className="testimonial-image"> <img src="static/images/testimonials/03.jpg" alt="" /> </div>
                        <div className="testimonial-content">
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."</p>
                            <div className="testimonial-meta"> - John Doe </div>
                        </div>
                    </div>
                </div>
                <div className="row"> </div>
                <div className="col-md-4">
                    <div className="testimonial">
                        <div className="testimonial-image"> <img src="static/images/testimonials/04.jpg" alt="" /> </div>
                        <div className="testimonial-content">
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."</p>
                            <div className="testimonial-meta"> - Johnathan Doe </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="testimonial">
                        <div className="testimonial-image"> <img src="static/images/testimonials/05.jpg" alt="" /> </div>
                        <div className="testimonial-content">
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."</p>
                            <div className="testimonial-meta"> - John Doe </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="testimonial">
                        <div className="testimonial-image"> <img src="static/images/testimonials/06.jpg" alt="" /> </div>
                        <div className="testimonial-content">
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis."</p>
                            <div className="testimonial-meta"> - Johnathan Doe </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

*/