import React , {Components} from 'react';
import './Destination.css'
import pop1 from '../Components/Images/popular1.jpg';
import sos2 from '../Components/Images/popular2.jpg';
import kos3 from '../Components/Images/popular3.jpg';
import lol4 from '../Components/Images/popular4.jpg';
import DestinationData from './DestinationData';


const Destination = () => {
    return (
        <div className='destination'>
            <h1>Popular Destinations</h1>
            <p>Tours give you the opportunity to sea alot, within a time frame.</p>

            <DestinationData
              className="first-des"
              heading="Taal Volcano, Batanges"
              text="One of the most iconic views in Luzon, Mt.Taal boats a volcano inside a lake inside an island.
                      If you fancy a closer look, the hike up to the carter is a mere 45 minutes, and is easy enough for beginners.
                      Guides will assist you most of the way, and you'll see the peculiar enviroment found on an active volcano,
                      including volcanic rocks and steam vents.The hike can be dusty and hot, so plan for an early morning trip,
                      and then unwind with some bulalo before heading back home!"
              img1={pop1}
              img2={sos2}
            />


            <DestinationData
              className="first-des-reverse"
              heading="Mt.Daguldul,Batangas"
              text="If you're lookig for a hike that's a little more challenging but still good for a beginner mountaineer,
              chek out Mt.Daguldul in San Juan,Batangas. You'll start your hike from the beach and pass through tropical forest, diffrent rock
              formations, and small streams. There's a small store halfway up the trail where you can take a break and drink
              buko juice, and through the summit itself may not have the best view, the breeze is fantastic. Once you've made it
              back down, head straight to the beach for a refreshing, well-deserved swim."
              img1={kos3}
              img2={lol4}
            />
        </div>
    )
}

export default Destination;