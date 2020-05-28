import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
       
        <div className="ui large menu">
            <Link to="/" className="active item">
                Home
            </Link>
           
            <div className="right menu">
               <div className="item">
                    <div >
                       <Link to="/createPost" className="ui primary button">  
                              <i class="fa fa-plus fa-2x" aria-hidden="true"></i>
                        </Link>
                    </div>
                </div>
            </div>
    </div>
    );
};

export default Header;