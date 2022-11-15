<template>
  <DefaultLayout>
    <section class="ftco-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 mb-5 ftco-animate">
            <a :href="productDetail?.imagePath" class="image-popup"
              ><img
                :src="productDetail?.imagePath"
                class="img-fluid"
                alt="Colorlib Template"
            /></a>
          </div>
          <div class="col-lg-6 product-details pl-md-5 ftco-animate">
            <h3>{{ productDetail?.name }}</h3>
            <div class="rating d-flex">
              <p class="text-left mr-4">
                <a href="#" class="mr-2">5.0</a>
                <a href="#"><span class="ion-ios-star-outline"></span></a>
                <a href="#"><span class="ion-ios-star-outline"></span></a>
                <a href="#"><span class="ion-ios-star-outline"></span></a>
                <a href="#"><span class="ion-ios-star-outline"></span></a>
                <a href="#"><span class="ion-ios-star-outline"></span></a>
              </p>
              <p class="text-left mr-4">
                <a href="#" class="mr-2" style="color: #000"
                  >{{ productDetail?.votes }}
                  <span style="color: #bbb">Rating</span></a
                >
              </p>
              <p class="text-left">
                <a href="#" class="mr-2" style="color: #000"
                  >{{ productDetail?.sold }}
                  <span style="color: #bbb">Sold</span></a
                >
              </p>
            </div>
            <p class="price">
              <span>{{
                `${getNormalizedPrice(this.productDetail?.price || 0)}`
              }}</span>
            </p>
            <p>
              {{ productDetail?.description }}
            </p>
            <div class="row mt-4">
              <div class="col-md-6">
                <div class="form-group d-flex">
                  <div class="select-wrap">
                    <div class="icon">
                      <span class="ion-ios-arrow-down"></span>
                    </div>
                    <select name="" id="" class="form-control">
                      <option value="">Small</option>
                      <option value="">Medium</option>
                      <option value="">Large</option>
                      <option value="">Extra Large</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="w-100"></div>
              <div class="input-group col-md-6 d-flex mb-3">
                <span class="input-group-btn mr-2">
                  <button
                    type="button"
                    class="quantity-left-minus btn"
                    data-type="minus"
                    data-field=""
                  >
                    <i class="ion-ios-remove"></i>
                  </button>
                </span>
                <input
                  type="text"
                  id="quantity"
                  name="quantity"
                  class="form-control input-number"
                  value="1"
                  min="1"
                  max="100"
                />
                <span class="input-group-btn ml-2">
                  <button
                    type="button"
                    class="quantity-right-plus btn"
                    data-type="plus"
                    data-field=""
                  >
                    <i class="ion-ios-add"></i>
                  </button>
                </span>
              </div>
              <div class="w-100"></div>
              <div class="col-md-12">
                <p style="color: #000">
                  {{ productDetail?.availableQuantity }} kg available
                </p>
              </div>
            </div>
            <p>
              <a class="btn btn-black py-3 px-5" @click="addTocart">
                Add to Cart
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="ftco-section">
      <div class="container">
        <div class="row justify-content-center mb-3 pb-3">
          <div class="col-md-12 heading-section text-center ftco-animate">
            <span class="subheading">Products</span>
            <h2 class="mb-4">Related Products</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </p>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div
            class="col-md-6 col-lg-3 ftco-animate"
            v-for="product in relatedProducts"
            :key="product.id"
          >
            <div class="product">
              <a href="#" class="img-prod"
                ><img
                  class="img-fluid"
                  :src="product.imagePath"
                  alt="Colorlib Template"
                />
                <span class="status" v-if="!!product.status">{{
                  product.status
                }}</span>
                <div class="overlay"></div>
              </a>
              <div class="text py-3 pb-4 px-3 text-center">
                <h3>
                  <a href="#">{{ product.name }}</a>
                </h3>
                <div class="d-flex">
                  <div class="pricing">
                    <p class="price">
                      <span class="mr-2 price-dc">{{
                        `$${product.price}.00`
                      }}</span
                      ><span class="price-sale">{{
                        `$${product.discountPrice}.00`
                      }}</span>
                    </p>
                  </div>
                </div>
                <div class="bottom-area d-flex px-3">
                  <div class="m-auto d-flex">
                    <a
                      href="#"
                      class="add-to-cart d-flex justify-content-center align-items-center text-center"
                    >
                      <span><i class="ion-ios-menu"></i></span>
                    </a>
                    <a
                      href="#"
                      class="buy-now d-flex justify-content-center align-items-center mx-1"
                    >
                      <span><i class="ion-ios-cart"></i></span>
                    </a>
                    <a
                      href="#"
                      class="heart d-flex justify-content-center align-items-center"
                    >
                      <span><i class="ion-ios-heart"></i></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '../components/DefaultLayout.vue';
import { cartStore } from '../stores/cart';
import { getNormalizedPrice } from '../utils/priceUtils';

export default {
  name: 'SingleProduct',
  props: ['id'],
  components: { DefaultLayout },
  data() {
    return {
      productDetail: null,
      cartStore,
      relatedProducts: []
    };
  },
  methods: {
    addTocart() {
      const foundedItem = cartStore.items.find(
        (item) => item.product.id == this.id
      );
      const foundedItemIndex = cartStore.items.findIndex(
        (item) => item.product.id == this.id
      );

      if (foundedItem) {
        foundedItem.quantity = foundedItem.quantity + 1;
        cartStore.items[foundedItemIndex] = foundedItem;
      } else {
        const newProduct = {
          product: this.productDetail,
          quantity: 1
        };
        cartStore.items = [...cartStore.items, newProduct];
      }

      // console.log('cartStore', cartStore);
    },
    getNormalizedPrice
  },
  mounted() {
    this.axios
      .get('/productDetail', {
        params: {
          id: this.id
        }
      })
      .then((response) => {
        this.productDetail = response.data[0];
      })
      .catch((error) => {
        alert('Failed to get product detail');
      });
    this.axios
      .get('/relatedProducts')
      .then((response) => {
        this.relatedProducts = response.data;
      })
      .catch((error) => {
        alert('Failed to get related product list');
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
