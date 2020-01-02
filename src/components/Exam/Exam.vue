<template>

    <div id="app">

        <el-table
                :data="tableData"
                style="width: 100%"
                height="80vh">
            <el-table-column
                    fixed
                    prop="test_name"
                    label="考试名称"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="course"
                    label="课程"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="score"
                    label="总分"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="start_time"
                    label="开始时间"
                    width="210">
            </el-table-column>
            <el-table-column
                    prop="release_time"
                    label="结束时间 "
                    width="210">
            </el-table-column>
            <el-table-column
                    prop="teacher"
                    label="创始人"
                    width="120">
            </el-table-column>

            <el-table-column
                    fixed="right"
                    label="操作"
                    width="100">
                <template slot-scope="scope">
                    <i class="el-icon-view" @click="showName(scope.row.test_name)"/>
                    <i class="el-icon-delete"/>

                </template>
            </el-table-column>

        </el-table>
        <el-button type="primary" icon="el-icon-plus">创建考试</el-button>
    </div>
</template>

<script>
    export default {
        name: "Exam",
        methods:{
            showName(testname){
                // eslint-disable-next-line no-console
                console.log(testname)
            }
        },
        data() {
            return {
                tableData: [{
                    test_name: "水平测试",
                    course: "软件工程",
                    score: "100",
                    start_time: "2020-01-01 20:00",
                    release_time: "2020-01-01 22:00",
                    teacher: "王老师",


                },{
                    test_name: "水平测试",
                    course: "软件工程",
                    score: "100",
                    start_time: "2020-01-01 20:00",
                    release_time: "2020-01-01 22:00",
                    teacher: "王老师",


                },{
                    test_name: "水平测试",
                    course: "软件工程",
                    score: "100",
                    start_time: "2020-01-01 20:00",
                    release_time: "2020-01-01 22:00",
                    teacher: "王老师",


                },{
                    test_name: "水平测试",
                    course: "软件工程",
                    score: "100",
                    start_time: "2020-01-01 20:00",
                    release_time: "2020-01-01 22:00",
                    teacher: "王老师",


                },{
                    test_name: "水平测试",
                    course: "软件工程",
                    score: "100",
                    start_time: "2020-01-01 20:00",
                    release_time: "2020-01-01 22:00",
                    teacher: "王老师",
                }]
            }
        }
    }
</script>

<style scoped>

    .el-icon-view{
        text-align: center;
        padding-right: 20px;
        cursor: pointer;
        color: #1A8CFE;
    }
    .el-icon-delete{
        cursor: pointer;
        color: #1A8CFE;
    }
</style>