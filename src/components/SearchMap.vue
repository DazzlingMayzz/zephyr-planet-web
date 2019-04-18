<template>
    <div class="amap-page-container">
      <div :style="{width:'100%',height:'800px'}">
        <el-amap-search-box class="search-box" :search-option="searchOption" :on-search-result="onSearchResult"></el-amap-search-box>
        <el-amap vid="amapDemo" :center="center" :zoom="12" class="amap-demo">
        <el-amap-marker v-for="marker in markers" :position="marker" :key="marker"></el-amap-marker>
      </el-amap>
      </div>
    </div>
</template>

<style>
  .amap-demo {
    height: 800px;
    overflow: hidden;
    top: 0px;
  }

  .search-box {
    position: absolute;
    top: 0px;
    left: 20px;
  }

  .amap-page-container {
    position: relative;
  }
</style>
<<script>
  export default {
    data(){
      const self = this;
      return {
        center: [121.59996, 31.197646],
        lng: 0,
        lat: 0,
        markers:[],
        loaded: false,
        plugin: [{
          enableHighAccuracy: true,//是否使用高精度定位，默认:true
          timeout: 100,            //超过10秒后停止定位，默认：无穷大
          maximumAge: 0,           //定位结果缓存0毫秒，默认：0
          convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
          showButton: true,        //显示定位按钮，默认：true
          buttonPosition: 'RB',    //定位按钮停靠位置，默认：'LB'，左下角
          showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
          showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
          panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
          zoomToAccuracy:true,     //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：f
          extensions:'all',
          pName: 'Geolocation',
          events: {
            init(o) {
              // o 是高德地图定位插件实例
              o.getCurrentPosition((status, result) => {
                console.log(result)
                if (result && result.position) {
                  self.lng = result.position.lng;
                  self.lat = result.position.lat;
                  self.center = [self.lng, self.lat];
                  self.loaded = true;
                  self.$nextTick();
                }
              });
            }
          }
        }]
      }
    },
    methods: {
      addMarker: function() {
        let lng = 121.5 + Math.round(Math.random() * 1000) / 10000;
        let lat = 31.197646 + Math.round(Math.random() * 500) / 10000;
        this.markers.push([lng, lat]);
      },
      onSearchResult(pois) {
        this.markers = [];
        let latSum = 0;
        let lngSum = 0;
        if (pois.length > 0) {
          pois.forEach(poi => {
            let {lng, lat} = poi;
            lngSum += lng;
            latSum += lat;
            this.markers.push([poi.lng, poi.lat]);
          });
          let center = {
            lng: lngSum / pois.length,
            lat: latSum / pois.length
          };
          this.center = [center.lng, center.lat];
        }
      }
    }
}
</script>
      
