import { Upload } from "lucide-react";
import { useState, useEffect, useContext } from "react";
import { fileGet , fileDelete } from "../../api/file";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../ui/dialog";
import { DarkContext } from "../../App";

export default function DownloadDialog({ open, onOpenChange, roomId, onUploadClicked  }) {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  const { darkMode } = useContext(DarkContext);

  useEffect(() => {
    if (!open) return;
    async function getFiles() {
      try {
        const response = await fileGet(roomId);
        setFiles(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the files.");
        setLoading(false);
      }
    }
    getFiles();
  }, [open, roomId]);
  

const Delete = async (id) => {
  try {
    console.log("Deleting:", id); 

    await fileDelete(roomId, id);

    setFiles((prev) =>
      prev.filter((file) => file.id !== id)
    );
  } catch (error) {
    console.log(error);
  }
};



  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200">
        <DialogHeader>
          <div className="text-red-500 text-l p-1 flex justify-center ">Files are deleted after 1 hour</div>
          <DialogTitle className="text-center">Your Uploaded Files</DialogTitle>
          <DialogDescription className="text-center">Download your files here</DialogDescription>
        </DialogHeader>

        {loading ? (
          <div className={`h-full py-2 text-center ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
            Loading...
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            {files.length > 0 ? (
              files.map((file) => (
                <div
                  key={file.id}
                  className={`flex justify-between items-center p-2 rounded border
                    ${darkMode ? "border-gray-700 bg-gray-800" : "border-gray-300 bg-gray-100"}`}
                >
                  <span>{file.fileName}</span>
                  <a
                    href={file.fileUrl.replace("/upload/","/upload/fl_attachment/")}
                    download
                    className={`text-blue-500 hover:underline ${darkMode ? "text-blue-400" : "text-blue-500"}`}
                  >
                    Download
                  </a>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                    onClick={()=>Delete(file.id)}
                  >
                    Delete
                  </button>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center gap-2">
                <p className={`${darkMode ? "text-gray-400" : "text-gray-500"} text-center`}>
                  No files uploaded yet.
                </p>
                <button
                  onClick={onUploadClicked}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-lg ${
                    darkMode ? "bg-gray-800 text-gray-200 hover:bg-gray-700" : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  <Upload size={14} />
                  Upload
                </button>
              </div>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}