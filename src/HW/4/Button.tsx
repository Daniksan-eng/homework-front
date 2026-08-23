type ButtonPropsType = {
  callBack: () => void; // функция без аргументов, ничего не возвращает
  name: string; // строка
};

export const Button = (props: ButtonPropsType) => {
  const callBackHandler = () => {
    props.callBack();
  };

  return (
    <button id={'hw04-button'} onClick={callBackHandler}>
      {props.name}
    </button>
  );
};
