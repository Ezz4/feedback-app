import { createContext, useState } from "react";
import {v4 as uuidv4} from 'uuid'
const FeedbackContext = createContext()



export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([
        {
            id:1, 
            text: 'This item is form context',
            rating: 10
        },
    ])
    
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    const updateFeedback = (id, updItem) => {
    setFeedback(
        feedback.map((item) => (item.id === id ?{...item, ...updItem} 
            : item)))
    }


    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure ypu want tp delete?')){
            setFeedback(feedback.filter((item) => item.id !== id))
        }        
    }

    const editFeedback = (item) =>{
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
    }}>

    {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext