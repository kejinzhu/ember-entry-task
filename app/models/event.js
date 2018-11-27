import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  location:DS.attr('string'),
  begin_time:DS.attr(),
  end_time:DS.attr(),
  creator:DS.attr(),
  create_time:DS.attr(),
  update_time:DS.attr(),
  channel:DS.attr(),
  images:DS.attr(),
  goings_count:DS.attr(),
  likes_count:DS.attr()
});
