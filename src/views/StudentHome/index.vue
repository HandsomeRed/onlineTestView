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
                <div class="header-wrapper">
                    <div class="header-title">
                        <div class="header-tab active">
                            <a href="">我的班级</a>
                        </div>
                        <div class="header-tab">
                            <a href="">加入班级</a>
                        </div>
                    </div>

                    <div class="split"></div>

                    <class></class>

                </div>

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
        comName: "exam",

    }
</script>

<style scoped>
    a {
        text-decoration: none;
        color: inherit;
    }

    .header-wrapper{
        line-height: 55px;
        position: relative;
        padding-right: 200px;
    }
    .header-wrapper .header-title{
        font-size: 18px;
        color: #27274A;
        width: 80vh;
    }
    .header-tab{
        margin-left: 17px;
        display: inline-block;
        color: #C1C1CB;

    }
    .header-tab.active{
        color: #27274A;
    }
    .split{
        margin-bottom: 24px;
        border-bottom: 1px solid #dedede;
        width: 100vh;
    }
</style>