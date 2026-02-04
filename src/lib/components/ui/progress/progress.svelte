<script lang="ts">
  import { Progress } from "bits-ui";
  import { onMount } from "svelte";
  import { cubicInOut } from "svelte/easing";
  import { Tween } from "svelte/motion";
   let {
    status = "notDone",
  }: {
    status: "notDone" | "inProcess" | "done";
  } = $props();

  // Определяем цвет по статусу с помощью $derived (аналог $: в runes mode)
  let colorClass = $derived({
    notDone: "bg-red-500 border-red-300 ",
    inProcess: "bg-yellow-500 border-yellow-300",
    done: "bg-green-500 border-green-300"
  }[status]);
  

</script>
 

  <Progress.Root
    
    max={100}
    class="bg-[#E5E7EB] shadow-mini-inset relative h-[15px] w-full overflow-hidden rounded-full"
  >
    <div
      class="{colorClass} shadow-mini-inset h-full w-full flex-1 rounded-full"
      
    ></div>
  </Progress.Root>
