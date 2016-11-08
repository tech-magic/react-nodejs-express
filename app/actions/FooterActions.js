import alt from '../alt';
import CharacterApi from '../api/CharacterApi';

class FooterActions {
  constructor() {
    this.generateActions(
      'getTopCharactersSuccess',
      'getTopCharactersFail'
    );
  }

  getTopCharacters() {
    try {
      var characters = CharacterApi.getTopCharacters();
      this.actions.getTopCharactersSuccess(characters);
    } catch(e) {
      this.actions.getTopCharactersFail(e);
    }
  }
}

export default alt.createActions(FooterActions);
