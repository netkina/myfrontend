    import { redirect } from '@sveltejs/kit';

//export function load() {
//	redirect(307, '/auth');
//}

export function load({ cookies, url, depends }) {
	// Для инвалидации при необходимости
	depends('app:auth');
	
	// Проверяем разные условия
	const hasVisited = cookies.get('has_visited');
	const authToken = cookies.get('auth_token'); // если есть авторизация
	
	// Если есть токен авторизации - не редиректим
	if (authToken) {
		return;
	}
	
	// Если пользователь заходит впервые
	if (!hasVisited && url.pathname !== '/auth') {
		cookies.set('has_visited', 'true', {
			path: '/',
			maxAge: 60 * 60 * 24 * 7, // 1 неделя
			httpOnly: true
		});
		
		redirect(307, '/registration');
	}
}
