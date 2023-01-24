import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
	const [id, setId] = useState(localStorage.getItem('id') || '');

	useEffect(() => {
		localStorage.setItem('id', id);
	}, [id]);

	return (
		<AuthContext.Provider value={{ id, setId }}>
			{children}
		</AuthContext.Provider>
	);
}