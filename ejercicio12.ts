/**
Crea una clase que acepte una cadena en su constructor
Tendrá dos métodos
	removeVowels
	removeNumbers
**/

class WordProcessor {
  constructor(private word:string) {

  }

  public removeVowels():string {
    return this.word.replace(/[aeiou]/ig, '');
  }

  public removeNumbers():string {
    return this.word.replace(/[0-9]/ig, '');
  }
}

let w = new WordProcessor('James Bond 007');

alert(w.removeNumbers());
alert(w.removeVowels());
