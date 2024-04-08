import { ref, computed } from "vue";

export default function(){
  const query = window.matchMedia('(prefers-color-scheme: light)'), theme = ref(query.matches);

  query.addEventListener('change', (event) => {
    theme.value = event.matches;
  });
  return computed(() => theme.value);
}