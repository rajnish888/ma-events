import React from 'react';
import Home from '../../assets/Images/Home.png';
import Categories from '../../assets/Images/Categories.png';
import Vendors from '../../assets/Images/Vendors.png';
import Favourites from '../../assets/Images/Favourites.png';
import Account from '../../assets/Images/Account.png';

const BottomBar = () => {

    const itemList= [
        {img:Home,title:"Home"},
        {img:Categories,title:"Categories"},
        {img:Vendors,title:"Vendors"},
        {img:Favourites,title:"Favourites"},
        {img:Account,title:"Account"},
    ]

  return (
    <>
    <div className="bottomBarMain">
        {
            itemList.map((item,index)=>{
                return (
                    <div className="icontext" key={index}>
                        <img src={item.img} alt={item.title} className='img-fluid' />
                        <p>{item.title}</p>
                    </div>
                )
            })
        }
    </div>
    </>
  )
}

export default BottomBar