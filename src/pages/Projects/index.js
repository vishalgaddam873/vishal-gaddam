import ProjectsView from './view';
import EmediskillLogo from '../../assets/images/emediskill.png';
import CargoLogo from '../../assets/images/cargo411.jpeg';
import ProfmedServicesLogo from '../../assets/images/profmedservices.png';

const ProjectsPage = () => {
	return (
		<ProjectsView
			projects={[
				{
					logo: EmediskillLogo,
					title: 'EmediSkill',
					description:
						'EmediSkill is a user-friendly web platform where doctors buy courses,watch videos, and earn certificates after exams—simplifying and enhancing their ongoing professional education.',
					techList: ['React', 'Redux', 'Mongodb'],
					demoLink: 'https://emediskill.com/',
				},

				{
					logo: ProfmedServicesLogo,
					title: 'Profmed Services',
					description:
						'Profmed Services Mobile App: Streamlining access to vital resources for healthcare professionals, providing a seamless and engaging experience.',
					techList: ['React Native', 'Redux', 'NodeJs'],
					demoLink:
						'https://play.google.com/store/apps/details?id=com.profmed.services',
				},
				{
					logo: CargoLogo,
					title: 'Cargo411',
					description:
						'Cargo411 Mobile App: Facilitated shipment tracking for cargo companies, streamlining the process of sending shipments via trucks, ensuring efficient logistics and real-time tracking.',
					techList: ['React Native', 'Redux', 'NodeJs'],
					demoLink:
						'https://play.google.com/store/apps/details?id=com.mycargo.cargo',
				},
			]}
		/>
	);
};

export default ProjectsPage;
