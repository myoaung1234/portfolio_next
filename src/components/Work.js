import React from 'react'

const Work = () => {
  return (
    <div className='work' id="work">
        <h2>Some Things I’ve Built</h2>
        <div className="inner">
            <div className="img">
                <img src="Screenshot.png" alt=""/>
            </div>
            <div className="text">
                <span>Featured Project__</span>
                <div className="text-inner">
                  <h2><span>Celebrity</span> News Website</h2>
                  <p>This is a News Website . There are 3 Components : Admin Component(React.js),
                    Website Component(Next.js) and REST API Component(Node.js). I built thiswebsite 
                    from scratch.
                  </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work