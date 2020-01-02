<template>
    <el-container>
        <el-header style="height: 73px;">
            <StudentHeader></StudentHeader>
        </el-header>
        <el-container style="height: 100vh">
            <el-aside>
                <TestPaperLeft></TestPaperLeft>
            </el-aside>
            <el-main>
                <div class="questionBox">
                    <div class="paper">
                        <div class="questionTitle">
                            单选题(共10题，合计100.0分)
                        </div>
                        <Question></Question>
                        <Question></Question>
                        <Question></Question>
                        <Question></Question>
                        <Question></Question>
                        <Question></Question>
                        <Question></Question>
                        <Question></Question>
                        <Question></Question>
                    </div>

                </div>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import TestPaperLeft from "../../../../components/Aside/TestPaperLeft";
    import Question from "../../../../components/Question/Question";
    import StudentHeader from "../../../../components/Header/StudentHeader";
    export default {
        name: "index",
        components: {StudentHeader, Question, TestPaperLeft}
    }
</script>

<style scoped>
    .questionBox{
        margin-left: 100px;
        width: 1080px;
    }
    .paper{
        color: #27274A;
        width: 100%;
        background: #FFFFFF;
        border: 1px solid #DEDEDE;
        border-radius: 4px;
    }
    .questionTitle{
        font-size: 18px;
        line-height: 25px;
        padding: 18px 20px;
        background: #FAFAFA;
        border-bottom: 1px solid #DEDEDE;
    }
</style>