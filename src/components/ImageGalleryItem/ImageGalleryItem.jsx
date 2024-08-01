import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';
import { Image, Item } from './ImageGalleryItem.styled';
export class ImageGalleryItem extends Component {
  state = {
    open: false,
    src: '',
  };
  openModal = event => {
    this.setState({ open: true, src: event.currentTarget.src });
  };
  closeModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { tags, bigUrl } = this.props;
    return (
      <>
        <Item className="ImageGalleryItem">
          <Image
            className="ImageGalleryItem-image "
            src={bigUrl}
            alt={tags}
            width="400px"
            onClick={this.openModal}
          />
        </Item>
        {this.state.open && (
          <Modal closeModal={this.closeModal} src={this.state.src} alt={tags} />
        )}
      </>
    );
  }
}
