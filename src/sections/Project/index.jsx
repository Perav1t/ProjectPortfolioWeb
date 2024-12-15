import { faGithub, faGoogle, faGoogleDrive, faYoutube } from "@fortawesome/free-brands-svg-icons";
import picGame from "../../assets/pjgame.png";
import picGame2 from "../../assets/pjgame2.png";
import picPython from "../../assets/Python.png";
import picPython2 from "../../assets/Python2.png";
import picPortfolio from "../../assets/PortfolioWeb.png";
import { useState } from "react";
import FormattedDate from "../../components/FormattedDate";
import Picture from "../../components/Picture";
import TitleLink from "../../components/TitleLink";
import Material from "../../components/Material";
import Description from "../../components/Description";
import Tech from "../../components/Tech";
import pic1 from "../../assets/pic1.png";
import Cer1 from "../../assets/Cerr1.png";
import pic2 from "../../assets/pic2.png"
import Cer2 from "../../assets/Cer2.png"
import pic3 from "../../assets/pic7.png"
import pic4 from "../../assets/pic5.png"


function Project() {
    const [IsMouseEnter, setIsMouseEnter] = useState({ project1: false });

    const handleMouseEnter = (project) => {
        setIsMouseEnter((prevState) => ({
            ...prevState,
            [project]: true,
        }));
    };

    const handleMouseLeave = (project) => {
        setIsMouseEnter((prevState) => ({
            ...prevState,
            [project]: false,
        }));
    };

    return (
        <div className="mt-36 space-y-4">

            <div className="font-semibold text-xl text-primaryAccent">Project</div>

            <div
                className={`grid grid-cols-[25%_75%] rounded-md px-2 py-6 mb-44 transition-colors duration-500 ${IsMouseEnter["project1"] ? "bg-gray-900" : "bg-primaryBg"}`}
                onMouseEnter={() => handleMouseEnter("project1")}
                onMouseLeave={() => handleMouseLeave("project1")}>
                <div>

                    <FormattedDate isHighLight={IsMouseEnter["project1"]}>2023</FormattedDate>

                    <div className="space-y-4">
                        <Picture picture={picGame} title="ProjectGame (Kradod dhung dhung)" />
                        <Picture picture={picGame2} title="ProjectGame (Kradod dhung dhung)" />
                    </div>

                </div>

                <div className="flex flex-col gap-4">

                    <TitleLink isHighLight={IsMouseEnter["project1"]} title="ProjectGame (Kradod dhung dhung)" link="https://drive.google.com/drive/u/0/folders/1FIX96d5u64Ubfyxk829ORFw16X_eLWjn" />

                    <div className="text-2xl flex gap-3">
                        <Material icon={faYoutube} link="https://www.youtube.com/watch?v=dYRXGlcbecU" />
                        <Material icon={faGoogleDrive} link="https://drive.google.com/drive/u/0/folders/1FIX96d5u64Ubfyxk829ORFw16X_eLWjn" />
                    </div>

                    <Description description="School Project Game from Unity" />

                    <div className="mt-6 flex gap-4">
                        <Tech isHighLight={IsMouseEnter["project1"]} data={["Unity", "C#"]} />
                    </div>

                </div>

            </div>




            <div
                className={`grid grid-cols-[25%_75%] rounded-md px-2 py-6 mb-44 transition-colors duration-500 ${IsMouseEnter["project2"] ? "bg-gray-900" : "bg-primaryBg"
                    }`}
                onMouseEnter={() => handleMouseEnter("project2")}
                onMouseLeave={() => handleMouseLeave("project2")}
            >
                <div>
                    <FormattedDate isHighLight={IsMouseEnter["project2"]}>2022</FormattedDate>

                    <div className="space-y-4">
                        <Picture picture={picPython} title="PythonCoding" />
                        <Picture picture={picPython2} title="PythonCoding" />
                    </div>
                </div>
                <div className="flex flex-col gap-4">

                    <TitleLink isHighLight={IsMouseEnter["project2"]} title="PythonCoding" link="https://colab.research.google.com/drive/1U2V1Tfa6QyoPPG-szgFG0bKQucSJ7GXo?usp=sharing" />

                    <div className="text-2xl flex gap-2">
                        <Material icon={faGoogle} link="https://colab.research.google.com/drive/1U2V1Tfa6QyoPPG-szgFG0bKQucSJ7GXo?usp=sharing" />
                    </div>

                    <Description description="Practice Project coding" />

                    <div className="mt-16 flex gap-4">
                        <Tech isHighLight={IsMouseEnter["project2"]} data={["Unity", "C#"]} />
                    </div>

                </div>

            </div>


            <div
                className={`grid grid-cols-[25%_75%] rounded-md px-2 py-6 mb-44 transition-colors duration-500 ${IsMouseEnter["project3"] ? "bg-gray-900" : "bg-primaryBg"
                    }`}
                onMouseEnter={() => handleMouseEnter("project3")}
                onMouseLeave={() => handleMouseLeave("project3")}
            >
                <div>
                    <FormattedDate isHighLight={IsMouseEnter["project3"]}>2024</FormattedDate>
                    <Picture picture={picPortfolio} title="PProjectWeb Development" />
                </div>

                <div className="flex flex-col gap-4">

                    <TitleLink isHighLight={IsMouseEnter["project3"]} title="ProjectWeb Development" link="https://colab.research.google.com/drive/1U2V1Tfa6QyoPPG-szgFG0bKQucSJ7GXo?usp=sharing" />
                    <div className="text-2xl flex gap-3">
                        <Material icon={faGithub} link="https://github.com/Perav1t/Kradod" />
                    </div>

                    <Description description="ProjectWeb Development" />

                    <div className="mt-16 flex gap-4">
                        <Tech isHighLight={IsMouseEnter["project3"]} data={["Html & Css", "Javascript", "React"]} />
                    </div>

                </div>

            </div>

            <div className="font-semibold text-xl text-primaryAccent">Activities</div>

            <div
                className={`space-y-4 grid grid-cols-[25%_75%] rounded-md px-2 py-6 mb-44 transition-colors duration-500 ${IsMouseEnter["project4"] ? "bg-gray-900" : "bg-primaryBg"}`}
                onMouseEnter={() => handleMouseEnter("project4")}
                onMouseLeave={() => handleMouseLeave("project4")}>
                <div>

                    <FormattedDate isHighLight={IsMouseEnter["project4"]}>2021</FormattedDate>

                    <div className="space-y-4">
                        <Picture picture={pic1} title="" />
                        <Picture picture={Cer1} title="" />

                    </div>

                </div>

                <div className="flex flex-col gap-4">

                    <TitleLink isHighLight={IsMouseEnter["project4"]} title="งานศิลปะหัตถกรรมระดับมัธยมศึกษา จังหวัดเชียงราย ครั้งที่ 70 " link="https://sillapa65.vichakan.net/sm-cri/modules/report/compet_list_conclusion_report.php?compid=628&op=cer" />

                    <Description description="เข้าร่วมการแข่งขัน งานศิลปะหัตถกรรมระดับมัธยมศึกษา จังหวัดเชียงราย ครั้งที่ 70 การแข่งขันหุ่นยนต์ผสม และได้รับรางวัลเหรียญเงิน" />
                </div>

            </div>



            <div
                className={`space-y-4 grid grid-cols-[25%_75%] rounded-md px-2 py-6 mb-44 transition-colors duration-500 ${IsMouseEnter["project5"] ? "bg-gray-900" : "bg-primaryBg"}`}
                onMouseEnter={() => handleMouseEnter("project5")}
                onMouseLeave={() => handleMouseLeave("project5")}>
                <div>

                    <FormattedDate isHighLight={IsMouseEnter["project5"]}>2023</FormattedDate>

                    <div className="space-y-4">
                        <Picture picture={pic2} title="" />
                        <Picture picture={Cer2} title="" />

                    </div>

                </div>

                <div className="flex flex-col gap-4">

                    <TitleLink isHighLight={IsMouseEnter["project5"]} title="ค่ายอบรมสร้างเกม VR 3 มิติ" link="https://adt.mfu.ac.th/it-news/it-datail/detail/News/18672.html" />

                    <Description description="เข้าค่ายอบรมสร้างเกม VR 3 มิติ ที่มหาวิทยาลัยแม่ฟ้าหลวง เมื่อวันที่ 29 เมษายน 2566" />
                </div>

            </div>


            <div
                className={`space-y-4 grid grid-cols-[25%_75%] rounded-md px-2 py-6 mb-44 transition-colors duration-500 ${IsMouseEnter["project6"] ? "bg-gray-900" : "bg-primaryBg"}`}
                onMouseEnter={() => handleMouseEnter("project6")}
                onMouseLeave={() => handleMouseLeave("project6")}>
                <div>

                    <FormattedDate isHighLight={IsMouseEnter["project5"]}>2023</FormattedDate>

                    <div className="space-y-4">
                        <Picture picture={pic3} title="" />
                        <Picture picture={pic4} title="" />

                    </div>

                </div>

                <div className="flex flex-col gap-4">

                    <TitleLink isHighLight={IsMouseEnter["project6"]} title="ไปศึกษาดูงานที่คณะเทคโนโลยีอุตสาหกรรม" link="-" />

                    <Description description="ไปศึกษาดูงานที่คณะเทคโนโลยีอุตสาหกรรม ที่มหาวิทยาลัยราชภัฏเชียงราย" />
                </div>

            </div>


        </div>

    );
};

export default Project;
