import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Contact = () => {

    return (
        <div>

            <div className='flex items-end mt-18 gap-4 text-3xl'>
            <a href="https://www.facebook.com/peravit.aunpeng/?locale=th_TH" target="_blank" className="hover:scale-125 transition-all duration-500"><FontAwesomeIcon   icon={faFacebook} /></a>
            <a href="https://www.instagram.com/peravittt/" target="_blank" className="hover:scale-125 transition-all duration-500"><FontAwesomeIcon   icon={faInstagram} /></a> 

            </div>

        </div>
    )
}

export default Contact