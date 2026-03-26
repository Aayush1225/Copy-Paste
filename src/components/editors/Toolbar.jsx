import { Copy, Check, Upload, Download, Settings, Sun, Moon } from "lucide-react";
import { useState, useContext } from "react";
import UploadDialog from "../dialogs/UploadDialog";
import DownloadDialog from "../dialogs/DownLoadDialog";
import { DarkContext } from "../../App";

export default function Toolbar({ text, copy, copied, roomId }) {
  const [uploadOpen, setUploadOpen] = useState(false);
  const [downloadOpen, setDownloadOpen] = useState(false);

  const { darkMode, setDarkMode } = useContext(DarkContext);

  return (
    <>
      <div className="flex flex-wrap justify-center sm:justify-end items-center gap-2 mb-1 text-xs">
        {/* Copy Button */}
        <button
          onClick={() => copy(text)}
          disabled={copied}
          className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 disabled:bg-green-700 disabled:text-white"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
          <span>{copied ? "Copied" : "Copy"}</span>
        </button>

        {/* Upload Button */}
        <button
          onClick={() => setUploadOpen(true)}
          className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
        >
          <Upload size={14} />
          Upload
        </button>

        {/* Download Button */}
        <button
          onClick={() => setDownloadOpen(true)}
          className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
        >
          <Download size={14} />
          Download
        </button>


        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-yellow-300 dark:hover:bg-gray-600"
        >
          {darkMode ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </div>

     
      <UploadDialog
        open={uploadOpen}
        onOpenChange={setUploadOpen}
        roomId={roomId}
        onUploadSuccess={() => {
          if (downloadOpen) {
            setDownloadOpen(false);
            setTimeout(() => setDownloadOpen(true), 200);
          }
        }}
      />

      
      <DownloadDialog
        open={downloadOpen}
        onOpenChange={setDownloadOpen}
        roomId={roomId}
        onUploadClicked={() => {
          setDownloadOpen(false);
          setUploadOpen(true);
        }}
      />
    </>
  );
}