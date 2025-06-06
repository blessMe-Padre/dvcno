import { create } from 'zustand';

const useLangStore = create((set) => ({
    lang: 'ru',
    dictionary: {},
    setLang: (lang) => {
        set({ lang });
        if (typeof document !== 'undefined') {
            document.cookie = `language=${lang}; path=/; max-age=31536000`;
            document.documentElement.lang = lang;
        }
    },
    setDictionary: (dictionary) => set({ dictionary }),

    fetchDictionary: async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/api/v1/dictionaries/buttons_pages`);
            if (!response.ok) throw new Error('Failed to fetch dictionary');
            const result = await response.json();
            if (result.status === 'success' && result.data) {
                set({ dictionary: result.data });
            }
        } catch (error) {
            console.error('Error fetching dictionary:', error);
        }
    }
}));

export default useLangStore;