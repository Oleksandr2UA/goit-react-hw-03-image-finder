import { Component } from 'react';
import { ModalWindow, Overlay } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onCloseModalByEsc);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModalByEsc);
  }
  onCloseModalByEsc = event => {
    if (event.code === 'Escape') {
      this.closeModal();
    }
  };
  closeModal = () => {
    this.props.closeModal();
  };
  render() {
    return (
      <>
        <Overlay onClick={this.closeModal} />
        <ModalWindow>
          <img src={this.props.src} alt={this.props.alt} width="600" />
        </ModalWindow>
      </>
    );
  }
}
