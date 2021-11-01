import swal from 'sweetalert';
import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async getAllRestaurant() {
    const response = await fetch(API_ENDPOINT.GET_ALL);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }

  static async addReview(reviewData) {
    // There is a problem with the CORS, so I am not put the X-Auth-Token
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reviewData),
    };

    await fetch(API_ENDPOINT.ADD_REVIEW, options)
      .then(() => {
        swal('Congratulation!', 'Your review is published.', 'success');
        window.location.reload();
      })
      .catch(() => {
        swal('Error occurred!', 'Your review is not published.', 'error');
      });
  }
}

export default RestaurantSource;
