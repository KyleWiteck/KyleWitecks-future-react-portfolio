import React, { Component } from 'react';
import '../reviewModal/reviewModal.css';

class ReviewModal extends Component {
	state = {};

	render() {
		console.log(this.props);
		return (
			<div
				className="review-modal-container"
				style={{ display: this.props.modalState ? 'block' : 'none' }}
			>
				<div className="form-container">
					<div className="modal-btn-container">
						<button className="close-modal-btn" onClick={this.props.closeModal}>
							X
						</button>
					</div>

					<form>
						<p>
							This is where you help me become a better developer!! Add your
							testimonial by filling out the following fields.
						</p>

						<input type="text" name="name" placeholder="Full name" />
						<input type="text" name="postion" placeholder="Occupation" />
						<input type="file" name="image" className="file-upload" />
						<button className="upload-btn" for="image">
							Upload Your Face
						</button>
						<textarea
							className="text-box"
							type="text"
							maxlength="350"
							name="testimonial"
							placeholder="Let me know what you think!"
						/>
						<button className="add-testimonial-btn">Add Testimonial!</button>
					</form>
				</div>
			</div>
		);
	}
}

export default ReviewModal;
