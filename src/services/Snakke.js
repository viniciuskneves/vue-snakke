import { ref, readonly, onUnmounted } from 'vue'

export default function useSnakke() {
  const progress = ref(0);

  function updateProgress() {
    const bodyHeight = document.body.clientHeight - document.documentElement.clientHeight;
    const scrollPosition = window.scrollY;

    progress.value = (scrollPosition / bodyHeight);
  }

  window.addEventListener('scroll', updateProgress)

  onUnmounted(() => {
    window.removeEventListener('scroll', updateProgress);
  });

  return { progress: readonly(progress) };
}


