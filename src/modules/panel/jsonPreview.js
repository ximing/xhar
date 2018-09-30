/**
 * Created by ximing on 2018/9/30.
 */
'use strict';
import React, { Component } from 'react';
import JSONEditor from 'jsoneditor';
import 'jsoneditor/dist/jsoneditor.css';

export default class extends Component {
    componentDidMount() {
        const container = document.getElementById('xharJSONPreview');
        const options = {
            mode: 'tree'
        };
        this.jsoneditor = new JSONEditor(container, options);

        const json = {
            Array: [1, 2, 3],
            Boolean: true,
            Null: null,
            Number: 123,
            Object: { a: 'b', c: 'd' },
            String: 'Hello World'
        };
        this.jsoneditor.set(json);
    }

    componentWillUnmount() {
        if (this.jsoneditor) {
            this.jsoneditor.destroy();
        }
    }

    // componentWillUpdate(nextProps) {
    //     this.jsoneditor.update(nextProps.json);
    // }

    render() {
        return <div id="xharJSONPreview" />;
    }
}
