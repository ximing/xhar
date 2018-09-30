/**
 * Created by yeanzhi on 2018/9/30.
 */
'use strict';
import React, { Component } from 'react';
import { Collapse } from 'antd';

const Panel = Collapse.Panel;

export default class extends Component {
    render() {
        return (
            <div className="headers-preview">
                <Collapse bordered={false} defaultActiveKey={['1']}>
                    <Panel header="General" key="1">
                        fdsafsdfsdafsa
                    </Panel>
                    <Panel header="Response Headers" key="2">
                        fdsafsdfsdafsa
                    </Panel>
                    <Panel header="Request Headers" key="3">
                        fdsafsdfsdafsa
                    </Panel>
                </Collapse>
            </div>
        );
    }
}
