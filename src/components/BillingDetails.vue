<template>
  <section class="ftco-section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-7 ftco-animate">
          <form action="#" class="billing-form">
            <h3 class="mb-4 billing-heading">Billing Details</h3>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="firstname">Firt Name</label>
                  <input
                    id="firstname"
                    type="text"
                    class="form-control"
                    placeholder=""
                    v-model="form.firstname"
                    :class="errors.firstname ? 'is-invalid' : ''"
                    @change="onChange('firstname')"
                  />
                  <div class="invalid-feedback">
                    {{ messages.firstname }}
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="lastname">Last Name</label>
                  <input
                    id="lastname"
                    type="text"
                    class="form-control"
                    placeholder=""
                    v-model="form.lastname"
                    :class="errors.lastname ? 'is-invalid' : ''"
                    @change="onChange('lastname')"
                  />
                  <div class="invalid-feedback">
                    {{ messages.lastname }}
                  </div>
                </div>
              </div>
              <div class="w-100"></div>
              <div class="col-md-12">
                <div class="form-group">
                  <label for="country">State / Country</label>
                  <div class="select-wrap">
                    <div class="icon">
                      <span class="ion-ios-arrow-down"></span>
                    </div>
                    <select
                      name=""
                      id="country"
                      class="form-control"
                      v-model="form.country"
                    >
                      <option value="vn">Vietnam</option>
                      <option value="fr">France</option>
                      <option value="it">Italy</option>
                      <option value="ph">Philippines</option>
                      <option value="kr">South Korea</option>
                      <option value="hk">Hongkong</option>
                      <option value="jp">Japan</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="w-100"></div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="streetaddress">Street Address</label>
                  <input
                    id="streetaddress"
                    type="text"
                    class="form-control"
                    placeholder="House number and street name"
                    v-model="form.streetaddress"
                    :class="errors.streetaddress ? 'is-invalid' : ''"
                    @change="onChange('streetaddress')"
                  />
                  <div class="invalid-feedback">
                    {{ messages.streetaddress }}
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="apartment">&nbsp;</label>

                  <input
                    id="apartment"
                    type="text"
                    class="form-control"
                    placeholder="Appartment, suite, unit etc: (optional)"
                    v-model="form.apartment"
                    :class="errors.apartment ? 'is-invalid' : ''"
                    @change="onChange('apartment')"
                  />
                  <div class="invalid-feedback">
                    {{ messages.streetaddress }}
                  </div>
                </div>
              </div>
              <div class="w-100"></div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="city">Town / City</label>
                  <input
                    id="city"
                    type="text"
                    class="form-control"
                    placeholder=""
                    v-model="form.city"
                    :class="errors.city ? 'is-invalid' : ''"
                    @change="onChange('city')"
                  />
                  <div class="invalid-feedback">
                    {{ messages.city }}
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="postcodezip">Postcode / ZIP *</label>
                  <input
                    id="postcodezip"
                    type="text"
                    class="form-control"
                    placeholder=""
                    v-model="form.postcodezip"
                    :class="errors.postcodezip ? 'is-invalid' : ''"
                    @change="onChange('postcodezip')"
                  />
                  <div class="invalid-feedback">
                    {{ messages.postcodezip }}
                  </div>
                </div>
              </div>
              <div class="w-100"></div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="phone">Phone</label>
                  <input
                    id="phone"
                    type="text"
                    class="form-control"
                    placeholder=""
                    v-model="form.phone"
                    :class="errors.phone ? 'is-invalid' : ''"
                    @change="onChange('phone')"
                  />
                  <div class="invalid-feedback">
                    {{ messages.phone }}
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="emailaddress">Email Address</label>
                  <input
                    id="emailaddress"
                    type="text"
                    class="form-control"
                    placeholder=""
                    v-model="form.emailaddress"
                    :class="errors.emailaddress ? 'is-invalid' : ''"
                    @change="onChange('emailaddress')"
                  />
                  <div class="invalid-feedback">
                    {{ messages.emailaddress }}
                  </div>
                </div>
              </div>
              <div class="w-100"></div>
              <div class="col-md-12">
                <div class="form-group mt-4">
                  <div class="radio">
                    <label class="mr-3"
                      ><input
                        id="shipping"
                        type="radio"
                        name="shipping"
                        v-model="form.shipping"
                        :value="ShippingEnum.CREATE_ACOUNT"
                        @change="onChange('shipping')"
                      />
                      Create an Account?
                    </label>
                    <label
                      ><input
                        id="shipping2"
                        type="radio"
                        name="shipping"
                        v-model="form.shipping"
                        :value="ShippingEnum.SHIPPING_TO_OTHER"
                        @change="onChange('shipping')"
                      />

                      Ship to different address</label
                    >
                  </div>
                  <div
                    class="invalid-feedback"
                    :style="
                      errors.shipping
                        ? { display: 'unset' }
                        : { display: 'none' }
                    "
                  >
                    {{ messages.shipping }}
                  </div>
                </div>
              </div>
            </div>
          </form>
          <!-- END -->
        </div>
        <div class="col-xl-5">
          <div class="row mt-5 pt-3">
            <div class="col-md-12 d-flex mb-5">
              <div class="cart-detail cart-total p-3 p-md-4">
                <h3 class="billing-heading mb-4">Cart Total</h3>
                <p class="d-flex">
                  <span>Subtotal</span>
                  <span>$20.60</span>
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
                  <span>$17.60</span>
                </p>
              </div>
            </div>
            <div class="col-md-12">
              <div class="cart-detail p-3 p-md-4">
                <h3 class="billing-heading mb-4">Payment Method</h3>
                <div class="form-group">
                  <div class="col-md-12">
                    <div class="radio">
                      <label
                        ><input
                          required
                          id="method1"
                          type="radio"
                          name="method"
                          class="mr-2"
                          v-model="method"
                          :value="PaymentMethodEnum.BANK_TRANSFER"
                        />
                        Direct Bank Tranfer</label
                      >
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-md-12">
                    <div class="radio">
                      <label
                        ><input
                          id="method2"
                          type="radio"
                          name="method"
                          class="mr-2"
                          v-model="method"
                          :value="PaymentMethodEnum.CHECK_PAYMENT"
                          required
                        />
                        Check Payment</label
                      >
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-md-12">
                    <div class="radio">
                      <label
                        ><input
                          id="method3"
                          type="radio"
                          name="method"
                          class="mr-2"
                          v-model="method"
                          :value="PaymentMethodEnum.PAYPAL"
                          required
                        />
                        Paypal</label
                      >
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-md-12">
                    <div class="checkbox">
                      <label
                        ><input
                          id="isAccept"
                          type="checkbox"
                          value=""
                          class="mr-2"
                          v-model="form.isAccept"
                          required
                          :class="errors.isAccept ? 'is-invalid' : ''"
                          @change="onChange('isAccept')"
                        />
                        I have read and accept the terms and conditions</label
                      >
                      <div
                        class="invalid-feedback"
                        :style="
                          errors.isAccept
                            ? { display: 'unset' }
                            : { display: 'none' }
                        "
                      >
                        {{ messages.isAccept }}
                      </div>
                    </div>
                  </div>
                </div>
                <p>
                  <button class="btn btn-primary py-3 px-4" @click="onSubmit">
                    Place an order
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- .col-md-8 -->
      </div>
    </div>
  </section>
  <!-- .section -->
