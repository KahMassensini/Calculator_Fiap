/**
 * Refatorar o código para vermos mais algumas features da ES6
 * 
 * Destructing
 */

 let pessoa = {
    nome: "Fulano",
    idade: 21
  }
  let { nome, idade } = pessoa;
  
  let lista = ["Fulano", "Ciclano"];
  
  let [pessoa1, pessoa2] = lista;
  
  /** Spreed Operator
   * /** 
* Spreed Operator
*/

let pessoa = {
    nome: "Fulano",
    idade: 21
  }
  
  let copiaDePessoa = { ...pessoa, rg: "999999999" };
  
  let lista = ["Fulano", "Ciclano", "Beltrano"];
  
  let lista2 = [...lista, "José"];
  
  /* Modules
  * 
  * JS Assíncrono
  * Callbacks
  * Promisses
  * Async Await
  *   
  */
  