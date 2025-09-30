"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { useEffect, useState } from "react";
import fetchApiServerData from '@/app/utils/fetchApiServerData';

const base = "/";

export function Metrika() {
  const [ymCode, setYmCode] = useState(null);
  const pathName = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchApiServerData('settings/metrics');
      setYmCode(data.data.site_metrics);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const params = searchParams.toString();
    const url = base + pathName + (params ? "?" + params : "");

    ym(ymCode, "hit", url);
  }, [pathName, searchParams]);

  return (
    <Script id="metrika">
      {`
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
 
        ym(${ymCode}, "init", {
          defer: true,
          clickmap:true,
          trackLinks:true,
          accurateTrackBounce:true
        });    
      `}
    </Script>
  );
}