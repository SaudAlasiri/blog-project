import React from 'react'
import { images } from '../../../constants'

const Hero = () => {
  return (
    <section>
        <div>
            <h1>Read the most interesting articlers</h1>
            <p>
                Done By BU 3ZOZ , V0.5 ..... SOON WAIT FOR US 
            </p>
            <div>
                <div>
                    <input type="" />
                </div>
                <button>Search</button>
            </div>
            <div>
                <span>Popular Tags:</span>
                <ul>
                    <li>Design</li>
                    <li>User Experience</li>
                    <li>User Interfaces</li>
                </ul>
            </div>
        </div>
        <div>
            <img src={images} alt="users are reading articles" />
        </div>
    </section>
  )
}

export default Hero