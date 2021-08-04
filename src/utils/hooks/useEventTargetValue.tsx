import React from 'react';

/**
 * @name input_string_처리_커스텀훅
 * @author Harry
 * @param defaultValue 입력 테스트 초기값
 * @returns 기본 input string 핸들러, ISO input string 핸들러, Phone Number input string 핸들러, Currency input string 핸들러
 */
export default function useEventTargetValue(defaultValue = ''): {
	value: string;
	handleChange(e: React.ChangeEvent<HTMLInputElement> | any): void;
	handleReset(): void;
	setValue: (value: React.SetStateAction<string>) => void;
	handleChangePhoneNumber?(e: string | React.ChangeEvent<HTMLInputElement>): void;
	handleChangeISODateNumber(e: string | React.ChangeEvent<HTMLInputElement>): void;
	handleChangeCurrencyNumber?(e: string | React.ChangeEvent<HTMLInputElement>): void;
	handleTextChange(e: string): void;
	inputCurrencyNumber(currency: string): string;
} {
	/**
	 * @name 입력_string_값_state
	 */
	const [value, setValue] = React.useState(defaultValue);

	/**
	 * @name 핸드폰_번호_포매터(010-3252-2568,051-333-3333)
	 * @param phoneNumber 핸드폰 번호 string
	 * @returns - 가 들어간 형태의 핸드폰 번호 string
	 */
	function inputPhoneNumber(phoneNumber: string): string {
		const number = phoneNumber.replace(/[^0-9]/g, '');
		let phone = '';
		if (number.length < 4) {
			return number;
		}
		if (number.length < 7) {
			phone += number.substr(0, 3);
			phone += '-';
			phone += number.substr(3);
		} else if (number.length < 11) {
			phone += number.substr(0, 3);
			phone += '-';
			phone += number.substr(3, 3);
			phone += '-';
			phone += number.substr(6);
		} else {
			phone += number.substr(0, 3);
			phone += '-';
			phone += number.substr(3, 4);
			phone += '-';
			phone += number.substr(7);
		}
		return phone;
	}

	/**
	 * @name ISO_날짜_포매터(YYYY/MM/DD)
	 * @param dateString 날짜 string
	 * @returns / 형태로 된 YYYY/MM/DD 형태의 날짜 string
	 */
	function inputISODate(dateString: string): string {
		const number = dateString.replace(/[^0-9]/g, '');

		let date = '';
		if (number.length < 5) {
			return number;
		}
		if (number.length < 7) {
			date += number.substr(0, 4);
			date += '/';
			date += number.substr(4, 5);
		} else if (number.length < 9) {
			date += number.substr(0, 4);
			date += '/';
			date += number.substr(4, 2);
			date += '/';
			date += number.substr(6, 2);
		} else {
			date += number.substr(0, 4);
			date += '/';
			date += number.substr(4, 2);
			date += '/';
			date += number.substr(6);
		}
		return date;
	}

	/**
	 * @name 기본_string_change_핸들러
	 * @param e react-native 의 input event instance
	 */
	function handleChange(e: React.ChangeEvent<HTMLInputElement> | any): void {
		e.preventDefault();
		setValue(e.nativeEvent.text);
	}

	/**
	 * @name 기본_string_change_핸들러_react용
	 * @param e react-native 의 input event instance
	 */
	function handleTextChange(e: string): void {
		setValue(e);
	}

	/**
	 * @name 핸드폰번호_string_change_핸들러
	 * @param e react-native 의 input event instance
	 */
	function handleChangePhoneNumber(e: string): void {
		setValue(inputPhoneNumber(e));
	}

	/**
	 * @name 날짜_string_change_핸들러
	 * @param e react-native 의 input event instance
	 */
	function handleChangeISODateNumber(e: React.ChangeEvent<HTMLInputElement> | any): void {
		e.preventDefault();
		setValue(inputISODate(e.nativeEvent.text));
	}

	/**
	 * @name 통화(원,$)_string_change_메소드
	 * @param e react-native 의 input event instance
	 */
	function inputCurrencyNumber(currency: string): string {
		if (!isNaN(Number(currency))) {
			const removeCommaNumber = Math.round(Number(currency))
				.toString()
				.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
			return removeCommaNumber.toLocaleString();
		} else {
			return '0';
		}
	}

	/**
	 * @name 통화(원,$)_string_change_핸들러
	 * @param e react-native 의 input event instance
	 */
	function handleChangeCurrencyNumber(e: React.ChangeEvent<HTMLInputElement> | any): void {
		e.preventDefault();
		const currency = e.nativeEvent.text;
		const removeComma = currency.replace(/,/g, '');

		setValue(inputCurrencyNumber(removeComma));
	}

	/**
	 * @name 입력_string_reset_핸들러
	 */
	function handleReset(): void {
		setValue(defaultValue);
	}

	return {
		value,
		handleChange,
		handleReset,
		handleChangeCurrencyNumber,
		setValue,
		handleChangePhoneNumber,
		handleChangeISODateNumber,
		handleTextChange,
		inputCurrencyNumber,
	};
}
