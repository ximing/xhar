/**
 * Created by yeanzhi on 2018/9/30.
 */
'use strict';
import React, { Component } from 'react';
import { Collapse } from 'antd';

const Panel = Collapse.Panel;
/*
{
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
                serverIPAddress: '127.0.0.1',
                connection: '520805',
                pageref: 'page_153'
            },
            pages: props.har.log.pages,
            entries: props.har.log.entries
        }
*/
export default class extends Component {
    renderHeaders(headers = []) {
        return headers.map((item, i) => (
            <div className="xhar-header-item" key={i}>
                <div className="xhar-hil">{item.name}</div>
                <div className="xhar-hir">{item.value}</div>
            </div>
        ));
    }

    render() {
        const { detail } = this.props;
        return (
            <div className="xhar-headers-preview">
                <Collapse bordered={false} defaultActiveKey={['1', '2', '3']}>
                    <Panel header="General" key="1">
                        <div className="xhar-header-item">
                            <div className="xhar-hil">Request URL</div>
                            <div className="xhar-hir">{detail.request.url}</div>
                        </div>
                        <div className="xhar-header-item">
                            <div className="xhar-hil">Request Method</div>
                            <div className="xhar-hir">{detail.request.method}</div>
                        </div>
                        <div className="xhar-header-item">
                            <div className="xhar-hil">Status Code</div>
                            <div className="xhar-hir">{detail.response.status}</div>
                        </div>
                    </Panel>
                    <Panel header="Response Headers" key="2">
                        {this.renderHeaders(detail.request.headers)}
                    </Panel>
                    <Panel header="Request Headers" key="3">
                        {this.renderHeaders(detail.response.headers)}
                    </Panel>
                    {detail.request.postData && detail.request.postData.text && (
                        <Panel header="Request Payload" key="4">
                            {detail.request.postData.text}
                        </Panel>
                    )}
                </Collapse>
            </div>
        );
    }
}
