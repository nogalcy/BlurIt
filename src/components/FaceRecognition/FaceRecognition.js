import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ( {imageurl, box }) => {
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                <div className='image-container'>
                    <img id='inputimage' alt='' src={imageurl} />
                    {box.map((face, index) => (
                        <div 
                            key={index} 
                            className="bounding-box" 
                            style={{
                                top: `${face.topRow}px`,
                                right: `${face.rightCol}px`,
                                bottom: `${face.bottomRow}px`,
                                left: `${face.leftCol}px`
                            }}>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FaceRecognition;