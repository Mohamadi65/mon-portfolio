"use client";

import * as React from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  RotateCcw,
  PictureInPicture2,
  ChevronDown,
} from "lucide-react";

/** Format 65 -> 01:05, etc. */
function fmtTime(sec: number) {
  if (!isFinite(sec) || sec < 0) sec = 0;
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = Math.floor(sec % 60);
  const mm = m < 10 && h > 0 ? `0${m}` : `${m}`;
  const ss = s < 10 ? `0${s}` : `${s}`;
  return h > 0 ? `${h}:${mm}:${ss}` : `${m}:${ss}`;
}

type Props = {
  /** URL absolue renvoyée par le worker (ex: https://.../file/galleries/8/vids/xxx.mp4) */
  src: string;
  /** MIME type si tu veux être explicite (par défaut video/mp4) */
  type?: string;
  /** Image d’aperçu */
  poster?: string | null;
  /** Démarrer en autoplay (muté pour éviter le blocage navigateur) */
  autoPlay?: boolean;
  /** Classe Tailwind optionnelle */
  className?: string;
  /** Texte alternatif / titre accessible */
  label?: string;
};

export default function VideoPlayer({
  src,
  type = "video/mp4",
  poster,
  autoPlay,
  className,
  label = "Lecteur vidéo",
}: Props) {
  const ref = React.useRef<HTMLVideoElement | null>(null);

  const [ready, setReady] = React.useState(false);
  const [playing, setPlaying] = React.useState(false);
  const [muted, setMuted] = React.useState(false);
  const [volume, setVolume] = React.useState(1);
  const [duration, setDuration] = React.useState(0);
  const [current, setCurrent] = React.useState(0);
  const [bufferedEnd, setBufferedEnd] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [fs, setFs] = React.useState(false);
  const [rate, setRate] = React.useState(1);

  // --- handlers
  const togglePlay = React.useCallback(() => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  }, []);

  const toggleMute = React.useCallback(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  }, []);

  const onVolume = (val: number) => {
    const v = ref.current;
    if (!v) return;
    const clamped = Math.max(0, Math.min(1, val));
    v.volume = clamped;
    v.muted = clamped === 0;
    setVolume(clamped);
    setMuted(v.muted);
  };

  const seek = (val: number) => {
    const v = ref.current;
    if (!v || !isFinite(val)) return;
    v.currentTime = Math.max(0, Math.min(duration || 0, val));
  };

  const step = (delta: number) => {
    const v = ref.current;
    if (!v) return;
    seek(v.currentTime + delta);
  };

  const setPlaybackRate = (r: number) => {
    const v = ref.current;
    if (!v) return;
    v.playbackRate = r;
    setRate(r);
  };

  const togglePiP = async () => {
    const v = ref.current as any;
    if (!v) return;
    try {
      if (document.pictureInPictureElement) {
        await (document as any).exitPictureInPicture();
      } else if (v.requestPictureInPicture) {
        await v.requestPictureInPicture();
      }
    } catch {}
  };

  const toggleFullscreen = async () => {
    const el = ref.current?.parentElement;
    if (!el) return;
    if (!document.fullscreenElement) {
      await el.requestFullscreen().catch(() => {});
      setFs(true);
    } else {
      await document.exitFullscreen().catch(() => {});
      setFs(false);
    }
  };

  // --- effects
  React.useEffect(() => {
    const v = ref.current;
    if (!v) return;

    const onLoaded = () => {
      setReady(true);
      setDuration(v.duration || 0);
      setCurrent(v.currentTime || 0);
      setVolume(v.volume);
      setMuted(v.muted);
      setRate(v.playbackRate);
    };
    const onTime = () => setCurrent(v.currentTime || 0);
    const onProg = () => {
      try {
        const b = v.buffered;
        const end = b.length ? b.end(b.length - 1) : 0;
        setBufferedEnd(end);
      } catch {}
    };
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onWaiting = () => setLoading(true);
    const onCanPlay = () => setLoading(false);
    const onEnded = () => setPlaying(false);
    const onVol = () => {
      setVolume(v.volume);
      setMuted(v.muted);
    };

    v.addEventListener("loadedmetadata", onLoaded);
    v.addEventListener("timeupdate", onTime);
    v.addEventListener("progress", onProg);
    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);
    v.addEventListener("waiting", onWaiting);
    v.addEventListener("canplay", onCanPlay);
    v.addEventListener("ended", onEnded);
    v.addEventListener("volumechange", onVol);

    return () => {
      v.removeEventListener("loadedmetadata", onLoaded);
      v.removeEventListener("timeupdate", onTime);
      v.removeEventListener("progress", onProg);
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
      v.removeEventListener("waiting", onWaiting);
      v.removeEventListener("canplay", onCanPlay);
      v.removeEventListener("ended", onEnded);
      v.removeEventListener("volumechange", onVol);
    };
  }, [src]);

  // keyboard shortcuts
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!ref.current) return;
      if ((e.target as HTMLElement)?.tagName?.toLowerCase() === "input") return;

      switch (e.key.toLowerCase()) {
        case " ":
        case "k":
          e.preventDefault();
          togglePlay();
          break;
        case "m":
          toggleMute();
          break;
        case "f":
          toggleFullscreen();
          break;
        case "arrowright":
          step(5);
          break;
        case "arrowleft":
          step(-5);
          break;
        case "arrowup":
          onVolume(volume + 0.05);
          break;
        case "arrowdown":
          onVolume(volume - 0.05);
          break;
        default:
          break;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [togglePlay, toggleMute, volume, step, toggleFullscreen]);

  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl bg-black shadow ${
        className || ""
      }`}
      onPointerDown={(e) => e.stopPropagation()}
      onClick={(e) => e.stopPropagation()}
    >
      <video
        ref={ref}
        className="block w-full h-auto"
        // important pour iOS
        playsInline
        // on laisse l’UI native cachée (on reconstruit nos contrôles)
        controls={false}
        // réduit le coût réseau
        preload="metadata"
        // empêche le DL dans les contrôles natifs (certains navigateurs)
        controlsList="nodownload"
        // autoriser AirPlay sur Safari
        x-webkit-airplay="allow"
        poster={poster || undefined}
        muted={autoPlay || undefined}
        autoPlay={autoPlay}
        onDoubleClick={toggleFullscreen}
        crossOrigin="anonymous"
        onPointerDown={(e) => e.stopPropagation()}
        onClick={(e) => {
          e.stopPropagation();
          togglePlay();
        }}
      >
        <source src={src} type={type} />
      </video>

      {/* Overlay gros bouton Play + spinner */}
      {!playing && (
        <button
          aria-label={ready ? "Lire" : "Chargement"}
          onClick={togglePlay}
          className="absolute inset-0 m-auto grid place-items-center text-white/90"
        >
          {loading ? (
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-white/30 border-t-white" />
          ) : (
            <div className="rounded-full bg-white/15 p-4 backdrop-blur">
              <Play className="h-10 w-10" />
            </div>
          )}
        </button>
      )}

      {/* Barre de contrôle */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/60 to-black/0">
        {/* Seekbar */}
        <div className="mx-3">
          <div className="relative h-3">
            {/* buffer */}
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-white/25"
              style={{
                width: duration ? `${(bufferedEnd / duration) * 100}%` : "0%",
              }}
            />
            {/* progress */}
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-white"
              style={{
                width: duration ? `${(current / duration) * 100}%` : "0%",
              }}
            />
            <input
              aria-label="Position"
              className="absolute inset-0 w-full appearance-none bg-transparent [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white cursor-pointer"
              type="range"
              min={0}
              max={Math.max(1, duration)}
              step={0.1}
              value={current}
              onChange={(e) => seek(parseFloat(e.currentTarget.value))}
            />
          </div>
        </div>

        {/* Buttons row */}
        <div className="flex items-center justify-between px-3 py-2 text-white">
          <div className="flex items-center gap-2">
            <button
              className="rounded p-2 hover:bg-white/10"
              onClick={togglePlay}
              aria-label={playing ? "Pause" : "Lecture"}
              title={playing ? "Pause (Espace)" : "Lecture (Espace)"}
            >
              {playing ? (
                <Pause className="h-5 w-5" />
              ) : (
                <Play className="h-5 w-5" />
              )}
            </button>

            <button
              className="rounded p-2 hover:bg-white/10"
              onClick={() => step(-10)}
              aria-label="Reculer"
              title="Reculer 10s (←)"
            >
              <RotateCcw className="h-5 w-5 rotate-180" />
            </button>

            <button
              className="rounded p-2 hover:bg-white/10"
              onClick={() => step(10)}
              aria-label="Avancer"
              title="Avancer 10s (→)"
            >
              <RotateCcw className="h-5 w-5" />
            </button>

            <div className="ml-1 flex items-center gap-2">
              <button
                className="rounded p-2 hover:bg-white/10"
                onClick={toggleMute}
                aria-label={
                  muted || volume === 0 ? "Activer le son" : "Couper le son"
                }
                title="M (Mute)"
              >
                {muted || volume === 0 ? (
                  <VolumeX className="h-5 w-5" />
                ) : (
                  <Volume2 className="h-5 w-5" />
                )}
              </button>
              <input
                aria-label="Volume"
                className="w-24 cursor-pointer accent-white"
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={(e) => onVolume(parseFloat(e.currentTarget.value))}
              />
            </div>

            <div className="ml-2 tabular-nums text-sm">
              {fmtTime(current)} / {fmtTime(duration)}
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Playback rate */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 rounded bg-white/10 px-2 py-1 text-sm hover:bg-white/20"
                title="Vitesse"
              >
                {rate}x <ChevronDown className="h-3 w-3" />
              </button>
              <div className="invisible absolute right-0 top-full z-20 mt-1 w-28 overflow-hidden rounded-md border border-white/10 bg-black/85 p-1 opacity-0 backdrop-blur transition group-hover:visible group-hover:opacity-100">
                {[0.5, 0.75, 1, 1.25, 1.5, 2].map((r) => (
                  <button
                    key={r}
                    className={`block w-full rounded px-2 py-1 text-left text-sm hover:bg-white/10 ${
                      r === rate ? "bg-white/15" : ""
                    }`}
                    onClick={() => setPlaybackRate(r)}
                  >
                    {r}x
                  </button>
                ))}
              </div>
            </div>

            <button
              className="rounded p-2 hover:bg-white/10"
              onClick={togglePiP}
              aria-label="Picture in Picture"
              title="Picture in Picture"
            >
              <PictureInPicture2 className="h-5 w-5" />
            </button>

            <button
              className="rounded p-2 hover:bg-white/10"
              onClick={toggleFullscreen}
              aria-label={fs ? "Quitter plein écran" : "Plein écran"}
              title="F (Plein écran)"
            >
              {fs ? (
                <Minimize className="h-5 w-5" />
              ) : (
                <Maximize className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
