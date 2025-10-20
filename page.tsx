"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

function Page() {
  const [timings, setTimings] = useState<any>(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const CountDown = (time: string) => {
    if (!time) return "Loading...";
    const [targetHour, targetMinute] = time.split(":").map(Number);
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentSecond = now.getSeconds();
    let diffhour = targetHour - currentHour;
    let diffMin = targetMinute - currentMinute;
    let diffSec = 0 - currentSecond;
    if (diffSec < 0) {
      diffSec += 60;
      diffMin--;
    }
    if (diffMin < 0) {
      diffMin += 60;
      diffhour--;
    }
    if (diffhour < 0) {
      diffhour += 24;
    }

    return `${diffhour.toString().padStart(2, "0")}h ${diffMin
      .toString()
      .padStart(2, "0")}m ${diffSec.toString().padStart(2, "0")}s`;
  };
  const getPrayerTime = async () => {
    try {
      const res = await fetch(
        "https://api.aladhan.com/v1/timings?latitude=23.8103&longitude=90.4125&method=2"
      );
      const data = await res.json();
      setTimings(data.data.timings);
    } catch (error) {
      console.error("Not fetch timings", error);
    }
  };
  useEffect(() => {
    getPrayerTime();
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  if (!timings) return <p>Loading prayer times...</p>;
  const PrayerColors: any = {
    Fajr: "from-sky-300 to-orange-300",
    Sunrise: "from-yellow-400 to-yellow-500",
    Dhuhr: "from-amber-300 to-amber-500",
    Asr: "from-blue-400 to-indigo-600",
    Sunset: "from-orange-400 to-red-500",
    Maghrib: "from-orange-400 to-red-500",
    Isha: "from-indigo-400 to-purple-600",
    Imsak: "from-gray-400 to-gray-600",
    Midnight: "from-black to-gray-700",
    Firstthird: "from-pink-400 to-purple-500",
    Lastthird: "from-blue-300 to-indigo-500",
  };
  const PrayerIcons: any = {
    Fajr: "🕌",
    Sunrise: "🌅",
    Dhuhr: "☀️",
    Asr: "🏙️",
    Sunset: "🌇",
    Maghrib: "🌆",
    Isha: "🌙",
    Imsak: "⏰",
    Midnight: "🌌",
    Firstthird: "⭐",
    Lastthird: "🌠",
  };
  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-5xl font-bold text-green-500 ">Prayer Times</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          className={`bg-gradient-to-r ${PrayerColors.Fajr} text-cyan-500 rounded-2xl shadow-[0_25px_25px_4px_rgba(255,200,0,0.5)] p-6 w-80 text-center space-y-10`}
        >
          <h1 className="text-3xl font-semibold text-yellow-300">
            {PrayerIcons.Fajr}Fajr
          </h1>
          <p>{timings.Fajr}</p>
          <p>Time Left:{CountDown(timings.Fajr)}</p>
        </div>
        <div
          className={`bg-gradient-to-r ${PrayerColors.Dhuhr} text-cyan-500 rounded-2xl shadow-[0_25px_25px_4px_rgba(255,200,0,0.5)] p-6 w-80 text-center`}
        >
          <h1 className="text-3xl font-semibold text-yellow-300">
            {PrayerIcons.Dhuhr}Duhr
          </h1>
          <p>{timings.Dhuhr}</p>
          <p>Time Left:{CountDown(timings.Dhuhr)}</p>
        </div>
        <div
          className={`bg-gradient-to-r ${PrayerColors.Asr} text-cyan-500 rounded-2xl shadow-[0_25px_25px_4px_rgba(255,200,0,0.5)] p-6 w-80 text-center`}
        >
          <h1 className="text-3xl font-semibold text-yellow-300">
            {PrayerIcons.Asr}Asr
          </h1>
          <p>{timings.Asr}</p>
          <p>Time Left:{CountDown(timings.Asr)}</p>
        </div>
        <div
          className={`bg-gradient-to-r ${PrayerColors.Maghrib} text-cyan-500 rounded-2xl shadow-[0_25px_25px_4px_rgba(255,200,0,0.5)] p-6 w-80 text-center`}
        >
          <h1 className="text-3xl font-semibold text-yellow-300">
            {PrayerIcons.Maghrib}Maghrib
          </h1>
          <p>{timings.Maghrib}</p>
          <p>Time Left:{CountDown(timings.Maghrib)}</p>
        </div>
        <div
          className={`bg-gradient-to-r ${PrayerColors.Isha} text-cyan-500 rounded-2xl shadow-[0_25px_25px_4px_rgba(255,200,0,0.5)] p-6 w-80 text-center`}
        >
          <h1 className="text-3xl font-semibold text-yellow-300">
            {PrayerIcons.Isha}Isha
          </h1>
          <p>{timings.Isha}</p>
          <p>Time Left:{CountDown(timings.Isha)}</p>
        </div>
        <div
          className={`bg-gradient-to-r ${PrayerColors.Imsak} text-cyan-500 rounded-2xl shadow-[0_25px_25px_4px_rgba(255,200,0,0.5)] p-6 w-80 text-center`}
        >
          <h1 className="text-3xl font-semibold text-yellow-300">
            {PrayerIcons.Imsak}Imsak
          </h1>
          <p>{timings.Imsak}</p>
          <p>Time Left:{CountDown(timings.Imsak)}</p>
        </div>
        <div
          className={`bg-gradient-to-r ${PrayerColors.Midnight} text-cyan-500 rounded-2xl shadow-[0_25px_25px_4px_rgba(255,200,0,0.5)] p-6 w-80 text-center`}
        >
          <h1 className="text-3xl font-semibold text-yellow-300">
            {PrayerIcons.Midnight}Midnight
          </h1>
          <p>{timings.Midnight}</p>
          <p>Time Left:{CountDown(timings.Midnight)}</p>
        </div>
        <div
          className={`bg-gradient-to-r ${PrayerColors.Firstthird} text-cyan-500 rounded-2xl shadow-[0_25px_25px_4px_rgba(255,200,0,0.5)] p-6 w-80 text-center`}
        >
          <h1 className="text-3xl font-semibold text-yellow-300">
            {PrayerIcons.FirstThird}FirstThird
          </h1>
          <p>{timings.FirstThird}</p>
          <p>Time Left:{CountDown(timings.Firstthird)}</p>
        </div>
        <div
          className={`bg-gradient-to-r ${PrayerColors.LastThird} text-cyan-500 rounded-2xl shadow-[0_25px_25px_4px_rgba(255,200,0,0.5)] p-6 w-80 text-center`}
        >
          <h1 className="text-3xl font-semibold text-yellow-300">
            {PrayerIcons.LastThird}LastThird
          </h1>
          <p>{timings.LastThird}</p>
          <p>Time Left:{CountDown(timings.LastThird)}</p>
        </div>
      </div>
    </div>
  );
}

export default Page;
