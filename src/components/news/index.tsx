import React from 'react'
import './news.css'

export default function News({id, title, content}: any) {
  return (
    <>
        <li>
            <p className='aside_title'>{title}</p>
            <p>{content}</p>
            <div className="separator" />
        </li>
    </>
  )
}
