import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Material = ({ icon, link }) => {
    return (
            <a href={link} target="_blank" className="hover:scale-125 transition-all duration-500"><FontAwesomeIcon icon={icon} /></a>
    )
}

export default Material;