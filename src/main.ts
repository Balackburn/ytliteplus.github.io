import "./style.css";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

Fancybox.bind("[data-fancybox]");

const downloadLink = document.getElementById("downloadIpa")!;

downloadLink.addEventListener("click", async (e) => {
  e.preventDefault();
  
  const response = await fetch("https://api.github.com/repos/YTLitePlus/YTLitePlus/releases/latest");
  const json = await response.json();

  const match = json.body.match(/### Catbox\s*`(.+?\.ipa)`/);
  if (match && match[1]) {
    const fileName = match[1];
    const downloadUrl = `https://files.catbox.moe/${fileName}`;
    window.location.href = downloadUrl;
  } else {
    document.getElementById("alert")!.classList.remove("hidden");
  }
});
