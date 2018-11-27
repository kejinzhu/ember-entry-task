import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('index',{path:'/'});
  this.route('event',{path:'/event'});
  this.route('details',{path:'/event/:event_id/'},function(){
    this.route('index',{path:'/'});
    this.route('participants',{path:'/participants'});
    this.route('comments',{path:'/comments'});
  });
  this.route('me', {path:'/user'}, function() {
    this.route('likes',{path:'?type=liked'});
    this.route('going',{path:'?type=going'});
    this.route('past',{path:'type=past'});
  });
});

export default Router;
