// Titik masuk entri gambar: tugasnya cuma satu, menyalin entry.png yang
// sudah jadi ke direktori output. Tidak ada gambar yang digambar di sini,
// tidak ada file lain yang ditulis, dan draw.py tidak pernah dijalankan.

import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath as urlToPath } from "node:url";

// Lokasi script dihitung dari URL modulnya sendiri, jadi program tetap
// menemukan entry.png walau grader menjalankannya dari direktori lain.
const scriptPath = urlToPath(import.meta.url);
const scriptFolder = path.resolve(scriptPath, "..");
const sourceImage = path.resolve(scriptFolder, "entry.png");

// Folder tujuan dibaca dari environment; kalau tidak disetel, pakai /output.
const targetFolder = process.env.OUTPUT_DIR || "/output";
const targetImage = path.resolve(targetFolder, "entry.png");

await fs.promises.mkdir(targetFolder, { recursive: true });
await fs.promises.copyFile(sourceImage, targetImage);
