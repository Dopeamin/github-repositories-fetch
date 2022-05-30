import "../_globals/global.scss";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import { useNavigate, useParams } from "react-router-dom";
import GithubService from "../services/Github.service";
import { useEffect, useState } from "react";
import { ClipLoader, RotateLoader } from "react-spinners";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../components/Button";
function Search() {
	const [repos, setRepos] = useState([]);
	const [allRepos, setAllRepos] = useState();
	const [loading, setLoading] = useState(false);
	const [refresh, setRefresh] = useState(0);
	const match = { params: useParams() };
	const color = "#2a73ff";
	const navigate = useNavigate();

	const clickHandler = async () => {
    setAllRepos(undefined);
		setLoading(true);
		let isMounted = true;
		const req = await fetch("http://localhost:3001/idea/random", {
			method: "GET",
		}).then((t) => {
			return t.json();
		});
		setLoading(false);

		setAllRepos(req);
	};
	if (match.params.user) {
		return (
			<div className="container flex-12 flex h-auto wrap column relative">
				<ToastContainer />

				<h1 className="title">Start Using our App</h1>
				<div className="w-80 flex flex-12 wrap space-center">
					<Button type="primary" text="Generate" className="mr-10" click={clickHandler}></Button>
				</div>
				<div className="card-container">
					<ClipLoader color={color} loading={loading} size={150} data-testid="hi"></ClipLoader>
					<Card idea={allRepos} />
				</div>
			</div>
		);
	}
	return (
		<div className="container flex-12 flex h-100 wrap column">
			<ToastContainer />
			<h1 className="title">Start Using our App</h1>
			<div className="w-80 flex wrap space-center">
				<Button type="primary" text="Generate" className="mr-10" click={clickHandler}></Button>
			</div>
			<div className="card-container">
				<ClipLoader color={color} loading={loading} size={150} data-testid="hi"></ClipLoader>
				<Card idea={allRepos} />
			</div>
		</div>
	);
}

export default Search;
