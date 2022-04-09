const user = {
    name: 'Олег',
    surname: 'Варкалов',
    birthday: '05.09.1995',
    reason: 'хочет иметь высокий доход',
    logName() {
        console.log('Имя: ', this.name);
    },
    logSurname() {
        console.log('Фамилия: ', this.surname);
    },
    logBirthday() {
        console.log('Дата рождения: ', this.birthday);
    },
    logReason() {
        console.log(this.name, this.surname, 'хочет выучить JS потому что', this.reason + '.');
    },
    logDream(userDream) {
        console.log(this.name, this.surname, 'мечтает о', userDream + '.');
    },
    logFullInformation() {
        this.logName();
        this.logSurname();
        this.logBirthday();
        this.logReason();
    },
};

user.logFullInformation();
user.logDream('полёте в космос в качестве туриста');