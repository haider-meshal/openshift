export default ({title, description,name_placeholder,email_placeholder,message_placeholder,send,addressTitle,address1,address2,phoneTitle,phone,emailTitle,email,facebook,twitter,google,youtube}) => (
    <div id="contact">
        <div className="container">
            <div className="col-md-8">
                <div className="row">
                    <div className="section-title">
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>
                    <form name="sentMessage" id="contactForm" noValidate>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" id="name" className="form-control" placeholder={name_placeholder} required="required" />
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="email" id="email" className="form-control" placeholder={email_placeholder} required="required" />
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <textarea name="message" id="message" className="form-control" rows="4" placeholder={message_placeholder} required></textarea>
                            <p className="help-block text-danger"></p>
                        </div>
                        <div id="success"></div>
                        <button type="submit" className="btn btn-custom btn-lg">{send}</button>
                    </form>
                </div>
            </div>
            <div className="col-md-3 col-md-offset-1 contact-info">
                <div className="contact-item">
                    <h3>Contact Info</h3>
                    <p><span><i className="fa fa-map-marker"></i> {addressTitle}</span>{address1}<br />
                        {address2}</p>
                </div>
                <div className="contact-item">
                    <p><span><i className="fa fa-phone"></i> {phoneTitle}</span> {phone}</p>
                </div>
                <div className="contact-item">
                    <p><span><i className="fa fa-envelope-o"></i> {emailTitle}</span> {email}</p>
                </div>
            </div>
            <div className="col-md-12">
                <div className="row">
                    <div className="social">
                        <ul>
                            <li><a href={facebook}><i className="fa fa-facebook"></i></a></li>
                            <li><a href={twitter}><i className="fa fa-twitter"></i></a></li>
                            <li><a href={google}><i className="fa fa-google-plus"></i></a></li>
                            <li><a href={youtube}><i className="fa fa-youtube"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
)