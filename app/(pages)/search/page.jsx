'use client';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from "next/image";
import styles from "./style.module.css";
import Link from 'next/link';

export default function SearchResultsPage() {
    return (
        <Suspense>
            <SearchResultsContent />
        </Suspense>
    )
}

function SearchResultsContent() {
    const [dataList, setDataList] = useState([]);
    const searchParams = useSearchParams();
    const query = searchParams.get('query');

    console.log(dataList);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!query) return;

                const url = `${process.env.NEXT_PUBLIC_API_SERVER}/api/ajax/live_search?value=${encodeURIComponent(query)}`;
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                });
                if (!response.ok) {
                    throw new Error(`Ошибка HTTP live_search: ${response.status}`);
                }

                const result = await response.json();
                setDataList(result);

            } catch (error) {
                console.error('Ошибка в работе поиска:', error);
            }
        };

        fetchData();
    }, [query]);


    return (
        <section className={styles.section}>
            <div className="container">
                <h1>Результаты поиска для: {query}</h1>
                <ul className={styles.list}>
                    {dataList && dataList.length > 0 ?
                        (
                            dataList.map((item, index) => {
                                return (

                                    <li key={index} className={styles.item}>
                                        <Link href={item.url}
                                            className={styles.item_link}
                                        >
                                            {item?.title}
                                        </Link>
                                    </li>
                                )
                            })
                        )
                        :
                        (<p>Ничего не найдено</p>)
                    }

                </ul>
            </div>
        </section>
    );
}