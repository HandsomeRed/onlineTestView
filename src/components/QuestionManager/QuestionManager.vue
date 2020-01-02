<template>
    <div id="app">

        <el-table
                :data="tableData"
                style="width: 100%"
                height="500">
            <el-table-column
                    prop="type"
                    label="题型"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="course"
                    label="课程"
                    width="150">
            </el-table-column>
            <el-table-column

                    prop="stem"
                    label="题目"
                    width="500">
            </el-table-column>

            <el-table-column

                    label="操作"
                    width="120">
                <template slot-scope="scope">
                    <i class="el-icon-delete" @click="showName(scope.row.stem)"/>


                </template>
            </el-table-column>

        </el-table>
        <el-button type="primary" icon="el-icon-plus">添加题目</el-button>
    </div>
</template>

<script>
    export default {
        name: "QuestionManager",
        methods:{
            showName(stem){
                // eslint-disable-next-line no-console
                console.log(stem)
            }
        },
        data() {
            return {
                tableData: [{
                    stem: "在机场、商厦、地铁等公共场所乘自动扶梯时应靠（）站立,另一侧供有急事赶路的人快行。",
                    course: "社会实践",
                    type: "单选题"



                },{
                    stem: "在参加各种社交宴请宾客中,要注意从座椅的（）侧入座,动作应轻而缓,轻松自然。",
                    course: "软件工程",
                    type: "单选题"


                },{
                    stem: "在参加各种社交宴请宾客中,要注意从座椅的（）侧入座,动作应轻而缓,轻松自然。",
                    course: "软件工程",
                    type: "单选题"


                },{
                    stem: "在参加各种社交宴请宾客中,要注意从座椅的（）侧入座,动作应轻而缓,轻松自然。",
                    course: "软件工程",
                    type: "单选题"

                },{
                    stem: "在参加各种社交宴请宾客中,要注意从座椅的（）侧入座,动作应轻而缓,轻松自然。",
                    course: "软件工程",
                    type: "单选题"
                }]
            }
        }
    }
</script>

<style scoped>

    .el-icon-delete{
        text-align: center;
        margin-left: 20px;
        cursor: pointer;
        color: #1A8CFE;
    }
</style>