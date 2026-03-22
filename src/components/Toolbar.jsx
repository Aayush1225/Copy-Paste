import { Copy, Check, Link, Upload, Download, Settings } from "lucide-react";

export default function Toolbar({ text, copy, copied }) {
  return (
    <div className="flex flex-wrap justify-end items-center gap-2 mb-2 text-xs">

      
      <button
        onClick={() => copy(text)}
        disabled={copied}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all
        ${
          copied
            ? "bg-green-700 "
            : "bg-white backdrop-blur border border-gray-300 hover:bg-gray-200 text-gray-700"
        }`}
      >
        {copied ? <Check size={14} /> : <Copy size={14} />}
        {copied ? "Copied" : "Copy"}
      </button>

      
      <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition text-gray-700">
        <Link size={14} />
        Links
      </button>

      
      <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition text-gray-700">
        <Upload size={14} />
        Upload
      </button>

      
      <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition text-gray-700">
        <Download size={14} />
        Download
      </button>

      
      <button className="p-2 rounded-lg hover:bg-stone-400 transition text-white">
        <Settings size={16} />
      </button>

    </div>
  );
}