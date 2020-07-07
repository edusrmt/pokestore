export default function ColorFromType (type) {
  switch (type) {
    case 'bug':
      return '#44994F';

    case 'dark':
      return '#595979';

    case 'dragon':
      return '#61CBD7';

    case 'electric':
      return '#FAF672';

    case 'fairy':
      return '#EC5568';

    case 'fighting':
      return '#EE6138';
      
    case 'fire':
      return '#F05459';

    case 'flying':
      return '#93B2C7';
      
    case 'ghost':
      return '#906790';

    case 'grass':
      return '#5ECC4E';

    case 'ground':
      return '#6E491F';

    case 'ice':
      return '#D8F0FA';

    case 'normal':
      return '#CA98A7';

    case 'poison':
      return '#9B69D9';
    
    case 'psychic':
      return '#F05B90';
      
    case 'rock':
      return '#8B3E21';
      
    case 'steel':
      return '#51BD94';
      
    case 'water':
      return '#86A8FC';

    default:
      return 'none';
  }
}