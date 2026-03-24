import { Copy, Check, Link, Upload, Download, Settings } from "lucide-react";
import { useState } from "react";
import UploadDialog from "./dialogs/UploadDialog";

export default function Toolbar({ text, copy, copied }) {
  const [uploadOpen , setuploadOpen] = useState(false)
  return (
    <>
    <div className="flex flex-wrap justify-center sm:justify-end items-center gap-2 mb-1 text-xs ">
      <button
        onClick={() => copy(text)}
        disabled={copied}
        className={`flex items-center gap-1 px-2 sm:px-3 py-1.5 rounded-lg transition cursor-pointer ${copied
          ? "bg-green-700 text-white"
          : "bg-white border border-gray-300 hover:bg-gray-200 text-gray-700"
          }`}
      >
        {copied ? <Check size={14} /> : <Copy size={14} />}
        <span className="hidden sm:inline">
          {copied ? "Copied" : "Copy"}
        </span>
      </button>

      {["Links", "Upload", "Download"].map((label, i) => {
        const icons = [<Link size={14} />, <Upload size={14} />, <Download size={14} />];
        return (
          <button
            key={label}
            onClick={()=>{
              if(label === "Upload" ) 
                setuploadOpen(true)
            }}
            className="flex items-center gap-1 px-2 sm:px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition text-gray-700 cursor-pointer"
          >
            {icons[i]}
            <span className="hidden sm:inline">{label}</span>
          </button>
        );
      })}

      <button className="p-1.5 sm:p-2 rounded-lg hover:bg-stone-400 transition text-white">
        <Settings size={16} />
      </button>
    </div>
    <UploadDialog open={uploadOpen} onOpenChange={setuploadOpen}></UploadDialog>
    </>
  );
}