export default ({copyright, url,title})=>(
    <div id="footer">
    <div className="container text-center">
        <p>&copy; {copyright} <a href={url} rel="nofollow">{title}</a></p>
    </div>
</div>
)