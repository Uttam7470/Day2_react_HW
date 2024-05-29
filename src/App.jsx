
import './App.css'

function App() {
 

  return (
    <>
    <div className='main'>
      <h1>Topics covered</h1>
      <p>The following is a list of all the topics we cover in the MDN learning area.</p>

      <div className='content'>
        <a href="">Getting started with the web</a>
        <p>Provides a practical introduction to web development for complete beginners.</p>
      </div>
      <div className='content'>
        <a href="">HTML - Structuring the web</a>
        <p>HTML is the language that we use to structure the different of our content and define what their meaning or purpose. This topic teaches HTML in detail.</p>
      </div>
      <div className='content'>
        <a href="">CSS - Styling the web</a>
        <p>CSS is the language that we use to control our web content's style and layout , as well as adding behavior like animation. The topic provides comprehensive coverage of CSS.</p>
      </div>
      </div>
    </>
  )
}

export default App
