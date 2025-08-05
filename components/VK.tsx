import Script from "next/script";

export default function VK() {
  return (
    <Script
      id="vkPixel"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
var _tmr = window._tmr || (window._tmr = []);
_tmr.push({id: "3676981", type: "pageView", start: (new Date()).getTime()});
(function (d, w, id) {
  if (d.getElementById(id)) return;
  var ts = d.createElement("script"); ts.type = "text/javascript"; ts.async = true; ts.id = id;
  ts.src = "https://top-fwz1.mail.ru/js/code.js";
  var f = function () {var s = d.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ts, s);};
  if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); }
})(document, window, "tmr-code");
        `,
      }}
    >
      <noscript>
        <div>
          <img
            src="https://top-fwz1.mail.ru/counter?id=3676981;js=na"
            style="position:absolute;left:-9999px;"
            alt="Top.Mail.Ru"
          />
        </div>
      </noscript>
    </Script>
  );
}
