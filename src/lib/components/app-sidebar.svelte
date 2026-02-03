<script lang="ts">
  import CalendarIcon from "@lucide/svelte/icons/calendar";
  import HouseIcon from "@lucide/svelte/icons/house";
  import InboxIcon from "@lucide/svelte/icons/inbox";
  import SearchIcon from "@lucide/svelte/icons/search";
  import SettingsIcon from "@lucide/svelte/icons/settings";
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  	import logo from '$lib/assets/logo.png';
	  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
	import { ChevronUp, AArrowUp, FileText, User, Bell, Settings, LogOut} from "lucide-svelte";
	import { redirect } from "@sveltejs/kit";

 
  // Menu items.
  const items = [
    {
      title: "Анкеты",
      url: "/forms",
      icon: FileText,
    },
    {
      title: "Мой профиль",
      url: "#",
      icon: User,
    },
    {
      title: "Уведомления",
      url: "#",
      icon: Bell,
    },
    {
      title: "Настройки",
      url: "#",
      icon: Settings,
    },
  ];

  function logOutFunc(){
      window.location.href = '/auth'; // или '/auth', '/signin'
  }
</script>
<Sidebar.Root  >
  <Sidebar.Content>

		<div class="flex p-[24px] items-center gap-4">
            <img class="w-[40px]" alt="logo"  src={logo}/>
			 <p class="text-xl font-bold text-[#1F2937]">Анкетирование</p>
             
        </div>
    <Sidebar.Group>
      <Sidebar.GroupContent>
        <Sidebar.Menu>
          {#each items as item (item.title)}
            <Sidebar.MenuItem>
              <Sidebar.MenuButton class="text-base font-normal text-[#4B5563]">
                {#snippet child({ props })}
                  <a href={item.url} {...props}>
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
                {/snippet}
              </Sidebar.MenuButton> 
               </Sidebar.MenuItem>
          {/each}
        </Sidebar.Menu>
      </Sidebar.GroupContent>
    </Sidebar.Group>
  </Sidebar.Content>
    <Sidebar.Footer>
           <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              {#snippet child({ props })}
                <Sidebar.MenuButton
                  {...props}
                  class="data-[state=open]:bg-sidebar-accent data-[state=open]:font-medium text-[#1F2937] text-base"
                >
                  Пользователь
                  <ChevronUp class="ms-auto" />
                </Sidebar.MenuButton>
              {/snippet}
            </DropdownMenu.Trigger>
            <DropdownMenu.Content
              side="top"
              class="w-(--bits-dropdown-menu-anchor-width)"
            >
              <DropdownMenu.Item onclick={logOutFunc} >
                <span class="flex items-center gap-2">
                  Выйти <LogOut />
                </span>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
    </Sidebar.Footer>
</Sidebar.Root>
