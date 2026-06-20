<template>
  <canvas ref="canvas" class="slide-bg-canvas" />
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useNav } from '@slidev/client'

const canvas = ref(null)
let animId = null

// --- パラメータ ---
const SPD          = 2 * 0.006
const OPA          = 8 / 10
const CNT          = 6
const BUBBLE_COUNT = 90
const WAVE_SEC     = 2.5      // 波を動かす秒数
const BG_COLOR     = '#eef4f8'  // 青みがかったオフホワイト

// 波の状態
let t           = 0
let waveActive  = false   // 波が動いているか
let waveUntil   = 0       // 波の停止時刻（performance.now基準）
let lastTime    = 0
let ctxRef      = null

// --- Slidev ナビゲーション ---
const { currentPage } = useNav()

watch(currentPage, () => {
  waveUntil  = performance.now() + WAVE_SEC * 1000
  waveActive = true
})

// --- 気泡 ---
function makeBubble() {
  const tier = Math.random()
  const r = tier < 0.65 ? 0.8 + Math.random() * 1.2
           : tier < 0.92 ? 2.0 + Math.random() * 1.5
           :                3.5 + Math.random() * 7.5
  return {
    x:         Math.random(),
    y:         0.42 + Math.random() * 0.52,
    r,
    life:      Math.random(),
    speed:     (0.001 + Math.random() * 0.0025) / (r * 0.15 + 0.6),
    swayAmp:   0.002 + Math.random() * 0.005,
    swayFreq:  1.0   + Math.random() * 2.0,
    swayPhase: Math.random() * Math.PI * 2,
  }
}

function resetBubble(b) {
  const tier = Math.random()
  b.r         = tier < 0.65 ? 0.8 + Math.random() * 1.2
               : tier < 0.92 ? 2.0 + Math.random() * 1.5
               :                3.5 + Math.random() * 7.5
  b.x         = Math.random()
  b.y         = 0.42 + Math.random() * 0.52
  b.life      = 0
  b.speed     = (0.001 + Math.random() * 0.0025) / (b.r * 0.15 + 0.6)
  b.swayAmp   = 0.002 + Math.random() * 0.005
  b.swayFreq  = 1.0   + Math.random() * 2.0
  b.swayPhase = Math.random() * Math.PI * 2
}

// 気泡の life は常時進める用の専用カウンタ
let bubbleT = 0
const bubbles = Array.from({ length: BUBBLE_COUNT }, makeBubble)

// --- 波のY座標 ---
function waveY(xi, wi, time, W, H) {
  const x = xi / W
  let y = 0
  y += Math.sin(x * 4.8  + time * 0.9 + wi * 1.7) * 0.048
  y += Math.sin(x * 2.1  - time * 0.6 + wi * 2.9) * 0.030
  y += Math.sin(x * 9.2  + time * 1.3 + wi * 0.8) * 0.014
  y += Math.sin(x * 1.1  - time * 0.3 + wi * 4.1) * 0.022
  return y * H
}

// --- 気泡描画 ---
function drawBubble(ctx, bx, by, r, alpha) {
  const ig = ctx.createRadialGradient(bx - r * 0.3, by - r * 0.3, r * 0.05, bx, by, r)
  ig.addColorStop(0,   `rgba(255,255,255,${(alpha * 0.5).toFixed(3)})`)
  ig.addColorStop(0.5, `rgba(140,210,235,${(alpha * 0.10 * OPA).toFixed(3)})`)
  ig.addColorStop(1,   `rgba(100,185,220,${(alpha * 0.05 * OPA).toFixed(3)})`)
  ctx.beginPath()
  ctx.arc(bx, by, r, 0, Math.PI * 2)
  ctx.fillStyle = ig
  ctx.fill()

  ctx.beginPath()
  ctx.arc(bx, by, r, 0, Math.PI * 2)
  ctx.strokeStyle = `rgba(255,255,255,${(alpha * 0.8).toFixed(3)})`
  ctx.lineWidth = Math.max(0.4, r * 0.14)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(bx - r * 0.2, by - r * 0.2, r * 0.5, Math.PI * 1.1, Math.PI * 1.7)
  ctx.strokeStyle = `rgba(255,255,255,${(alpha * 0.85).toFixed(3)})`
  ctx.lineWidth = Math.max(0.4, r * 0.16)
  ctx.stroke()

  if (r > 2.5) {
    ctx.beginPath()
    ctx.arc(bx + r * 0.3, by + r * 0.3, r * 0.2, Math.PI * 0.1, Math.PI * 0.7)
    ctx.strokeStyle = `rgba(255,255,255,${(alpha * 0.35).toFixed(3)})`
    ctx.lineWidth = Math.max(0.3, r * 0.09)
    ctx.stroke()
  }
}

