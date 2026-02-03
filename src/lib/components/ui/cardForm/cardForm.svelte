<script lang="ts">
      import { Clock } from "lucide-svelte";
      import { CircleQuestionMark } from "lucide-svelte";
       export let status: "notDone" | "inProcess" | "done" = "notDone";
  export let customText: string = "";
  
  // Определяем цвет по статусу
  $: colorClass = {
    notDone: "bg-red-100 text-red-800 border-red-300 ",
    inProcess: "bg-yellow-100 text-yellow-800 border-yellow-300",
    done: "bg-green-100 text-green-800 border-green-300"
  }[status];
  
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
<cardForm  class="flex flex-col w-full gap-[15px] p-[16px] bg-white border-1 rounded-xl border-[#E0E7FF] rounded-full text-sm font-medium border">
    <div class="flex flex-row justify-between items-center w-full">
        <div class="{colorClass} rounded-xl px-2 py-1 h-min">
            {text}
        </div>
        <div class="text-right">
            <p class="text-[#6B7280] text-xs font-normal">Дата окончания</p>
            <div class="{colorClassDate}">
                Дата
            </div>
        </div>
    </div>
    <div>
        <h1 class="text-lg font-semibold text-[#1F2937]">Название анкеты</h1>
        <p class="text-sm font-normal text-[#4B5563]">Описание анкеты</p>
    </div>
    <div class="flex justify-between">
        <div class="flex flex-row items-center gap-2">
            <Clock class="w-[14px] text-muted-foreground" />
            <p class="text-sm font-normal text-[#6B7280]">Время прохождения</p>
        </div>
        <div class="flex flex-row items-center gap-2">
            <CircleQuestionMark class="w-[14px] text-muted-foreground"/>
            <p class="text-sm font-normal text-[#6B7280]">n вопросов</p>
        </div>
    </div>
</cardForm>

