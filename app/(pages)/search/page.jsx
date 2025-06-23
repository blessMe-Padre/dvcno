'use client';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

export default function SearchResultsPage() {
    return (
        <Suspense>
            <SearchResultsContent />
        </Suspense>
    )
}

function SearchResultsContent() {
    const [dataList, setData] = useState([]);
    const searchParams = useSearchParams();
    const query = searchParams.get('query');


    return (
        <section>
            <div className="container">
                <h1>Результаты поиска для: {query}</h1>
                <ul>

                </ul>
            </div>
        </section>
    );
}