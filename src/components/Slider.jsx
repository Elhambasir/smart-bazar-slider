import React from 'react'
import './slider.css'
import { IoIosArrowBack } from "react-icons/io";
import '../script.js'
import { IoIosArrowForward } from "react-icons/io";
export const Slider = () => {
  // function to fetch data from api, save to state and render to html
  // const [getData, setData] = React.useState([])
  // React.useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/photos')
  //     .then((response) => response.json())
  //     .then((json) => setData(json))
  // }, [])
  const data = [
    {
      "albumId": 1,
      "id": 1,
      "title": "accusamus beatae ad facilis cum similique qui sunt",
      "url": "https://via.placeholder.com/600/92c952",
      "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
      "albumId": 1,
      "id": 2,
      "title": "reprehenderit est deserunt velit ipsam",
      "url": "https://via.placeholder.com/600/771796",
      "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
    {
      "albumId": 1,
      "id": 3,
      "title": "officia porro iure quia iusto qui ipsa ut modi",
      "url": "https://via.placeholder.com/600/24f355",
      "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    },
    {
      "albumId": 1,
      "id": 4,
      "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
      "url": "https://via.placeholder.com/600/d32776",
      "thumbnailUrl": "https://via.placeholder.com/150/d32776"
    },
    {
      "albumId": 1,
      "id": 5,
      "title": "natus nisi omnis corporis facere molestiae rerum in",
      "url": "https://via.placeholder.com/600/f66b97",
      "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
    },
    {
      "albumId": 1,
      "id": 6,
      "title": "accusamus ea aliquid et amet sequi nemo",
      "url": "https://via.placeholder.com/600/56a8c2",
      "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
    },
    {
      "albumId": 1,
      "id": 7,
      "title": "officia delectus consequatur vero aut veniam explicabo molestias",
      "url": "https://via.placeholder.com/600/b0f7cc",
      "thumbnailUrl": "https://via.placeholder.com/150/b0f7cc"
    },
    {
      "albumId": 1,
      "id": 8,
      "title": "aut porro officiis laborum odit ea laudantium corporis",
      "url": "https://via.placeholder.com/600/54176f",
      "thumbnailUrl": "https://via.placeholder.com/150/54176f"
    },
    {
      "albumId": 1,
      "id": 9,
      "title": "qui eius qui autem sed",
      "url": "https://via.placeholder.com/600/51aa97",
      "thumbnailUrl": "https://via.placeholder.com/150/51aa97"
    },
    {
      "albumId": 1,
      "id": 10,
      "title": "beatae et provident et ut vel",
      "url": "https://via.placeholder.com/600/810b14",
      "thumbnailUrl": "https://via.placeholder.com/150/810b14"
    },
    {
      "albumId": 1,
      "id": 11,
      "title": "nihil at amet non hic quia qui",
      "url": "https://via.placeholder.com/600/1ee8a4",
      "thumbnailUrl": "https://via.placeholder.com/150/1ee8a4"
    },
    {
      "albumId": 1,
      "id": 12,
      "title": "mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores",
      "url": "https://via.placeholder.com/600/66b7d2",
      "thumbnailUrl": "https://via.placeholder.com/150/66b7d2"
    }]
  return (
    <div className="container">
      <div className="slide-header">
        <h3>New Arrivals</h3>
        <a href="#">See More</a>
      </div>
      <div className="wrapper">
        <i id="left" className="fa-solid fa-angle-left"></i>
        <div className="carousel">
          {data.map((item) => {
            return (
              <div className="card" key={item.id} draggable="false">
                <img src={item.url} alt={item.title} />
                <h3>Card Title</h3>
                <p>Description</p>
              </div>
            )
          })}
        </div>
        <i id="right" className="fa-solid fa-angle-right"></i>
      </div>
    </div>
  )
}
