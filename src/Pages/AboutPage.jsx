import Card from "../shared/Card"
import { Link } from 'react-router-dom'

function AboutPage() {
  return(
    <Card>
        <div>
            <h1>About this project</h1>
            <p>This is a React app to leave feedback for a product or anything</p>
            <p>Version: 1.0.0</p>
            <p>
            <Link to='/'>Bact to home</Link>
            </p>
        </div>
    </Card>
  )
}

export default AboutPage
