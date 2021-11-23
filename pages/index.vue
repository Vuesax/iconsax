<template>
  <div>
    <div class="p-relative mt-8">
      <div class="d-none d-lg-block floating-icon-box">
        <main-icon-box
          class="floating-icon-left-1"
          :color="iconQuery.currentColor"
          active="true"
          :icon-style="iconQuery.currentIconMode"
          icon-name="trash"
        />
        <main-icon-box
          class="floating-icon-left-2"
          :color="iconQuery.currentColor"
          active="true"
          :icon-style="iconQuery.currentIconMode"
          icon-name="bag-2"
        />
        <main-icon-box
          class="floating-icon-left-3"
          :color="iconQuery.currentColor"
          active="true"
          :icon-style="iconQuery.currentIconMode"
          icon-name="home"
        />

        <main-icon-box
          class="floating-icon-right-1"
          :color="iconQuery.currentColor"
          active="true"
          :icon-style="iconQuery.currentIconMode"
          icon-name="scan"
        />
        <main-icon-box
          class="floating-icon-right-2"
          :color="iconQuery.currentColor"
          active="true"
          :icon-style="iconQuery.currentIconMode"
          icon-name="briefcase"
        />
        <main-icon-box
          class="floating-icon-right-3"
          :color="iconQuery.currentColor"
          active="true"
          :icon-style="iconQuery.currentIconMode"
          icon-name="user-edit"
        />
      </div>

      <main-headline v-model="iconQuery" :color="iconQuery.currentColor" />
    </div>
    <div class="row justify-center">
      <div class="col-12 col-md-10 col-lg-10 col-xl-8">
        <main-icon-list
          :category="iconQuery.currentCategory"
          :icon-style="iconQuery.currentIconMode"
          :color="iconQuery.currentColor"
          :query="iconQuery.currentQuery"
        ></main-icon-list>
      </div>
    </div>
    <div class="row mt-12 mb-9 justify-center">
      <div class="col-12 col-md-10 col-lg-10 col-xl-8">
        <main-card image="linear-grid" :color="iconQuery.currentColor">
          <template #title>
            <div>
              <div>
                <span class="text-h5 font-weight-light">All Icons</span>
              </div>
              <div>Perfectly Balanced,</div>
              <div>
                <span class="text--yellow font-weight-bold">24px</span>
                Grid-based
              </div>
            </div>
          </template>
          <template #subtitle>
            <div>
              <div>
                Icon
                <span class="font-weight-bold">Sax</span>
                is drawn on a pixel-based
              </div>
              <div>
                grid of
                <span class="font-weight-bold">24px X 24px</span>
                and scaled-up
              </div>
              <div>linearly to different sizes.</div>
            </div>
          </template>
        </main-card>
      </div>
    </div>
    <div class="row mt-12 mb-9 justify-center">
      <div class="col-12 col-md-10 col-lg-10 col-xl-8">
        <main-card reverse image="twoTone-grid" :color="iconQuery.currentColor">
          <template #title>
            <div>
              <div>6 different styles</div>
              <div>
                <span class="text-h4 font-weight-thin">
                  For making the best choice
                </span>
              </div>
            </div>
          </template>
          <template #subtitle>
            <div>
              You can choose the best fit
              <br />
              for your
              <span class="font-weight-bold">unique website</span>
            </div>
          </template>
        </main-card>
      </div>
    </div>
    <div class="row mt-12 mb-9 justify-center">
      <div class="col-12 col-md-10 col-lg-10 col-xl-8">
        <main-card
          class="rounded-4 orange-gradient-bottom-right bloom-9-grey-glassy-7"
          image="global-platform"
          :color="iconQuery.currentColor"
        >
          <template #title>
            <div class="px-4">
              <div>Global platforms</div>
              <div>
                <span class="text-h4 font-weight-thin">
                  Fully-organized layers
                </span>
              </div>
            </div>
          </template>
          <template #subtitle>
            <span class="font-weight-thin">
              Available for Figma, Adobe XD and Sketch
            </span>
          </template>
        </main-card>
      </div>
    </div>
    <div class="row mt-12 mb-9 justify-center">
      <div class="col-12 col-md-10 col-lg-10 col-xl-8">
        <main-card
          reverse
          image="license-illustration"
          :color="iconQuery.currentColor"
        >
          <template #title>
            <div class="w-100">
              License
            </div>
          </template>
          <template #subtitle>
            <div class="text-h6 font-weight-thin">
              <div>
                Icon
                <span class="font-weight-bold">Sax</span>
                is the official icon library of the
                <span class="font-weight-bold">Vuesax Framework</span>
                ,
              </div>
              <div>
                these icons can be used for
                <span class="font-weight-bold">
                  personal and commercial use
                </span>
              </div>
              <div class="text--green">for free.</div>
              <div>But they cannot be used to:</div>
              <div>- Sell and distribute under another name.</div>
              <div>- Create templates or UI kits whitout permission.</div>
            </div>
          </template>
        </main-card>
      </div>
    </div>
    <div class="row mt-12 mb-9 justify-center">
      <div class="col-12 col-md-10 col-lg-10 col-xl-8">
        <main-card
          reverse
          image-class="my-n16 ml-n4 d-none d-md-block w-100 "
          :class="`rounded-4 overflow-hidden ${iconQuery.currentColor}-gradient-top-left  bloom-9-grey-glassy-7`"
          image="12000"
          :color="iconQuery.currentColor"
        >
          <template #title>
            <div class="px-4">
              <div class="text-h1 font-weight-xbold text--purple-darken-2">
                +12000
              </div>
              <div>
                <span class="text-h4 font-weight-thin">
                  Fully-organized layers
                </span>
              </div>
            </div>
          </template>
          <template #subtitle>
            <div
              :class="`row w-100 rounded-3 bloom-5-grey-glassy-6 pa-2 ${iconQuery.currentColor}-darken-2 text--${iconQuery.currentColor}-lighten-4 `"
            >
              <div class="col-4 d-flex justify-center">
                <div>
                  <div class="font-weight-bold">2000</div>
                  <div class="font-weight-light">Perfect icons</div>
                </div>
              </div>
              <div class="col-4 d-flex justify-center">
                <div>
                  <div class="font-weight-bold">6</div>
                  <div class="font-weight-light">Different styles</div>
                </div>
              </div>
              <div class="col-4 d-flex justify-center">
                <div>
                  <div class="font-weight-bold">58</div>
                  <div class="font-weight-light">Categories</div>
                </div>
              </div>
            </div>
            <div class="d-flex w-100 mt-16 justify-center align-center">
              <a href="https://iconsax.io/" target="_blank">
                <a-button
                  class="pa-2 px-6"
                  rounded="3"
                  mode="filled"
                  color="blue"
                >
                  <a-icon
                    size="24px"
                    color="grey-lighten-5"
                    class="mr-2"
                    icon-name="box"
                    icon-style="bold"
                  ></a-icon>
                  <span class="text-decoration-none">Get icons v1.0</span>
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
const iconQuery = ref({
  currentCategory: '',
  currentIconMode: 'linear',
  currentColor: 'purple',
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
  left: 6%;
  bottom: 40%;
  height: 100px !important;
  width: 100px !important;
  transform-style: preserve-3d;
  transform: rotateX(24deg) rotateY(12deg) rotateZ(-4deg);
  z-index: 10;
}
.floating-icon-left-2 {
  position: absolute;
  left: 10%;
  bottom: 50%;
  height: 100px !important;
  width: 100px !important;
  transform-style: preserve-3d;
  transform: rotateX(24deg) rotateY(12deg) rotateZ(-4deg) scale(1.1);
  z-index: 10;
}
.floating-icon-left-3 {
  position: absolute;
  left: 15%;
  bottom: 33%;
  height: 100px !important;
  width: 100px !important;
  transform-style: preserve-3d;
  transform: rotateX(24deg) rotateY(12deg) rotateZ(-4deg) scale(1.3);
  z-index: 10;
}

.floating-icon-right-1 {
  position: absolute;
  right: 6%;
  bottom: 40%;
  height: 100px !important;
  width: 100px !important;
  transform-style: preserve-3d;
  transform: rotateX(-24deg) rotateY(12deg) rotateZ(4deg);
  z-index: 10;
}
.floating-icon-right-2 {
  position: absolute;
  right: 10%;
  bottom: 50%;
  height: 100px !important;
  width: 100px !important;
  transform-style: preserve-3d;
  transform: rotateX(-24deg) rotateY(12deg) rotateZ(4deg) scale(1.1);
  z-index: 10;
}
.floating-icon-right-3 {
  position: absolute;
  right: 15%;
  bottom: 33%;
  height: 100px !important;
  width: 100px !important;
  transform-style: preserve-3d;
  transform: rotateX(-24deg) rotateY(12deg) rotateZ(4deg) scale(1.3);
  z-index: 10;
}
</style>
