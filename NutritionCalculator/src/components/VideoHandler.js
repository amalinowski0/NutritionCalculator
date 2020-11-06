import React, { useState, useEffect } from 'react'

import video_1 from './videos/video_1.mov'
import video_2 from './videos/video_2.mp4'
import video_3 from './videos/video_3.mp4'
import video_4 from './videos/video_4.mp4'

export default function VideoHandler() {
    const [urlindex, setUrlIndex] = useState(0)
    const [loading, setLoading] = useState(true)

    const urls = [video_1,video_2,video_3,video_4]
    const videoRef = React.createRef()
    useEffect(() => {
        setLoading(false)
    },videoRef)

    function handleEnded() {
        setLoading(true)
        setTimeout(() => { 
            setLoading(false)
            if(urlindex!==3)
            {
                setUrlIndex(urlindex+1)
            }
            else 
            {
                setUrlIndex(0)
            }
        }, 2000)
    }

//todo DAILY, fade out / in , colors, header, animate table, something else?

    return (
        <div className="video-container">
            <video src={urls[urlindex]}
            ref= {videoRef}
            style={{
                width: 'inherit',
                height: 'inherit',
                objectFit: 'cover',
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                filter: 'grayscale(0.2)',
                opacity: loading ? 0 : 1,
                transition: 'opacity, 2s ease-in-out'
            }}
            className="bg_video" 
            autoPlay 
            muted 
            type="video/mp4"
            preload="auto"
            onEnded={handleEnded}></video>
      </div>
    )
}