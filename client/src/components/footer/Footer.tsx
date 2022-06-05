import { FunctionComponent } from "react";
import style from "./Footer.module.css";
interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
	return (
		<span className={style.footer}>
			<a href="https://github.com/matiascalvar">
				{"<"}Developed by Matias Calvar/{">"}
			</a>
		</span>
	);
};

export default Footer;
