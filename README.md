# Prueba Técnica de FrontEnd

1. Crear aplicación con campo de entrada texto y botón.
   Botón debe validar: Min 4 caracteres. No permitir buscar: “doublevpartners”.
2. Capturar el usuario, y recuperar la info con la api: `https://api.github.com/search/users?q={userLogin}`
3. Mostrar el nombre y el id de los primeros 10 usuarios. // ('user.login') //('user.id') 7. TODO: Implementar paso 7.
4. Convertir Cada perfil de usuario en enlace. Al darle click, navege a una ruta con la propiedad ('user.login') como parámetro.
5. Crear un componente independiente que consulte el usuario con el ('user.login') a la api: `https://api.github.com/users/{userLogin}`
6. Mostrar el nombre, avatar y bio.
7. Crear gráfico de barras simple que muestre el número de seguidores de los primeros 10 usuarios.
8. Componente para mensajes de error en la aplicación

# Prueba local

1. Bajar el repositorio.
2. Instalar las dependencias del package JSON. // cmd: npm install
3. Ejecutar la aplicación en un puerto diferente al puerto 3000. // cmd: npm start
4. Abrir: http://localhost:{puertoSeleccionado}/

# Nota

Para el funcionamiento de la aplicación completa (Front y Back), se recomienda ejecutar el backend primero.