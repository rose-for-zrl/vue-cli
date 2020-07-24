<script>
import Vue from 'vue';

Vue.directive('highlight', {
  bind(el, binding, vnode) {
      // el.style.backgroundColor = 'green'; 
      // el.style.backgroundColor = binding.value;
      let delay = 0;
      if(binding.modifiers['delayed']){
        delay = 3000;
      }
      setTimeout(() =>{
        if(binding.arg == 'backgroundColor'){
          el.style.backgroundColor = binding.value;
        }else {
          el.style.color = binding.value;
        }
      }, delay);
  }
})
</script>