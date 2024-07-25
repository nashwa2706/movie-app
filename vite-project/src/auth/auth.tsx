import { ChangeEvent, FormEvent, useState } from "react";

import { postLogin } from "../service/api";
import { useNavigate } from "react-router-dom";

const Authentication = () => {
	const navigate = useNavigate();
	const [username, setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		console.log(e);

		const payload = {
			username,
			password,
		};

		try {
			const response = await postLogin(payload);

			if (response?.token) {
				localStorage.setItem("token", response?.token as string);
				navigate("/");
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-col justify-center items-center h-screen gap-2"
		>
			<label className="my-3">Authentication</label>
			<input
				type="text"
				onChange={(e: ChangeEvent<HTMLInputElement>) =>
					setUsername(e.target.value)
				}
				className="border border-gray-200 rounded-md"
			></input>
			<input
				type="password"
				onChange={(e: ChangeEvent<HTMLInputElement>) =>
					setPassword(e.target.value)
				}
				className="border border-gray-200 rounded-md"
			></input>
			<button
				type="submit"
				className="bg-black text-white rounded-md my-3 px-3"
			>
				Login
			</button>
		</form>
	);
};

export default Authentication;
