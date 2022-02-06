import { NotFoundHeader, Bounce } from "./globalElements"
import chilli from '../../images/chilli.png'


const NotFoundComponent = () => {
  return (
    <NotFoundHeader><Bounce src={chilli} />Page not found.<Bounce src={chilli} /></NotFoundHeader>
  )
}

export default NotFoundComponent