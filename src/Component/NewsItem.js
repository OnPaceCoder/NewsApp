import React, { Component } from 'react'

export class NewsItem extends Component {
   

  render() {
    let {title , description , imageurl , newsurl , author , date} = this.props;
    return (
        <div className='my-5'>

        <div className="card " style={{width: '18rem' , height:"50vh", overflow:"auto"}}>
        <img src={imageurl} className="card-img-top" alt="..." />
        <div className="card-body" style={{height:"40vh"}}>
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <a href={newsurl} className="btn btn-primary btn-sm">Read more</a>
          <p className='card-text'><small className='text-muted'>By {author} on {date}</small></p>
        </div>
      </div>
    
        </div>
    )
  }
}

export default NewsItem