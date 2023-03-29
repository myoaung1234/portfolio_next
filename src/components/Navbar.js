import React from 'react';


const Navbar = () => {
  const onDownload = () => {
    fetch('cv.pdf').then(res => {
      res.blob().then(blob => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'cv.pdf';
        alink.click();
      })
    })
  }
  return (
    <nav>
        <h3>Myo Aung</h3>
        <div className="links">
            <a href="/">HOME</a>
            <a href="#about">ABOUT</a>
            <a href="#experience">EXPERIENCE</a>
            <a href="#work">WORK</a>
            <a href="#contact">CONTACT</a>
            
        </div>
        <button type="submit" onClick={onDownload}>Download CV</button>
    </nav>
  )
}

export default Navbar