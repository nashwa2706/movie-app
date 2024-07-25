type AuthPayload = {
	username: string;
	password: string;
};

type AuthResponse = {
	id: number;
	username: string;
	email: string;
	firstName: string;
	lastName: string;
	gender: string;
	image: string;
	token: string;
	refreshtoken: string;
};

export type { AuthPayload, AuthResponse };
