import { CardsContainer } from "./components/CardsContainer/CardsContainer";
import { Layout } from "./components/Layout/Layout";

function App() {
	return (
		<Layout>
			<div className="max-w-7xl mx-auto">
				<CardsContainer />
			</div>
		</Layout>
	);
}

export default App;
