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
	import CardFormChange from "$lib/components/ui/cardFormChange/cardFormChange.svelte";
</script>

<div class="flex flex-row w-full">
	<Sidebar.Provider class="w-min">
  <AppSidebar />
</Sidebar.Provider>
<div class="p-[24px] w-full flex flex-col gap-4">
    <div>
     <h1 class="text-2xl font-bold text-[#1F2937]">Шаблоны анкет</h1>
     <p class="text-base font-normal text-[#4B5563]">Создавайте и управляйте шаблонами для анкет</p>
    </div>
    <div class="grid grid-cols-4 gap-4">
    <CardFormChange></CardFormChange>
    </div>

</div>
</div>



