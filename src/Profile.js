import React from 'react'
import './App.css';


function Profile({datas}) {
  return (
    <div>
      {datas.map((item)=>{
        return (
            <div className='map'>
                <img src={item.image} />
                 <div className='status'>
                    <h1>{item.name}</h1>
                     <p>{item.age}</p>
                </div>
            </div>
        )
      })}
    </div>
  )
}

export default Profile
