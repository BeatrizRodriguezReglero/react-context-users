import Header from "./components/header/Header";
import Main from "./components/main/Main";
import UserProvider from "./providers/UserProvider";
import { GlobalStyles } from "./styles/GlobalStyles";

const App = () => {
	return (<>
		<GlobalStyles/>
		<UserProvider>
			<Header/>
			<Main/>
		</UserProvider>
		
	</>)
};

export default App;
