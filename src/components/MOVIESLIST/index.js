import React, {useState, useEffect} from 'react'

import './index.css'

function FetchAPI() {
  const [data, setData] = useState([])

  const apiGet = () => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(json => {
        console.log(json)
        setData(json)
      })
  }
  useEffect(() => {
    apiGet()
  }, [])

  return (
    <div>
      <h1>MOVIES LIST</h1>
      {/*} <pre>{JSON.stringify(data, null, 2)}</pre>*/}
      <ul className="movies-list-container">
        {data.map(show => (
          <li key={show.show.id} className="movie-item">
            {show.show.image && (
              <div>
                <img src={show.show.image.medium} alt={show.show.name} />
              </div>
            )}
            <h2>{show.show.name}</h2>
            <p>{show.show.genres.join(' / ')}</p>

            <button type="button">Show Details</button>

            {/* Display additional show details here */}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FetchAPI
