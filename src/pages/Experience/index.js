import ExperienceView from './view';
// Skills Logos
import HTMLLogo from '../../assets/images/html.png';
import CSSLogo from '../../assets/images/css.png';
import NodeJsLogo from '../../assets/images/node.png';
import ReactLogo from '../../assets/images/react.png';
import MongodbLogo from '../../assets/images/mongodb.png';
import FirebaseLogo from '../../assets/images/firebase.webp';

// Working Company Logos
import WhitehatLogo from '../../assets/images/whitehat.jpeg';
import EmediSkillLogo from '../../assets/images/emediskill.png';
import ProfmedServicesLogo from '../../assets/images/profmedservices.png';

const ExperiencePage = () => {
	return (
		<ExperienceView
			skills={[
				HTMLLogo,
				CSSLogo,
				NodeJsLogo,
				ReactLogo,
				MongodbLogo,
				FirebaseLogo,
			]}
			workHistory={[
				{
					companyLogo: WhitehatLogo,
					companyName: 'Whitehat Jr. (Curriculum Lead)',
					timeline: 'June 2019 - Present',
					workDescription:
						"I'm currently working at Whitehat Jr. as a curriculum manager. Responsible for creating a world-class coding curriculum.",
					workPointers: [
						'Leading a team to develop engaging coding lessons.',
						'Collaborating with educators to enhance learning experiences.',
						'Ensuring the curriculum aligns with the latest industry standards.',
					],
				},
				{
					companyLogo: EmediSkillLogo,
					companyName: 'EmediSkill.com (Teach Lead - Freelancer)',
					timeline: 'Sep 2023 - Present',
					workDescription:
						'Responsible for leading a team and overseeing the development of EmediSkill web platform.',
					workPointers: [
						'Leading the tech team to develop and maintain the web platform.',
						'Collaborating with team members to implement innovative solutions.',
					],
				},
				{
					companyLogo: ProfmedServicesLogo, // Add the logo for Profmed Services
					companyName: 'Profmed Services (App Developer - Freelancer)',
					timeline: 'April 2023 - Present',
					workDescription:
						'Individually built the entire mobile app for medical professionals at Profmed Services.',
					workPointers: [
						'Responsible for all aspects of app development, from conception to implementation.',
						'Implemented innovative solutions to enhance app functionality and user experience.',
					],
				},
			]}
		/>
	);
};

export default ExperiencePage;
