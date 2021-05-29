import { makeAutoObservable } from "mobx";
export default class TaskStore {
  constructor() {
    this._status = [];
    this._users = [];
    this._tasks = [];
    //this._lastItem = this._tasks[this._tasks.length - 1];
    this._isRender = false;

    makeAutoObservable(this);
  }

  setRender(bool) {
    this._isRender = bool;
  }
  setStatus(status) {
    this._status = status;
  }
  setUsers(users) {
    this._users = users;
  }
  setTasks(tasks) {
    this._tasks = tasks;
  }
  // setLastItem(lastItem) {
  //   this._lastItem = lastItem;
  // }

  get isRender() {
    return this._isRender;
  }

  get status() {
    return this._status;
  }
  get users() {
    return this._users;
  }
  get tasks() {
    return this._tasks;
  }
  // get lastItem() {
  //   return this._lastItem;
  // }
}
