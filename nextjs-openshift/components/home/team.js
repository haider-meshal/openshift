export default ({ title, description, items }) => (
    <div id="team" className="text-center">
        <div className="container">
            <div className="col-md-8 col-md-offset-2 section-title">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div id="row">
                {
                    items.map((item, key) => (
                        <div key={key} className="col-md-3 col-sm-6 team">
                            <div className="thumbnail"> <img src={item.image} alt={item.image_title} className="team-img" />
                                <div className="caption">
                                    <h4>{item.name}</h4>
                                    <p>{item.position}</p>
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
   <div id="team" className="text-center">
        <div className="container">
            <div className="col-md-8 col-md-offset-2 section-title">
                <h2>Meet the Team</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
            </div>
            <div id="row">
                <div className="col-md-3 col-sm-6 team">
                    <div className="thumbnail"> <img src="static/images/team/01.jpg" alt="..." className="team-img" />
                        <div className="caption">
                            <h4>John Doe</h4>
                            <p>Director</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 team">
                    <div className="thumbnail"> <img src="static/images/team/02.jpg" alt="..." className="team-img" />
                        <div className="caption">
                            <h4>Mike Doe</h4>
                            <p>Senior Designer</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 team">
                    <div className="thumbnail"> <img src="static/images/team/03.jpg" alt="..." className="team-img" />
                        <div className="caption">
                            <h4>Jane Doe</h4>
                            <p>Senior Designer</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 team">
                    <div className="thumbnail"> <img src="static/images/team/04.jpg" alt="..." className="team-img" />
                        <div className="caption">
                            <h4>Karen Doe</h4>
                            <p>Project Manager</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
*/