# pruebapervolare

Configuro el backend, 
el .env la base de datos, puerto , host, user , pass

php artisan config:clear
php artisan cache:clear
php artisan key:generate

Luego realiza la migracion
php artisan migrate


luego instala el frontend
entra a la carpeta 
npm install

entra a src/environments/environment.ts y le cambia el API_URL

luego 
ng serve
