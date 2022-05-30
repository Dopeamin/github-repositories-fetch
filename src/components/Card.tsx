import "../_globals/global.scss";
import { useState } from "react";
import Modal from "./Modal";
import { IdeaModel } from "../models/Idea.model";
function Card(props: any) {
	const idea: IdeaModel = props.idea;
	const [visible, setVisible] = useState(false);
	/**
	 * Calculate Date difference
	 */

	/**
	 * Show the modal
	 */
	const showModal = () => {
		setVisible(!visible);
	};
	return (
		<>
			{idea && (
				<div className="content bg-light-grey card" onClick={showModal} data-testid="card" id="card">
					<div className="content">
            <h1>Generated Idea</h1>
						<p className="mt-10 paragraph paragraph-small">{idea.idea ? idea.idea : "No Description"}</p>
					</div>
					<div className="content flex space-between">
						<p className="paragraph paragraph-xsmall flext-6 green">Upvotes : {idea.votes ? idea.votes : "No Language"}</p>
						<p className="paragraph paragraph-xsmall flext-6">{idea.date} ago</p>
					</div>
				</div>
			)}
		</>
	);
}

export default Card;
