<template>
    <el-row class="tac">
        <el-col>
            <el-menu
                    default-active="1"
                    class="el-menu-vertical-demo"
                    background-color="#27274a"
                    text-color="#fff"
                    active-text-color="#ffd04b"
                    style="width: 200px"
            >
                <el-menu-item index="1"  @click="classClick">
                    <i class="el-icon-document"></i>
                    <span slot="title">班级</span>
                </el-menu-item>
                <el-menu-item index="2"  @click="examClick">
                    <i class="el-icon-menu"></i>
                    <span slot="title">考试</span>
                </el-menu-item>
                <el-menu-item index="3"  disabled>
                    <i class="el-icon-setting"></i>
                    <span slot="title">个人设置</span>
                </el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script>
    import router from "../../router";
    export default {
        name: "StudentAside",
        methods: {
            examClick(){
                this.axios.post(
                    'student/getCurrentExams'
                ).then((res) =>{
                    window.console.log(res)
                    this.$store.commit("updateStudentExamListInfo",res.data)
                    router.push("student_home_exam")
                })
            },
            classClick(){
                this.axios.post(
                    'student/showJointClass'
                ).then((res) =>{
                    window.console.log(res)
                    this.$store.commit("updateStudentClassInfo",res.data)
                    router.push("student_home")
                })
            }
        }
    }
</script>

<style scoped>

</style>