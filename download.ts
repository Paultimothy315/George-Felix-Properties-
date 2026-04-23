import fs from "fs";
import path from "path";

async function downloadLogo() {
  try {
    const url = "https://drive.google.com/uc?export=download&id=1LvNCvz3Cv8rr3UHzaiEHcSaBGgekY-j_";
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    
    // Create public directory if it doesn't exist
    const publicDir = path.join(process.cwd(), "public");
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir);
    }
    
    const buffer = await response.arrayBuffer();
    fs.writeFileSync(path.join(publicDir, "ceo.jpg"), Buffer.from(buffer));
    console.log("Successfully downloaded image to public/ceo.jpg");
  } catch (error) {
    console.error("Failed to download logo:", error);
  }
}

downloadLogo();
