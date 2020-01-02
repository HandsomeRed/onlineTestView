<template>
    <el-container>
        <el-header style="height: 73px;">
            <TeacherHeader></TeacherHeader>
        </el-header>
        <el-container style="height: 100vh">
            <el-aside style="width: 200px;background-color: #27274a">
                <TeacherAside></TeacherAside>
            </el-aside>
            <el-main style="background-color: #f1f3f8">
                <question-bank></question-bank>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import TeacherHeader from "../../components/Header/TeacherHeader";
    import TeacherAside from "../../components/Aside/TeacherAside";
    import QuestionBank from "../../components/QuestionBank/QuestionBank";
    export default {
        name: "index",
        components: {QuestionBank, TeacherAside, TeacherHeader}
    }
</script>

<style scoped>

</style>