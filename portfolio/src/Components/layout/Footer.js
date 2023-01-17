import {FaInstagram, FaGithub, FaWhatsapp, FaLinkedin}  from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer(){
     return(
          <footer  className={styles.footer} >
                 <ul  className={styles.social_list}>
                     <li><FaInstagram /></li>
                     <li><FaGithub /></li>
                     <li><FaWhatsapp /></li>
                     <li><FaLinkedin /></li>
                 </ul>
                 <p  className={styles.copy}><span>Portfólio</span> &copy;  2023</p>
          </footer>
     )
}

export default Footer