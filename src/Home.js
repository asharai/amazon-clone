import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                className="home__image" 
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>
                <div className="home__row">
                    <Product 
                    id='123123213213213'
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                             price={29.99}
                             image={"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"}
                             rating={5}/>
                             <Product 
                             id='12312133213'
                             title="The lean startup"
                             price={29.99}
                             image={"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"}
                             rating={5}/>
                  
                </div>
                <div className="home__row">
                <Product 
                id='12312322313'
                title="The lean startup"                
                             price={29.99}
                             image={"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"}
                             rating={5}/>
                    
                    <Product 
                    id='1231232132132135213'
                    title="The lean startup"
                             price={29.99}
                             image={"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"}
                             rating={5}/>
                   
                    <Product   id='1233213213'
                    title="The lean startup"
                             price={29.99}
                             image={"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"}
                             rating={5}/>
                   
                </div>
                <div className="home__row">
                <Product  id='123353513213'
                title="The lean startup"
                             price={29.99}
                             image={"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"}
                             rating={5}/>
                   
                </div>
            </div>
        </div>
    )
}

export default Home
