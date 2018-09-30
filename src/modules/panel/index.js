/**
 * Created by ximing on 2018/8/3.
 */
import './index.scss';

import React, { Component } from 'react';
import Measure from 'react-measure';
import { Column, Table } from 'react-virtualized';
import 'react-virtualized/styles.css'; // only needs to be imported once
import rowRender from './rowRender';
import Detail from './detail';

export default class Panel extends Component {
    state = {
        dimensions: {
            width: -1,
            height: -1
        },
        columnWidth: {
            name: 4,
            method: 1,
            status: 1,
            scheme: 2,
            size: 2,
            type: 2
        },
        visible: true,
        detail: {}
    };
    list = [
        {
            name: 'app.js',
            method: 'Get',
            status: 'status',
            scheme: 'scheme',
            size: 'size',
            type: 'css'
        },
        {
            name: 'hello.js',
            method: 'Get',
            status: 'status',
            scheme: 'scheme',
            size: 'size',
            type: 'css'
        }
    ];

    onClose = () => {
        this.setState({ visible: false });
    };

    render() {
        const { width, height } = this.state.dimensions;
        return (
            <Measure
                bounds
                onResize={(contentRect) => {
                    this.setState({ dimensions: contentRect.bounds });
                }}
            >
                {({ measureRef }) => (
                    <div ref={measureRef} className={'xhar-panel'}>
                        <Table
                            width={width}
                            height={height}
                            rowRenderer={rowRender}
                            headerHeight={30}
                            rowHeight={30}
                            rowCount={this.list.length}
                            rowGetter={({ index }) => this.list[index]}
                        >
                            <Column
                                className="xhar-col"
                                label="Name"
                                dataKey="name"
                                width={width * this.state.columnWidth.name / 12}
                            />
                            <Column
                                className="xhar-col"
                                label="Method"
                                dataKey="method"
                                width={width * this.state.columnWidth.method / 12}
                            />
                            <Column
                                className="xhar-col"
                                label="Status"
                                dataKey="status"
                                width={width * this.state.columnWidth.status / 12}
                            />
                            <Column
                                className="xhar-col"
                                label="Scheme"
                                dataKey="scheme"
                                width={width * this.state.columnWidth.scheme / 12}
                            />
                            <Column
                                className="xhar-col"
                                label="Type"
                                dataKey="type"
                                width={width * this.state.columnWidth.type / 12}
                            />
                            <Column
                                className="xhar-col"
                                label="Size"
                                dataKey="size"
                                width={width * this.state.columnWidth.size / 12}
                            />
                        </Table>
                        {this.state.visible && (
                            <Detail onClose={this.onClose} detail={this.state.detail} />
                        )}
                    </div>
                )}
            </Measure>
        );
    }
}
