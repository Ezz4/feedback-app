import FeedbackItem from "./FeedbackItem"
import PropTypes from 'prop-types'
import {motion, AnimatePresence} from 'framer-motion'

function FeedbackList({feedBack, handleDelete}) {
    if(!feedBack || feedBack.length === 0){
        return <p>No feedBack Yet</p>
    }
  
    return (
      <div className='feedback-list'>
        <AnimatePresence>
        {feedBack.map((item) =>(
          <motion.div
          key={item.id}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          >
            <FeedbackItem key= 
            {item.id} 
            item={item} 
            handleDelete= {handleDelete}/>
          </motion.div>          
        ))}
        </AnimatePresence>
        
      </div>
    )

  /*  without animation version
  return (
    <div className='feedback-list'>
      {feedBack.map((item) =>(
        <FeedbackItem key= 
        {item.id} 
        item={item} 
        handleDelete= {handleDelete}/>
      ))}
    </div>
  )*/
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
}

export default FeedbackList
