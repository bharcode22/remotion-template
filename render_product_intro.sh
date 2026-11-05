#!/bin/bash
# -----------------------------------------------------------------------------
# Script Export Video: Product Introduction & IoT Architecture (Naskah 12)
# Resolusi: 1080x1920 (Portrait 9:16 Full HD) @ 30 FPS
# Output: out/ProductIntroduction.mp4
# -----------------------------------------------------------------------------

set -e

echo "========================================================"
echo "🎬 Memulai Export Remotion: ProductIntroduction (1080p)"
echo "========================================================"

# Pastikan folder output ada
mkdir -p out

# Jalankan Remotion render dengan konfigurasi 1080p & yuv420p universal codec
npx remotion render ProductIntroduction out/ProductIntroduction.mp4 \
  --pixel-format=yuv420p \
  --codec=h264 \
  --audio-codec=aac \
  --overwrite

echo ""
echo "========================================================"
echo "✅ Export Selesai!"
echo "📁 File video tersimpan di: out/ProductIntroduction.mp4"
echo "========================================================"

