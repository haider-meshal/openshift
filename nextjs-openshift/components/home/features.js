export default ({ title, items }) => (
    <div id="features" className="text-center">
        <div className="container">
            <div className="col-md-10 col-md-offset-1 section-title">
                <h2>{title}</h2>
            </div>
            <div className="row">
                {
                    items.map((item , key) => {
                        console.log(item);
                        return (
                            <div key={key} className="col-xs-6 col-md-3"> <i className={`fa ${item.icon_font_class}`}></i>
                                <h3>{item.title}</h3>
                                <p>{item.content}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
)

/*
    <div id="features" className="text-center">
        <div className="container">
            <div className="col-md-10 col-md-offset-1 section-title">
                <h2>Features</h2>
            </div>
            <div className="row">
                <div className="col-xs-6 col-md-3"> <i className="fa fa-comments-o"></i>
                    <h3>Lorem ipsum</h3>
                    <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
                </div>
                <div className="col-xs-6 col-md-3"> <i className="fa fa-bullhorn"></i>
                    <h3>Dolor sit amet</h3>
                    <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque.</p>
                </div>
                <div className="col-xs-6 col-md-3"> <i className="fa fa-group"></i>
                    <h3>Tempus eleifend</h3>
                    <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
                </div>
                <div className="col-xs-6 col-md-3"> <i className="fa fa-magic"></i>
                    <h3>Pellentesque</h3>
                    <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque.</p>
                </div>
            </div>
        </div>
    </div>
*/