import {Space, Table, Pagination} from 'antd';
import type {ColumnsType} from 'antd/es/table';
import {useEffect, useState} from "react";
import {getUserListApi} from "@/api/user.ts";

interface DataType {
    key: string;
    name: string;
    id:string,
    openId: string;
    align?: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: '序号',
        dataIndex: 'name',
        key: 'id',
        render: (_, {}, index) => <a>{index + 1}</a>,
        align: 'center'
    },
    {
        title: '用户名',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'openId',
        dataIndex: 'openId',
        key: 'openId',
    },
    {
        title: '登录次数',
        dataIndex: 'loginNum',
        key: 'loginNum',
    },
    // {
    //     title: '标签',
    //     key: 'tags',
    //     dataIndex: 'tags',
    //     render: (_, {tags}) => (
    //         <>
    //             {tags.map((tag) => {
    //                 let color = tag.length > 5 ? 'geek' : 'green';
    //                 if (tag === 'loser') {
    //                     color = 'volcano';
    //                 }
    //                 return (
    //                     <Tag color={color} key={tag}>
    //                         {tag.toUpperCase()}
    //                     </Tag>
    //                 );
    //             })}
    //         </>
    //     ),
    // },
    {
        title: '操作',
        key: 'action',
        render: (_, {}) => (
            <Space size="middle">
                <a>编辑</a>
                <a>删除</a>
            </Space>
        ),
        align: 'center',
    },
];


export default function User() {
    const [userList, setUserList] = useState<DataType[]>([])
    const [total, setTotal] = useState<number>(0)
    const [pager, setPager] = useState<any>({
        pageNum: 1,
        pageSize: 10
    })


    const pageChange = (page: number, pageSize?: number) => {
        setPager({
            pageNum: page,
            pageSize: pageSize
        })
    }

    useEffect(() => {
        getUserListApi(pager).then(res => {
            setTotal(res.data.count)
            setUserList(res.data.rows)
        })
    }, [pager])
    return (
        <div>
            <Table columns={columns} dataSource={userList} bordered pagination={false} rowKey={({id}) => id}/>
            <Pagination onChange={pageChange} defaultCurrent={pager.pageNum} total={total}
                        style={{textAlign: "center", marginTop: '15px'}}/>
        </div>
    )
}
