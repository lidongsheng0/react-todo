import React, { Component } from 'react'
import { connect } from 'react-redux'
import action from '../action'

export const Link = ({children,setFilter,active}) => {
   if(active) {
       return <b onClick={setFilter}>{children}</b>
   } else {
       return <button onClick={setFilter}>{children}</button>
   }
}

const mapStateToProps = (state,ownProps) => ({
    active: state.filter === ownProps.filter
})

const mapDispatchToProps = (dispatch,ownProps) => ({
    setFilter: () => dispatch(action(ownProps.filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(Link)
