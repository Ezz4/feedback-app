import FeedbackItem from "./FeedbackItem"
import PropTypes from 'prop-types'

function FeedbackList({feedBack, handleDelete}) {
    if(!feedBack || feedBack.length === 0){
        return <p>No feedBack Yet</p>
    }
  return (
    <div className='feedback-list'>
      {feedBack.map((item) =>(
        <FeedbackItem key= 
        {item.id} 
        item={item} 
        handleDelete= {handleDelete}/>
      ))}
    </div>
  )
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
