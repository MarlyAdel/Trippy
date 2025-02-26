import React , {Components} from 'react';
import './Trip.css';
import TripData from './TripData';
import Recent1 from '../Components/Images/Recent1.jpg';
import Recent2 from '../Components/Images/Recent2.jpg';
import Recent3 from '../Components/Images/Recent3.jpg';


function Trip () {
    return (
       <div className='trip'>
        <h1>Recent Trips</h1>
        <p>You can discover unique destinations using Google Maps</p>

        <div className='tripCard'>
             <TripData 
               image={Recent1}
               heading="Trip in Indonesia"
               text="Indonesia , officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and
               pacific oceans. It contains of over 17,000 island, including Sumatra, Java, Sulawesi, and parts of Barneo."
             />

              <TripData 
               image={Recent2}
               heading="Trip in Malaysia"
               text="Malaysia is a Southeast Asia country occuping parts of the Malay Peninsula and the island of Barneo.
               It's known for it's beaches, rainforests and mixof Malay, Chinese, Indian and European cultural influences."
             />

              <TripData 
               image={Recent3}
               heading="Trip in France"
               text="France , in Western Eurpean, encompasses medieval cities, alpine villages and Mediterranean beaches. 
               Paris, it's capital is famed for it's fashional houses, classical art museums including the Louvre and mouments like
               the Eiffel Tower."
             />
        </div>
       </div>

      
    )
}
export default Trip;