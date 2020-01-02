<template>
    <div id="app">
        <div class="create_paper_body">
            <el-form ref="form" :model="form" label-width="160px">
                <el-form-item label="试卷名称">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>



                <el-form-item label="试卷学科">
                    <el-radio-group v-model="form.course">
                        <el-radio label="高等数学"></el-radio>
                        <el-radio label="软件工程"></el-radio>
                        <el-radio label="大学英语"></el-radio>
                    </el-radio-group>
                </el-form-item>

                <el-form-item label="最大提交次数">
                    <el-input style="width: 80px" v-model="form.max_submit"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">立即发布</el-button>

                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "IssueTest",
        data() {
            return {
                form: {
                    name: '',
                    course: '',
                    max_submit: ''
                }
            }
        },
        methods: {
            onSubmit() {
                // eslint-disable-next-line no-console
                console.log('submit!');
            }
        }

    }
</script>

<style scoped>

    .create_paper_body{
        width: 80%;
        margin-left: 10%;
        padding-top: 50px;
    }
</style>