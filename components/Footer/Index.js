import styles from './Footer.module.scss';

export default function Index() {
	return (
		<footer
			className={`flex justify-center items-center w-100 border-t-2 p-3 ${styles.footer}`}
		>
			Footer
		</footer>
	);
}
