import { Interfaccia } from "./models/interfaccia";




let contenitore: Interfaccia[] = [];
// leggi
export function leggi(): Promise<Interfaccia[]> {
  return new Promise((res,rej) => {

    setTimeout(() => {
      res(contenitore);
    }, 2000);
  })

}

// aggiungi //
export function add(task: Omit<Interfaccia, 'id'>): Promise<Interfaccia> {
  return new Promise((res,rej) => {

    setTimeout(() => {
      const nuovo: Interfaccia = {...task, id: contenitore.length +1}
      contenitore.push(nuovo);
      res(nuovo)


    }, 2000);
  })





}


// export function changeStatus(task1: Omit<Interfaccia, 'title' | 'id'>): Promise<Interfaccia> {
//   return new Promise((res,rej) => {

//     setTimeout(() => {
//       const change: Interfaccia = {
//         ...task1, completed: false,
//         id: 0,
//         title: ""
//       }
//       change.completed = true;
//       res(change);
//       console.log(change)
//     }, 2000);
//   })

// }


// cancella //
let cestino: Interfaccia[] = [];
export function canc(cliccato: any): Promise<Interfaccia[]> {
  return new Promise((res,rej) => {
    // console.log(cliccato)
    console.log(contenitore)


    let idClick = cliccato.id
    console.log(idClick)    ////// ooooooookkkk
    setTimeout(() => {
      let indice = contenitore.indexOf(cliccato)
      console.log(indice)

      let scarto: any = contenitore.splice(idClick, 1);
      console.log(scarto)



      cestino.push(scarto)
      console.log(cestino)
      res(contenitore);
    }, 2000);
  })

}



// leggi cestino //
export function leggiCestino(): Promise<Interfaccia[]> {
  return new Promise((res,rej) => {

    setTimeout(() => {
      if(cestino != []){
        res(cestino);

      }else{
        cestino = [];
      }
    }, 2000);
  })

}
