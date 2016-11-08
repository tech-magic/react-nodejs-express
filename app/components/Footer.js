import React from 'react';
import {Link} from 'react-router';
import FooterStore from '../stores/FooterStore'
import FooterActions from '../actions/FooterActions';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = FooterStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    FooterStore.listen(this.onChange);
    FooterActions.getTopCharacters();
  }

  componentWillUnmount() {
    FooterStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    let leaderboardCharacters = this.state.characters.map((character) => {
      return (
        <li key={character.characterId}>
          <Link to={'/characters/' + character.characterId}>
            <img className='thumb-md' src={'http://image.eveonline.com/Character/' + character.characterId + '_256.jpg'} />
          </Link>
        </li>
      )
    });

    return (
      <div className='container'>
        <div className='row'>
          <div className='col-sm-5'>
            <h3 className='lead'><strong> Footer demonstrating the flux event flow. </strong></h3>
            <p> Integrated together with <strong>Node.js</strong>, <strong>Express</strong> and <strong>React with Flux architecture and server-side rendering. </strong></p>
          </div>
          <div className='col-sm-7 hidden-xs'>
            <h3 className='lead'><strong>Topmost Characters</strong></h3>
            <ul className='list-inline'>
              {leaderboardCharacters}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
