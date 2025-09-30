"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import fetchApiServerData from '@/app/utils/fetchApiServerData';

const base = "/";

export function Metrika() {
  const [ymCode, setYmCode] = useState(null);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const isInitedRef = useRef(false);
  const pathName = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchApiServerData('settings/metrics');
      const code = Number(data?.data?.site_metrics);
      if (Number.isFinite(code)) {
        setYmCode(code);
      }
    }
    fetchData();
  }, []);

  // Инициализация счётчика после загрузки скрипта и получения кода
  useEffect(() => {
    if (!isScriptLoaded || !ymCode) return;
    if (typeof window === 'undefined' || typeof window.ym !== 'function') return;
    if (isInitedRef.current) return;

    window.ym(ymCode, 'init', {
      defer: true,
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
    });
    isInitedRef.current = true;
  }, [isScriptLoaded, ymCode]);

  useEffect(() => {
    const params = searchParams.toString();
    const url = base + pathName + (params ? "?" + params : "");

    if (isInitedRef.current && ymCode && typeof window !== 'undefined' && typeof window.ym === 'function') {
      window.ym(ymCode, "hit", url);
    }
  }, [pathName, searchParams, ymCode]);

  return (
    <Script
      id="ym-tag"
      src="https://mc.yandex.ru/metrika/tag.js"
      strategy="afterInteractive"
      onLoad={() => setIsScriptLoaded(true)}
    />
  );
}