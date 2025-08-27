const todo = (() => {
    let todoList = [];
    function getRandomUUID() {
        return crypto.randomUUID();
    }
    return {
        addTodo(todo) {
            const id = getRandomUUID();
            const newTodo = {
                todo,
                id,
                status: 0,
            };
            todoList.push(newTodo);
            console.log(`추가됨: ${todo}, UUID: ${id}`);
            return newTodo;
        },
        printTodoList() {
            if (todoList.length <= 0) return console.log(`TODO List : 할 일 없음`);
           
            const formattedTodoList = todoList.map(item => ({
                todo: item.todo,
                id: item.id,
                status: item.status === 1 ? ":흰색_확인_표시:" : ":사각형_안_가위표:"
            }));
       
            return console.log(`TODO List : ${JSON.stringify(formattedTodoList, null, 2)}`);
        },
        toggleTodo(id) {
            const item = todoList.find(t => t.id === id);
            if (!item) {
                console.log("해당 ID가 존재하지 않습니다.1");
                return;
            }
            item.status = item.status === 0 ? 1 : 0;
            console.log(`토글 완료: ${item.todo}, 현재 상태: ${item.status === 1 ? "완료" : "미완료"}`);
        },
        modifyTodo(id, newTodo) {
            const item = todoList.find(t => t.id === id);
            if (!item) {
                console.log("해당 ID가 존재하지 않습니다.2");
                return;
            }
            item.todo = newTodo;
            console.log(`수정 완료: ID ${id}, 새로운 내용: ${newTodo}`);
        },
        deleteTodo(id) {
            const item = todoList.findIndex(t => t.id === id);
            if (item === -1) {
                console.log("해당 ID가 존재하지 않습니다.3");
                return;
            } 
            const deleted = todoList.splice(item, 1)
            console.log(`삭제 완료: ${deleted[0].todo}`);
        }
    };
})();
export default todo;

// 아래는 모의 호출 예시 (주석 해제하고 새로고침하면 자동 실행됨)
const a = todo.addTodo("자바스크립트 공부");
const b = todo.addTodo("운동하기?");
todo.printTodoList();

todo.toggleTodo(a.id);
todo.printTodoList();

todo.modifyTodo(b.id, "매일 아침 운동하기");
todo.printTodoList();

todo.deleteTodo(a.id);
todo.printTodoList();