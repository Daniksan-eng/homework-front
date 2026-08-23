import { ChangeEvent } from 'react';

type InputPropsType = {
	currentText: string; // строка
	setCurrentText: (value: string) => void; // функция, принимающая строку, ничего не возвращает
};

export const Input = (props: InputPropsType) => {
	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		props.setCurrentText(event.target.value);
	};

	return (
	  <input
	    id={'hw04-input'}
	    type="text"
	    value={props.currentText}
	    onChange={onChangeHandler}
	  />
	);
};
