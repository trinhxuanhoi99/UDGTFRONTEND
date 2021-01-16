<template>
  <div>
    <Header />
    <div class="contain row">
      <div class="name col-2">
        <div
          id="v-pills-tab"
          class="nav flex-column nav-pills"
          role="tablist"
          aria-orientation="vertical"
        >
          <a
            id="v-pills-phuhieu-tab"
            class="nav-link 1"
            data-toggle="pill"
            [routerLink]="['/register/1']"
            role="tab"
            aria-controls="v-pills-phuhieu"
            aria-selected="true"
            >Đăng Kí Học Bằng Lái Xe</a
          >
          <a
            id="v-pills-gplx-tab"
            class="nav-link 2"
            data-toggle="pill"
            [routerLink]="['/register/2']"
            role="tab"
            aria-controls="v-pills-gplx"
            aria-selected="false"
            >Đăng Kí Lấy Biển Số Xe</a
          >
          <a
            id="v-pills-loivipham-tab"
            class="nav-link 3"
            data-toggle="pill"
            [routerLink]="['/register/3']"
            role="tab"
            aria-controls="v-pills-loivipham"
            aria-selected=""
            >Đăng Kí Sang Tên Xe</a
          >
        </div>
      </div>
      <div class="content col-9">
        <Nuxt />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'RegisterLayout',
};
</script>
