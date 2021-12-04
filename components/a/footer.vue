<template>
  <footer
    class="py-2 mt-16 row"
    :class="darkMode ? 'text--grey-lighten-9' : ' text--grey-darken-5'"
  >
    <div class="col-12 col-sm-4 d-flex justify-center align-center">
      <a-icon
        :class="`rounded-circle pa-1`"
        :color="darkMode ? 'grey-lighten-10' : 'grey-darken-5'"
        icon-name="iconsax-logo"
        size="100px"
      ></a-icon>
      <div class="d-flex flex-column">
        <div
          class="fs-5 fw-2 mb-5"
          :class="darkMode ? 'text--grey-lighten-5' : 'text--grey-darken-5'"
        >
          Icon
          <span class="fw-5 ml-n2">Sax</span>
        </div>
        <div class="d-flex justify-space-between">
          <a-icon
            size="25px"
            icon-name="behance"
            :color="darkMode ? 'grey-lighten-10' : 'grey-darken-5'"
          ></a-icon>
          <a-icon
            size="25px"
            icon-name="dribble"
            :color="darkMode ? 'grey-lighten-10' : 'grey-darken-5'"
          ></a-icon>
          <a-icon
            size="25px"
            icon-style="linear"
            icon-name="instagram"
            :color="darkMode ? 'grey-lighten-10' : 'grey-darken-5'"
          ></a-icon>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-md-4 col-lg-2 d-flex flex-column">
      <div class="fw-5 fs-3 mb-6">VueSax</div>
      <div class="mb-4">
        <a
          class="text--grey-lighten-3 text-decoration-none"
          href="https://vuesax.com/docs/guide/#whats-is-vuesax"
          target="_blank"
        >
          What is VueSax?
        </a>
      </div>
      <div class="mb-4">
        <a
          class="text--grey-lighten-3 text-decoration-none"
          href="https://vuesax.com/docs/guide/#why-vuesax"
          target="_blank"
        >
          Why VueSax?
        </a>
      </div>
      <div class="mb-4">
        <a
          class="text--grey-lighten-3 text-decoration-none"
          href="https://github.com/lusaxweb/vuesax-next/releases"
          target="_blank"
        >
          What's new in V4?
        </a>
      </div>
      <div class="mb-4">
        <a
          class="text--grey-lighten-3 text-decoration-none"
          href="https://github.com/lusaxweb/vuesax-next/issues"
          target="_blank"
        >
          FAQ
        </a>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-md-4 col-lg-2 d-flex flex-column">
      <div class="fw-5 fs-3 mb-6">Resources</div>
      <div class="mb-4">
        <a
          class="text--grey-lighten-3 text-decoration-none"
          href="https://vuesax.com/docs/"
          target="_blank"
        >
          Documentation
        </a>
      </div>
      <div class="mb-4">
        <a
          class="text--grey-lighten-3 text-decoration-none"
          href="https://github.com/lusaxweb/vuesax-next"
          target="_blank"
        >
          Github
        </a>
      </div>
      <div class="mb-4">
        <a
          class="text--grey-lighten-3 text-decoration-none"
          href="https://vuesax.com/license/"
          target="_blank"
        >
          Privacy policy
        </a>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-md-4 col-lg-2 d-flex flex-column">
      <div class="fw-5 fs-3 mb-6">Help</div>
      <div class="mb-4">
        <a
          class="text--grey-lighten-3 text-decoration-none"
          href="https://github.com/lusaxweb/vuesax-next/issues"
          target="_blank"
        >
          Github Issues
        </a>
      </div>
      <div class="mb-4">
        <a
          class="text--grey-lighten-3 text-decoration-none"
          href="https://github.com/lusaxweb/vuesax-next/issues"
          target="_blank"
        >
          FAQ
        </a>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-md-4 col-lg-2 d-flex flex-column">
      <div class="fw-5 fs-3 mb-6">Community</div>
      <div class="mb-4">
        <a
          class="text--grey-lighten-3 text-decoration-none"
          href="https://discord.com/invite/6AZNXEa"
          target="_blank"
        >
          Discord
        </a>
      </div>
      <div class="mb-4">
        <a
          class="text--grey-lighten-3 text-decoration-none"
          href="https://github.com/lusaxweb/vuesax-next"
          target="_blank"
        >
          Github
        </a>
      </div>
    </div>
  </footer>
</template>
<script setup>
const darkMode = useState('darkMode')
</script>
