import { useState } from "react"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from "./components/Header"
import FeedbackData from "./Data/FeedbackData"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import {v4 as uuidv4} from 'uuid'
import AboutPage from "./Pages/AboutPage"
import AboutIconLink from "./components/AboutIconLink"
import { FeedbackProvider} from "./context/FeedbackContext"

function App(){
    const [feedback, setFeedback] = useState(FeedbackData)
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure ypu want tp delete?')){
            setFeedback(feedback.filter((item) => item.id !== id))
        }        
    }
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }
    return(
        <FeedbackProvider>
        <Router>
            <Header />
            <div className='container'>
                <Routes>
                <Route exact path='/' element={
                    <>
                <FeedbackForm handleAdd={addFeedback}/>
                <FeedbackList handleDelete={deleteFeedback}/> 
                    </>
                }>
                
                
                </Route>             
                <Route path='/about' element={<AboutPage/>}/>
                </Routes>
                <AboutIconLink/>
            </div>
        </Router>    
        </FeedbackProvider>  
    )
}

export default App