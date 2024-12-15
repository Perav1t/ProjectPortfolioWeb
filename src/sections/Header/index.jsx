import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { data } from '../../contents/header'
const Header = () => {
    return (
        <div className='flex flex-col gap-2'>
            <div className='text-4xl text-primaryTitle font-semibold'>{data.name}</div>
            <div className='text-2xl text-primarySubtitle font-semibold'>{data.title}</div>
            <div className='text-sm w-5/6'>{data.description}</div>

            <div className='mt-10'>
                <a href={data.link} target='_blank'>
                    <span className='rounded-md bg-primaryAccent text-primarySubtitle py-2 px-4'>
                        {data.btntext}
                        <span className='rotate-90 inline-block ml-2 text-sm'>
                            <FontAwesomeIcon className='animate-bounce' icon={faArrowDown} />
                        </span>
                    </span>
                </a>
            </div>
        </div>
    )
}

export default Header;