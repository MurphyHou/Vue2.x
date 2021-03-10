<template>
    <div class="main">
        <div class="tickets-box">
            <div class="titickets-info">
                <p v-if="titicketStatus == '0'">您的朋友1380202998送你以下优惠券<br>请在2018.11.01之前使用 </p>
                <p v-else-if="titicketStatus == '1'">恭喜<br>您已成功领取票券，快去使用吧</p>
                <p v-else-if="titicketStatus == '2'">该票券已被领取</p>
                <p v-else>该票券已被使用</p>
                <p>. . .</p>
                <div class="img"></div>
                <h5>星巴克中杯饮品券</h5>
                <p class="date">2018.11.01 到期</p>
                <template>
                    <button v-if="titicketStatus == '0'" @click="isShowPop = true">点击领取</button>
                    <button v-else-if="titicketStatus == '1'" @click="isShowPop = true">去使用</button>
                    <button v-else class="disable-btn">{{titicketStatus == '2' ? '已领取' : '已使用'}}</button>
                </template>
            </div>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
        <div v-if="isShowPop" class="popup">
            <div class="user-info">
                <p class="title">领取验证</p>
                <div class="user-tel">
                    <h6>手机号</h6>
                    <input type="text" maxlength="13" v-model="userTel" v-on:input="inputFun">
                    <p class="tips">＊ 请输入手机号确保能够</p>
                    <button :class="[disabled ? 'disable-btn' : '']" @click="submit" :disabled='disabled'>确认领取</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            titicketStatus: '1',
            isShowPop: false,
            userTel:'',
            disabled: true,

        }
    },
    methods: {
        submit(){
             this.userTel = this.userTel.replace(/\s+/g,""); 
            console.log(this.userTel);
        },
        inputFun(val){
            this.userTel = this.userTel.replace(/(\d{3})(\d{4})/, "$1 $2 "); 
            this.disabled = this.userTel.length == 13 ? false : true
        }
    },
}
</script>
<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .main{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        /* background: linear-gradient(to bottom,#ffc458,#ffa139); */
        background: #ffc458;
        
    }
    .tickets-box{
        position: relative;
        width: 670px;
        height: 990px;
        padding: 97px 80px 0 80px;
        box-sizing: border-box;
        background: #fff;
    }
    .titickets-info p{
        font-size: 30px;
        color: #FCAE78;
        text-align: center;
        line-height: 2.2;
    }
    .titickets-info .date{
        font-size: 26px;
        color: #9B9591;
        text-align: center;
        margin-top: 27px;
    }
    .titickets-info .img{
        display: block;
        width: 176px;
        height: 176px;
        border-radius: 100%;
        background: cadetblue;
        margin: 40px auto;
    }
    .titickets-info h5{
        font-size: 42px;
        color: #332E2A;
        font-weight: 500;
        text-align: center;
    }
    .titickets-info button{
        font-size: 36px;
        color: #fff;
        line-height: 90px;
        width: 508px;
        height: 90px;
        margin: 0 auto;
        letter-spacing: 6px;
        margin-top: 60px;
        background: linear-gradient(to right,#ffc458,#ffa139); 
    }
    .titickets-info p:nth-child(3){
        font-size: 60px;
       
    }
    .tickets-box ul li{
        position: absolute;
        width: 160px;
        height: 160px;
        border-radius:100%;
    }
    .tickets-box li:first-child{
        top:-100px;
        left: -100px;
        background: #ffc458;
    }
    .tickets-box li:nth-child(2){
        top:-100px;
        right: -100px;
        background: #ffc458;
    }
    .tickets-box li:nth-child(3){
        bottom:-100px;
        right: -100px;
        background: #ffc458;
    }
    .tickets-box li:nth-child(4){
        bottom:-100px;
        left: -100px;
        background: #ffc458;
    }
    .popup{
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
    }
    .user-info{
        position: absolute;
        top:211px;
        width: 610px;
        height: 685px;
        left: 70px;
        background: #fff;
    }
    .user-info .title{
        font-size: 40px;
        text-align: center;
        color: #fff;
        height: 140px;
        line-height: 140px;
        letter-spacing: 4px;
        background: linear-gradient(to right,#ffc458,#ffa139); 
    }
    .user-info .user-tel{
        padding: 0 72px;
        box-sizing: border-box;
    }
    .user-tel h6{
        font-size: 28px;
        color: #FFA43B;
        font-weight: 100;
        margin: 88px 0 20px;
    }
    .user-tel input{
        width: 473px;
        height: 60px;
        font-size: 42px;
        text-indent: 8px;
        border: none;
        border-bottom: 3px solid #DCB59A;
    }
    .user-tel .tips{
        color: rgba(0, 0, 0, 0.67);
        margin-top: 28px;
    }
    .user-tel button{
        width: 472px;
        height: 100px;
        line-height: 100px;
        font-size: 36px;
        color: #fff;
        text-emphasis: center;
        letter-spacing: 4px;
        margin-top: 93px;
        background: #ffa139; 
    }
     .user-tel .disable-btn,.titickets-info .disable-btn{
        opacity: 0.5;
     }
</style>