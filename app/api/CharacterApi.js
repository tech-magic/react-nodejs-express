/*
This is a mock implementation, which should originally be implemented such as;

   $.ajax({ url: '/api/characters/top' })
      .done((data) => {
        return data;
      })
      .fail((jqXhr) => {
        //throw an error
        return null;
      });
*/

var CharacterApi = (function() {

   var characters = [
      { 
   	   "characterId": 3003981
      }
   ];

   function getTopCharacters() {
      return characters;
   }

   return {
   	getTopCharacters: getTopCharacters
   };
})();

export default CharacterApi;
