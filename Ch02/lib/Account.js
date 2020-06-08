// 객체생성을 위한 사용자 정의 함수
function Account(bank, id, name, money) {
    // 멤버변수
    this.bank = bank;
    this.id = id;
    this.name = name;
    this.money = money;

    // 멤버함수
    this.deposit  = function(money){
        this.money += money;
    }
    this.withdraw = function(){
        this.money -= money;
    }
    this.show     = function(){
        document.write('-----------------------<br/ >');
        document.write('은 행 명 : '+this.bank+'<br/ >');
        document.write('계좌번호 : '+this.id+'<br/ >');
        document.write('입 금 주 : '+this.name+'<br/ >');
        document.write('현재잔액 : '+this.money+'<br/ >');
        document.write('------------------------<br/ >');
    }

}
