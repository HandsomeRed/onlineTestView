<template>
    <div class="numberCardModal" id="numberCardModal" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-number-card" role="document">
            <div class="fold_btn" id="answercardFoldBtn"><i class="icon icons8-icon" data-toggle="tooltip" data-placement="top" data-container="body" title="" data-original-title="收起"></i></div>
            <div class="open_btn" id="answercardOpenBtn"><i class="icon icons8-icon-3" data-toggle="tooltip" data-placement="top" data-container="body" title="" data-original-title="展开"></i></div>
            <div class="modal-content">
                <div class="modal-header">
                </div>
                <div class="modal-body">
                    <div class="title">
                        <div class="title_border"></div>
                        <div class="title_content">答题卡</div>
                    </div>
                    <div class="card-content-list">

                        <div class="card-content">

                            <div class="card-content-title">单选题(共10题，合计100分)</div>


                            <div class="box-list">

                                <div class="box normal-box question_cbox s1">
                                    <a class="iconBox questions_5e04141cd172bf4c61b2d89e" href="#5e04141cd172bf4c61b2d89e" questionsid="5e04141cd172bf4c61b2d89e" num="questions_5e04141cd172bf4c61b2d89e" perscore="1.0">1</a>
                                    <span class="box icon-box question_marked"></span>
                                </div>

                                <div class="box normal-box question_cbox s1">
                                    <a class="iconBox questions_5e04141cd172bf4c61b2d89b" href="#5e04141cd172bf4c61b2d89b" questionsid="5e04141cd172bf4c61b2d89b" num="questions_5e04141cd172bf4c61b2d89b" perscore="1.0">2</a>
                                    <span class="box icon-box question_marked"></span>
                                </div>

                                <div class="box normal-box question_cbox s1">
                                    <a class="iconBox questions_5e04141cd172bf4c61b2d89c" href="#5e04141cd172bf4c61b2d89c" questionsid="5e04141cd172bf4c61b2d89c" num="questions_5e04141cd172bf4c61b2d89c" perscore="1.0">3</a>
                                    <span class="box icon-box question_marked"></span>
                                </div>

                                <div class="box normal-box question_cbox s1">
                                    <a class="iconBox questions_5e04141cd172bf4c61b2d89d" href="#5e04141cd172bf4c61b2d89d" questionsid="5e04141cd172bf4c61b2d89d" num="questions_5e04141cd172bf4c61b2d89d" perscore="1.0">4</a>
                                    <span class="box icon-box question_marked"></span>
                                </div>

                                <div class="box normal-box question_cbox s1">
                                    <a class="iconBox questions_5e04141cd172bf4c61b2d88d" href="#5e04141cd172bf4c61b2d88d" questionsid="5e04141cd172bf4c61b2d88d" num="questions_5e04141cd172bf4c61b2d88d" perscore="1.0">5</a>
                                    <span class="box icon-box question_marked"></span>
                                </div>

                                <div class="box normal-box question_cbox s1">
                                    <a class="iconBox questions_5e04141cd172bf4c61b2d88c" href="#5e04141cd172bf4c61b2d88c" questionsid="5e04141cd172bf4c61b2d88c" num="questions_5e04141cd172bf4c61b2d88c" perscore="1.0">6</a>
                                    <span class="box icon-box question_marked"></span>
                                </div>

                                <div class="box normal-box question_cbox s1">
                                    <a class="iconBox questions_5e04141cd172bf4c61b2d88b" href="#5e04141cd172bf4c61b2d88b" questionsid="5e04141cd172bf4c61b2d88b" num="questions_5e04141cd172bf4c61b2d88b" perscore="1.0">7</a>
                                    <span class="box icon-box question_marked"></span>
                                </div>

                                <div class="box normal-box question_cbox s1">
                                    <a class="iconBox questions_5e04141cd172bf4c61b2d88b" href="#5e04141cd172bf4c61b2d88b" questionsid="5e04141cd172bf4c61b2d88b" num="questions_5e04141cd172bf4c61b2d88b" perscore="1.0">8</a>
                                    <span class="box icon-box question_marked"></span>
                                </div>

                                <div class="box normal-box question_cbox s1">
                                    <a class="iconBox questions_5e04141cd172bf4c61b2d88b" href="#5e04141cd172bf4c61b2d88b" questionsid="5e04141cd172bf4c61b2d88b" num="questions_5e04141cd172bf4c61b2d88b" perscore="1.0">9</a>
                                    <span class="box icon-box question_marked"></span>
                                </div>

                                <div class="box normal-box question_cbox s1">
                                    <a class="iconBox questions_5e04141cd172bf4c61b2d88b" href="#5e04141cd172bf4c61b2d88b" questionsid="5e04141cd172bf4c61b2d88b" num="questions_5e04141cd172bf4c61b2d88b" perscore="1.0">10</a>
                                    <span class="box icon-box question_marked"></span>
                                </div>

                            </div>
                            <div class="split"></div>
                        </div>

                    </div>

                </div>
                <div class="modal-footer">
                    <span class="box icon-box s2"></span>
                    <span class="icon-label">已答</span>
                    <span class="box icon-box s1"></span>
                    <span class="icon-label">未答</span>
                    <span class="box icon-box marked"></span>
                    <span class="icon-label">标记</span>
                    <el-button type="primary" size="small" style="margin-left: 20px">提交试卷</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TestPaperLeft"
    }
