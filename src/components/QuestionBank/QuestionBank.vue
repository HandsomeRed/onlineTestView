<template>
    <div id="app">

        <el-table
                :data="tableData"
                style="width: 100%"
                height="500">
            <el-table-column

                    prop="question_bank"
                    label="题库"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="course"
                    label="课程"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="type"
                    label="题型"
                    width="120">
            </el-table-column>

            <el-table-column

                    label="操作"
                    width="100">
                <template slot-scope="scope">
                    <i class="el-icon-edit" @click="showName(scope.row.question_bank)"/>
                    <i class="el-icon-delete"/>

                </template>
            </el-table-column>

        </el-table>
        <el-button type="primary" icon="el-icon-plus">添加题库</el-button>
    </div>
</template>

<script>
    export default {
        name: "QuestionBank",
        methods:{
            showName(questionbank){
                // eslint-disable-next-line no-console
                console.log(questionbank)
            }
        },
        data() {
            return {
                tableData: [{
                    question_bank: "题库一",
                    course: "软件工程",
                    type: "单选题"



                },{
                    question_bank: "题库一",
                    course: "软件工程",
                    type: "单选题"


                },{
                    question_bank: "题库一",
                    course: "软件工程",
                    type: "单选题"


                },{
                    question_bank: "题库一",
                    course: "软件工程",
                    type: "单选题"

                },{
                    question_bank: "题库一",
                    course: "软件工程",
                    type: "单选题"
                }]
            }
        }
    }
</script>

<style scoped>

    .el-icon-edit{
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