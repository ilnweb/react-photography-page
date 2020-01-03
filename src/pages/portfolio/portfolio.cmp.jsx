import React from 'react';
import './portfolio.scss';
import PortfolioContainer from '../../components/portfilio-container/portfolio-container.cmp';
import axios from 'axios';
import { CloudinaryContext } from 'cloudinary-react';
import 'react-photoswipe/lib/photoswipe.css';
import { PhotoSwipe } from 'react-photoswipe';

class PortfolioPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			gallery: [],
			items: [],
			isOpen: true,
			options: {
				escKey: false,
        showHideOpacity: true,
        bgOpacity: 0.85,
        spacing : .15
			}
		};
	}

	async componentDidMount() {
		const { title } = this.props.match.params;
		// Request for images by tag
		await axios.get(`https://res.cloudinary.com/ilnphotography/image/list/${title}.json`).then((res) => {
			this.setState({ gallery: res.data.resources });
			this.createUrlArray();
		});
	}

	createUrlArray = () => {
		this.state.gallery.map((data) => {
			let url = `https://res.cloudinary.com/ilnphotography/image/upload/v1577365202/${data.public_id}.jpg`;
			let imageData = {
				src: url,
				w: data.width,
				h: data.height
				// title:data.public_id
			};
			this.setState((state) => {
				state.items.push(imageData);
			});
		});
	};

	openPhotoSwipe = (index) => {
		
		this.setState({
			isOpen: true,
      options: {
        ...this.state.options,
        closeOnScroll: false,
        index: index
			}
		});
	};

	handleClose = () => {
		this.setState({
			isOpen: false
		});
	};

	render() {
		return (
			<CloudinaryContext cloudName="ilnphotography">
				<PortfolioContainer>
					{// check if array of items is ready
					this.state.items.length > 0 ? (
						<PhotoSwipe
							isOpen={this.state.isOpen}
							items={this.state.items}
							options={this.state.options}
							onClose={this.handleClose}
						/>
					) : (
						''
					)}

					{this.state.gallery.map((data, index) => {
						return (
							<div className="responsive" key={data.public_id}>
								<div
									className="img"
									style={{
										backgroundImage: `url(${`https://res.cloudinary.com/ilnphotography/image/upload/v1577365202/${data.public_id}.jpg`})`
									}}
									onClick={()=>this.openPhotoSwipe(index)}
								/>
							</div>
						);
					})}
				</PortfolioContainer>
			</CloudinaryContext>
		);
	}
}

export default PortfolioPage;
