"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";

const base = "/";

export function Metrika({ code }) {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const isInitedRef = useRef(false);
  const pathName = usePathname();
  const searchParams = useSearchParams();

  // Инициализация счётчика после загрузки скрипта и получения кода
  useEffect(() => {
    if (!isScriptLoaded) return;
    if (!Number.isFinite(code)) return;
    if (typeof window === 'undefined' || typeof window.ym !== 'function') return;
    if (isInitedRef.current) return;

    window.ym(code, 'init', {
      defer: true,
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
    });
    isInitedRef.current = true;
  }, [isScriptLoaded, code]);

  useEffect(() => {
    const params = searchParams.toString();
    const url = base + pathName + (params ? "?" + params : "");

    if (isInitedRef.current && Number.isFinite(code) && typeof window !== 'undefined' && typeof window.ym === 'function') {
      window.ym(code, "hit", url);
    }
  }, [pathName, searchParams, code]);

  return (
    <>
      <Script
        id="ym-tag"
        src="https://mc.yandex.ru/metrika/tag.js"
        strategy="afterInteractive"
        onLoad={() => setIsScriptLoaded(true)}
      />
      <noscript>
        <div><img src={`https://mc.yandex.ru/watch/${Number.isFinite(code) ? code : ''}`} style={{ position: 'absolute', left: '-9999px' }} alt="" /></div>
      </noscript>
    </>
  );
}