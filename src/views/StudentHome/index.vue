<template>
    <el-container>
        <el-header style="height: 73px;">
            <StudentHeader></StudentHeader>
        </el-header>
        <el-container style="height: 100vh">
            <el-aside style="width: 200px;background-color: #27274a">
                <StudentAside></StudentAside>
            </el-aside>
            <el-main style="background-color: #f1f3f8">
                <exam></exam>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import StudentHeader from "../../components/Header/StudentHeader";
    import StudentAside from "../../components/Aside/StudentAside";
    import Exam from "../../components/Main/Student/Exam/exam";
    export default {
        name: "home",
        components: {Exam, StudentAside, StudentHeader},
    }
</script>

<style scoped>

</style>