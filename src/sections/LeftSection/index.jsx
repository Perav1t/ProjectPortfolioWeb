import Contact from "../Contact";
import Header from "../Header";

const LeftSection = () => {
    return (
        <div className="px-5">
            <div className='sticky top-14 grid gap-y-4 lg:grid-rows-[35%_40%_25%] lg:h-[85vh]'>

                <Header />
                <Contact />

            </div>
        </div>

    )


}

export default LeftSection;