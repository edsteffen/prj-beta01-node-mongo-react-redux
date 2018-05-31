import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList } from './sysMenuActions'

class SysMenuList extends Component {

    componentWillMount() {
        this.props.getList()
    }

    renderRows() {
        const list = this.props.list || []
        return list.map(mnu => (
            <il key={mnu._id}>
                {mnu.description}   
            </il>
        ))
    }

    render() {
        return (
            <div>
                <ul>
                    {this.renderRows()}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({list: state.sysMenu.list})
const mapDispatchToProps = dispatch => bindActionCreators({getList}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(SysMenuList)