// One-off generator for KarKhmer PWA icons. Run: node make-icons.js
// Draws a maskable "K" mark (amber on deep teal) at the sizes Chrome needs.
const fs = require("fs");
const zlib = require("zlib");

// ---- CRC32 (for PNG chunks) ----
const CRC_TABLE = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();
function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}
function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const typeBuf = Buffer.from(type, "ascii");
  const body = Buffer.concat([typeBuf, data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body), 0);
  return Buffer.concat([len, body, crc]);
}
function encodePNG(width, height, rgba) {
  const sig = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;  // bit depth
  ihdr[9] = 6;  // color type RGBA
  // 10,11,12 = compression/filter/interlace = 0
  const stride = width * 4;
  const raw = Buffer.alloc((stride + 1) * height);
  for (let y = 0; y < height; y++) {
    raw[y * (stride + 1)] = 0; // filter: none
    rgba.copy(raw, y * (stride + 1) + 1, y * stride, y * stride + stride);
  }
  const idat = zlib.deflateSync(raw, { level: 9 });
  return Buffer.concat([
    sig,
    chunk("IHDR", ihdr),
    chunk("IDAT", idat),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

// ---- colors ----
const BG = [10, 40, 38];      // #0a2826 deep teal
const FG = [224, 164, 88];    // #e0a458 amber

// ---- glyph geometry (normalized 0..1, y down) ----
// Stem + two arms meeting near vertical middle, kept inside the maskable safe zone.
const STEM = { x0: 0.30, x1: 0.385, y0: 0.28, y1: 0.72 };
const JUNC = { x: 0.385, y: 0.5 };
const UP_END = { x: 0.70, y: 0.285 };
const DN_END = { x: 0.70, y: 0.715 };
const ARM_R = 0.052;

function inRect(x, y, r) {
  return x >= r.x0 && x <= r.x1 && y >= r.y0 && y <= r.y1;
}
function distToSeg(px, py, a, b) {
  const dx = b.x - a.x, dy = b.y - a.y;
  const len2 = dx * dx + dy * dy;
  let t = len2 ? ((px - a.x) * dx + (py - a.y) * dy) / len2 : 0;
  t = Math.max(0, Math.min(1, t));
  const cx = a.x + t * dx, cy = a.y + t * dy;
  return Math.hypot(px - cx, py - cy);
}
function inGlyph(x, y) {
  if (inRect(x, y, STEM)) return true;
  if (distToSeg(x, y, JUNC, UP_END) <= ARM_R) return true;
  if (distToSeg(x, y, JUNC, DN_END) <= ARM_R) return true;
  return false;
}

function render(size) {
  const SS = 4; // supersampling for anti-aliasing
  const buf = Buffer.alloc(size * size * 4);
  for (let py = 0; py < size; py++) {
    for (let px = 0; px < size; px++) {
      let hits = 0;
      for (let sy = 0; sy < SS; sy++) {
        for (let sx = 0; sx < SS; sx++) {
          const nx = (px + (sx + 0.5) / SS) / size;
          const ny = (py + (sy + 0.5) / SS) / size;
          if (inGlyph(nx, ny)) hits++;
        }
      }
      const cov = hits / (SS * SS);
      const i = (py * size + px) * 4;
      buf[i]     = Math.round(BG[0] + (FG[0] - BG[0]) * cov);
      buf[i + 1] = Math.round(BG[1] + (FG[1] - BG[1]) * cov);
      buf[i + 2] = Math.round(BG[2] + (FG[2] - BG[2]) * cov);
      buf[i + 3] = 255;
    }
  }
  return encodePNG(size, size, buf);
}

for (const [name, size] of [["icon-192.png", 192], ["icon-512.png", 512], ["apple-touch-icon.png", 180]]) {
  fs.writeFileSync(name, render(size));
  console.log("wrote", name, size + "x" + size);
}
