/**
 * Created by ximing on 2018/8/3.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MainModules from './modules';
// import MainModules from '../dist/xhar';
const har = {
    log: {
        version: '1.2',
        creator: {
            name: 'WebInspector',
            version: '537.36'
        },
        pages: [
            {
                startedDateTime: '2018-09-30T08:59:50.363Z',
                id: 'page_153',
                title: 'http://0.0.0.0:9123/',
                pageTimings: {
                    onContentLoad: 732.5699999928474,
                    onLoad: 1278.9629999897443
                }
            }
        ],
        entries: [
            {
                startedDateTime: '2018-09-30T08:59:50.363Z',
                time: 7.956433044979349,
                request: {
                    method: 'GET',
                    url: 'http://0.0.0.0:9123/',
                    httpVersion: 'HTTP/1.1',
                    headers: [
                        {
                            name: 'Host',
                            value: '0.0.0.0:9123'
                        },
                        {
                            name: 'Connection',
                            value: 'keep-alive'
                        },
                        {
                            name: 'Pragma',
                            value: 'no-cache'
                        },
                        {
                            name: 'Cache-Control',
                            value: 'no-cache'
                        },
                        {
                            name: 'Upgrade-Insecure-Requests',
                            value: '1'
                        },
                        {
                            name: 'User-Agent',
                            value:
                                'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36'
                        },
                        {
                            name: 'Accept',
                            value:
                                'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8'
                        },
                        {
                            name: 'Referer',
                            value: 'http://0.0.0.0:9123/'
                        },
                        {
                            name: 'Accept-Encoding',
                            value: 'gzip, deflate'
                        },
                        {
                            name: 'Accept-Language',
                            value: 'zh-CN,zh;q=0.9,en;q=0.8,zh-TW;q=0.7,ja;q=0.6'
                        }
                    ],
                    queryString: [],
                    cookies: [],
                    headersSize: 489,
                    bodySize: 0
                },
                response: {
                    status: 200,
                    statusText: 'OK',
                    httpVersion: 'HTTP/1.1',
                    headers: [
                        {
                            name: 'X-Powered-By',
                            value: 'Express'
                        },
                        {
                            name: 'Access-Control-Allow-Origin',
                            value: '*'
                        },
                        {
                            name: 'Access-Control-Allow-Methods',
                            value: 'GET, POST, PUT, DELETE, PATCH, OPTIONS'
                        },
                        {
                            name: 'Access-Control-Allow-Headers',
                            value: 'X-Requested-With, content-type, Authorization'
                        },
                        {
                            name: 'Accept-Ranges',
                            value: 'bytes'
                        },
                        {
                            name: 'Content-Type',
                            value: 'text/html; charset=UTF-8'
                        },
                        {
                            name: 'Content-Length',
                            value: '481'
                        },
                        {
                            name: 'ETag',
                            value: 'W/"1e1-1iR40U0zIDJC7usHQUBc2QjZlI8"'
                        },
                        {
                            name: 'Vary',
                            value: 'Accept-Encoding'
                        },
                        {
                            name: 'Date',
                            value: 'Sun, 30 Sep 2018 08:59:50 GMT'
                        },
                        {
                            name: 'Connection',
                            value: 'keep-alive'
                        }
                    ],
                    cookies: [],
                    content: {
                        size: 481,
                        mimeType: 'text/html',
                        compression: 0
                    },
                    redirectURL: '',
                    headersSize: 431,
                    bodySize: 481,
                    _transferSize: 912
                },
                cache: {},
                timings: {
                    blocked: 2.4714330000374467,
                    dns: -1,
                    ssl: -1,
                    connect: -1,
                    send: 0.028000000000000025,
                    wait: 1.289999980315566,
                    receive: 4.167000064626336,
                    _blocked_queueing: 0.4330000374466181,
                    _blocked_proxy: 0.2360000000000002
                },
                serverIPAddress: '0.0.0.0',
                connection: '520819',
                pageref: 'page_153'
            },
            {
                startedDateTime: '2018-09-30T08:59:50.393Z',
                time: 53.60808497981634,
                request: {
                    method: 'GET',
                    url: 'https://s4.meituan.net/xm/cdn/ajax/libs/jquery/1.11.3/jquery.min.js',
                    httpVersion: 'spdy',
                    headers: [
                        {
                            name: 'Referer',
                            value: 'http://0.0.0.0:9123/'
                        },
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
                    statusText: '',
                    httpVersion: 'spdy',
                    headers: [
                        {
                            name: 'date',
                            value: 'Sun, 30 Sep 2018 08:59:50 GMT'
                        },
                        {
                            name: 'via',
                            value:
                                'S.mix-hz-fdi-164, T.169.M, V.mix-hz-fdi-172, T.5.H, M.ctn-js-taz-006'
                        },
                        {
                            name: 'last-modified',
                            value: 'Tue, 18 Oct 2016 03:49:06 GMT'
                        },
                        {
                            name: 'server',
                            value: 'marco/2.6'
                        },
                        {
                            name: 'age',
                            value: '2168436'
                        },
                        {
                            name: 'status',
                            value: '200'
                        },
                        {
                            name: 'etag',
                            value: 'W/"58059bb2-176f8"'
                        },
                        {
                            name: 'vary',
                            value: 'Accept-Encoding'
                        },
                        {
                            name: 'content-type',
                            value: 'application/javascript; charset=UTF-8'
                        },
                        {
                            name: 'access-control-allow-origin',
                            value: '*'
                        },
                        {
                            name: 'cache-control',
                            value: 'max-age=3456000'
                        },
                        {
                            name: 'x-source',
                            value: 'C/200'
                        },
                        {
                            name: 'content-encoding',
                            value: 'br'
                        },
                        {
                            name: 'x-request-id',
                            value:
                                'f3c0438612537f08868532c5d38511c2; 2e24d3fd06a75dd418a86698c8681aa0'
                        },
                        {
                            name: 'expires',
                            value: 'Mon, 15 Oct 2018 06:39:14 GMT'
                        }
                    ],
                    cookies: [],
                    content: {
                        size: 95992,
                        mimeType: 'application/javascript'
                    },
                    redirectURL: '',
                    headersSize: -1,
                    bodySize: -1,
                    _transferSize: 39022
                },
                cache: {},
                timings: {
                    blocked: 7.278084999996238,
                    dns: -1,
                    ssl: -1,
                    connect: -1,
                    send: 1.072,
                    wait: 42.139999986555424,
                    receive: 3.117999993264675,
                    _blocked_queueing: 1.0849999962374568,
                    _blocked_proxy: 0.9779999999999998
                },
                serverIPAddress: '58.222.18.2',
                connection: '520270',
                pageref: 'page_153'
            },
            {
                startedDateTime: '2018-09-30T08:59:50.393Z',
                time: 66.03652902529575,
                request: {
                    method: 'GET',
                    url: 'https://s4.meituan.net/xm/cdn/ajax/libs/lodash.js/4.17.4/lodash.min.js',
                    httpVersion: 'spdy',
                    headers: [
                        {
                            name: 'Referer',
                            value: 'http://0.0.0.0:9123/'
                        },
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
                    statusText: '',
                    httpVersion: 'spdy',
                    headers: [
                        {
                            name: 'date',
                            value: 'Sun, 30 Sep 2018 08:59:50 GMT'
                        },
                        {
                            name: 'via',
                            value: 'T.164.H, V.mix-hz-fdi-163, T.3.H, M.ctn-js-taz-006'
                        },
                        {
                            name: 'last-modified',
                            value: 'Tue, 28 Feb 2017 04:54:33 GMT'
                        },
                        {
                            name: 'server',
                            value: 'marco/2.6'
                        },
                        {
                            name: 'age',
                            value: '953330'
                        },
                        {
                            name: 'status',
                            value: '200'
                        },
                        {
                            name: 'etag',
                            value: 'W/"58b50289-116fb"'
                        },
                        {
                            name: 'vary',
                            value: 'Accept-Encoding'
                        },
                        {
                            name: 'content-type',
                            value: 'application/javascript; charset=UTF-8'
                        },
                        {
                            name: 'access-control-allow-origin',
                            value: '*'
                        },
                        {
                            name: 'cache-control',
                            value: 'max-age=3456000'
                        },
                        {
                            name: 'x-source',
                            value: 'C/200'
                        },
                        {
                            name: 'content-encoding',
                            value: 'br'
                        },
                        {
                            name: 'x-request-id',
                            value:
                                '5a13a0743b3b9adc91a382638ded2542; 6094ad8c93dc372baf3a4a10f5114515'
                        },
                        {
                            name: 'expires',
                            value: 'Mon, 29 Oct 2018 08:11:00 GMT'
                        }
                    ],
                    cookies: [],
                    content: {
                        size: 71419,
                        mimeType: 'application/javascript'
                    },
                    redirectURL: '',
                    headersSize: -1,
                    bodySize: -1,
                    _transferSize: 29469
                },
                cache: {},
                timings: {
                    blocked: 13.075529000001028,
                    dns: -1,
                    ssl: -1,
                    connect: -1,
                    send: 0.12400000000000055,
                    wait: 49.885000015467405,
                    receive: 2.952000009827316,
                    _blocked_queueing: 1.5290000010281801,
                    _blocked_proxy: 1.532
                },
                serverIPAddress: '58.222.18.2',
                connection: '520270',
                pageref: 'page_153'
            },
            {
                startedDateTime: '2018-09-30T08:59:50.393Z',
                time: 306.4506589669618,
                request: {
                    method: 'GET',
                    url: 'http://127.0.0.1:9123/app.js',
                    httpVersion: 'http/1.1',
                    headers: [
                        {
                            name: 'Referer',
                            value: 'http://0.0.0.0:9123/'
                        },
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
                        {
                            name: 'Date',
                            value: 'Sun, 30 Sep 2018 08:59:50 GMT'
                        },
                        {
                            name: 'Content-Encoding',
                            value: 'gzip'
                        },
                        {
                            name: 'ETag',
                            value: 'W/"4a245d-S7XcoNrxtBu09Jozji1ZyECOf1k"'
                        },
                        {
                            name: 'X-Powered-By',
                            value: 'Express'
                        },
                        {
                            name: 'Vary',
                            value: 'Accept-Encoding'
                        },
                        {
                            name: 'Access-Control-Allow-Methods',
                            value: 'GET, POST, PUT, DELETE, PATCH, OPTIONS'
                        },
                        {
                            name: 'Content-Type',
                            value: 'application/javascript; charset=UTF-8'
                        },
                        {
                            name: 'Access-Control-Allow-Origin',
                            value: '*'
                        },
                        {
                            name: 'Transfer-Encoding',
                            value: 'chunked'
                        },
                        {
                            name: 'Connection',
                            value: 'keep-alive'
                        },
                        {
                            name: 'Accept-Ranges',
                            value: 'bytes'
                        },
                        {
                            name: 'Access-Control-Allow-Headers',
                            value: 'X-Requested-With, content-type, Authorization'
                        }
                    ],
                    cookies: [],
                    content: {
                        size: 4858973,
                        mimeType: 'application/javascript'
                    },
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
            {
                startedDateTime: '2018-09-30T08:59:51.633Z',
                time: 16.382865001622122,
                request: {
                    method: 'GET',
                    url: 'http://0.0.0.0:9123/sockjs-node/info?t=1538297991633',
                    httpVersion: 'HTTP/1.1',
                    headers: [
                        {
                            name: 'Pragma',
                            value: 'no-cache'
                        },
                        {
                            name: 'Accept-Encoding',
                            value: 'gzip, deflate'
                        },
                        {
                            name: 'Host',
                            value: '0.0.0.0:9123'
                        },
                        {
                            name: 'Accept-Language',
                            value: 'zh-CN,zh;q=0.9,en;q=0.8,zh-TW;q=0.7,ja;q=0.6'
                        },
                        {
                            name: 'User-Agent',
                            value:
                                'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36'
                        },
                        {
                            name: 'Accept',
                            value: '*/*'
                        },
                        {
                            name: 'Referer',
                            value: 'http://0.0.0.0:9123/'
                        },
                        {
                            name: 'Connection',
                            value: 'keep-alive'
                        },
                        {
                            name: 'Cache-Control',
                            value: 'no-cache'
                        }
                    ],
                    queryString: [
                        {
                            name: 't',
                            value: '1538297991633'
                        }
                    ],
                    cookies: [],
                    headersSize: 409,
                    bodySize: 0
                },
                response: {
                    status: 200,
                    statusText: 'OK',
                    httpVersion: 'HTTP/1.1',
                    headers: [
                        {
                            name: 'Access-Control-Allow-Origin',
                            value: '*'
                        },
                        {
                            name: 'Date',
                            value: 'Sun, 30 Sep 2018 08:59:51 GMT'
                        },
                        {
                            name: 'Cache-Control',
                            value: 'no-store, no-cache, no-transform, must-revalidate, max-age=0'
                        },
                        {
                            name: 'Vary',
                            value: 'Origin'
                        },
                        {
                            name: 'Connection',
                            value: 'keep-alive'
                        },
                        {
                            name: 'Transfer-Encoding',
                            value: 'chunked'
                        },
                        {
                            name: 'Content-Type',
                            value: 'application/json; charset=UTF-8'
                        }
                    ],
                    cookies: [],
                    content: {
                        size: 79,
                        mimeType: 'application/json',
                        compression: -11
                    },
                    redirectURL: '',
                    headersSize: 278,
                    bodySize: 90,
                    _transferSize: 368
                },
                cache: {},
                timings: {
                    blocked: 11.573865000009071,
                    dns: -1,
                    ssl: -1,
                    connect: -1,
                    send: 0.09199999999999875,
                    wait: 1.6119999909214684,
                    receive: 3.105000010691583,
                    _blocked_queueing: 0.8650000090710819,
                    _blocked_proxy: 7.675
                },
                serverIPAddress: '0.0.0.0',
                connection: '520819',
                pageref: 'page_153'
            },
            {
                startedDateTime: '2018-09-30T09:00:27.537Z',
                time: 5.244508020051289,
                request: {
                    method: 'GET',
                    url: 'http://127.0.0.1:9123/d961fdfabbe512d2675de09af09f598b.svg',
                    httpVersion: 'http/1.1',
                    headers: [
                        {
                            name: 'Referer',
                            value: 'http://0.0.0.0:9123/'
                        },
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
                        {
                            name: 'Date',
                            value: 'Sun, 30 Sep 2018 09:00:27 GMT'
                        },
                        {
                            name: 'Content-Encoding',
                            value: 'gzip'
                        },
                        {
                            name: 'ETag',
                            value: 'W/"7923-F4esKlHdGDVR6Z0Y2pUD/h98swo"'
                        },
                        {
                            name: 'X-Powered-By',
                            value: 'Express'
                        },
                        {
                            name: 'Vary',
                            value: 'Accept-Encoding'
                        },
                        {
                            name: 'Access-Control-Allow-Methods',
                            value: 'GET, POST, PUT, DELETE, PATCH, OPTIONS'
                        },
                        {
                            name: 'Content-Type',
                            value: 'image/svg+xml; charset=UTF-8'
                        },
                        {
                            name: 'Access-Control-Allow-Origin',
                            value: '*'
                        },
                        {
                            name: 'Transfer-Encoding',
                            value: 'chunked'
                        },
                        {
                            name: 'Connection',
                            value: 'keep-alive'
                        },
                        {
                            name: 'Accept-Ranges',
                            value: 'bytes'
                        },
                        {
                            name: 'Access-Control-Allow-Headers',
                            value: 'X-Requested-With, content-type, Authorization'
                        }
                    ],
                    cookies: [],
                    content: {
                        size: 31011,
                        mimeType: 'image/svg+xml'
                    },
                    redirectURL: '',
                    headersSize: -1,
                    bodySize: -1,
                    _transferSize: 5526
                },
                cache: {},
                timings: {
                    blocked: 2.0085079999682494,
                    dns: 0.004999999999999893,
                    ssl: -1,
                    connect: 0.21300000000000008,
                    send: 0.09099999999999975,
                    wait: 1.769999999471009,
                    receive: 1.1570000206120312,
                    _blocked_queueing: 0.5079999682493508,
                    _blocked_proxy: 0.2849999999999999
                },
                serverIPAddress: '127.0.0.1',
                connection: '520892',
                pageref: 'page_153'
            },
            {
                startedDateTime: '2018-09-30T09:01:10.976Z',
                time: 19.426391033614983,
                request: {
                    method: 'GET',
                    url: 'http://127.0.0.1:9123/6b477efff4192d0dba61.hot-update.json',
                    httpVersion: 'http/1.1',
                    headers: [
                        {
                            name: 'User-Agent',
                            value:
                                'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36'
                        },
                        {
                            name: 'Referer',
                            value: 'http://0.0.0.0:9123/'
                        },
                        {
                            name: 'Origin',
                            value: 'http://0.0.0.0:9123'
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
                        {
                            name: 'Date',
                            value: 'Sun, 30 Sep 2018 09:01:10 GMT'
                        },
                        {
                            name: 'ETag',
                            value: 'W/"2e-xPscrBUndgLuIoMCgE7EMM2+fas"'
                        },
                        {
                            name: 'X-Powered-By',
                            value: 'Express'
                        },
                        {
                            name: 'Vary',
                            value: 'Accept-Encoding'
                        },
                        {
                            name: 'Access-Control-Allow-Methods',
                            value: 'GET, POST, PUT, DELETE, PATCH, OPTIONS'
                        },
                        {
                            name: 'Content-Type',
                            value: 'application/json; charset=UTF-8'
                        },
                        {
                            name: 'Access-Control-Allow-Origin',
                            value: '*'
                        },
                        {
                            name: 'Connection',
                            value: 'keep-alive'
                        },
                        {
                            name: 'Accept-Ranges',
                            value: 'bytes'
                        },
                        {
                            name: 'Access-Control-Allow-Headers',
                            value: 'X-Requested-With, content-type, Authorization'
                        },
                        {
                            name: 'Content-Length',
                            value: '46'
                        }
                    ],
                    cookies: [],
                    content: {
                        size: 46,
                        mimeType: 'application/json'
                    },
                    redirectURL: '',
                    headersSize: -1,
                    bodySize: -1,
                    _transferSize: 482
                },
                cache: {},
                timings: {
                    blocked: 4.517390999997966,
                    dns: 0.0039999999999995595,
                    ssl: -1,
                    connect: 0.15500000000000025,
                    send: 0.07299999999999951,
                    wait: 11.883000004518777,
                    receive: 2.7940000290982425,
                    _blocked_queueing: 1.3909999979659915,
                    _blocked_proxy: 1.9500000000000002
                },
                serverIPAddress: '127.0.0.1',
                connection: '520909',
                pageref: 'page_153'
            },
            {
                startedDateTime: '2018-09-30T09:01:10.996Z',
                time: 5.4614059996414,
                request: {
                    method: 'GET',
                    url: 'http://127.0.0.1:9123/main.6b477efff4192d0dba61.hot-update.js',
                    httpVersion: 'http/1.1',
                    headers: [
                        {
                            name: 'Referer',
                            value: 'http://0.0.0.0:9123/'
                        },
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
                        {
                            name: 'Date',
                            value: 'Sun, 30 Sep 2018 09:01:11 GMT'
                        },
                        {
                            name: 'Content-Encoding',
                            value: 'gzip'
                        },
                        {
                            name: 'ETag',
                            value: 'W/"155c-mxZFmoX0dT8JBjzSbGY2NXmfpKA"'
                        },
                        {
                            name: 'X-Powered-By',
                            value: 'Express'
                        },
                        {
                            name: 'Vary',
                            value: 'Accept-Encoding'
                        },
                        {
                            name: 'Access-Control-Allow-Methods',
                            value: 'GET, POST, PUT, DELETE, PATCH, OPTIONS'
                        },
                        {
                            name: 'Content-Type',
                            value: 'application/javascript; charset=UTF-8'
                        },
                        {
                            name: 'Access-Control-Allow-Origin',
                            value: '*'
                        },
                        {
                            name: 'Transfer-Encoding',
                            value: 'chunked'
                        },
                        {
                            name: 'Connection',
                            value: 'keep-alive'
                        },
                        {
                            name: 'Accept-Ranges',
                            value: 'bytes'
                        },
                        {
                            name: 'Access-Control-Allow-Headers',
                            value: 'X-Requested-With, content-type, Authorization'
                        }
                    ],
                    cookies: [],
                    content: {
                        size: 5468,
                        mimeType: 'application/javascript'
                    },
                    redirectURL: '',
                    headersSize: -1,
                    bodySize: -1,
                    _transferSize: 1681
                },
                cache: {},
                timings: {
                    blocked: 3.0274060000064784,
                    dns: 0.0029999999999996696,
                    ssl: -1,
                    connect: 0.1639999999999997,
                    send: 0.0820000000000003,
                    wait: 1.2790000276155769,
                    receive: 0.9059999720193446,
                    _blocked_queueing: 0.40600000647827983,
                    _blocked_proxy: 0.9670000000000001
                },
                serverIPAddress: '127.0.0.1',
                connection: '520918',
                pageref: 'page_153'
            }
        ]
    }
};
class DEMO extends Component {
    render() {
        return <MainModules har={har} />;
    }
}
ReactDOM.render(<DEMO har={har} />, document.getElementById('wrap_container'));
