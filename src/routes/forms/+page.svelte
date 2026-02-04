<script lang="ts">
	 import * as Sidebar from "$lib/components/ui/sidebar/index.js";
    import AppSidebar from "$lib/components/app-sidebar.svelte";
      import { Select } from "bits-ui";
      import "../../app.css"
  import Check from "phosphor-svelte/lib/Check";
  import CaretUpDown from "phosphor-svelte/lib/CaretUpDown";
  import CaretDoubleUp from "phosphor-svelte/lib/CaretDoubleUp";
  import CaretDoubleDown from "phosphor-svelte/lib/CaretDoubleDown";
    import { Command } from "bits-ui";
    import { Search } from "lucide-svelte";
	import CardForm from "$lib/components/ui/cardForm/cardForm.svelte";

 
   const statuses = [
    { value: "notDone", label: "Не начато" },
    { value: "inProcess", label: "В процессе" },
    { value: "done", label: "Завершено" },
  ];

  // Данные для второго селекта (давность)
  const timePeriods = [
    { value: "today", label: "Сегодня" },
    { value: "yesterday", label: "Вчера" },
    { value: "last7days", label: "Последние 7 дней" },
    { value: "last30days", label: "Последние 30 дней" },
  ];

  // Состояния для селектов
  let statusValue = $state<string>("");
  let timeValue = $state<string>("");

  // Вычисляемые значения для отображения
  const selectedStatusLabel = $derived(
    statusValue
      ? statuses.find((status) => status.value === statusValue)?.label
      : "Все статусы"
  );

  const selectedTimeLabel = $derived(
    timeValue
      ? timePeriods.find((period) => period.value === timeValue)?.label  // ← исправлено: используем timePeriods
      : "За все дни"
  );

</script>

<div class="flex flex-row w-full">
	<Sidebar.Provider class="w-min">
  <AppSidebar />
</Sidebar.Provider>
<div class="p-[24px] w-full flex flex-col gap-4">
    <div>
     <h1 class="text-2xl font-bold text-[#1F2937]">Анкеты для заполнения</h1>
     <p class="text-base font-normal text-[#4B5563]">Выберите анкету для заполнения или продолжите начатую</p>
    </div>
    <div class="flex flex-col bg-white border-[#E0E7FF] rounded-xl border-1 gap-4 p-[16px]">
        <div class="flex justify-between items-center w-full">
            <h1 class="text-lg font-semibold text-[#1F2937]">Фильтры</h1>
            <p class="text-sm font-medium text-[#4F46E5]">Cбросить все</p>
        </div>
        <div class="flex flex-wrap gap-4 items-center w-full">

    <Command.Root
  class="divide-border border-border-input bg-background flex h-input w-sm flex-row items-center divide-y self-start overflow-hidden rounded-9px border px-[11px]"
>
    <Search class="border-white text-muted-foreground size-6"/>
  <Command.Input 
    class="focus-override h-input placeholder:text-foreground-alt/50 bg-background focus:outline-hidden inline-flex truncate rounded-tl-xl rounded-tr-xl px-4 text-sm transition-colors focus:ring-0"
    placeholder="Search for something..."
  />
  
</Command.Root>
        <!-- Первый селект (статусы) -->
        <Select.Root
          type="single"
          onValueChange={(v) => (statusValue = v)}
          items={statuses} 
          allowDeselect={true}
        >
          <Select.Trigger
            class="h-input rounded-9px border-border-input bg-background data-placeholder:text-foreground-alt/50 inline-flex w-sm touch-none select-none items-center border px-[11px] text-sm transition-colors"
            aria-label="Выберите статус"
          >
            {selectedStatusLabel}
            <CaretUpDown class="text-muted-foreground ml-auto size-6" />
          </Select.Trigger>
          <Select.Portal>
            <Select.Content
              class="h-min focus-override border-muted bg-background shadow-popover data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 outline-hidden z-50 h-96 max-h-[var(--bits-select-content-available-height)] w-[var(--bits-select-anchor-width)] min-w-[var(--bits-select-anchor-width)] select-none rounded-xl border px-1 py-3 data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1"
              sideOffset={10}
            >
              <Select.ScrollUpButton class="flex w-full items-center justify-center">
                <CaretDoubleUp class="size-3" />
              </Select.ScrollUpButton>
              <Select.Viewport class="p-1">
                {#each statuses as status, i (i + status.value)}
                  <Select.Item
                    class="rounded-button data-highlighted:bg-muted outline-hidden data-disabled:opacity-50 flex h-10 select-none items-center py-3 pl-5 pr-1.5 text-sm capitalize"
                    value={status.value}
                    label={status.label}
                  >
                    {#snippet children({ selected })}
                      {status.label}
                      {#if selected}
                        <div class="ml-auto">
                          <Check aria-label="check" />
                        </div>
                      {/if}
                    {/snippet}
                  </Select.Item>
                {/each}
              </Select.Viewport>
              <Select.ScrollDownButton class="flex w-full items-center justify-center">
                <CaretDoubleDown class="size-3" />
              </Select.ScrollDownButton>
            </Select.Content>
          </Select.Portal>
        </Select.Root>

        <!-- Второй селект (давность) -->
        <Select.Root
          type="single"
          onValueChange={(v) => (timeValue = v)}
          items={timePeriods}  
          allowDeselect={true}
        >
          <Select.Trigger
            class="h-input rounded-9px border-border-input bg-background data-placeholder:text-foreground-alt/50 inline-flex w-sm touch-none select-none items-center border px-[11px] text-sm transition-colors"
            aria-label="Выберите период"
          >
            {selectedTimeLabel}
            <CaretUpDown class="text-muted-foreground ml-auto size-6" />
          </Select.Trigger>
          <Select.Portal>
            <Select.Content
              class="h-min focus-override border-muted bg-background shadow-popover data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 outline-hidden z-50 h-96 max-h-[var(--bits-select-content-available-height)] w-[var(--bits-select-anchor-width)] min-w-[var(--bits-select-anchor-width)] select-none rounded-xl border px-1 py-3 data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1"
              sideOffset={10}
            >
              <Select.ScrollUpButton class="flex w-full items-center justify-center">
                <CaretDoubleUp class="size-3" />
              </Select.ScrollUpButton>
              <Select.Viewport class="p-1">
                {#each timePeriods as period, i (i + period.value)}  
                  <Select.Item
                    class="rounded-button data-highlighted:bg-muted outline-hidden data-disabled:opacity-50 flex h-10 w-full select-none items-center py-3 pl-5 pr-1.5 text-sm capitalize"
                    value={period.value}
                    label={period.label}
                  >
                    {#snippet children({ selected })}
                      {period.label}
                      {#if selected}
                        <div class="ml-auto">
                          <Check aria-label="check" />
                        </div>
                      {/if}
                    {/snippet}
                  </Select.Item>
                {/each}
              </Select.Viewport>
              <Select.ScrollDownButton class="flex w-full items-center justify-center">
                <CaretDoubleDown class="size-3" />
              </Select.ScrollDownButton>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
      </div>
    </div>
    <div class="grid grid-cols-4 gap-4">
    <CardForm></CardForm>
    <CardForm></CardForm>
    <CardForm></CardForm>
    <CardForm></CardForm>
    <CardForm></CardForm>
    <CardForm></CardForm>
    <CardForm></CardForm>
    <CardForm></CardForm>
    <CardForm></CardForm>
    <CardForm></CardForm>
    <CardForm></CardForm>
    <CardForm></CardForm>
    <CardForm></CardForm>
    </div>
</div>


</div>
