/**
 * Created by yeanzhi on 2018/9/30.
 */
'use strict';
import React, { Component } from 'react';
import classnames from 'classnames';
import { Icon } from 'antd';

import JSONPreview from './jsonPreview';
import CodePreview from './codePreview';
import HeadersPreview from './headersPreview';

export default class extends Component {
    state = {
        selected: 'headers'
    };

    getHeaderClassName = (key) => {
        return classnames({
            'xhar-detail-header-item': true,
            active: key === this.state.selected
        });
    };

    render() {
        return (
            <div className="xhar-detail">
                <div className="xhar-detail-inner">
                    <div className="xhar-detail-header">
                        <Icon type="close" theme="outlined" onClick={this.props.onClose} />
                        <div
                            className={this.getHeaderClassName('headers')}
                            onClick={() => {
                                this.setState({
                                    selected: 'headers'
                                });
                            }}
                        >
                            headers
                        </div>
                        <div
                            className={this.getHeaderClassName('preview')}
                            onClick={() => {
                                this.setState({
                                    selected: 'preview'
                                });
                            }}
                        >
                            Preview
                        </div>
                        <div
                            className={this.getHeaderClassName('response')}
                            onClick={() => {
                                this.setState({
                                    selected: 'response'
                                });
                            }}
                        >
                            Response
                        </div>
                    </div>
                    <div className="xhar-detail-body">
                        {do {
                            if (this.state.selected === 'headers') {
                                <HeadersPreview />;
                            } else if (this.state.selected === 'preview') {
                                <JSONPreview />;
                            } else {
                                <CodePreview />;
                            }
                        }}
                    </div>
                </div>
            </div>
        );
    }
}
