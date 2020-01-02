<template>
    <div id="app">
        <div class="paper_name">高等数学</div>
        <el-divider></el-divider>
        <el-form ref="form" :model="form" label-width="40px">
            <el-checkbox-group v-model="checkList">
                <div class="question_bank">
                    <el-checkbox label="0">题库一</el-checkbox>
                        <el-form-item style="float: right" label="分数">
                            <el-input v-model="form.score[0]" class="score"></el-input>
                        </el-form-item>
                </div>
                <el-divider></el-divider>
                <div class="question_bank">
                    <el-checkbox label="1">题库二</el-checkbox>
                    <el-form-item style="float: right" label="分数">
                        <el-input v-model="form.score[1]" class="score"></el-input>
                    </el-form-item>
                </div>
                <el-divider></el-divider>
                <div class="question_bank">
                    <el-checkbox label="2">题库三</el-checkbox>
                    <el-form-item style="float: right" label="分数">
                        <el-input v-model="form.score[2]" class="score"></el-input>
                    </el-form-item>
                </div>
                <el-divider></el-divider>
                <div class="question_bank">
                    <el-checkbox label="3">题库四</el-checkbox>
                    <el-form-item style="float: right" label="分数">
                        <el-input v-model="form.score[3]" class="score"></el-input>
                    </el-form-item>
                </div>
                <el-divider></el-divider>
                <div class="question_bank">
                    <el-checkbox label="4">题库五</el-checkbox>
                    <el-form-item style="float: right" label="分数">
                        <el-input v-model="form.score[4]" class="score"></el-input>
                    </el-form-item>
                </div>
                <el-divider></el-divider>
            </el-checkbox-group>
            <el-form-item>
                <el-button style="float: right" type="primary" @click="onSubmit">下一步</el-button>
                <div style="clear: right"></div>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "AddQuestion",
        data () {
            return {
                checkList: ['1','2'],
                form: {
                    score: []
                }
            };
        },
        methods: {
            onSubmit() {
                // eslint-disable-next-line no-console
                console.log('submit!');
                // eslint-disable-next-line no-console
                console.log(this.form.score)
            }
        }
    }
</script>

<style scoped>

    .paper_name{
        text-align: center;
        line-height: 40px;
        margin-bottom: -20px;
    }
    .question_bank{
        margin-left: 30px;
        line-height: 40px;
        margin-top: -10px;
        margin-bottom: -20px;
    }

    .score{
        width: 50px;
    }
</style>