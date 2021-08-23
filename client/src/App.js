import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './styles/theme';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { AuthProvider } from './contexts/AuthContext';
import Dashboard from './pages/Dashboard';
import PromptList from './pages/PromptList';
import PromptOverview from './pages/PromptOverview';
import PrivateRoute from './components/PrivateRoute';
import UserList from './pages/UserList';

function App() {
	return (
		<ChakraProvider theme={theme}>
			<AuthProvider>
				<Router>
					<Switch>
						<Route path="/" component={Home} exact />
						<Route path="/signup" component={Signup} />
						<Route path="/login" component={Login} />
						<PrivateRoute path="/dashboard" component={Dashboard} />
						<PrivateRoute path="/admin/users" component={UserList} />
						<Route path="/prompts" component={PromptList} />
						<Route path="/overview/:id" component={PromptOverview} />
					</Switch>
				</Router>
			</AuthProvider>
		</ChakraProvider>
	);
}

export default App;
