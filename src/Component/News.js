import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes  from "prop-types";
export class News extends Component {
    static defaultProps = {
        country : 'in',
        // pageSize: 8,
        category: 'sports'
    }
     
    static propTypes = {
        country : PropTypes.string,
        pageSize: PropTypes.number,
        category : PropTypes.string
    }

  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      loading: false,
      page: 1,


    };
    document.title = `NewsUp-${this.props.category} `;
    // console.log("Hello i am a constructor from news component")
  }

  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=20`;
    let data = await fetch(url);

    let parsedData = await data.json();

    this.setState({ articles: parsedData.articles , totalResults: parsedData.totalResults });
  }

    HandlePrevious = async()=>{
        console.log("Previous")
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page-1}&pageSize=20`;

        let data = await fetch(url);
        let parsedData = await data.json()

        console.log(parsedData)
       console.log(this.state.totalResults)

        this.setState({
            page: this.state.page - 1,
            articles : parsedData.articles
        })
    }




    HandleNext = async()=>{
        console.log("Next")

        if(this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

        }
        else{

            
            
            
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=20`;
            
            let data = await fetch(url);
            let parsedData = await data.json()
            
            console.log(parsedData)
            
            
            this.setState({
                page: this.state.page + 1,
                articles : parsedData.articles
            })
        }
        }
        render() {
            return (
                <div className="container bg-secondary relative">

                <div className="container  absolute ">
        <center>
            
             <h1 className="py-5 ">News Up top headlines</h1>
            </center>

        <div className="row align-item-center " >
          {this.state.articles.map((element) => {
              return (
                  <div className="col-lg-3 col-sm-6  col " key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 12) : ""}
                  description={
                      element.description ? element.description.slice(0, 88) : ""
                    }
                    imageurl={element.urlToImage}
                    newsurl={element.url}

                    author={element.author}

                    date={element.publishedAt}



                    />
              </div>
            );
        })}
        </div>

        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            className="btn btn-dark"
            onClick={() => {
                this.HandlePrevious();
            }}
            >
            {" "}
            &larr; Previous
          </button>
          <button
          disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/20)}
            className="btn btn-dark"
            onClick={() => {
                this.HandleNext();
            }}
            >
            Next &rarr;
          </button>
        </div>
      </div>
              </div>
    );
  }
}

export default News;
