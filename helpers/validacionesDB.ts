import Usuario, { IUser } from "../models/usuario";


export const existeEmail = async (email: string):Promise<void> => {

	const existeMail: IUser | null = await Usuario.findOne({ email });
	if (existeMail) {
		throw new Error(`El correo ${email} ya está registrado`);
	 }


    //Validaciones a agregar la clase que viene

	// if (existeMail && existeMail.verified) {
	// 	throw new Error(`El correo ${email} ya está registrado`);
	// }

	// if (existeMail && !existeMail.verified) {
	// 	await sendEmail(email, existeMail.code as string)
	// 	throw new Error(`El usuario ya está registrado. Se envío nuevamente código de verificacion a ${email}`);
	// }
};