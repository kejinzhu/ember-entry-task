export default function(){
  this.transition(
    this.fromRoute('route.index'),
    this.toRoute('route.event'),
    this.use('toRight'),
    this.reverse('toLeft'),
  );
}
