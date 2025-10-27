import React, { useEffect, useState } from 'react'
import data from '../Cards.json'
import { IoBagOutline } from "react-icons/io5";
import './Tranding.css'

function Tranding() {
  const [trData, setTrData] = useState([])

  console.log('card Data -->', data)

  const filterData = () => {
    const trandingData = data.filter((e) => e.is_tranding == "yes")
    setTrData(trandingData)
    console.log(trData)
  }

  useEffect(() => {
    filterData()
  }, [])

  return (
    <div className='TrandingSection'>
      <div className="header">
        <h5>Tranding</h5>
        <div className="heading">
          <h2>Tranding Games </h2>
          <button>View All</button>
        </div>
      </div>
      <div className="TRcards">
        {
          trData.map((e) => {
            return (
              <div key={e.id} className='card'>
                <div className="img">
                  <img src={e.img_path} alt={e.game_name} />
                  <div className="price">
                    <p>${e.old_price}</p>
                    <p>${e.new_price}</p>
                  </div>
                </div>
                <div className="text">
                  <div className="data">
                    <p>{e.game_type}</p>
                    <h2 className='GameName'>{e.game_name}</h2>
                  </div>
                  <div className="icon">
                    <IoBagOutline />
                  </div>
                </div>

              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Tranding