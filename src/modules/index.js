/**
 * Created by ximing on 2018/8/3.
 */
import '../styles/index.scss';
import 'react-virtualized/styles.css'; // only needs to be imported once

import React, { Component } from 'react';
import Measure from 'react-measure';
import { Column, Table } from 'react-virtualized';
import Wrap from '../components/wrap';
import rowRender from './rowRender';
import Detail from './detail';

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
            visible: true,
            detail: {
                name: 'http://127.0.0.1:9123/app.js',
                method: 'GET',
                type: 'application/javascript',
                status: 200,
                scheme: 'http',
                startedDateTime: '2018-09-30T08:59:50.393Z',
                time: 306.4506589669618,
                request: {
                    method: 'GET',
                    url: 'http://127.0.0.1:9123/app.js',
                    httpVersion: 'http/1.1',
                    headers: [
                        { name: 'Referer', value: 'http://0.0.0.0:9123/' },
                        {
                            name: 'User-Agent',
                            value:
                                'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36'
                        }
                    ],
                    queryString: [],
                    cookies: [],
                    headersSize: -1,
                    bodySize: 0
                },
                response: {
                    status: 200,
                    statusText: 'OK',
                    httpVersion: 'http/1.1',
                    headers: [
                        { name: 'Date', value: 'Sun, 30 Sep 2018 08:59:50 GMT' },
                        { name: 'Content-Encoding', value: 'gzip' },
                        { name: 'ETag', value: 'W/"4a245d-S7XcoNrxtBu09Jozji1ZyECOf1k"' },
                        { name: 'X-Powered-By', value: 'Express' },
                        { name: 'Vary', value: 'Accept-Encoding' },
                        {
                            name: 'Access-Control-Allow-Methods',
                            value: 'GET, POST, PUT, DELETE, PATCH, OPTIONS'
                        },
                        { name: 'Content-Type', value: 'application/javascript; charset=UTF-8' },
                        { name: 'Access-Control-Allow-Origin', value: '*' },
                        { name: 'Transfer-Encoding', value: 'chunked' },
                        { name: 'Connection', value: 'keep-alive' },
                        { name: 'Accept-Ranges', value: 'bytes' },
                        {
                            name: 'Access-Control-Allow-Headers',
                            value: 'X-Requested-With, content-type, Authorization'
                        }
                    ],
                    cookies: [],
                    content: { size: 4858973, mimeType: 'application/javascript' },
                    redirectURL: '',
                    headersSize: -1,
                    bodySize: -1,
                    _transferSize: 1057994
                },
                cache: {},
                timings: {
                    blocked: 13.966659000001382,
                    dns: -1,
                    ssl: -1,
                    connect: -1,
                    send: 0.0730000000000004,
                    wait: 40.97699999081716,
                    receive: 251.43399997614324,
                    _blocked_queueing: 1.6590000013820827,
                    _blocked_proxy: 2.612
                },
                serverIPAddress: '127.0.0.1',
                connection: '520805',
                pageref: 'page_153'
            },
            pages: props.har.log.pages,
            entries: props.har.log.entries
        };
    }

    onClose = () => {
        this.setState({ visible: false });
    };

    getRenderData() {
        return this.state.entries.map((item) => ({
            name: item.request.url,
            method: item.request.method,
            type: item.response.content.mimeType,
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
            <Wrap>
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
                                    width={(width * this.state.columnWidth.name) / 12}
                                />
                                <Column
                                    className="xhar-col"
                                    label="Method"
                                    dataKey="method"
                                    width={(width * this.state.columnWidth.method) / 12}
                                />
                                <Column
                                    className="xhar-col"
                                    label="Status"
                                    dataKey="status"
                                    width={(width * this.state.columnWidth.status) / 12}
                                />
                                <Column
                                    className="xhar-col"
                                    label="Scheme"
                                    dataKey="scheme"
                                    width={(width * this.state.columnWidth.scheme) / 12}
                                />
                                <Column
                                    className="xhar-col"
                                    label="Type"
                                    dataKey="type"
                                    width={(width * this.state.columnWidth.type) / 12}
                                />
                            </Table>
                            {this.state.visible && (
                                <Detail onClose={this.onClose} detail={this.state.detail} />
                            )}
                        </div>
                    )}
                </Measure>
            </Wrap>
        );
    }
}
