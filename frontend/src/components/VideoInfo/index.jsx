import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-regular-svg-icons'

const VideoInfo = () => (
  <div>
    <h5>Movile Title</h5>
    <span>Shared by someone</span><br/>
    <div>
      <span className='me-3'>89 <FontAwesomeIcon icon={faThumbsUp} /></span>
      <span>12 <FontAwesomeIcon icon={faThumbsDown} /></span>
    </div>
    <span>Description</span>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida,
      risus at dapibus aliquet, elit quam scelerisque tortor, nec accumsan eros
      nulla interdum justo. Pellentesque dignissim, sapien et congue rutrum,
      lorem tortor dapibus turpis, sit amet vestibulum eros mi et odio.
    </p>
  </div>
)

export default VideoInfo
