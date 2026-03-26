'use client'
import html2canvas from "html2canvas";
import TweetCard from "@/components/TweetCard/TweetCard"
import { ArrowDown } from "lucide-react";
import { toast } from "sonner";

export default function page () {
	async function saveTweetAsImage () {
		try {
			const element = document.getElementById("tweet-app-container");
			if (!element) return;
	
			// Step 1: render the element at higher scale
			const canvas = await html2canvas(element, {
				scale: 2, // increases resolution
				useCORS: true,
				backgroundColor: "#fff"
			});
	
			const padding = 40;
	
			// Step 2: create a new canvas with padding
			const paddedCanvas = document.createElement("canvas");
			paddedCanvas.width = canvas.width + padding * 2;
			paddedCanvas.height = canvas.height + padding * 2;
	
			const ctx = paddedCanvas.getContext("2d");
			if (!ctx) return;
	
			ctx.fillStyle = "#ffffff";
			  ctx.fillRect(0, 0, paddedCanvas.width, paddedCanvas.height);
	
			// Step 3: draw original canvas into padded one
			ctx.drawImage(canvas, padding, padding);
	
			// Step 4: export image
			const link = document.createElement("a");
			link.download = "image.png";
			link.href = paddedCanvas.toDataURL("image/png");
			link.click();

			toast.success("Saved tweet !")
		} catch (e) {
			toast.error("Failed to save image");
		}
	}

	return (
		<div className="tweet-maker-app">
			<div className="save-btn-app">
				<button className="save" onClick={saveTweetAsImage}><ArrowDown size={20} /></button>
			</div>
			<div className="app-container" id="tweet-app-container">
				<TweetCard />
				<div className="box full dfb align-center justify-center pd-1">
					<div className="text-xxxs bold-700 fit dfb align-center gap-10">
						<div className="box fit h-fit">
							CREATED WITH tweet-maker-jade.vercel.app
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
