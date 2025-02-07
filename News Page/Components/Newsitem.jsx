import defaultimage from "./piclumen-1737984669065.png"
const Newsitem = ({description,title,url, urlToImage}) => {

    return (
        <div className=" newsitem bg-dark text-light d-inline-block mx-2 px-2 py-2 my-2 rounded" style={{maxWidth: "300px"}}>
<img src={urlToImage || defaultimage} className="card-img-top rounded"style={{height: "200px", width: "265px", objectFit: "cover"}} alt="No Image Available"/>
  <div className="card-body">
    <h5 className="card-title text-light">{title.slice(0, 50)}</h5>
    <p className="card-text text-light">{description?description.slice(0, 90) : "The news description can not be provided. Go to the news provider by clicking the button below for complete news and futher details.Sorry For inConvinience"}.</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
    )
}
export default Newsitem;