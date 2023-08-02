import React from 'react'
import { Nav } from 'react-bootstrap'

const Instagram = () => {
  return (
   <div>

<body>
   
    <main>
      <header>
        <div className="header-wrap">
          <div className="profile-pic">
            <img src={require('../../images/omer.jpg')} alt="profile-logo" />
          </div>
          <div className="profile-info">

          <div className="title row">
            <Nav.Link href = "https://www.instagram.com/segev_saada/">
            <button className="primary" style={{ textAlign: "center", borderRadius: '5px', width: 50, marginLeft: 200, position: "relative", top: 28}}>Follow</button>
            </Nav.Link>
            <h2>segev_saada</h2>
          </div>


            <div className="desktop-only">
              <div className="details row">
                <ul>
                  <li><span>29</span> posts</li>
                  <li><span>970</span> followers</li>
                  <li><span>939</span> following</li>
                </ul>
              </div>
              <div className="descriptions row last">
                <h1>שגב סעדה</h1>
                <span>
                Fitness Trainer
                  <br />
                  <span>
                  מלווה בני נוער להוריד את הבטן תוך 90 יום או פחות בלי לוותר על נשנושים
                  👇 לתכנית הליווי שלי בחינם
                  </span>
                  <br />
                  <Nav.Link href = "https://wa.me/message/3SHA5UDB7SPHO1">
                  wa.me/message/3SHA5UDB7SPHO1
                  </Nav.Link>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="profile-info mobile-only">
          <div className="descriptions row">
          <h1>שגב סעדה</h1>
                <span>
                Fitness Trainer
                  <br />
                  <span>
                  מלווה בני נוער להוריד את הבטן תוך 90 יום או פחות בלי לוותר על נשנושים
                  👇 לתכנית הליווי שלי בחינם
                  </span>
                  <br />
                  <Nav.Link href = "wa.me/message/3SHA5UDB7SPHO1">
                  wa.me/message/3SHA5UDB7SPHO1
                  </Nav.Link>
                </span>
          </div>
        </div>
      </header>

      <ul className="stories">
        <li className="story-item">
          <div className="image">
            <img src={require('../../images/omer.jpg')} />
          </div>
          <div className="title">🐾</div>
        </li>
        <li className="story-item">
          <div className="image">
            <img src={require('../../images/omer.jpg')} />
          </div>
          <div className="title">טיפים בתזונה</div>
        </li>
        <li className="story-item">
          <div className="image">
            <img src={require('../../images/omer.jpg')} />
          </div>
          <div className="title">💯 תוצאות</div>
        </li>
        <li className="story-item">
          <div className="image">
            <img src={require('../../images/omer.jpg')} />
          </div>
          <div className="title">✍️ לימודים</div>
        </li>
        <li className="story-item">
          <div className="image">
            <img src={require('../../images/omer.jpg')} />
          </div>
          <div className="title">האימונים שלי</div>
        </li>
        <li className="story-item">
          <div className="image">
            <img src={require('../../images/omer.jpg')} />
          </div>
          <div className="title">טיפים בכושר</div>
        </li>
        <li className="story-item">
          <div className="image">
            <img src={require('../../images/omer.jpg')} />
          </div>
          <div className="title">טיפים לשינה</div>
        </li>
      </ul>

      <div className="desktop-only">
        <div className="tabs">
          <div className="tab-item active" style={{marginRight: "60px"}}>
            <svg
              aria-label="Posts"
              className="_8-yf5"
              fill="#262626"
              height="12"
              viewBox="0 0 48 48"
              width="12"
            >
              <path
                clip-rule="evenodd"
                d="M45 1.5H3c-.8 0-1.5.7-1.5 1.5v42c0 .8.7 1.5 1.5 1.5h42c.8 0 1.5-.7 1.5-1.5V3c0-.8-.7-1.5-1.5-1.5zm-40.5 3h11v11h-11v-11zm0 14h11v11h-11v-11zm11 25h-11v-11h11v11zm14 0h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11zm14 28h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11z"
                fill-rule="evenodd"
              ></path>
            </svg>
            <span>POSTS</span>
          </div>
          <div className="tab-item" style={{marginRight: "60px"}}>
            <svg
              aria-label="Posts"
              className="_8-yf5"
              fill="#8e8e8e"
              height="12"
              viewBox="0 0 48 48"
              width="12"
            >
              <path
                d="M41 10c-2.2-2.1-4.8-3.5-10.4-3.5h-3.3L30.5 3c.6-.6.5-1.6-.1-2.1-.6-.6-1.6-.5-2.1.1L24 5.6 19.7 1c-.6-.6-1.5-.6-2.1-.1-.6.6-.7 1.5-.1 2.1l3.2 3.5h-3.3C11.8 6.5 9.2 7.9 7 10c-2.1 2.2-3.5 4.8-3.5 10.4v13.1c0 5.7 1.4 8.3 3.5 10.5 2.2 2.1 4.8 3.5 10.4 3.5h13.1c5.7 0 8.3-1.4 10.5-3.5 2.1-2.2 3.5-4.8 3.5-10.4V20.5c0-5.7-1.4-8.3-3.5-10.5zm.5 23.6c0 5.2-1.3 7-2.6 8.3-1.4 1.3-3.2 2.6-8.4 2.6H17.4c-5.2 0-7-1.3-8.3-2.6-1.3-1.4-2.6-3.2-2.6-8.4v-13c0-5.2 1.3-7 2.6-8.3 1.4-1.3 3.2-2.6 8.4-2.6h13.1c5.2 0 7 1.3 8.3 2.6 1.3 1.4 2.6 3.2 2.6 8.4v13zM34.6 25l-9.1 2.8v-3.7c0-.5-.2-.9-.6-1.2-.4-.3-.9-.4-1.3-.2l-11.1 3.4c-.8.2-1.2 1.1-1 1.9.2.8 1.1 1.2 1.9 1l9.1-2.8v3.7c0 .5.2.9.6 1.2.3.2.6.3.9.3.1 0 .3 0 .4-.1l11.1-3.4c.8-.2 1.2-1.1 1-1.9s-1.1-1.2-1.9-1z"
              ></path>
            </svg>
            <span>IGTV</span>
          </div>
          <div className="tab-item">
            <svg
              aria-label="Tagged"
              className="_8-yf5"
              fill="#8e8e8e"
              height="12"
              viewBox="0 0 48 48"
              width="12"
            >
              <path
                d="M41.5 5.5H30.4c-.5 0-1-.2-1.4-.6l-4-4c-.6-.6-1.5-.6-2.1 0l-4 4c-.4.4-.9.6-1.4.6h-11c-3.3 0-6 2.7-6 6v30c0 3.3 2.7 6 6 6h35c3.3 0 6-2.7 6-6v-30c0-3.3-2.7-6-6-6zm-29.4 39c-.6 0-1.1-.6-1-1.2.7-3.2 3.5-5.6 6.8-5.6h12c3.4 0 6.2 2.4 6.8 5.6.1.6-.4 1.2-1 1.2H12.1zm32.4-3c0 1.7-1.3 3-3 3h-.6c-.5 0-.9-.4-1-.9-.6-5-4.8-8.9-9.9-8.9H18c-5.1 0-9.4 3.9-9.9 8.9-.1.5-.5.9-1 .9h-.6c-1.7 0-3-1.3-3-3v-30c0-1.7 1.3-3 3-3h11.1c1.3 0 2.6-.5 3.5-1.5L24 4.1 26.9 7c.9.9 2.2 1.5 3.5 1.5h11.1c1.7 0 3 1.3 3 3v30zM24 12.5c-5.3 0-9.6 4.3-9.6 9.6s4.3 9.6 9.6 9.6 9.6-4.3 9.6-9.6-4.3-9.6-9.6-9.6zm0 16.1c-3.6 0-6.6-2.9-6.6-6.6 0-3.6 2.9-6.6 6.6-6.6s6.6 2.9 6.6 6.6c0 3.6-3 6.6-6.6 6.6z"
              ></path>
            </svg>
            <span>TAGGED</span>
          </div>
        </div>
      </div>
      <div className="mobile-tabs mobile-only">
        <ul>
          <li>
            <div>29</div>
            posts
          </li>
          <li>
            <div>970</div>
            followers
          </li>
          <li>
            <div>939</div>
            following
          </li>
        </ul>
        <div className="actions">
          <svg
            aria-label="Posts"
            className="_8-yf5"
            fill="rgb(0, 149, 246)"
            height="24"
            viewBox="0 0 48 48"
            width="24"
          >
            <path
              clip-rule="evenodd"
              d="M45 1.5H3c-.8 0-1.5.7-1.5 1.5v42c0 .8.7 1.5 1.5 1.5h42c.8 0 1.5-.7 1.5-1.5V3c0-.8-.7-1.5-1.5-1.5zm-40.5 3h11v11h-11v-11zm0 14h11v11h-11v-11zm11 25h-11v-11h11v11zm14 0h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11zm14 28h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11z"
              fill-rule="evenodd"
            ></path>
          </svg>
          <svg
            aria-label="Posts"
            className="_8-yf5"
            fill="#8e8e8e"
            height="24"
            viewBox="0 0 48 48"
            width="24"
          >
            <path
              d="M41 10c-2.2-2.1-4.8-3.5-10.4-3.5h-3.3L30.5 3c.6-.6.5-1.6-.1-2.1-.6-.6-1.6-.5-2.1.1L24 5.6 19.7 1c-.6-.6-1.5-.6-2.1-.1-.6.6-.7 1.5-.1 2.1l3.2 3.5h-3.3C11.8 6.5 9.2 7.9 7 10c-2.1 2.2-3.5 4.8-3.5 10.4v13.1c0 5.7 1.4 8.3 3.5 10.5 2.2 2.1 4.8 3.5 10.4 3.5h13.1c5.7 0 8.3-1.4 10.5-3.5 2.1-2.2 3.5-4.8 3.5-10.4V20.5c0-5.7-1.4-8.3-3.5-10.5zm.5 23.6c0 5.2-1.3 7-2.6 8.3-1.4 1.3-3.2 2.6-8.4 2.6H17.4c-5.2 0-7-1.3-8.3-2.6-1.3-1.4-2.6-3.2-2.6-8.4v-13c0-5.2 1.3-7 2.6-8.3 1.4-1.3 3.2-2.6 8.4-2.6h13.1c5.2 0 7 1.3 8.3 2.6 1.3 1.4 2.6 3.2 2.6 8.4v13zM34.6 25l-9.1 2.8v-3.7c0-.5-.2-.9-.6-1.2-.4-.3-.9-.4-1.3-.2l-11.1 3.4c-.8.2-1.2 1.1-1 1.9.2.8 1.1 1.2 1.9 1l9.1-2.8v3.7c0 .5.2.9.6 1.2.3.2.6.3.9.3.1 0 .3 0 .4-.1l11.1-3.4c.8-.2 1.2-1.1 1-1.9s-1.1-1.2-1.9-1z"
            ></path>
          </svg>
          <svg
            aria-label="Tagged"
            className="_8-yf5"
            fill="#8e8e8e"
            height="24"
            viewBox="0 0 48 48"
            width="24"
          >
            <path
              d="M41.5 5.5H30.4c-.5 0-1-.2-1.4-.6l-4-4c-.6-.6-1.5-.6-2.1 0l-4 4c-.4.4-.9.6-1.4.6h-11c-3.3 0-6 2.7-6 6v30c0 3.3 2.7 6 6 6h35c3.3 0 6-2.7 6-6v-30c0-3.3-2.7-6-6-6zm-29.4 39c-.6 0-1.1-.6-1-1.2.7-3.2 3.5-5.6 6.8-5.6h12c3.4 0 6.2 2.4 6.8 5.6.1.6-.4 1.2-1 1.2H12.1zm32.4-3c0 1.7-1.3 3-3 3h-.6c-.5 0-.9-.4-1-.9-.6-5-4.8-8.9-9.9-8.9H18c-5.1 0-9.4 3.9-9.9 8.9-.1.5-.5.9-1 .9h-.6c-1.7 0-3-1.3-3-3v-30c0-1.7 1.3-3 3-3h11.1c1.3 0 2.6-.5 3.5-1.5L24 4.1 26.9 7c.9.9 2.2 1.5 3.5 1.5h11.1c1.7 0 3 1.3 3 3v30zM24 12.5c-5.3 0-9.6 4.3-9.6 9.6s4.3 9.6 9.6 9.6 9.6-4.3 9.6-9.6-4.3-9.6-9.6-9.6zm0 16.1c-3.6 0-6.6-2.9-6.6-6.6 0-3.6 2.9-6.6 6.6-6.6s6.6 2.9 6.6 6.6c0 3.6-3 6.6-6.6 6.6z"
            ></path>
          </svg>
        </div>
      </div>

      <div className="gallery">

        <div className="gallery-item">
          <img alt="gallery-post" src={require('../../images/omer.jpg')} />
          <span className="media-icon"></span>
        </div>

        <div className="gallery-item">
          <img alt="gallery-post" src={require('../../images/omer.jpg')} />
          <span className="media-icon"></span>
        </div>

        <div className="gallery-item">
          <img alt="gallery-post" src={require('../../images/omer.jpg')} />
          <span className="media-icon"></span>
        </div>

        <div className="gallery-item">
          <img alt="gallery-post" src={require('../../images/omer.jpg')} />
          <span className="media-icon"></span>
        </div>

        <div className="gallery-item">
          <img alt="gallery-post" src={require('../../images/omer.jpg')} />
          <span className="media-icon"></span>
        </div>

        <div className="gallery-item">
          <img alt="gallery-post" src={require('../../images/omer.jpg')} />
          <span className="media-icon"></span>
        </div>

      </div>
    </main>
  </body>


    <div style = {{height: 50}}/>
   </div>
    
  )
}

export default Instagram