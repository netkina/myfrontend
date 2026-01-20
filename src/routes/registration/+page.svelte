<script lang="ts">
    import logo from '$lib/assets/logo.png';
	import Button from '$lib/components/ui/button/button.svelte';
	import Input from '$lib/components/ui/input/input.svelte';

    let login = '';
    let error = '';
    let password = '';
    let passwordError = ' ';
  
    // валидация
    $: if (login) {
        if (!login.includes('@') && !/^[a-zA-Z0-9_]+$/.test(login)) {
        error = 'Логин должен содержать только буквы, цифры и подчеркивания';
        } else if (login.includes('@') && !/^\S+@\S+\.\S+$/.test(login)) {
        error = 'Введите корректный email';
        } else {
        error = '';
        }
    } else {
        error = '';
    }

    $: if (password) {
        if (password.length < 8) {
            passwordError = 'Пароль должен содержать минимум 8 символов';
        } else if (!/[a-z]/.test(password)) {
            passwordError = 'Пароль должен содержать хотя бы одну строчную букву';
        } else if (!/\d/.test(password)) {
            passwordError = 'Пароль должен содержать хотя бы одну цифру';
        } else {
            passwordError = '';
        }
        } else {
            passwordError = '';
        }
    
    function handleSubmit() {
        if (!error && login && password) {
        console.log("Логин:", login, "Пароль:", password);
        }
    }
</script>


<div class="bg-[#EFF6FF] max-w-full p-[20px]">
      <div class="bg-linear-to-r from-[#2563EB] to-[#9333EA] w-[96px] h-[96px] absolute top-25 left-220 opacity-[35%] rounded-full"></div>
    <div class="bg-linear-to-r from-[#2563EB] to-[#9333EA] w-[128px] h-[128px] absolute top-100 left-10 opacity-[30%] rounded-full"></div>
    <div class=" flex justify-center w-full h-screen items-center flex-col gap-10">
        <div>
            <h1 class="text-4xl font-bold">Добро пожаловать в Анкетирование</h1>
        </div>
            <div class="bg-white border-1 border-[#0000000] drop-shadow-xl w-md rounded-3xl p-10 flex flex-col gap-10">
                <div> 
                    <div class="flex justify-center">
                        <img  alt="logo"  src={logo}/>
                    </div>
                    <div class="flex justify-center items-center flex-col">
                        <h1 class="text-3xl font-bold text-[#1F2937]">Регистрация в системе</h1>
                        <p class="text-base font-regular text-[#4B5563]">Придумайте учетные данные</p>
                    </div>
                </div>
                <div class="flex flex-col  gap-8">
                    <div class="flex flex-col gap-2">
                        <p class="text-sm font-medium text-[#374151]">Логин или Email</p>
                        <Input  bind:value={login} class="text-base font-regular text-[##ADAEBC] h-[50px] bg-[#F9FAFB] border-[#D1D5DB] {error ? 'border-red-500' : ''}" placeholder="Введите логин или email"/>
                    </div>
                    <div class="flex flex-col gap-2">
                        <p class="text-sm font-medium text-[#374151]">Пароль</p>
                        <Input type="password" bind:value={password} class="text-base font-regular text-[##ADAEBC] h-[50px] bg-[#F9FAFB] border-[#D1D5DB] {error ? 'border-red-500' : ''}" placeholder="Введите пароль" />
                    </div>
                    {#if error || passwordError}
                    <div class="text-red-500 text-sm mt-1">{error || passwordError}</div>
                    {/if}
                    <Button onclick={handleSubmit} disabled={!!error || !login || !! passwordError || !password} class="bg-linear-to-r from-[#2563EB] to-[#9333EA] hover:scale-105  h-[48px] w-[366px] rounded-xl" >
                        <a href="/" >Зарегистрироваться</a>
                    </Button>
                    <div class="flex justify-center gap-1">
                        <p class="text-sm font-regular text-[#374151]">Есть аккаунт?</p>
                        <a href="/auth" class="text-sm font-medium text-[#2563EB]">Войти</a>
                    </div>
                </div>

            </div>
    </div>
</div>
