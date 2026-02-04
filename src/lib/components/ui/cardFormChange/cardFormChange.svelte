<script lang="ts">
      import { Clock } from "lucide-svelte";
      import { CircleQuestionMark } from "lucide-svelte";
      import Progress from "../progress/progress.svelte";
        import { Button } from "bits-ui";
       export let status: "notDone" | "inProcess" | "done" = "notDone";
  export let customText: string = "";
  
  // Определяем цвет по статусу
  $: colorClass = {
    notDone: "bg-red-100 text-red-800 border-red-300 ",
    inProcess: "bg-yellow-100 text-yellow-800 border-yellow-300",
    done: "bg-green-100 text-green-800 border-green-300"
  }[status];
  
  $: textButton = {
    notDone: "Начать заполнение",
    inProcess: "Продолжить заполнение",
    done: "Продолжить заполнение"
  }[status];

  $: colorButton = {
    notDone: "bg-[#4F46E5] hover:bg-[#6D67F0]",
    inProcess: "bg-[#4F46E5] hover:bg-[#6D67F0]",
    done: "bg-[#9CA3AF]"
  }[status]

   $: colorClassDate = {
    notDone: " text-red-800 border-red-300 ",
    inProcess: "text-yellow-800 border-yellow-300",
    done: "text-green-800 border-green-300"
  }[status];
  
  // Определяем текст по статусу
  $: text = customText || {
    notDone: "Не начато",
    inProcess: "В процессе",
    done: "Завершено"
  }[status];

</script>
<cardFormChange  class="flex flex-col w-full gap-[15px] p-[16px] bg-white border-1 rounded-xl border-[#E0E7FF] rounded-full text-sm font-medium border">
    <div>
        <h1 class="text-lg font-semibold text-[#1F2937]">Название анкеты</h1>
        <p class="text-sm font-normal text-[#4B5563]">Описание анкеты</p>
    </div>
        <div class="flex justify-between">
            <div class="flex flex-row items-center gap-2">
                <p class="text-sm font-normal text-[#6B7280]">n секции</p>
            </div>
            <div class="flex flex-row items-center gap-2"> 
                <p class="text-sm font-normal text-[#6B7280]">n полей</p>
            </div>
        </div>
        <div class="flex justify-between">
            <p class="text-[#6B7280] text-xs font-normal">Дата создания</p>
            <span class="text-[#4F46E5] font-medium">Дата </span>
        </div>
        <Button.Root
  class="{colorButton} rounded-input text-background shadow-mini inline-flex
	h-12 items-center justify-center px-[21px] text-[15px]
	font-semibold active:scale-[0.98] active:transition-all"
>
  {textButton}
</Button.Root>
    
</cardFormChange>

