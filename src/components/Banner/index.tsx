import React from 'react'
import './banner.css'
import News from '../news'
import banner from '../../assets/images/image-web-3-desktop.jpg'
import bannerSm from '../../assets/images/image-web-3-mobile.jpg'
export default function Banner({news}: any) {
  return (
    <div className="news">
        <div className="news_main">
            <div>
            <picture>
                    <source media="(max-width: 375px)" srcSet={bannerSm} />
                    <source media="(min-width: 769px)" srcSet={banner} />
                    <img src={banner} alt="Responsive Image" />
            </picture>
            </div>
            <div className='news_content'>
                <h1>The Bright Future of Web 3.0?</h1>
                <div>
                    <div className='news_content-left'>
                        <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                        <div><button className="inter">Read more</button></div>
                    </div>
                </div>
            </div>
        </div>
        <div className='news_aside'>
            <h2>News</h2>
            <ul>
                {news ? news.map((item: any) => 
                    <News 
                        key={item.id}
                        id={item.id}
                        title={item.title} 
                        content={item.content}
                    />
                ) : null}
            </ul>   
        </div>
    </div>
  )
}
