import "../_globals/global.scss";
import blue from "../assets/blue.png";
import Button from "../components/Button";
import { Link } from "react-router-dom";
function Landing() {
	return (
		<div className="container flex-12 flex h-100 wrap">
			<div className="content flex flex-6 column flex-start p-10">
				<h1 className="title text-left" data-testid="landing-title">
					Fetch Creative Ideas Randomly through our AI and library.
				</h1>
				<p className="paragraph" data-testid="landing-paragraph">
					An awesome lightweight application that fetches ideas for your projects , these ideas are generated using our AI (in development so far)
				</p>
				<div className="content flex flex-start p-0 mt-10">
					<Link to={"./search"}>
						<Button type="primary" text="Get started free" className="mr-10"></Button>
					</Link>
					<a href="https://github.com/ideafy-ai/ideafy/blob/master/README.md" target="_blank">
						<Button type="secondary" text="Read more" className="ml-10"></Button>
					</a>
				</div>
			</div>
			<div className="content flex flex-6 image-container none-small">
				<img src={blue} className="landing-image" alt="hand"></img>
			</div>
		</div>
	);
}

export default Landing;
