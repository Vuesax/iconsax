<template>
  <div>
    <div class="p-relative mt-8">
      <div class="d-none d-lg-block floating-icon-box">
        <main-icon-box
          class="floating-icon-left-1"
          elevated="solid"
          rounded="4"
          :icon-style="iconQuery.currentIconMode"
          icon-name="trash"
        />
        <main-icon-box
          class="floating-icon-left-2"
          elevated="solid"
          rounded="4"
          :icon-style="iconQuery.currentIconMode"
          icon-name="bag-2"
        />
        <main-icon-box
          class="floating-icon-left-3"
          elevated="solid"
          rounded="4"
          :icon-style="iconQuery.currentIconMode"
          icon-name="home"
        />

        <main-icon-box
          class="floating-icon-right-1"
          elevated="solid"
          rounded="4"
          :icon-style="iconQuery.currentIconMode"
          icon-name="scan"
        />
        <main-icon-box
          class="floating-icon-right-2"
          elevated="solid"
          rounded="4"
          :icon-style="iconQuery.currentIconMode"
          icon-name="briefcase"
        />
        <main-icon-box
          class="floating-icon-right-3"
          elevated="solid"
          rounded="4"
          :icon-style="iconQuery.currentIconMode"
          icon-name="user-edit"
        />
      </div>

      <main-headline v-model="iconQuery" color="primary" />
    </div>
    <div class="row justify-center">
      <div class="col-12 col-md-10 col-lg-10 col-xl-8">
        <main-icon-list
          :category="iconQuery.currentCategory"
          :icon-style="iconQuery.currentIconMode"
          :query="iconQuery.currentQuery"
        ></main-icon-list>
      </div>
    </div>
    <div class="row mt-18 mb-12 justify-center">
      <div class="col-12 col-md-10 col-lg-10 col-xl-8">
        <main-card image="linear-grid" color="primary">
          <template #title>
            <div>
              <div>
                <span class="fs-4 fw-2">All Icons</span>
              </div>
              <div>Perfectly Balanced,</div>
              <div>
                <span class="text--orange-lighten-1 fw-4">24px</span>
                Grid-based
              </div>
            </div>
          </template>
          <template #subtitle>
            <div>
              <div>
                Icon
                <span class="fw-5">Sax</span>
                is drawn on a pixel-based
              </div>
              <div>
                grid of
                <span class="fw-5">24px X 24px</span>
                and scaled-up
              </div>
              <div>linearly to different sizes.</div>
            </div>
          </template>
        </main-card>
      </div>
    </div>
    <div class="row my-16 mb-9 justify-center">
      <div class="col-12 col-md-10 col-lg-10 col-xl-8">
        <main-card reverse image="twoTone-grid" color="primary">
          <template #title>
            <div>
              <div class="d-flex align-center">
                <span
                  :class="`text--grey-${
                    darkMode ? 'lighten-9' : 'darken-9'
                  }-gradient-left fw-4`"
                >
                  6 styles
                </span>
                <a-button
                  mode="filled"
                  color="primary"
                  rounded="4"
                  class="ml-6"
                  padding="7px 10px"
                >
                  Differents
                </a-button>
              </div>
              <div>
                <span
                  :class="`fs-6 fw-1 text--grey-${
                    darkMode ? 'lighten-9' : 'darken-9'
                  }-gradient-left`"
                >
                  For better choice
                </span>
              </div>
            </div>
          </template>
          <template #subtitle>
            <div class="fs-3 mb-15">
              You can easily choose the style of icons to fit the design
            </div>

            <div
              :class="`a-image-${darkMode ? 'dark' : 'light'}-sixStyles`"
              class="flex-grow-1"
            ></div>
          </template>
        </main-card>
      </div>
    </div>
    <div class="row my-16 mb-9 justify-center">
      <div class="col-12 col-md-10 col-lg-10 col-xl-8">
        <div class="rounded-8 orange-lighten-1-gradient-top-right">
          <main-card
            class="rounded-8 bloom-1-grey-darken-5"
            :class="
              darkMode
                ? ' pink-glassy-8-gradient-bottom-left'
                : 'primary-darken-1-gradient-bottom-left primary-lighten-4'
            "
            image="global-platform"
            color="primary"
          >
            <template #title>
              <div class="pa-16 fw-4 text--grey-lighten-10-gradient-left">
                <div>
                  Global Platforms
                </div>
                <div>
                  <span class="fs-5 fw-2">
                    Fully-organized layers
                  </span>
                </div>
              </div>
            </template>
            <template #subtitle>
              <span class="pa-12 fw-2 fs-2 text--grey-lighten-10">
                Available for Figma, Adobe XD and Sketch
              </span>
            </template>
          </main-card>
        </div>
      </div>
    </div>
    <div class="row my-16 mb-9 justify-center">
      <div class="col-12 col-md-10 col-lg-10 col-xl-8">
        <main-card reverse image="license-illustration" color="primary">
          <template #title>
            <div class="fw-3 my-16">
              License
            </div>
          </template>
          <template #subtitle>
            <div class="fs-3 fw-1">
              <div class="mb-4">
                Iconsax is the official icon library of the
                <span class="fw-5">Vuesax Framework.</span>
              </div>
              <div>
                These icons can be used for personal and commercial use
              </div>
              for
              <span class="fw-5">free.</span>

              <div class="mt-4">
                But they cannot be used to create templates or Ui Kits without
                permission, if desired to use the Iconsax icon pack for these
                purposes.
              </div>
            </div>
          </template>
        </main-card>
      </div>
    </div>
    <div class="row my-16 mb-9 justify-center">
      <div class="col-12 col-md-10 col-lg-10 col-xl-8">
        <main-card
          reverse
          image-class="my-n16 ml-n4 d-none d-md-block w-100 "
          :class="`rounded-4 overflow-hidden ${
            darkMode
              ? ' grey-darken-8-gradient-top-left primary-darken-9'
              : ' primary-darken-7-gradient-top-left'
          }  bloom-1-grey-darken-5`"
          image="12000"
          color="primary"
        >
          <template #title>
            <div class="mt-20 px-4">
              <div class="fs-9 fw-4">
                <span
                  :class="
                    darkMode
                      ? 'text--primary-glassy-2-gradient-left orange'
                      : 'text--grey-lighten-10'
                  "
                >
                  +12000
                </span>
              </div>
              <div>
                <span
                  class="px-4 fs-6 fw-1 text--grey-lighten-10-gradient-left"
                >
                  Awesome Icons
                </span>
              </div>
            </div>
          </template>
          <template #subtitle>
            <a-button
              class="mt-4"
              disabled
              rounded="6"
              padding="40px 20px"
              color="grey"
              mode="default"
            >
              <div class="flex-grow-1 d-flex justify-center align-center">
                <div class="border-right-grey pr-15">
                  <div class="fs-4 fw-4 text-start">2000</div>
                  <div class="my-5 fs-1 fw-2">Perfect icons</div>
                </div>
              </div>
              <div class="flex-grow-1 d-flex justify-center align-center">
                <div class="border-right-grey pr-15">
                  <div class="fs-4 fw-4 text-start">6</div>
                  <div class="my-5 fs-1 fw-2">Different styles</div>
                </div>
              </div>
              <div class="flex-grow-1 d-flex justify-center align-center">
                <div>
                  <div class="fs-4 fw-4 text-start">58</div>
                  <div class="my-5 fs-1 fw-2">Categories</div>
                </div>
              </div>
            </a-button>
            <div class="d-flex w-100 justify-end align-center">
              <a href="https://iconsax.io/" target="_blank">
                <a-button
                  padding="13px 20px"
                  class="pa-2 px-6 mt-n20 mr-20"
                  rounded="9"
                  mode="filled"
                  color="primary"
                >
                  <a-icon
                    size="24px"
                    color="grey-lighten-5"
                    class="mr-2"
                    icon-name="box"
                    icon-style="bold"
                  ></a-icon>
                  <span class="text-decoration-none">Get icons v2.0</span>
                </a-button>
              </a>
            </div>
          </template>
        </main-card>
      </div>
    </div>
  </div>
</template>
<script setup>
const darkMode = useState('darkMode')
const iconQuery = ref({
  currentCategory: '',
  currentIconMode: 'linear',
  currentQuery: '',
})
</script>
<script>
export default {
  name: 'index',
  methods: {},
}
</script>
<style lang="scss">
.floating-icon-box {
  animation: pulse infinite 1s alternate-reverse ease-out;
}

.floating-icon-left-1 {
  position: absolute;
  left: 5%;
  bottom: 50%;
  height: 100px !important;
  width: 100px !important;
  transform-style: preserve-3d;
  transform: skew(10deg, 6deg) scale(1.2);
  z-index: 10;
}
.floating-icon-left-2 {
  position: absolute;
  left: 12%;
  bottom: 40%;
  height: 100px !important;
  width: 100px !important;
  transform-style: preserve-3d;
  transform: skew(10deg, 6deg) scale(1.1);
  z-index: 10;
}
.floating-icon-left-3 {
  position: absolute;
  left: 0%;
  bottom: 33%;
  height: 100px !important;
  width: 100px !important;
  transform-style: preserve-3d;
  transform: skew(10deg, 6deg) scale(1.7);
  z-index: 9;
}

.floating-icon-right-1 {
  position: absolute;
  right: 5%;
  bottom: 50%;
  height: 100px !important;
  width: 100px !important;
  transform-style: preserve-3d;
  transform: skew(-10deg, -6deg) scale(1.2);
  z-index: 10;
}
.floating-icon-right-2 {
  position: absolute;
  right: 11%;
  bottom: 35%;
  height: 100px !important;

  width: 100px !important;
  transform-style: preserve-3d;
  transform-origin: center center;
  transform: skew(-10deg, -6deg) scale(1.1);
  z-index: 10;
}
.floating-icon-right-3 {
  position: absolute;
  right: 0;
  bottom: 33%;
  height: 100px !important;
  width: 100px !important;
  transform-style: preserve-3d;
  transform: skew(-10deg, -6deg) scale(1.7);
  z-index: 9;
}
</style>
