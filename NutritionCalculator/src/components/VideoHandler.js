import React, { useState} from 'react'

import video_1 from './videos/video_1.mov'
import video_2 from './videos/video_2.mp4'
import video_3 from './videos/video_3.mp4'
import video_4 from './videos/video_4.mp4'

export default function VideoHandler() {
    const [urlindex, setUrlIndex] = useState(0)
    const [loading, setLoading] = useState(true)

    const urls = [video_1,video_2,video_3,video_4]
    const videoRef = React.createRef()

    function handleLoaded() {
        setLoading(false)
    }

    function handleEnded() {
        setLoading(true)
        setTimeout(() => { 
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

//TODO: 
// alerts /CHECK | maybe change styles/,
    return (
        <div className="video-container">
            <video src={urls[urlindex]}
            ref={videoRef}
            className={`bg_video ${loading ? 'hidden' : 'shown'}`} 
            autoPlay 
            muted 
            type="video/mp4"
            preload="auto"
            onLoadedData={handleLoaded}
            onEnded={handleEnded}></video>
      </div>
    )
}
