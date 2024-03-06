import NavBar from './components/NavBar';
import HomePage from './pages/Home';
import AnoutPage from './pages/About';
import ExperiencePage from './pages/Experience';
import ProjectsPage from './pages/Projects';
import ContactMePage from './pages/ContactMe';

function App() {
	return (
		<>
			<NavBar />
			<HomePage />
			<AnoutPage />
			<ExperiencePage />
			<ProjectsPage />
			<ContactMePage />
		</>
	);
}

export default App;
