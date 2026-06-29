"use client";
import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Music } from "lucide-react";

export default function AnthemPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [minimized, setMinimized] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !muted;
    setMuted(!muted);
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    const cur = audioRef.current.currentTime;
    const dur = audioRef.current.duration || 0;
    setCurrentTime(cur);
    setProgress(dur ? (cur / dur) * 100 : 0);
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) setDuration(audioRef.current.duration);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    audioRef.current.currentTime = pct * duration;
  };

  const fmt = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onEnd = () => { setPlaying(false); setProgress(0); setCurrentTime(0); };
    audio.addEventListener("ended", onEnd);
    return () => audio.removeEventListener("ended", onEnd);
  }, []);

  return (
    <div className={`fixed bottom-5 right-5 z-50 transition-all duration-300 ${minimized ? "w-14" : "w-72 sm:w-80"}`}>
      <audio
        ref={audioRef}
        src="/college-anthem.mp3"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        preload="metadata"
      />

      {minimized ? (
        /* Mini pill */
        <button
          onClick={() => setMinimized(false)}
          className={`w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all ${
            playing
              ? "bg-[#8b0000] animate-pulse"
              : "bg-[#0d1b3e] hover:bg-[#1a2d5a]"
          }`}
        >
          <Music className="w-5 h-5 text-[#c9a227]" strokeWidth={1.5} />
        </button>
      ) : (
        /* Full player */
        <div className="bg-[#0d1b3e] rounded-2xl shadow-2xl border border-white/10 overflow-hidden">
          {/* Header */}
          <div className="bg-[#8b0000] px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Music className="w-4 h-4 text-[#c9a227]" strokeWidth={1.5} />
              <span className="text-white text-xs font-bold uppercase tracking-wide">College Anthem</span>
            </div>
            <button
              onClick={() => setMinimized(true)}
              className="text-white/60 hover:text-white text-lg leading-none transition-colors w-6 h-6 flex items-center justify-center"
              title="Minimize"
            >
              —
            </button>
          </div>

          <div className="px-4 py-4">
            {/* Song info */}
            <div className="mb-4">
              <p className="text-white font-bold text-sm leading-tight">St. Michael's College</p>
              <p className="text-gray-400 text-xs mt-0.5">College Anthem · Batticaloa</p>
            </div>

            {/* Progress bar */}
            <div
              className="h-1.5 bg-white/10 rounded-full cursor-pointer mb-2 relative group"
              onClick={handleSeek}
            >
              <div
                className="h-full bg-[#c9a227] rounded-full transition-all relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>

            {/* Time */}
            <div className="flex justify-between text-xs text-gray-500 mb-4">
              <span>{fmt(currentTime)}</span>
              <span>{duration ? fmt(duration) : "--:--"}</span>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between">
              <button
                onClick={toggleMute}
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
              >
                {muted
                  ? <VolumeX className="w-4 h-4 text-gray-400" strokeWidth={1.5} />
                  : <Volume2 className="w-4 h-4 text-gray-400" strokeWidth={1.5} />
                }
              </button>

              <button
                onClick={togglePlay}
                className="w-12 h-12 rounded-full bg-[#c9a227] hover:bg-yellow-400 flex items-center justify-center shadow-lg transition-all hover:scale-105 active:scale-95"
              >
                {playing
                  ? <Pause className="w-5 h-5 text-[#0d1b3e]" strokeWidth={2} />
                  : <Play className="w-5 h-5 text-[#0d1b3e] ml-0.5" strokeWidth={2} />
                }
              </button>

              <div className="w-8 h-8" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
