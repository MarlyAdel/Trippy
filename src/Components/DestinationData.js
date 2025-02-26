import React , {Components} from 'react';
import './Destination.css';
import pop1 from '../Components/Images/popular1.jpg';
import sos2 from '../Components/Images/popular2.jpg';
import kos3 from '../Components/Images/popular3.jpg';
import lol4 from '../Components/Images/popular4.jpg';

class DestinationData extends React.Component{
    render () {
        return(
            <div className={this.props.className}>
                <div className='des-text'>
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                </div>

                <div className='image'>
                    <img src={this.props.img1} alt='img'/>
                    <img src={this.props.img2} alt='img'/>

                </div>
            </div>
        )
    }
}

export default DestinationData;