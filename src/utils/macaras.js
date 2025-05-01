export const maskCPF = (value) => {
	return value
		.replace(/\D/g, "") // Remove tudo que não é dígito
		.slice(0, 11) // Limita a 11 dígitos
		.replace(/(\d{3})(\d)/, "$1.$2") // Coloca o ponto após os 3 primeiros dígitos
		.replace(/(\d{3})(\d)/, "$1.$2") // Coloca o ponto após os 6 primeiros dígitos
		.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); // Coloca o traço antes dos últimos 2 dígitos
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
		.replace(/\D/g, "") // Remove tudo que não é dígito
		.slice(0, 9) // Limita a 9 dígitos
		.replace(/(\d{2})(\d)/, "$1.$2") // Coloca o ponto após os 2 primeiros dígitos
		.replace(/(\d{3})(\d)/, "$1.$2") // Coloca o ponto após os 5 primeiros dígitos
		.replace(/(\d{3})(\d{1})$/, "$1-$2"); // Coloca o traço antes do último dígito
};

export const maskCEP = (value) => {
	return value
		.replace(/\D/g, "") // Remove tudo que não é dígito
		.slice(0, 8) // Limita a 8 dígitos
		.replace(/(\d{5})(\d)/, "$1-$2"); // Coloca o traço após os 5 primeiros dígitos
};

export const maskEmail = (value) => {
	return value
		.trim() // Remove espaços extras no início e no final
		.toLowerCase() // Converte para letras minúsculas
		.replace(/[^a-z0-9@._-]/g, ""); // Remove caracteres inválidos
};

export const maskDate = (value) => {
	const currentYear = new Date().getFullYear();
	let maskedValue = value
		.replace(/\D/g, "") // Remove tudo que não é dígito
		.slice(0, 8) // Limita a 8 dígitos
		.replace(/(\d{2})(\d)/, "$1/$2") // Coloca a barra após os 2 primeiros dígitos
		.replace(/(\d{2})(\d)/, "$1/$2"); // Coloca a barra após os 4 primeiros dígitos

	const parts = maskedValue.split("/");

	// Valida o mês
	if (parts[1] && parseInt(parts[1], 10) > 12) {
		parts[1] = "12";
	}

	// Valida o ano
	if (
		parts[2] &&
		parts[2].length === 4 &&
		parseInt(parts[2], 10) > currentYear
	) {
		parts[2] = currentYear.toString();
	}

	// Valida o dia apenas se o mês e o ano estiverem completos
	if (parts[0] && parts[1] && parts[2] && parts[2].length === 4) {
		const day = parseInt(parts[0], 10);
		const month = parseInt(parts[1], 10);
		const year = parseInt(parts[2], 10);

		if (month === 2) {
			// Verifica se é ano bissexto
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
