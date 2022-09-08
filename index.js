function letStartPage() {

  var allContent = `<div id="loader">
  <div id="loader-border">
      <div id="loader-content"></div>
  </div>
  </div>   
  <div id="raw-section">
      <header>
          <div class="header-left">
              <h3>RAW <span>by</span></h3>
              <img src="./images/ic_logo.svg" alt="logo">
          </div>
          <div class="header-right">
              <img src="./images/ic-star.png" alt="star">
              <h3>DOWNLOAD</h3>
          </div>
      </header>
      <h1>INFLATABLE 3D ALPHABET</h1>
      <div id="raw-letters">
          <img src="./images/R-hero.png" alt="R">
          <img src="./images/A-hero.png" alt="A">
          <img src="./images/W-hero-p-800.png" alt="W">
          <img src="./images/X-hero.png" alt="!">
      </div>
      <h3 id="with">WITH</h3>
      <img src="./images/ic-tools.svg" alt="tools">
      <div id="playful-text">PLAYFUL SET FOR DESIGNERS, SMM CREATIVES AND ALL WHO NEED A BOLD GRAPHICS</div>
  </div>
  
  <div id="white-section">
  <div id="diverse-section">
  <div id="diverse-text">
      <div>
          <h4>DIVERSE COLORS FOR DIVERSE PROJECTS</h4>
          <p>We got 2 color versions for you. One is vivid and funky. Other is black. Be calm and classy or go
              wild. It's up to you!</p>
      </div>
  </div>
  <div id="diverse-pictures">
      <div><img src="./images/imgplaceholder.png" alt="test"></div>
      <div><img src="./images/imgplaceholder.png" alt="test"></div>
  </div>
  </div>
  
  <div id="bold-section">
  <div id="top">
      <img src="./images/feature-1.png" alt="girl">
      <div>
          <div class="circle"></div>
          <p>Make your message</p>
          <img class="letters" src="./images/bold.png" alt="bold text">
      </div>
  </div>
  <div class="bottom">
      <div>
          <p>SO EVERYBODY CAN HEAR YOU</p>
          <img id="letters2" src="./images/loud.png" alt="">
      </div>
      <img src="./images/feature-2.png" alt="">
  </div>
  </div>
  </div>`
  var rootDiv = document.getElementById("root")
  
  rootDiv.innerHTML = allContent
  
  myFunction();
  }

function myFunction() {
  setTimeout(showPage, 5000);
 }
 
 function showPage() {
   document.getElementById("loader").style.display = "none";
   document.getElementById("raw-section").style.display = "flex";
   document.getElementById("diverse-section").style.display = "flex";
   document.getElementById("bold-section").style.display = "flex";
 }

 letStartPage();