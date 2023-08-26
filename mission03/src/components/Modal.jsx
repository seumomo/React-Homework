import { func, shape, string } from "prop-types";

function Modal({ value, onClick }) {
  return (
    <div
      className="fixed left-0 top-0 hidden h-screen w-screen items-center justify-center bg-black bg-opacity-60 transition-all"
      id="modalContainer"
    >
      <div
        id="modal"
        className="relative mx-auto mt-[30vh] flex w-3/4 flex-col items-center gap-y-6 rounded-2xl border border-green-300 bg-yellow-300 p-10"
        role="dialog"
        tabIndex="0"
        aria-labelledby="modal-horoscope"
        aria-pressed={
          document
            .querySelector("#modalContainer")
            ?.classList.contains("hidden")
            ? false
            : true
        }
      >
        <button
          type="button"
          className="absolute right-2 top-2 hover:scale-150"
          id="closeModalButton"
          onClick={onClick}
          aria-label="modal 닫기"
        >
          <span aria-hidden role="closeButton">
            ❌
          </span>
        </button>

        <h3 className="text-2xl font-bold">나와 다른 띠의 오늘의 운세😉</h3>

        <p className="text-xl font-semibold">{value.koreanZodiacSign}</p>
        <p>{value.comment}</p>
      </div>
    </div>
  );
}

Modal.propTypes = {
  value: shape({
    koreanZodiacSign: string,
    comment: string,
  }),
  onClick: func,
};

export default Modal;
