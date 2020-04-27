var store;
function connect(mapStateToProps, mapDispatchToProps){
  return function(Component){
    return class Wrapper extends PureComponent{
      constructor(props) {
        super(props);
        store.subscribe = function(){
          const state = store.getState()
          this.requiredStates = mapStateToProps(state, props)
        }
        if(typeof(mapDispatchToProps) === 'object'){
          const dispatch = store.dispatch;
          this.actions = Object.entries(mapDispatchToProps).reduce((acc, [key, value])=>{
            acc[key] = function(){
              dispatch(value);
            }
          },{})

        }
      }
      render(){
        return < Component {...this.props} {...this.requiredStates} {...this.actions}/>
      }

    }
  }

}