</template>

<script>
import { ShippingEnum, PaymentMethodEnum } from '../models/enum';

const DEFAULT_FORM_VALUE = {
  firstname: '',
  lastname: '',
  country: 'vn',
  streetaddress: '',
  apartment: '',
  city: '',
  postcodezip: '',
  phone: '',
  emailaddress: '',
  shipping: undefined,
  method: undefined,
  isAccept: false
};

const validateEmail = (email) => {
  const EMAIL_REGEX =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return EMAIL_REGEX.test(email);
};

const validatePhone = (phone) => {
  return phone.length === 10;
};

const validatePostcode = (postCode) => {
  const POSTCODE_REGEX = /\d{10}/;
  return POSTCODE_REGEX.test(postCode);
};

const validateShippingMethod = (method) => {
  return !!method;
};

const validateCity = (text) => {
  return !!text;
};
const validateName = (text) => {
  return !!text;
};
const validateAddress = (text) => {
  return !!text;
};

export default {
  name: 'BillingDetails',
  components: {},
  data() {
    return {
      form: {
        ...DEFAULT_FORM_VALUE
      },
      messages: {
        firstname: 'Please input first name',
        lastname: 'Please input last name',
        streetaddress: 'Please input street address',
        apartment: 'Please input apartment information',
        city: 'Please input city',
        phone: 'Phone must have 10 numbers',
        emailaddress: 'Please input email address',
        shipping: 'Please input shipping methor',
        postcodezip: 'Post code must in format of 10 digits',
        isAccept: 'Please accept term and condition.'
      },
      errors: {
        firstname: false,
        lastname: false,
        streetaddress: false,
        apartment: false,
        phone: false,
        emailaddress: false,
        shipping: false,
        postcodezip: false,
        isAccept: false
      },
      ShippingEnum,
      PaymentMethodEnum
    };
  },
  methods: {
    onSubmit() {
      this.errors.isAccept = !this.form.isAccept;
      if (!this.form.isAccept) return;

      this.errors.firstname = !validateName(this.form.firstname);
      this.errors.lastname = !validateName(this.form.lastname);
      this.errors.streetaddress = !validateAddress(this.form.streetaddress);
      this.errors.apartment = !validateAddress(this.form.apartment);
      this.errors.phone = !validatePhone(this.form.phone);
      this.errors.city = !validateCity(this.form.city);
      this.errors.emailaddress = !validateEmail(this.form.emailaddress);
      this.errors.shipping = !validateShippingMethod(this.form.shipping);
      this.errors.postcodezip = !validatePostcode(this.form.postcodezip);

      if (Object.values(this.errors).every((error) => !error)) {
        alert('Submit successfuly!');
        this.form = DEFAULT_FORM_VALUE;
      }
    },
    onChange(name) {
      if (!this.form[name]) return;
      this.errors[name] = false;
    }
  }
};
</script>

