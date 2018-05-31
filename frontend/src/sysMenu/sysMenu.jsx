import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { init } from './sysMenuActions'

import List from './sysMenuList'

class SysMenu extends Component {

    componentWillMount() {
        this.props.init()
    }

    render() {
        return (
            <div> 
                <List />
            </div> 
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(null, mapDispatchToProps)(SysMenu)
