import { data } from '../../contents/about.js';

const About = () => {
    return (
        <div className="space-y-4">
            <div className="font-semibold text-xl text-primaryAccent">{data.title}</div>
            <div className="text-gray-400">{data.description}</div>
        </div>
    );
};

export default About;
