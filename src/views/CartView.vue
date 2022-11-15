<template>
  <DefaultLayout>
    <section class="ftco-section ftco-cart">
      <div class="container">
        <div class="row">
          <div class="col-md-12 ftco-animate">
            <div class="cart-list">
              <table class="table">
                <thead class="thead-primary">
                  <tr class="text-center">
                    <th>&nbsp;</th>
                    <th>&nbsp;</th>
                    <th>Product name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="text-center"
                    v-for="item in cartStore.items"
                    :key="item.product.id"
                  >
                    <td class="product-remove">
                      <a @click="onDelete(item.product.id)"
                        ><span class="ion-ios-close"></span
                      ></a>
                    </td>

                    <td class="image-prod">
                      <div
                        class="img"
                        :style="`background-image: url(${item.product.imagePath})`"
                      ></div>
                    </td>

                    <td class="product-name">
                      <h3>{{ item.product.name }}</h3>
                      <p>
                        {{ item.product.description }}
                      </p>
                    </td>

                    <td class="price">
                      {{ `$${getNormalizedPrice(item.product?.price || 0)}` }}
                    </td>

                    <td class="quantity">
                      <div class="input-group mb-3">
                        <input
                          type="text"
                          name="quantity"
                          class="quantity form-control input-number"
                          :value="item.quantity || 0"
                          min="1"
                          max="100"
                        />
                      </div>
                    </td>

                    <td class="total">
                      {{
                        `$${getNormalizedPrice(
                          item.product?.price * item.quantity || 0
                        )}`
                      }}
                    </td>
                  </tr>
                  <!-- END TR-->
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="row justify-content-end">
          <div class="col-lg-4 mt-5 cart-wrap ftco-animate">
            <div class="cart-total mb-3">
              <h3>Coupon Code</h3>
              <p>Enter your coupon code if you have one</p>
              <form action="#" class="info">
                <div class="form-group">
                  <label for="">Coupon code</label>
                  <input
                    type="text"
                    class="form-control text-left px-3"
                    placeholder=""
                  />
                </div>
              </form>
            </div>
            <p>
              <a href="checkout.html" class="btn btn-primary py-3 px-4"
                >Apply Coupon</a
              >
            </p>
          </div>
          <div class="col-lg-4 mt-5 cart-wrap ftco-animate">
            <div class="cart-total mb-3">
              <h3>Estimate shipping and tax</h3>
              <p>Enter your destination to get a shipping estimate</p>
              <form action="#" class="info">
                <div class="form-group">
                  <label for="">Country</label>
                  <input
                    type="text"
                    class="form-control text-left px-3"
                    placeholder=""
                  />
                </div>
                <div class="form-group">
                  <label for="country">State/Province</label>
                  <input
                    type="text"
                    class="form-control text-left px-3"
                    placeholder=""
                  />
                </div>
                <div class="form-group">
                  <label for="country">Zip/Postal Code</label>
                  <input
                    type="text"
                    class="form-control text-left px-3"
                    placeholder=""
                  />
                </div>
              </form>
            </div>
            <p>
              <a href="checkout.html" class="btn btn-primary py-3 px-4"
                >Estimate</a
              >
            </p>
          </div>
          <div class="col-lg-4 mt-5 cart-wrap ftco-animate">
            <div class="cart-total mb-3">
              <h3>Cart Totals</h3>
              <p class="d-flex">
                <span>Subtotal</span>
                <span>{{ `$${subTotal1() || 0}` }}</span>
              </p>
              <p class="d-flex">
                <span>Delivery</span>
                <span>$0.00</span>
              </p>
              <p class="d-flex">
                <span>Discount</span>
                <span>$0.00</span>
              </p>
              <hr />
              <p class="d-flex total-price">
                <span>Total</span>
                <span>{{ `$${subTotal || 0}` }}</span>
              </p>
            </div>
            <p>
              <router-link to="/checkout" class="btn btn-primary py-3 px-4"
                >Proceed to Checkout</router-link
              >
            </p>
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
  name: 'Cart',
  components: { DefaultLayout },
  data() {
    return {
      cartStore
    };
  },
  methods: {
    getNormalizedPrice,
    onDelete(productId) {
      cartStore.items = cartStore.items.filter(
        (item) => item.product.id !== productId
      );
    },
    subTotal1() {
      console.log('run into subTotal1');
      return getNormalizedPrice(
        cartStore.items.reduce((total, current) => {
          return total + current.product.price * current.quantity;
        }, 0)
      );
    }
  },
  computed: {
    subTotal() {
      console.log('run into subTotal');
      return getNormalizedPrice(
        cartStore.items.reduce((total, current) => {
          return total + current.product.price * current.quantity;
        }, 0)
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
