export const fruitMixin = {
    data() {
        return {
            fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
            filterText: ''
        }
    },
    computed: {
        fruitFilter(){
            return this.fruits.filter((element) =>{
                return element.match(this.filterText);
            });
        }
    },
    created() {
        console.info('fruitMixin created'); //混入与当前组件存在相同的方法，则 都执行。执行顺序是 先混入，再组件
    }
}