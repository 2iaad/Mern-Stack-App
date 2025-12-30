import { X, Send, Image } from "lucide-react";
import { useRef, useState, type ReactElement } from "react";

export default function MessageInput() {

  const [text, setText] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);
  
  function handleImageChange() {

  }
  function removeImage() {}
  async function handleSendMessage() {
    
  }
  return (
    <div className="p-4 w-full">
      {/* show image selected */}
      {imagePreview && (
        <div className="mb-3 flex items-center gap-2">
          <div className="relative">
            <img
              src={imagePreview}
              alt="Preview"
              className="w-20 h-20 object-cover rounded-lg border border-zinc-700"
            />
            <button
              onClick={removeImage}
              className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-base-300
              flex items-center justify-center"
              type="button"
            >
              <X className="size-3" />
            </button>
          </div>
        </div>
      )}


      <form onSubmit={handleSendMessage} className="flex items-center gap-2">
        <div className="flex-1 flex gap-2">
          {/* message input */}
          <input  type="text" placeholder="Type a message..." value={text} onChange={(e) => setText(e.target.value)}
                  className="bg-gray-800 text-white w-full input input-bordered rounded-lg input-sm sm:input-md" />
          {/* file input */}
          <input type="file" accept="image/*" className="hidden" ref={fileInputRef} onChange={handleImageChange} />
          {/* file button */}
          <button type="button" onClick={() => fileInputRef.current?.click()}
                  className={`bg-gray-800 hidden sm:flex btn btn-circle ${imagePreview ? "text-emerald-500" : "text-zinc-400"}`} >
            <Image size={20} />
          </button>
        </div>

        {/* send button */}
        <button type="submit" className="btn btn-circle" disabled={!text.trim() && !imagePreview} >
          <Send size={20} className="mr-0.5 hover:bg-red-800" />
        </button>
      </form>
    </div>
  );
};
