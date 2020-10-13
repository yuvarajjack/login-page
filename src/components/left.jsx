import React, {Component} from 'react';

const  imageUrl = 'https://i.ibb.co/VqtfJ5R/right.png';
class Left extends Component {
 
    render() { 
        return ( 
            <div >
                <img className="image" src={imageUrl} style={{border:"none",}} alt=""/>
                
            </div>
         );
    }
}

 
export default Left;