<style>
.billing-heading {
  font-size: 24px;
}

.billing-form .form-group {
  position: relative;
}

.billing-form label {
  color: #000000;
  font-size: 14px;
}

.billing-form .icon {
  position: absolute;
  top: 50% !important;
  right: 15px;
  font-size: 14px;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
.billing-form .icon span {
  color: black !important;
}

.billing-form .select-wrap,
.billing-form .input-wrap {
  position: relative;
}
.billing-form .select-wrap select,
.billing-form .input-wrap select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.billing-form .form-control {
  font-weight: 300;
  border: transparent !important;
  border: 1px solid rgba(0, 0, 0, 0.1) !important;
  height: 58px !important;
  padding-left: 15px;
  padding-right: 15px;
  background: transparent !important;
  color: rgba(0, 0, 0, 0.4) !important;
  font-size: 14px;
  border-radius: 0px;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
}
.billing-form .form-control::-webkit-input-placeholder {
  /* Chrome/Opera/Safari */
  color: rgba(0, 0, 0, 0.4);
}
.billing-form .form-control::-moz-placeholder {
  /* Firefox 19+ */
  color: rgba(0, 0, 0, 0.4);
}
.billing-form .form-control:-ms-input-placeholder {
  /* IE 10+ */
  color: rgba(0, 0, 0, 0.4);
}
.billing-form .form-control:-moz-placeholder {
  /* Firefox 18- */
  color: rgba(0, 0, 0, 0.4);
}
.billing-form .form-control:focus,
.billing-form .form-control:active {
  border-color: #82ae46 !important;
}

.billing-form textarea.form-control {
  height: inherit !important;
}
</style>
