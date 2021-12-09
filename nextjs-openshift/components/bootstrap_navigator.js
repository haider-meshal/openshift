export default ({ toggle, homeTitle, homeHref, items }) => (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapsed-nav-list">
                    <span className="sr-only">{toggle}</span> <span className="icon-bar"></span>
                    <span className="icon-bar"></span> <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand page-scroll" href={homeHref}>{homeTitle}</a> </div>
            <div className="collapse navbar-collapse" id="collapsed-nav-list">
                <ul className="nav navbar-nav navbar-right">
                    {
                        items.map((item, key) => (
                            <li key={key}><a href={item.href} className="page-scroll">{item.title}</a></li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </nav>
)