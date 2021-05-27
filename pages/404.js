import Link from "next/link"
import React from "react"
import ReactAudioPlayer from "react-audio-player"

class NotFound extends React.Component {

  render() {
    return (
      <div className="text-center">
          <img src="images/bob.gif" className="img-fluid m-5 rounded" width={500} height={300} /><br />
          <ReactAudioPlayer
             src="https://www.myinstants.com/media/sounds/the-price-is-right-losing-horn.mp3"
             autoPlay
             controls
          />
          <h1 className="display-1">404!</h1>
          <h1>Oh no!</h1>
          <h2>You are lost!</h2>
          <h3 className="mb-5">Go <Link href="/"><a>Home!</a></Link></h3>
      </div>
    )
  }
}

export default NotFound