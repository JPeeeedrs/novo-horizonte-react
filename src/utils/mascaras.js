export const maskCPF = (value) => {
	return value
		.replace(/\D/g, "")
		.slice(0, 11)
		.replace(/(\d{3})(\d)/, "$1.$2")
		.replace(/(\d{3})(\d)/, "$1.$2")
		.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
};

export const maskPhone = (value) => {
	return value
		.replace(/\D/g, "")
		.replace(/(\d{2})(\d)/, "($1) $2")
		.replace(/(\d{5})(\d)/, "$1-$2")
		.replace(/(-\d{4})\d+?$/, "$1");
};

export const maskRG = (value) => {
	return value
		.replace(/\D/g, "")
		.slice(0, 9)
		.replace(/(\d{2})(\d)/, "$1.$2")
		.replace(/(\d{3})(\d)/, "$1.$2")
		.replace(/(\d{3})(\d{1})$/, "$1-$2");
};

export const maskCEP = (value) => {
	return value
		.replace(/\D/g, "")
		.slice(0, 8)
		.replace(/(\d{5})(\d)/, "$1-$2");
};

export const maskEmail = (value) => {
	return value
		.trim()
		.toLowerCase()
		.replace(/[^a-z0-9@._-]/g, "");
};

export const maskDate = (value) => {
	const currentYear = new Date().getFullYear();
	let maskedValue = value
		.replace(/\D/g, "")
		.slice(0, 8)
		.replace(/(\d{2})(\d)/, "$1/$2")
		.replace(/(\d{2})(\d)/, "$1/$2");

	const parts = maskedValue.split("/");

	if (parts[1] && parseInt(parts[1], 10) > 12) {
		parts[1] = "12";
	}

	if (
		parts[2] &&
		parts[2].length === 4 &&
		parseInt(parts[2], 10) > currentYear
	) {
		parts[2] = currentYear.toString();
	}

	if (parts[0] && parts[1] && parts[2] && parts[2].length === 4) {
		const day = parseInt(parts[0], 10);
		const month = parseInt(parts[1], 10);
		const year = parseInt(parts[2], 10);

		if (month === 2) {
			const isLeapYear =
				year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
			if (day > (isLeapYear ? 29 : 28)) {
				parts[0] = isLeapYear ? "29" : "28";
			}
		} else if ([4, 6, 9, 11].includes(month) && day > 30) {
			parts[0] = "30";
		} else if (day > 31) {
			parts[0] = "31";
		}
	}

	return parts.filter(Boolean).join("/");
};

export const maskName = (value) => {
	return value.replace(/[^A-Za-zÀ-ÿ\s]/g, "");
};
