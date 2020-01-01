<template>
    <div class="question-content" id="5e04141cd172bf4c61b2d89e" data-id="5e04141cd172bf4c61b2d89e" data-commit="false">

        <div class="exam-question">
            <span class="question-index ellipsis">1.</span>
            在机场、商厦、地铁等公共场所乘自动扶梯时应靠（）站立,另一侧供有急事赶路的人快行。(1.0分)

        </div>

        <div class="answers">

            <div class="select single-select a. ">
                <input type="radio" class="radioOrCheck hidden" data-type="1" id="5e04141cd172bf4c61b2d89e1" name="keyChk_questions_5e04141cd172bf4c61b2d89e" data-name="key1">
                <label for="5e04141cd172bf4c61b2d89e1">
                    <span class="select-icon"><i class="icon icon-m_exam_correct"></i></span>
                    <span class="words"><span class="words-option">A. </span>左侧 </span>
                </label>
            </div>

            <div class="select single-select b. ">
                <input type="radio" class="radioOrCheck hidden" data-type="1" id="5e04141cd172bf4c61b2d89e2" name="keyChk_questions_5e04141cd172bf4c61b2d89e" data-name="key2">
                <label for="5e04141cd172bf4c61b2d89e2">
                    <span class="select-icon"><i class="icon icon-m_exam_correct"></i></span>
                    <span class="words"><span class="words-option">B. </span>右侧 </span>
                </label>
            </div>

            <div class="select single-select c. ">
                <input type="radio" class="radioOrCheck hidden" data-type="1" id="5e04141cd172bf4c61b2d89e3" name="keyChk_questions_5e04141cd172bf4c61b2d89e" data-name="key3">
                <label for="5e04141cd172bf4c61b2d89e3">
                    <span class="select-icon"><i class="icon icon-m_exam_correct"></i></span>
                    <span class="words"><span class="words-option">C. </span>中间&nbsp; </span>
                </label>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Question"
    }
</script>

<style scoped>


    .question-content {

        padding: 30px 0;
        position: relative;
    }
    .question-content .question-operation {
        width: 15px;
        height: 15px;
        font-size: 15px;
        position: absolute;
        top: 30px;
        right: -45px;
        cursor: pointer;
        color: #1A8CFE;
    }
    .question-content .exam-question {
        font-size: 16px;
        line-height: 22px;
        margin-bottom: 10px;
        padding-left: 20px;
        position: relative;
    }
    .question-content .exam-question .question-index {
        color: #1A8CFE;
        position: absolute;
        left: -25px;
        top: 0;
        display: inline-block;
        width: 40px;
        line-height: 22px;
        text-align: right;
    }

    input[type="radio"], input[type="checkbox"] {
        margin: 4px 0 0;
        margin-top: 1px \9;
        line-height: normal;
    }
    .hidden {
        display: none !important;
    }
    label {
        display: inline-block;
        max-width: 100%;
        margin-bottom: 5px;
        font-weight: bold;
    }
    .select label {
        width: 100%;
        padding: 0px 15px 0px 45px;
        line-height: 20px;
        border-radius: 4px;
        cursor: pointer;
        margin: 0;
        position: relative;
        min-height: 40px;
    }
    .select label .select-icon {
        font-size: 15px;
        position: absolute;
        left: 15px;
        top: 12.5px;
        border: 1px solid #979797;
        background: #fff;
        width: 15px;
        height: 15px;
        border-radius: 50%;
    }
    .select label .select-icon .icon {
        display: none;
        position: absolute;
        top: -1px;
        left: -1px;
    }
    .answers .words {
        position: relative;
        margin-left: 20px;
        display: block;
        line-height: 40px;
    }
    .answers .words .words-option {
        position: absolute;
        top: 0px;
        left: -20px;
    }
</style>