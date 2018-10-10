/**
 * Created by ximing on 2018/8/3.
 */
import '../styles/index.scss';
import 'react-virtualized/styles.css'; // only needs to be imported once
import React, { Component } from 'react';
import Measure from 'react-measure';
import { Column, Table } from 'react-virtualized';
import rowRender from './rowRender';
import Detail from './detail';

/*
* http://www.softwareishard.com/blog/har-12-spec/
* */
export default class Panel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dimensions: {
                width: -1,
                height: -1
            },
            columnWidth: {
                name: 6,
                method: 1,
                status: 1,
                scheme: 2,
                type: 2
            },
            visible: false,
            detail: {},
            pages: props.har.log.pages
        };
    }


    onClose = () => {
        this.setState({ visible: false });
    };

    getRenderData() {
        return this.props.har.log.entries.map((item) => ({
            name: item.request.url,
            method: item.request.method,
            type: item.response.content?item.response.content.mimeType:'text/html',
            status: item.response.status,
            scheme: 'http',
            ...item
        }));
    }

    onRowClick = (event) => {
        console.log(JSON.stringify(event.rowData));
        this.setState({
            visible: true,
            detail: event.rowData
        });
    };

    render() {
        const { width, height } = this.state.dimensions;
        const renderData = this.getRenderData();
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
                            rowCount={renderData.length}
                            onRowClick={this.onRowClick}
                            rowGetter={({ index }) => renderData[index]}
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
