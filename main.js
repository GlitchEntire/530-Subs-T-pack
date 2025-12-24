// Map game texture URLs to your GitHub textures
const TOOL_TEXTURES = {
  "textures/items/diamond_axe.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/Tools/diamond_axe.png",
  "textures/items/diamond_hoe.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/Tools/diamond_hoe.png",
  "textures/items/diamond_pickaxe.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/Tools/diamond_pickaxe.png",
  "textures/items/diamond_shovel.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/Tools/diamond_shovel.png",
  "textures/items/diamond_sword.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/Tools/diamond_sword.png",

  "textures/items/gold_axe.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/Tools/gold_axe.png",
  "textures/items/gold_hoe.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/Tools/gold_hoe.png",
  "textures/items/gold_pickaxe.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/Tools/gold_pickaxe.png",
  "textures/items/gold_shovel.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/Tools/gold_shovel.png",
  "textures/items/gold_sword.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/Tools/gold_sword.png",

  "textures/items/iron_axe.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/Tools/iron_axe.png",
  "textures/items/iron_hoe.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/Tools/iron_hoe.png",
  "textures/items/iron_pickaxe.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/Tools/iron_pickaxe.png",
  "textures/items/iron_shovel.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/Tools/iron_shovel.png",
  "textures/items/iron_sword.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/Tools/iron_sword.png",

  "textures/items/stone_axe.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/Tools/stone_axe.png",
  "textures/items/stone_hoe.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/Tools/stone_hoe.png",
  "textures/items/stone_pickaxe.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/Tools/stone_pickaxe.png",
  "textures/items/stone_shovel.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/Tools/stone_shovel.png",
  "textures/items/stone_sword.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/Tools/stone_sword.png",

  "textures/items/wood_axe.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/Tools/wood_axe.png",
  "textures/items/wood_hoe.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/Tools/wood_hoe.png",
  "textures/items/wood_pickaxe.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/Tools/wood_pickaxe.png",
  "textures/items/wood_shovel.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/Tools/wood_shovel.png",
  "textures/items/wood_sword.png": "https://raw.githubusercontent.com/Not_Mini-200-Subs-Texture-Pack/main/Tools/wood_sword.png"
};

// Replace Image.src for all tools
function replaceToolTextures() {
  const images = document.querySelectorAll("img");
  images.forEach(img => {
    const url = img.src.split("/").slice(-2).join("/"); // get last two parts of URL
    if (TOOL_TEXTURES[url]) {
      img.src = TOOL_TEXTURES[url];
    }
  });
}

// Wait for the page to load textures
window.addEventListener("load", () => {
  replaceToolTextures();
  console.log("Tool textures replaced!");
  // Optional: repeat every second in case new tools spawn
  setInterval(replaceToolTextures, 1000);
});
