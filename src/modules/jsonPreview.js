/**
 * Created by ximing on 2018/9/30.
 */
'use strict';
import React, { Component } from 'react';
// import JSONEditor from 'jsoneditor';
// import 'jsoneditor/dist/jsoneditor.css';
import { Inspector } from 'react-inspector';
import chromeLight from 'react-inspector/lib/styles/themes/chromeLight';
const json = {
    Array: [1, 2, 3],
    Boolean: true,
    Null: null,
    Number: 123,
    Object: { a: 'b', c: 'd' },
    String: 'Hello World'
};
const theme = {
    ...chromeLight,
    ...{ TREENODE_PADDING_LEFT: 20, BASE_FONT_SIZE: '14px', TREENODE_FONT_SIZE: '14px' }
};
export default class extends Component {
    componentDidMount() {
        // const container = document.getElementById('xharJSONPreview');
        // const options = {
        //     mode: 'tree'
        // };
        // this.jsoneditor = new JSONEditor(container, options);
        //
        // const json = {
        //     Array: [1, 2, 3],
        //     Boolean: true,
        //     Null: null,
        //     Number: 123,
        //     Object: { a: 'b', c: 'd' },
        //     String: 'Hello World'
        // };
        // this.jsoneditor.set(json);
    }

    componentWillUnmount() {
        // if (this.jsoneditor) {
        //     this.jsoneditor.destroy();
        // }
    }

    // componentWillUpdate(nextProps) {
    //     this.jsoneditor.update(nextProps.json);
    // }

    render() {
        return (
            <Inspector
                theme={theme}
                expandLevel={5}
                data={this.props.json || json}
                id="xharJSONPreview"
            />
        );
    }
}
