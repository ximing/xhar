/**
 * Created by yeanzhi on 2018/9/30.
 */
'use strict';
import React, { Component } from 'react';
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/xml/xml';
// import 'codemirror/theme/base16-light.css';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/gfm/gfm';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import 'codemirror/mode/htmlmixed/htmlmixed';
import Measure from 'react-measure';

export default class extends Component {
    state = {
        dimensions: {
            width: -1,
            height: 100
        }
    };

    componentDidMount() {
        this.editor = CodeMirror.fromTextArea(document.getElementById('xharCodeEditor'), {
            mode: 'gfm',
            lineNumbers: true,
            matchBrackets: true,
            lineWrapping: true,
            // theme: 'base16-light',
            height: this.state.height - 5
        });
    }

    componentWillUnmount() {
        if (this.editor) {
            this.editor.toTextArea();
        }
    }

    render() {
        return (
            <Measure
                bounds
                onResize={(contentRect) => {
                    this.setState({ dimensions: contentRect.bounds });
                    if (this.editor) {
                        this.editor.setSize(
                            contentRect.bounds.width,
                            contentRect.bounds.height - 5
                        );
                    }
                }}
            >
                {({ measureRef }) => (
                    <div ref={measureRef} className={'xharCodeEditor'}>
                        <textarea id="xharCodeEditor" />
                    </div>
                )}
            </Measure>
        );
    }
}
