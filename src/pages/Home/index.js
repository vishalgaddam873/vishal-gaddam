import HomeView from './view';

const HomePage = () => {
	const scrollToBottom = () => {
		// Get the height of the entire document
		const documentHeight = Math.max(
			document.body.scrollHeight,
			document.documentElement.scrollHeight,
			document.body.offsetHeight,
			document.documentElement.offsetHeight,
			document.body.clientHeight,
			document.documentElement.clientHeight
		);

		// Scroll to the bottom
		window.scrollTo({
			top: documentHeight,
			behavior: 'smooth', // For smooth scrolling, use 'auto' for instant scrolling
		});
	};

	return (
		<HomeView
			name={"Hi, I'm Vishal Gaddam"}
			describe={
				'A passionate Full Stack Software Developer 🚀 with 5 years of experience and a proven track record of building Web and Mobile applications. I specialize in JavaScript, Reactjs, Nodejs, React Native, and other cool libraries and frameworks. My goal is to create efficient and scalable solutions that bring positive impacts to users.'
			}
			scrollToBottom={scrollToBottom}
		/>
	);
};

export default HomePage;
