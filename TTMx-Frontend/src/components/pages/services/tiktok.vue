<script>
import Pageheader from '../../../shared/components/pageheader/pageheader.vue';
export default {
  data() {
    return {
      dataToPass: {
        title: "Services",
        currentpage: "TikTok",
        activepage: "TikTok Services"
      }
    };
  },
  components: { Pageheader }
};
</script>
<template>
  <Pageheader :propData="dataToPass" />
  <div class="row">
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">TikTok Services</div>
        </div>
        <div class="card-body">
          <p>TikTok followers, likes, views available here</p>
        </div>
      </div>
    </div>
  </div>
</template>
