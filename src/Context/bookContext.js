import { createContext, useEffect, useState } from 'react';

export const BookContext = createContext();

export function BookProvider({ children }) {
	const [id, setId] = useState(localStorage.getItem('id') || '');

	useEffect(() => {
		localStorage.setItem('id', id);
	}, [id]);

	return (
		<BookContext.Provider value={{ id, setId }}>
			{children}
		</BookContext.Provider>
	);
}