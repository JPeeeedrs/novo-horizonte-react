import React from "react";
import EditIcon from "../../common/icons/EditIcon";
import TrashIcon from "../../common/icons/TrashIcon";
import SetaBaixo from "../../common/icons/SetaBaixo";
import SetaCima from "../../common/icons/SetaCima";

const StudentCardActions = ({
	alunoId,
	isOpen,
	onToggle,
	onEdit,
	onDelete,
}) => {
	return (
		<div className='card-actions'>
			<button className='dropdown-alternar' onClick={() => onToggle(alunoId)}>
				{isOpen ? <SetaBaixo /> : <SetaCima />}
			</button>
			<button className='edit-button' onClick={() => onEdit(alunoId)}>
				<EditIcon />
			</button>
			<button className='delete-button' onClick={() => onDelete(alunoId)}>
				<TrashIcon />
			</button>
		</div>
	);
};

export default StudentCardActions;
