import React from 'react'

const Kard = ({title,content,urlToImage,url}) => {
  return (
    <>
    <div className="card" style={{width: "18rem"}}>
        <img src={urlToImage} className="card-img-top" alt="./img.jpg"/>
        <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
        <a href={url} className="btn btn-primary">View</a>
        </div>
    </div>
    </>
  )
}

export default Kard