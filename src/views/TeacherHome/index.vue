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
                <class></class>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import TeacherHeader from "../../components/Header/TeacherHeader";
    import TeacherAside from "../../components/Aside/TeacherAside";
    import Class from "../../components/Main/Teacher/Class/class";
    export default {
        name: "index",
        components: {Class, TeacherAside, TeacherHeader}
    }
</script>

<style scoped>

</style>