</script>

<style scoped>

    a {
        text-decoration: none;
        color: inherit;
    }
    .numberCardModal .modal-number-card {
        width: 100%;
        margin: 0;
        height: 100%;
    }
    .numberCardModal .modal-number-card .modal-content {
        height: 100%;
    }
    .modal-number-card .modal-header {
        height: 20px;
    }
    .modal-number-card .modal-header {
        padding: 10px;
    }
    .numberCardModal .modal-number-card .modal-body {
        height: calc(100% - 57px);
    }
    .modal-number-card .modal-body {
        padding: 0;
    }
    .modal-body {
        position: relative;
        padding: 15px;
    }
    .modal-number-card .modal-body .title {
        font-size: 20px;
        color: #666666;
        letter-spacing: 0;
        margin-bottom: 10px;
    }
    .modal-content {
        position: relative;
        background-color: #fff;
        border: 1px solid #999;
        border: 1px solid rgba(0,0,0,0.2);
        border-radius: 6px;

        box-shadow: 0 3px 9px rgba(0,0,0,0.5);

        background-clip: padding-box;
        outline: 0;
    }
    .modal-content {
        border: none;
        border-radius: 4px;
        box-shadow: none;
    }
    .numberCardModal .modal-number-card .modal-content .title {
        margin-bottom: 0;
    }
    .numberCardModal .modal-number-card .modal-content .title {
        position: relative;
        text-align: left;
        margin-left: 20px;
    }
    .modal-number-card .modal-body .title {
        font-size: 18px;
        padding-bottom: 0px;
    }
    .numberCardModal .modal-number-card .modal-content .title .title_border {
        display: inline-block;
        width: 4px;
        height: 18px;
        background: #1A8CFE;
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
    }
    .numberCardModal .modal-number-card .modal-content .title .title_content {
        margin-left: 14px;
        font-weight: 600;
        color: #27274A;
    }
    .numberCardModal .modal-number-card .modal-body .card-content-list {
        height: calc(100% - 38px);
        overflow: auto;
    }
    .numberCardModal .modal-number-card .modal-body .card-content {
        padding: 0 20px 0 20px;
        position: relative;
        /* overflow: auto; */
    }
    .modal-number-card .modal-body .card-content .card-content-title {
        font-size: 12px;
        color: #27274A;
        font-weight: 600;
    }
    .modal-number-card .modal-body .card-content .card-content-title {
        padding-bottom: 12px;
        padding-top: 20px;
    }
    .modal-number-card .modal-body .card-content .card-content-title {
        font-size: 13px;
        color: #27274A;
        line-height: 17px;
        padding: 10px 0;
    }
    .modal-number-card .modal-body .card-content .box-list {
        padding-bottom: 0;
    }
    .modal-number-card .modal-body .card-content .box-list {
        padding-bottom: 10px;
        font-size: 0;
        margin-right: -15px;
    }
    .modal-number-card .modal-body .card-content .box-list {
        position: relative;
        left: -5px;
    }
    .modal-number-card .modal-body .card-content .box-list .box .iconBox {
        border: 1px solid #C1C1CB;
        line-height: 28px;
        display: inline-block;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        color: #C1C1CB;
        background: #fff;
    }
    .modal-number-card .modal-body .card-content .box-list .box {
        font-size: 14px;
        display: inline-block;
        margin-top: 5px;
        margin-right: 5px;
        width: 40px;
        height: 40px;
        text-align: center;
        line-height: 40px;
    }
    .modal-number-card .modal-body .card-content .box-list .box {
        height: 37px;
        width: 35px;
        margin-top: unset;
        margin-right: unset;
    }
    .modal-number-card .modal-body .card-content .box-list .box {
        height: auto;
        line-height: unset;
        position: relative;
        margin-bottom: 15px;
    }
    .modal-number-card .modal-body .card-content .split {
        width: 100%;
        border-bottom: 1px solid #E6E6E6;
    }
    .modal-footer {
        padding: 15px;
        text-align: right;
        border-top: 1px solid #e5e5e5;
    }
    .modal-number-card .modal-footer {
        border-top: 1px solid #E6E6E6;
        padding: 15px 40px;
        text-align: center;
    }
    .modal-number-card .modal-footer {
        position: absolute;
        bottom: 0;
        padding: 10px 0px 10px 0px;
        background-color: #fff;
        border: unset;
        right: 0;
        width: 100%;
        box-shadow: 0 -2px 10px 0 rgba(58,62,81,0.10);
    }
    .modal-number-card .modal-footer .icon-box {
        width: 14px;
        height: 14px;
        border-radius: 50%;
        display: inline-block;
        vertical-align: middle;
        margin-right: 2px;
        background: #fff;
    }
    .modal-number-card .modal-footer .icon-box.s2 {
        background: #1A8CFE;
    }
    .modal-number-card .modal-footer .icon-label {
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #656577;
    }

    .modal-number-card .modal-footer .icon-box.s1 {
        background: #FFFFFF;
        border: 1px solid #C1C1CB;
    }
    .modal-number-card .modal-footer .icon-box.marked {
        background: #FE8545;
        border-radius: 100%;
        width: 5px;
        height: 5px;
        position: relative;
        bottom: 1px;
    }
    .numberCardModal {
        display: inline-block;
        height: calc(100% - 110px);
        position: fixed;
        top: 90px;
        width: 240px;
        box-shadow: 0 1px 4px 0 rgba(58,62,81,0.10);
    }
    .numberCardModal {
        left: 20px;
    }
    .modal-number-card .modal-body .card-content .box-list .box .iconBox {
        width: 27px;
        height: 27px;
        line-height: 25px;
    }
    .modal-number-card .modal-body .card-content .box-list .box.s1 .iconBox {
        border-color: #C1C1CB;
        color: #C1C1CB;
        background: #fff;
    }
    .modal-number-card .modal-body .card-content .box-list .box.s1 .iconBox {
        border: 1px solid #DCDFE6;
        color: #DCDFE6;
    }
    .modal-number-card .modal-body .card-content .box-list .box.question_marked {
        position: absolute!important;
        bottom: -8px;
        padding: unset!important;
        right: 0;
        left: 0;
        margin: auto;
        display: none;
    }
</style>