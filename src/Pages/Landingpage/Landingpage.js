import React from 'react';
import Header from '../../Component/Header/Header'

import '../Landingpage/Landingpage.css'
import Singlepost from '../../Component/Firstarea/Firstarea';
import Midarea from '../../Component/Midarea/Midarea';
import Lastarea from '../../Component/Lastarea/Lastarea';

function Landingpage(){
    
 
    return(

        <div className='Landingpage'>
            <Header/>
            <Singlepost name={"Blog"} />
            <Midarea name={"Editorial"}/>
            <Lastarea name={"News"} />
           
        </div>
    )


}

export default Landingpage