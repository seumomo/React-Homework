import {} from '/src/style/ButtonContainer.css';

function ButtonContainer({ color, children }) {
  return (
    <button
      className={
        color === 'blue' ? 'buttonContainerBlue' : 'buttonContainerCoral'
      }>
      {children}
    </button>
  );
}

export default ButtonContainer;
