import { Component } from 'react';
import { SearchBar } from './SearchBar/Searchbar';
import { fetchImages } from './helpers/fetch';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ButtonEl } from './Button/Button';

export class App extends Component {
  state = {
    value: '',
    page: 1,
    images: [],
    error: null,
    isLoading: false,
    noMore: false,
  };
  onClick = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  onSubmit = userInput => {
    if (userInput === '') return alert('Введи хоч шось');
    this.setState({ value: userInput, images: [], page: 1, noMore: false });
  };
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.value !== this.state.value ||
      prevState.page !== this.state.page
    ) {
      const { value, page } = this.state;

      this.setState({ isLoading: true });

      fetchImages(value, page)
        .then(data => {
          if (!data.ok) {
            console.log('here');
            throw new Error(data.json()); // У цьому випадку тут текст помилки
          }
          return data.json();
        })
        .then(data => data.hits)
        .then(res => {
          if (res.length === 0) return alert('We havnt found results');
          if (res.length < 12) this.setState({ noMore: true });
          this.setState(prev => ({ images: [...prev.images, ...res] }));
        })
        .catch(error => {
          console.log(error);
          this.setState({ error: error });
        })
        .finally(() => {
          this.setState({ isLoading: false });
          console.log('finally');
        });
    }
  }

  render() {
    const { images, error, isLoading, noMore } = this.state;

    return (
      <div style={{ paddingBottom: '50px' }}>
        <SearchBar onSubmit={this.onSubmit} />
        {error && <h2>There has been an error :(</h2>}
        {images.length > 0 && <ImageGallery images={images} />}

        {images.length > 0 && !isLoading && !noMore && (
          <ButtonEl onClick={this.onClick} />
        )}
        {isLoading && <Loader />}
      </div>
    );
  }
}
