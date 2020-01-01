<template>
    <div class="analysis">


        <div class="question-icon-wrapper">
            <div class="question-icon status-icon">
                <el-tag type="danger" v-show=this.flag>错误</el-tag>
                <el-tag type="success" v-show=!this.flag>正确</el-tag>
            </div>
        </div>

        <div class="analysis-row">
            <div class="analysis-title">学员答案：</div>
            <div class="analysis-content question-com-answer error"></div>
        </div>

        <div class="analysis-row">
            <div class="analysis-title">正确答案：</div>
            <div class="analysis-content question-ans-right">B</div>
        </div>
        <div class="analysis-row">
            <div class="analysis-title">解释说明：</div>
            <div class="analysis-content question-analysis textalign-justify display-block"></div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "QuestionExplain",
        data () {
            return {
                flag: true
            }
        }
    }
</script>

<style scoped>

    .analysis {
        background: rgba(222,222,222,0.2);
        border-radius: 4px;
        padding: 15px 20px;
        line-height: 24px;
        margin-top: 10px;
        position: relative;
    }
    .analysis .question-icon-wrapper {
        position: absolute;
        right: 10px;
        top: 14px;
    }
    .analysis .analysis-row {
        min-height: 24px;
        padding-left: 70px;
        padding-right: 60px;
        position: relative;
    }
    .analysis .analysis-row .analysis-title {
        position: absolute;
        width: 90px;
        left: 0;
        top: 0;
    }
    .analysis .analysis-row +.analysis-row {
        margin-top: 10px;
    }
    .error{
        color: red;
    }


</style>