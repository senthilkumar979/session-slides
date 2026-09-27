<script setup>
import { onMounted } from 'vue'

/**
 * Homepage links append `?present=1` so decks open and request fullscreen
 * (browser presentation mode — same idea as pressing F11 / Slidev's `f`).
 * Fullscreen must be triggered from a user gesture; the click on the homepage
 * card counts when navigation happens in the same tab after the gesture chain.
 * If the browser blocks it, press `f` or F11 once on the deck.
 */
onMounted(() => {
  const params = new URLSearchParams(window.location.search)
  if (params.get('present') !== '1') return

  const enter = () => {
    const el = document.documentElement
    if (!document.fullscreenElement && el.requestFullscreen) {
      el.requestFullscreen().catch(() => {})
    }
  }

  // Small delay so Slidev finishes mounting the slide frame.
  setTimeout(enter, 300)
})
</script>
