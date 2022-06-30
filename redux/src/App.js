import React from 'react'
import { connect } from 'react-redux'
const App = () => {
  return (
    <div>
      <h1>hello</h1>
    </div>
  )
}
const mapStateToProps =state =>({
  local_variable:state
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
