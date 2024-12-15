import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TitleLink = ({ isHighLight, title, link }) => {

    if (!link) {
        return <div className={`${isHighLight ? "text-blue-500" : "text-primarySubtitle"}`}></div>
    }

    return (
        <div className={` ${isHighLight ? "text-blue-500" : "text-primarySubtitle"}`}>
            <a href={link} target="_blank" className="font-semibold">
                {title}
                <FontAwesomeIcon className={`text-xs -rotate-45 duration-300 ease-out ${isHighLight ? "translate-x-1 -translate-y-1" : ""}`} icon={faArrowRight} />
            </a>
        </div>
    )
}

export default TitleLink;