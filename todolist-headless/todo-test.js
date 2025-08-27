import * as todo from "./script.js";
// 콘솔에서 빠르게 접근 가능하도록 window에 바인딩
window.todo = todo;

// 아래는 모의 호출 예시 (주석 해제하고 새로고침하면 자동 실행됨)
const a = todo.addTodo("자바스크립트 공부");
const b = todo.addTodo("운동하기");
todo.printTodoList();

todo.toggleTodo(a.id);
todo.printTodoList();

todo.modifyTodo(b.id, "매일 아침 운동하기");
todo.printTodoList();

todo.deleteTodo(a.id);
todo.printTodoList();
