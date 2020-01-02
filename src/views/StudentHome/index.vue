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
                <class></class>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import StudentHeader from "../../components/Header/StudentHeader";
    import StudentAside from "../../components/Aside/StudentAside";
    import Class from "../../components/Main/Student/Class/class";
    export default {
        name: "home",
        components: {Class, StudentAside, StudentHeader},
    }
</script>

<style scoped>

</style>