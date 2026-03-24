
import { Dialog, DialogContent, DialogHeader, DialogDescription, DialogFooter, DialogTitle } from "../ui/dialog"
import { useDropzone } from "react-dropzone"
import { useCallback, useState } from "react"

export default function UploadDialog({ open, onOpenChange }) {

    const [Files, setFiles] = useState([])

    const onDrop = useCallback((acceptedFiles) => {
        setFiles(acceptedFiles);
        console.log("selected Files:", acceptedFiles)

    }, [])

    const { getRootProps, getInputProps} = useDropzone({
        onDrop,
        multiple: true,
        maxSize: 2500 * 1024 * 1024
    });

    const handleFile = () => {
        if (Files.length === 0) {   
            alert("Please select a files to upload")
            return;
        }
        console.log("Uploading file:", Files);

    }
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>

            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-red-500 text-xs ">Files are automatically deleted every 7 days.</DialogTitle>
                    <DialogDescription>You can upload 1000 files in total. Size limit is 2500 mb per file.</DialogDescription>
                </DialogHeader>
                <div
                    {...getRootProps()}
                    className="border-2 border-dashed border-gray-300 p-6 mt-2 h-48 flex items-center justify-center cursor-pointer"
                >
                    <input {...getInputProps()} />

                    {Files.length > 0 ? (
                        <div className="flex gap-3 flex-wrap justify-center">
                            {Files.map((file, index) => {
                                const preview = URL.createObjectURL(file);

                                return (
                                    <div
                                        key={index} 
                                        className="w-24 h-24 rounded-lg overflow-hidden border"
                                    >
                                        <img
                                            src={preview}
                                            alt="preview"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    ) : null}
                </div>

                <DialogFooter>
                    <button
                        onClick={handleFile}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mt-4 cursor-pointer">
                        Upload
                    </button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}