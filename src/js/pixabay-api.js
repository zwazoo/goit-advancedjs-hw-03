import axios from 'axios';

export default function getImagesByQuery(query) {
  const params = new URLSearchParams({
    key: '57941114-822f0913fcffde60ac0282970',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  const url = `https://pixabay.com/api/?${params}`;
  return axios.get(url).then(response => response.data);
}
