class MyString {
    reverse(str){
        return str.split('').reverse().join('')
    }
    ucFirst(str){        
        if (!str) return str;      
        return str[0].toUpperCase() + str.slice(1); 
    }
    ucWords(string){
        return string.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ')
    }
}
const str = new MyString();
console.log(str.reverse('IVAN'))
console.log(str.ucFirst('arsenal'))
console.log(str.ucWords('arsenal arsenal arsenal'))