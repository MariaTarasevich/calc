/* let Calc = function(){
    this.get = function(){
        this.a = +prompt('введита число a')
        this.b = +prompt('введита число b')
        this.oper = prompt('введите операцию: +, -, *, /')

        this.operation();
    };
    this.operation = function(){
        switch(this.oper){
            case '+':
                this.result = this.a + this.b;
            break;
            case '-':
                this.result = this.a - this.b;
            break;
            case '*':
                this.result = this.a * this.b;
            break;
            case '/':
                this.result = this.a / this.b;
            break;
            default: this.result = 0;
        }
        this.show()
    };
    this.show = function(){
        alert(this.a + ' ' + this.oper + ' ' + this.b + " = " + this.result)
    };
};

let calc = new Calc();
calc.get();  */

let numA = document.querySelector('#a'),
    numB = document.querySelector('#b'),
    operInp = document.querySelector('#operation'),
    resBtn = document.querySelector('.result'),
    paragraph = document.querySelector('show-result');

let Calc = function () {
    this.get = function () {
        this.a = +numA
        this.b = +numB
        this.oper = operInp

        resBtn.addEventListener('click', () => {
            switch (this.oper) {
                case '+':
                    this.result = this.a + this.b;
                    break;
                case '-':
                    this.result = this.a - this.b;
                    break;
                case '*':
                    this.result = this.a * this.b;
                    break;
                case '/':
                    this.result = this.a / this.b;
                    break;
                default: this.result = alert('Неверное значение операции');
            }
            this.show()
        })
        this.show = function () {
            paragraph.innerHTML(this.a + ' ' + this.oper + ' ' + this.b + " = " + this.result)
        };
    };
};

let calc = new Calc();
calc.get(); 