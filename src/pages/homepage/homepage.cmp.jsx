import React from 'react';
import './homepage.scss';
import Hero from '../../components/hero/hero.cmp';
import ItemHome from '../../components/item-home/item-home.cmp';
import { FullPage, Slide } from 'react-full-page';

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sections: [
				{
					id: 1,
					title: 'Portrait',
					subtitle: 'Studio portraits',
					imageUrl: 'https://res.cloudinary.com/ilnphotography/image/upload/v1577361297/HomePage/4_jydaxb.jpg',
					revield: false
				},
				{
					id: 2,
					title: 'Lifestyle',
					subtitle: 'Outdoor photoshoots',
					imageUrl: 'https://res.cloudinary.com/ilnphotography/image/upload/v1577361243/HomePage/WEB-51_v7ijar.jpg',
					revield: false
				},
				{
					id: 3,
					title: 'Interior',
					subtitle: 'Best angle of your design',
					imageUrl:
						'https://res.cloudinary.com/ilnphotography/image/upload/v1577361394/HomePage/VillaReem-54_t6bfpj.jpg',
					revield: false
				},
				{
					id: 4,
					title: 'Travel',
					subtitle: 'Avaliable for purchaise',
					imageUrl: 'https://res.cloudinary.com/ilnphotography/image/upload/v1577361232/HomePage/WEB-4_ulvafq.jpg',
					revield: false
				}
			]
		};
	}

	handleWaypoint = (index, action) => {
		this.setState((state) => {
			const list = state.sections.map((item, i) => {
				if (index === i) {
					if (action === 'enter') {
						return (item.revield = true);
					} else if (action === 'leave') {
						return (item.revield = false);
					}
				}
				return item;
			});
			return {
				list
			};
		});
	};

	render() {
		return (
			<FullPage className="fullpage-wrapper">
				<Slide>
					<Hero />
				</Slide>
				{this.state.sections.map((item, index) => (
					<Slide>
						<ItemHome item={item} handleWaypoint={this.handleWaypoint} reviel={this.state.sections} index={index} />
					</Slide>
				))}
			</FullPage>
		);
	}
}

export default HomePage;