// --- 背景・波・気泡の描画 ---
function drawFrame(ctx, W, H) {
  // オフホワイト背景
  ctx.fillStyle = BG_COLOR
  ctx.fillRect(0, 0, W, H)

  // 背景グラデーション
  const bg = ctx.createLinearGradient(0, 0, 0, H)
  bg.addColorStop(0,    `rgba(90,175,215,${(OPA * 0.12).toFixed(2)})`)
  bg.addColorStop(0.45, `rgba(120,200,225,${(OPA * 0.07).toFixed(2)})`)
  bg.addColorStop(0.65, `rgba(170,222,232,${(OPA * 0.04).toFixed(2)})`)
  bg.addColorStop(1,    `rgba(230,235,220,${(OPA * 0.03).toFixed(2)})`)
  ctx.fillStyle = bg
  ctx.fillRect(0, 0, W, H)

  // 波レイヤー（奥→手前）
  for (let wi = CNT - 1; wi >= 0; wi--) {
    const push   = (Math.sin(t * 0.9 + wi * 2.1) + 1) / 2
    const offset = push * 0.09 * H
    const baseY  = (0.38 + wi * 0.052) * H
    const depthT = wi / Math.max(CNT - 1, 1)
    const r      = Math.round(40  + depthT * 120)
    const g      = Math.round(160 + depthT * 60)
    const b      = Math.round(210 + depthT * 30)
    const peakA  = OPA * (0.28 - wi * 0.02)

    const wg = ctx.createLinearGradient(0, baseY - H * 0.1, 0, baseY + H * 0.22)
    wg.addColorStop(0,    `rgba(${r},${g},${b},0)`)
    wg.addColorStop(0.5,  `rgba(${r},${g},${b},${(peakA * 0.55).toFixed(3)})`)
    wg.addColorStop(0.82, `rgba(255,255,255,${(peakA * 0.85).toFixed(3)})`)
    wg.addColorStop(1,    `rgba(255,255,255,0)`)

    ctx.beginPath()
    ctx.moveTo(0, 0)
    for (let xi = 0; xi <= W; xi += 5) {
      const ey = baseY + waveY(xi, wi, t, W, H) + offset
      xi === 0 ? ctx.lineTo(0, ey) : ctx.lineTo(xi, ey)
    }
    ctx.lineTo(W, 0)
    ctx.closePath()
    ctx.fillStyle = wg
    ctx.fill()

    const lineA = (0.18 + push * 0.22) * OPA
    ctx.beginPath()
    for (let xi = 0; xi <= W; xi += 5) {
      const ey = baseY + waveY(xi, wi, t, W, H) + offset
      xi === 0 ? ctx.moveTo(xi, ey) : ctx.lineTo(xi, ey)
    }
    ctx.strokeStyle = `rgba(255,255,255,${lineA.toFixed(3)})`
    ctx.lineWidth = 1 + push * 2.2
    ctx.stroke()

    ctx.strokeStyle = `rgba(${r},${g},${b},${(lineA * 0.35).toFixed(3)})`
    ctx.lineWidth = 10 + push * 14
    ctx.stroke()
  }

  // 気泡（常時）
  bubbles.forEach(b => {
    b.life += b.speed
    if (b.life > 1) resetBubble(b)

    const fadeIn = 0.12, fadeOut = 0.78
    const alpha  = b.life < fadeIn  ? b.life / fadeIn
                 : b.life < fadeOut ? 1
                 : 1 - (b.life - fadeOut) / (1 - fadeOut)

    const sway = Math.sin(bubbleT * b.swayFreq + b.swayPhase) * b.swayAmp
    drawBubble(ctx, (b.x + sway) * W, b.y * H, b.r, alpha)
  })
}

// --- メインループ（常時）---
function loop(now) {
  const el = canvas.value
  if (!el || !ctxRef) { animId = requestAnimationFrame(loop); return }

  const delta = Math.min(now - lastTime, 50)
  lastTime = now

  // 波タイマー：アクティブ中だけ t を進める
  if (waveActive) {
    t += SPD * (delta / 16.67)
    if (now > waveUntil) waveActive = false
  }

  // 気泡タイマー：常時進める
  bubbleT += SPD * (delta / 16.67)

  drawFrame(ctxRef, el.width, el.height)
  animId = requestAnimationFrame(loop)
}

// --- ライフサイクル ---
onMounted(() => {
  const el = canvas.value
  ctxRef = el.getContext('2d')

  function resize() {
    el.width  = window.innerWidth
    el.height = window.innerHeight
    drawFrame(ctxRef, el.width, el.height)
  }
  resize()
  window.addEventListener('resize', resize)

  // 初期表示：最初のスライドでも波を動かす
  waveUntil  = performance.now() + WAVE_SEC * 1000
  waveActive = true
  lastTime   = performance.now()
  animId     = requestAnimationFrame(loop)

  onUnmounted(() => {
    cancelAnimationFrame(animId)
    window.removeEventListener('resize', resize)
  })
})
</script>

<style scoped>
.slide-bg-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
}
</style>