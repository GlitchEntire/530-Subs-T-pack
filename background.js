const URL_MAP = {
  "||miniblox.*textures/spritesheet.png": "https://raw.githubusercontent.com/notsenpai52013-bit/Not_Mini-200-Subs-Texture-Pack/refs/heads/main/spritesheet-t%20(6)%20(7)%20(5)%20(1).png",
  "||miniblox.*textures/models/armor/chainmail_layer_1.png": "https://raw.githubusercontent.com/notsenpai52013-bit/Not_Mini-200-Subs-Texture-Pack/refs/heads/main/armor/chainmail_layer_1.png",
  "||miniblox.*textures/models/armor/chainmail_layer_2.png": "https://raw.githubusercontent.com/notsenpai52013-bit/Not_Mini-200-Subs-Texture-Pack/refs/heads/main/armor/chainmail_layer_2.png",
  "||miniblox.*textures/models/armor/diamond_layer_1.png": "https://raw.githubusercontent.com/notsenpai52013-bit/Not_Mini-200-Subs-Texture-Pack/refs/heads/main/armor/diamond_layer_1.png",
  "||miniblox.*textures/models/armor/diamond_layer_2.png": "https://raw.githubusercontent.com/notsenpai52013-bit/Not_Mini-200-Subs-Texture-Pack/refs/heads/main/armor/diamond_layer_2.png",
  "||miniblox.*textures/models/armor/emerald_layer_1.png": "https://raw.githubusercontent.com/SmoothDude6969/MRTP/main/armor/emerald_layer_1.png",
  "||miniblox.*textures/models/armor/emerald_layer_2.png": "https://raw.githubusercontent.com/SmoothDude6969/MRTP/main/armor/emerald_layer_2.png",
  "||miniblox.*textures/models/armor/infernium_layer_1.png": "https://raw.githubusercontent.com/SmoothDude6969/MRTP/main/armor/infernium_layer_1.png",
  "||miniblox.*textures/models/armor/infernium_layer_2.png": "https://raw.githubusercontent.com/SmoothDude6969/MRTP/main/armor/infernium_layer_2.png",
  "||miniblox.*textures/models/armor/gold_layer_1.png": "https://raw.githubusercontent.com/notsenpai52013-bit/Not_Mini-200-Subs-Texture-Pack/refs/heads/main/armor/gold_layer_1.png",
  "||miniblox.*textures/models/armor/gold_layer_2.png": "https://raw.githubusercontent.com/notsenpai52013-bit/Not_Mini-200-Subs-Texture-Pack/refs/heads/main/armor/gold_layer_2.png",
  "||miniblox.*textures/models/armor/iron_layer_1.png": "https://raw.githubusercontent.com/notsenpai52013-bit/Not_Mini-200-Subs-Texture-Pack/refs/heads/main/armor/iron_layer_1.png",
  "||miniblox.*textures/models/armor/iron_layer_2.png": "https://raw.githubusercontent.com/notsenpai52013-bit/Not_Mini-200-Subs-Texture-Pack/refs/heads/main/armor/iron_layer_2.png",
  "||miniblox.*textures/models/armor/leather_layer_1.png": "https://raw.githubusercontent.com/notsenpai52013-bit/Not_Mini-200-Subs-Texture-Pack/refs/heads/main/armor/leather_layer_1.png",
  "||miniblox.*textures/armor/leather_layer_1_overlay.png": "https://raw.githubusercontent.com/notsenpai52013-bit/Not_Mini-200-Subs-Texture-Pack/refs/heads/main/armor/leather_layer_1_overlay.png",
  "||miniblox.*textures/models/armor/leather_layer_2.png": "https://raw.githubusercontent.com/notsenpai52013-bit/Not_Mini-200-Subs-Texture-Pack/refs/heads/main/armor/leather_layer_2.png",
  "||miniblox.*textures/armor/leather_layer_2_overlay.png": "https://raw.githubusercontent.com/notsenpai52013-bit/Not_Mini-200-Subs-Texture-Pack/refs/heads/main/armor/leather_layer_2_overlay.png",
  "||miniblox.*textures/misc/enchanted_item_glint.png": 
};

let rules = [];
let idx = 1;

for (const [src, dst] of Object.entries(URL_MAP)) {
  rules.push({
    "id": idx++,
    "action": { "type": "redirect", "redirect": { "url": dst } },
    "condition": { "urlFilter": src, "resourceTypes": ["image"] }
  });
}

chrome.declarativeNetRequest.updateDynamicRules(
  { addRules: rules, removeRuleIds: rules.map(rule => rule.id) },
  () => {
    if (chrome.runtime.lastError) console.error("Error updating:", chrome.runtime.lastError);
    else console.log("All tool textures applied successfully!");
  }
);
