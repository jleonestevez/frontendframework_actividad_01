
import {Player} from "@lottiefiles/react-lottie-player";




function Loader({loaderUrl}) {
    return <Player
        autoplay
        loop
        src={loaderUrl}
        style={{ height: '300px', width: '300px' }}
    >

    </Player>
}

export default  Loader;