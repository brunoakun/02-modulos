# 02Modulos

Trabajar con módulos, estructurar la app em módulos para separar los componenetes por tareas específicas
## 00 Bootstrap
npm install bootstrap
· Añadir el css y js de bootstrap en el anguloar.json

## 01 Módulo compartido 'shared'

1.- Crear un módulo en el directorio 'shared'
2.- Crear el componente sidebar en el directorio 'shared'

3.- Exportar el componente sidebar:
..> en el shared.module.ts
 declarations: [
    SidebarComponent
  ],
  exports: [
    SidebarComponent
  ],
  ...

4.- Importar el shared.module dentro del app.module.ts

  imports: [
    SharedModule
  ],

5.- <app-sidebar></app-sidebar> en el app.component.html


## 02 llamadas http
    this.http.get('https://api.giphy.com/v1/gifs/search?api_key=0rKHNTOc7LvH0hzyRMywVumV43x5U20p&q=coche&limit=10&offset=0&rating=g&lang=es')
      .subscribe((respuesta: any) => {
        console.log(respuesta.data)
      });
