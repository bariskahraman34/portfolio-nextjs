import { Lexend } from "next/font/google";
import "./globals.css";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import AsideMenu from "@/components/AsideMenu";
config.autoAddCss = false;

const lexend = Lexend({ subsets: ["latin"] });

export const metadata = {
  title: "Barış Kahraman | Portfolio",
  description: "Barış Kahraman'ın resmi portföy web sitesi. HTML, CSS, JavaScript, React ve Next.js konularında tecrübeli bir Front-End Developer olarak kişisel projelerimi keşfedin. Marmara Üniversitesi'nde Bilgisayar Programcılığı eğitimi alıyorum ve Acunmedya Akademi'de Frontend Yazılım Uzmanlığı eğitimi görüyorum. Teknik becerilerimi sürekli geliştiriyor, kullanıcı deneyimini iyileştiren etkili web siteleri oluşturmaya özen gösteriyorum. Ekip çalışmasına yatkınım, kullanıcı odaklı düşünüyorum ve yeni teknolojilere açığım.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={lexend.className}>
        <AsideMenu />
        {children}
      </body>
    </html>
  );
}
