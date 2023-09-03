import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';

function ProgressBar(props) {
  const percentage = props.percentage;
  return (
    <div>

      <div style={{ width: '130px', margin: 'auto' }}>
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            rotation: 0.2, // Rotate the progress bar 25% around its center
            strokeLinecap: 'round', // Display flat progress bar
            textSize: '16px', // Set the text size
            pathTransitionDuration: 0.5, // Animation duration
            pathColor: `${props.color}, ${percentage / 100})`, // Color based on percentage
            // pathColor: `linear-gradient(90deg, rgba(206,206,206,1) 0%, rgba(206,74,45,0.9618697820925245) 35%, rgba(255,252,0,1) 100%);`, // Color based on percentage
            textColor: '#f88', // Text color
            trailColor: '#d6d6d6', // Color of the trail (background)
            backgroundColor: '#fff', // Background color
          })}
        />
      </div>
    </div>
  )
}

export default ProgressBar
