type Button = {
	type: string;
	name: string;
};
type NavProps = {
	buttons: Button[];
	type: string;
	setType: Function;
};

export default function DefaultHooksNav({ buttons, type, setType }: NavProps) {
	return (
		<div className="flex items-center w-100 gap-2 btn-area">
			{buttons?.map((button: Button, index: number) => (
				<button
					key={index}
					className={type === button.type ? 'btn-active' : ''}
					onClick={() => {
						setType(button.type);
					}}
				>
					{button.name}
				</button>
			))}
		</div>
	);
}
