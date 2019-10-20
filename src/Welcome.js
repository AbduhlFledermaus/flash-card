import React, { Component } from "react";
import CardForm from "./cardform.js";
import "./welcome.css";
import CardList from "./cardlist.js";
import firebase from "firebase";

// Welcome
export class Welcome extends Component {
	state = {
		cards: [],
		menuOpen: false,
		currentCard: 0,
		flipped: false,
		editing: false,
		front: "",
		back: ""
	};

	init = async () => {
		await firebase
			.firestore()
			.collection("user/" + this.props.match.params.id + "/" + "cards")
			.get()
			.then(d => {
				let cds = [];
				d.forEach(card => {
					let c = {
						id: card.id,
						front: card.data().front,
						back: card.data().back,
						correct: false
					};
					cds.push(c);
				});
				//this.state.cards = cds;
				this.setState({ cards: [...cds] });
				//let card = { id: d.id, front, back, correct: false };
			});
	};

	resetFormInputs = () => {
		this.setState({
			front: "",
			back: ""
		});
	};

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	// TOGGLE NEW CARD MENU
	toggleMenu = () => {
		let { menuOpen } = this.state;
		this.setState({
			menuOpen: !menuOpen
		});
	};

	// TOGGLE EDITING MODE
	toggleEdit = () => {
		let { cards, currentCard } = this.state;
		this.resetFormInputs();
		this.setState({
			editing: !this.state.editing,
			front: cards[currentCard].front,
			back: cards[currentCard].back
		});
	};

	// DELETE ALL CARDS FROM ARRAY
	deleteCards = () => {
		this.state.cards.forEach(c => {
			firebase
				.firestore()
				.collection("user/" + this.props.match.params.id + "/" + "cards")
				.doc(c.id)
				.delete()
				.then(d => console.log(d));
		});
		this.setState({
			cards: []
		});
	};

	// DELETE A SINGLE CARD
	deleteCard = id => {
		let { cards } = this.state;
		firebase
			.firestore()
			.collection("user/" + this.props.match.params.id + "/" + "cards")
			.doc(id)
			.delete()
			.then(d => console.log(d));

		this.setState({
			cards: cards.filter(card => {
				return card.id !== id;
			})
		});
	};

	// GENERATE RANDOM ID
	getId = () => {
		return Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1);
	};

	//CREATE CARD FOR ARRAY
	createCard = (front, back) => {
		let { cards } = this.state;
		let card = { id: this.getId(), front, back, correct: false };
		firebase
			.firestore()
			.collection("user/" + this.props.match.params.id + "/" + "cards")
			.add({ front: front, back: back })
			.then(data => {
				console.log(data);
				card.id = data.id;
			});
		this.setState({
			cards: [...cards, card]
		});
	};

	// EDIT CARD IN ARRAY
	editCard = cardData => {
		const cards = this.state.cards.map(card => {
			if (card.id === cardData.id) {
				firebase
					.firestore()
					.collection("user/" + this.props.match.params.id + "/" + "cards")
					.doc(cardData.id)
					.update(cardData)
					.then();
				return cardData;
			}
			return card;
		});
		this.setState({ cards: cards });
	};

	// CYCLE RIGHT
	cycleRight = () => {
		let { currentCard, cards } = this.state;
		let index = currentCard;
		if (currentCard >= cards.length - 1) {
			index = 0;
		} else {
			index++;
		}
		this.setState({
			currentCard: index
		});
	};

	//CYCLE LEFT
	cycleLeft = () => {
		let { currentCard, cards } = this.state;
		let index = currentCard;
		if (currentCard <= 0) {
			index = cards.length - 1;
		} else {
			index--;
		}
		this.setState({
			currentCard: index
		});
	};

	// FLIP CARD
	flipCard = () => {
		this.setState({
			flipped: !this.state.flipped
		});
	};

	// Render
	render() {
		let { cards, currentCard, flipped, front, back, editing, menuOpen } = this.state;
		this.init();
		return (
			<>
				{menuOpen ? (
					<div className="overlay">
						<div className="close-menu" onClick={this.toggleMenu}></div>
						<CardForm
							reset={this.resetFormInputs}
							toggleMenu={this.toggleMenu}
							newCard={this.createCard}
							front={front}
							back={back}
							handleChange={this.handleChange}
						/>
					</div>
				) : editing ? (
					<div className="overlay">
						<div className="close-menu" onClick={this.toggleEdit}></div>
						<CardForm
							cards={cards}
							currentCard={currentCard}
							reset={this.resetFormInputs}
							toggleMenu={this.toggleMenu}
							newCard={this.createCard}
							editing={editing}
							edit={this.editCard}
							toggleEdit={this.toggleEdit}
							front={front}
							back={back}
							handleChange={this.handleChange}
						/>
					</div>
				) : null}
				<div className="container">
					<button className="btn" onClick={this.toggleMenu}>
						Karte hinzufügen
					</button>
					<button className="btn" onClick={this.deleteCards}>
						Alle Karten verwerfen
					</button>
					<button
						className="btn"
						onClick={() => {
							this.props.history.push("/logout");
						}}
					>
						Abmelden
					</button>
				</div>
				<CardList
					cards={cards}
					currentCard={currentCard}
					increase={this.cycleRight}
					decrease={this.cycleLeft}
					flipCard={this.flipCard}
					flipped={flipped}
					toggle={this.toggleMenu}
					deleteCard={this.deleteCard}
					edit={this.toggleEdit}
				/>
			</>
		);
	}
}

export default Welcome;
