import { createContext, useEffect, useState } from 'react';

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
	const [til, setTil] = useState(localStorage.getItem('lang') || 'en');

	useEffect(() => {
		localStorage.setItem('lang', til);
	}, [til]);

	return (
		<LanguageContext.Provider value={{ til, setTil }}>
			{children}
		</LanguageContext.Provider>
	);
}
