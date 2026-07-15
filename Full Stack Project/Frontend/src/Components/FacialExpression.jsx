import React, { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";
import { Pause, Play } from "lucide-react";
import { getToken } from "../utils/auth";

export default function FacialExpression({ onLogout }) {
  const videoRef = useRef();
  const [modelsLoaded, setModelsLoaded] = useState(false);
  const [expression, setExpression] = useState("Not detected");
  const [songs, setSongs] = useState([]);
  const [error, setError] = useState("");

  const url = "http://localhost:8000/app/songs";
  async function fetchSongs() {
    const data = await fetch(url, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    const data1 = await data.json();
    if (!data.ok) {
      setError(data1.message || "Failed to load songs");
      return;
    }
    setSongs(data1.all || []);
  }

  useEffect(() => {
    fetchSongs();
  }, []);

  const filterSongs = songs.filter((el) => el.mood == expression);

  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = "/models";
      await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
      await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
      setModelsLoaded(true);
      startVideo();
    };
    const startVideo = () => {
      navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
        videoRef.current.srcObject = stream;
      });
    };
    loadModels();
  }, []);

  const handleClick = async () => {
    if (!modelsLoaded) return;
    const detection = await faceapi
      .detectSingleFace(videoRef.current, new faceapi.TinyFaceDetectorOptions())
      .withFaceExpressions();
    if (detection) {
      const sorted = Object.entries(detection.expressions).sort(
        (a, b) => b[1] - a[1]
      );
      setExpression(sorted[0][0]);
    }
  };

  // ---- SINGLE audio element ke liye ----
  const audioRef = useRef(null);
  const [currentId, setCurrentId] = useState(null); // kaunsa song load hai
  const [isPlaying, setIsPlaying] = useState(false); // audio events se sync

  const handlePlay = (song) => {
    const audio = audioRef.current;
    if (!audio) return;

    if (currentId === song._id) {
      // same song → toggle
      if (audio.paused) audio.play().catch(() => {});
      else audio.pause();
    } else {
      // dusra song → src switch phir play
      audio.src = song.audioFile;
      setCurrentId(song._id);
      audio.play().catch(() => {});
    }
  };

  return (
    <div className="min-h-screen bg-[#faf9ff] px-10 py-6">
      <div className="page-topbar">
        <div>Moody Player</div>
        <button type="button" onClick={onLogout}>Logout</button>
      </div>

      <div className="flex gap-12 items-center">
        <video
          ref={videoRef}
          autoPlay
          muted
          className="w-[320px] h-[240px] rounded-xl object-cover shadow-md"
        />

        <div className="max-w-md">
          <h2 className="text-2xl font-bold mb-2">Live Mood Detection</h2>
          <p className="text-gray-600 mb-4">
            Your current mood is being analyzed in real-time. Enjoy music
            tailored to your feelings.
          </p>

          <button
            onClick={handleClick}
            className="simple-button"
          >
            Start Listening
          </button>

          <p className="mt-3 text-sm text-gray-700">
            <span className="font-semibold">Detected Mood:</span> {expression}
          </p>
        </div>
      </div>

      <div className="mt-12 max-w-3xl">
        <h3 className="text-xl font-semibold mb-4">Recommended Tracks</h3>
        {error && <p className="text-red-600 mb-3">{error}</p>}

        <div className="space-y-3">
          {filterSongs.map((song) => {
            const playingThis = currentId === song._id && isPlaying;
            return (
              <div
                key={song._id}
                className="flex items-center justify-between bg-white px-4 py-3 rounded-lg shadow-sm"
              >
                <div>
                  <p className="font-medium">{song.title}</p>
                  <p className="text-sm text-gray-500">{song.artist}</p>
                </div>

                <button
                  onClick={() => handlePlay(song)}
                  className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white shadow-lg"
                >
                  {playingThis ? <Pause size={28} /> : <Play size={28} />}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Ek hi audio — loop ke BAHAR */}
      <audio
        ref={audioRef}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  );
}
