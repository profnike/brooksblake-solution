import logo from '../../Asset/Logo.png'
import '../Header/Header.css'

 function Header(){
    return(

        <div className='Header'>
          <img src={logo} alt=""/>  <p>Everyday News</p>
        </div>
    )


}

export default Header