/* ============================================================
   Exp 2 — Dolly Shots Variants · Dolly In/Out
   Each card links to one YouTube clip and opens it on YouTube
   (new tab) when clicked. Edit `id` per card for its own clip.
   Caption types:
     - normal: model + (with camera movement term "term" in prompt)
     - preset: model + ( preset: <preset> )      ← e.g. Higgsfield
   `fail: true` shows a red FAIL marker after the caption.
   ============================================================ */

const YT_ID1 = "Sge3ltPFCQ8";
const YT_ID2 = "ZmXvzSeMnOA";
const YT_ID3 = "VbwTItaaT7U";
const YT_ID4 = "3f1ntOAlZFI";
const YT_ID5 = "T_fAJrKGgRk";
const YT_ID6 = "MsMc5WldICg";
const YT_ID7 = "QDhVwE4_ji0";
const YT_ID8 = "HY4GKoX07lc";
const YT_ID9 = "bSPkJk_8VIM";
const YT_ID10 = "gltcDWsh5Uo";
const YT_ID11 = "6xJyz4Mk-Ek";
const YT_ID12 = "h0GhphGkwYQ";
const YT_ID13 = "XyIoYhXtTrE";
const YT_ID14 = "giyPUpzRV5U";
// shared link for all boxes

const videos = [
  { title: "CSV ZoomInWord",          model: "Cinematic Studio Video_V1.5", term: "zoom in", id: YT_ID1 },
  { title: "CSV ZoomOutWordFail",   model: "Cinematic Studio Video_V1.5", term: "zoom out", fail: true,   id: YT_ID2 },
  { title: "CSV ZoomInModel",     model: "Cinematic Studio Video_V1.5 ", preset: " zoom in model" , id: YT_ID3 },
  { title: "CSV ZoomOutModel",          model: "Cinematic Studio Video_V1.5", preset: " zoom out model", id: YT_ID4 },

  { title: "Higgsfield DoP ZoomInModelOnly",      model: "Higgsfield DoP_", preset: " zoom in model",  id: YT_ID5 },
  { title: "Higgsfield DoP ZoomOutModelOnly", model: "Higgsfield DoP_", preset: " zoom out model",  id: YT_ID6 },
   { title: "Kling2 6 ZoomInWord", model: "Kling2.6_General Model", term: " zoom in ", id: YT_ID7 },
  { title: "Kling2 6 ZoomOutWord Fail", model: "Kling2.6_General Model", term: " zoom out ",fail: true, id: YT_ID8 },
  
    { title: "Veo 3 1 Zoom In",      model: "Veo 3.1 _General Model", term: "zoom in",  id: YT_ID9 },
  { title: "Veo 3 1 Zoom Out", model: "Veo 3.1 _General Model", term: " zoom out ",fail: true, id: YT_ID10 },
   { title: "Seedance1 5 Zoom In", model: "Seedance 1.5 _General Model", term: " zoom in ", id: YT_ID11 },
  { title: "Seedance1 5 Tilt Down", model: "Seedance 1.5 _General Model", term: " zoom out ",fail: true, id: YT_ID12 },
  
  { title: "Minimax Hailuo2 3 Zoom In", model: "Minimax Hailuo 2.3 _General Model", term: " zoom in ", id: YT_ID13 },
  { title: "Minimax Hailuo2 3 Zoom Out", model: "Minimax Hailuo 2.3 _General Model", term: " zoom out ",fail: true, id: YT_ID14 },
];

const grid = document.getElementById("grid");

videos.forEach((v) => {
  const card = document.createElement("article");
  card.className = "vcard";

  const watchUrl = `https://www.youtube.com/watch?v=${v.id}`;
  const thumbUrl = `https://img.youtube.com/vi/${v.id}/hqdefault.jpg`;
  const failMark = v.fail ? ` <span class="failmark">FAIL</span>` : ``;

  // build the caption: preset style vs camera-movement-term style
  let caption;
  if (v.preset) {
    caption = `${v.model} ( preset: ${v.preset} )${failMark}`;
  } else {
    caption =
      `${v.model}<span class="redhint">(with camera movement term</span> ` +
      `"<span class="term">${v.term}</span>" in prompt )${failMark}`;
  }

  card.innerHTML = `
    <a class="vthumb" href="${watchUrl}" target="_blank" rel="noopener"
       style="background-image:url('${thumbUrl}');background-size:cover;background-position:center;"
       aria-label="Open on YouTube: ${v.title}">
      <div class="vbar">
        <span class="vavatar">k</span>
        <span class="vtitle">${v.title}</span>
      </div>
      <span class="vchannel">kayAI</span>
      <span class="vplay" aria-hidden="true"></span>
    </a>
    <p class="vcap">${caption}</p>
  `;

  grid.appendChild(card);
});