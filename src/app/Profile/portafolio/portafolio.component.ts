import { Component } from '@angular/core';
import { Portafolio } from '../interface';


@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent {

   list_Experiencias : Portafolio[]=[
    {text1:'Auxiliar de base de datos',text2:'Mayo 2022 - Noviembre 2022',text3:'Encargada de digitalizar documentos físicos de la empresa, específicamente registros de predios. Mapeaba rutas para garantizar un registro preciso. Participé en un proyecto para desarrollar una aplicación destinada a facilitar el trabajo de los peritos en este proceso'},
    {text1:'Representante de servicio al cliente',text2:'Mayo 2020 - Mayo 2022',text3:'Atiendo llamadas para abordar las necesidades y consultas de los clientes, resolviendo problemas, proporcionando información sobre productos, asesorando sobre documentos y brindando orientación sobre la página web del banco. Además, desempeño funciones como asesor comercial, ofreciendo y vendiendo productos financieros.'}
 ];

 list_Proyectos: Portafolio[]=[
  {video:'assets/appPaises.mp4', text1:'App-Paises',text2:'Aplicación realizada para buscar por países, región y capital, fue mi primera aplicación.',text3:'Observación: Aplicación de práctica lo que aprendí en el Curso de Angular en Udemy.', link:'https://aplicationpaises.netlify.app/'},
  {video:'assets/appMapas.mp4', text1:'App-Maps',text2:'Aplicación es buscar sitios, te muestra tu ubicación actual, siempre y cuando le permitas acceso.',text3:'Observación: Proyecto de práctica.',link:'https://aplicationmaps.netlify.app/'},
  {video:'assets/appMovies.mp4', text1:'MoviesApp',text2:'Este proyecto es una aplicación web desarrollada en Angular que proporciona información sobre películas y series de televisión. Permite a los usuarios explorar contenido, obtener detalles sobre películas y programas de televisión, buscar títulos específicos y acceder a una variedad de funcionalidades relacionadas.',text3:'Observación: Proyecto de práctica.', link:'https://appyugiho.netlify.app/'},
  {video:'assets/appSystemSales.mp4', text1:'System Sales',text2:'SystemSales es una aplicación de gestión de ventas desarrollada con Angular, .NET y Angular Material. La aplicación incluye un sistema de autenticación, módulo de ventas, historial de ventas, generación de informes, registro de usuarios, registro de productos y visualización de ventas de las últimas semanas. Estas características están diseñadas para ser accesibles solo para los usuarios administradores.', link:'https://github.com/sorvylenny/AppSystemSale' },
  {video:'assets/appNotas.mp4', text1:'NotasApp', text2:'La aplicación Test Note es una plataforma que te permite gestionar tus notas de manera fácil y rápida. Puedes crear, editar y eliminar notas, así como organizarlas mediante categorías. La aplicación también cuenta con un sistema de paginación para facilitar la navegación a través de tus notas.', link:'https://notesapptest.netlify.app'},
  {video:'assets/appCocktails.mp4', text1:'CocktailsApp', text2:'Cocktails App is a web application designed for exploring and discovering cocktail recipes. It features a user-friendly interface with login functionality, a search feature, and classification of cocktails based on their alcoholic content. Users can also view detailed information about specific cocktails and filter recipes by alcohol, non-alcoholic, and cocktails categories.', link:'https://appcocktails.netlify.app'},
  {video:'assets/appFood.mp4', text1:'FoodApp', text2:'The Food Menu App is a recipe application that allows you to explore and search for recipes from around the world.', link:'https://appmeals.netlify.app'},
  {video:'assets/appTuBodega.mp4', text1:'Proyecto Store',text2:'Aplicación que tiene varios módulos, los cuáles son admin, user y el del store, es una minitienda, que básicamente puedes ver productos, comprar, registrate, solo el modulo admin puede ingresar productos y usuarios.',text3:'Observación: Proyecto de personal para ver mis capacidades, esta todavia en proceso. Nota: El backend lo realizo Eleazar Gamez.', link:'https://github.com/sorvylenny/tubodegaapp' },
];
 list_Icon: Portafolio[]=[
  {link:'https://www.linkedin.com/in/katherine-flores-marin/', text1:'bi bi-linkedin', text2:'M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z', title:'katherine-flores-marin'},
  {link:'https://github.com/sorvylenny', text1:'bi bi-github', text2:'M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z', title:'sorvylenny'},
  {link:'mailto:floresmkatherine@gmail.com', text1:'bi bi-envelope-at-fill', text2:'M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z', text3:'M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z', title:'floresmkatherine@gmail.com'},
  {link:'https://wa.me/573015499363?text=Hola%20te%20contacto%20desde%20tu%20portafolio%20para%20una%20oferta%20de%20trabajo', text1:'bi bi-whatsapp', text2:'M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z', title:'3015499363'},
  {link:'assets/Hv-frontend-KatherineFlores-Español.pdf', text1:'bi bi-filetype-pdf', text2:'M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z', title:'Descarga HV Es'},
  {link:'assets/Hv-fontend-KatherineFlores-Ingles.pdf', text1:'bi bi-cloud-arrow-down',text2:'M7.646 10.854a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 9.293V5.5a.5.5 0 0 0-1 0v3.793L6.354 8.146a.5.5 0 1 0-.708.708l2 2z',text3:'M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z', title:'Descarga HV En'},
 ];

 list_Tecnologias: Portafolio[]=[
  {title:'Tecnologias'},
  {link:'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg'},
  {link:'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'},
  {link:'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg'},
  {link:'https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png'},
  {link:'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg'},
  {link:'https://global-uploads.webflow.com/5f5a53e153805db840dae2db/64e79ca5aff2fb7295bfddf9_github-que-es-p-800.jpg'},
  {link:'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg'},
  {link:'assets/material.png'},
  {link:'https://vitolavecchia.altervista.org/wp-content/uploads/2020/06/Cos%C3%A8-e-quali-sono-le-caratteristiche-del-DBMS-MongoDB.jpeg'},

 ];

 abrirEnNuevaPagina(url: string) {
  window.open(url, '_blank');
}





}
