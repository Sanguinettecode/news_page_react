import React from 'react'
import './related.css'
import PcRetro from '../../assets/images/image-retro-pcs.jpg'

type InRelated = {
    id: number
    position: string
    title: string
    content: string
    img: any
}
export default function Related({
    id,
    position,
    title,
    content,
    img
}: InRelated) {
  return (
    
        <div className="related_content">
            <div>
                <img src={img} alt="pc_retro" />
            </div>
            <div className="related_content_text">
                <h3>{position}</h3>
                <h2 className="related_content_title">{title}</h2>
                <p>{content}</p>
            </div>
        </div>
  )
}
