import { Dialog, DialogContent, DialogHeader, DialogDescription, DialogFooter, DialogTitle } from "../ui/dialog";
import { useDropzone } from "react-dropzone";
import { useCallback, useState, useContext } from "react";
import { fileUpload } from "@/api/file";
import { DarkContext } from "../../App"; 

export default function UploadDialog({ open, onOpenChange, roomId, onUploadSuccess }) {
  const { darkMode } = useContext(DarkContext);

  const [Files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [status, setStatus] = useState("");

  const onDrop = useCallback((acceptedFiles) => {
    setFiles(acceptedFiles);
    console.log("selected Files:", acceptedFiles);
    setStatus("");
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    maxSize: 5 * 1024 * 1024,
  });

  const fileUploading = async () => {
    if (!Files[0]) return;
    setUploading(true);
    setStatus("");
    try {
      await fileUpload(roomId, Files[0]);
      setStatus("success");
      setFiles([]);
      onUploadSuccess?.();
    } catch (error) {
      console.log(error);
      setStatus("error");
    } finally {
      setUploading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200">
        <DialogHeader>  
          <DialogTitle className="text-red-500 text-xs">
            Files are automatically deleted every hours.
          </DialogTitle>
          <DialogDescription>
            You can upload 3 files in total. Size limit is 5 MB per file.
          </DialogDescription>
        </DialogHeader>

        <div
          {...getRootProps()}
          className={`border-2 border-dashed p-6 mt-2 h-48 flex items-center justify-center cursor-pointer
            ${darkMode ? "border-gray-600 bg-gray-800" : "border-gray-300 bg-gray-100"}
          `}
        >
          <input {...getInputProps()} />

          {Files.length > 0 ? (
            <div className="flex flex-col items-center gap-2">
              <p className="text-sm font-medium">{Files[0].name}</p>
              <p className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                {(Files[0].size / 1024).toFixed(2)} KB
              </p>
            </div>
          ) : (
            <p className={`${darkMode ? "text-gray-400" : "text-gray-500"} text-sm`}>
              Drag & drop or click to select file
            </p>
          )}
        </div>

        {status === "success" && (
          <p className="text-green-600 text-center mt-2">File uploaded successfully</p>
        )}
        {status === "error" && (
          <p className="text-red-600 text-center mt-2">Can't upload more than 3 files.</p>
        )}

        <DialogFooter>  
          <button
            onClick={fileUploading}
            disabled={uploading || Files.length === 0}
            className={`w-full px-4 py-2 rounded mt-4 text-white
              ${uploading ? "opacity-50 cursor-not-allowed" : darkMode ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-500 hover:bg-blue-700"}
            `}
          >
            {uploading ? "Uploading..." : "Upload"}
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}