import Arrow from './components/ChangeSortButton/Arrow';
import ButtonContainer from './components/ChangeSortButton/ButtonContainer';
import SortText from './components/ChangeSortButton/SortText';

function Button() {
  return (
    <ButtonContainer color={'coral'}>
      <SortText method={'new'} />
      <Arrow />
    </ButtonContainer>
  );
}

export default Button;
