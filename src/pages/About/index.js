import AboutView from './view';
import {
	faCode,
	faServer,
	faMobileAlt,
	faUserTie,
} from '@fortawesome/free-solid-svg-icons';

const AboutPage = () => {
	return (
		<AboutView
			name={"Hi, I'm Vishal Gaddam"}
			describe={
				'A passionate Full Stack Software Developer 🚀 with 5 years of experience and a proven track record of building Web and Mobile applications. I specialize in JavaScript, Reactjs, Nodejs, React Native, and other cool libraries and frameworks. My goal is to create efficient and scalable solutions that bring positive impacts to users.'
			}
			aboutDetails={[
				{
					icon: faCode,
					title: 'Frontend Developer',
					description:
						"I'm frontend developer with experince in building responsive and optimised site",
				},
				{
					icon: faServer,
					title: 'Backend Developer',
					description:
						'I have experience developing fast and optimised back-end system and APIs',
				},
				{
					icon: faMobileAlt,
					title: 'Mobile App Developer',
					description:
						"I'm a mobile app developer with experience in building responsive and optimized applications for small screens.",
				},
				{
					icon: faUserTie,
					title: 'Freelancer',
					description:
						'Freelancer skilled in Frontend, Backend, and Mobile App Development, crafting responsive and optimized solutions.',
				},
			]}
		/>
	);
};

export default AboutPage;
