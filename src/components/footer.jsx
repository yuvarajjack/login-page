import React, {Component} from 'react';

const  imageUrl = 'data:image/png;base64,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';
class Footer extends Component {
 
    render() { 
        return ( 
            <header className="cd-header">
            <div>
                <img className="logo" src={imageUrl} alt=""/>  
                <p>Proudly Powered by Matsio Digial LLC</p>              
            </div>
            </header>
         );
    }
}
 
export default Footer;