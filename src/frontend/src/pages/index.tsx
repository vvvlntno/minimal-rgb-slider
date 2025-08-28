import { Geist, Geist_Mono } from "next/font/google";
import RGBSlider from "../../components/rgbslider";
import SavedColors from "../../components/savedcolors";
import AddColor from "../../components/addcolor";
import React, { useRef, useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const rgbRef = useRef<RGBSlider>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleSave = async (name: string) => {
    if (!rgbRef.current) return;
    const { red, green, blue } = rgbRef.current.getValues();
    try {
      setIsSaving(true);
      const form = new FormData();
      form.append('red', String(red));
      form.append('green', String(green));
      form.append('blue', String(blue));
      form.append('name', name);

      const response = await fetch('http://127.0.0.1:8000/insert_color.php', {
        method: 'POST',
        body: form,
      });
      if (response.ok) {
        setRefreshKey((k) => k + 1);
      }
    } finally {
      setIsSaving(false);
    }
  };
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} font-sans flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}
    >
      <RGBSlider ref={rgbRef}/>
      <AddColor onSave={handleSave} isSaving={isSaving}/>
      <hr />
      <div className="flex flex-col">
        <p className="text-xl font-bold tracking-wide">Gespeicherte Farben</p>
        <div className="flex flex-col gap-10">
          <SavedColors refreshKey={refreshKey}/>
        </div>
      </div>
    </div>
  );
}
