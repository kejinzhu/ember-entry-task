import Component from '@ember/component';

export default Component.extend({
  click(event){
    this.get('onClick')();
  }
});
