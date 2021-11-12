import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { List } from '../user.interface';
import { STUDENTS } from '../mock-users';
import { faArchive, faUserPlus } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  faArchive = faArchive;
  faUserPlus = faUserPlus;
  users: List[] = [];
  selectedUser: List | undefined | null;
  showUserForm: boolean = false;
  userToAdd: List = {
    id: 0,
    studentCode : 0,
    firstName: '',
    lastName : '',
    subjects : '',
    passDate : new Date(),
  };

  constructor() { }

  ngOnInit(): void {
    console.log("init")
    this.users = STUDENTS;
  }

  selectUser(id: number) {
    //this.selectedUser = this.users.find(e => e.id == id);
    const selectedUser = this.users.find(e => e.id == id);
    this.selectedUser = Object.assign({}, selectedUser);
  }

  save(user: List | undefined | null) {
    if (user) {
      //1st way
      const id = user.id;
      const indx = this.users.findIndex(e => e.id === id);
      if (indx > -1) {
        this.users[indx] = user;
      }

      //2nd way
      /*let selectedUser = this.users.find(e => e.id == id);
      if (selectedUser) {
        selectedUser.name = this.selectedUser.name;
      }*/
    }
  }

  deleteUser(id: number) {
    const indx = this.users.findIndex(e => e.id == id);
    if (indx > -1) {
      this.users.splice(indx, 1);
      this.selectedUser = null;
    }
  }

  showAddUserForm() {
    this.selectedUser = null;
    this.showUserForm = true;
  }

  addUser() {
    let maxId = 0;
    for (let i = 0, l = this.users.length; i < l; i++) {
      if (this.users[i].id > maxId) {
        maxId = this.users[i].id;
      }
    }
    this.userToAdd.id = ++maxId;
    this.users.push(this.userToAdd);
    this.showUserForm = false;
    //this is to clear form when add user again
    this.userToAdd = { id: 0, studentCode: 0 ,firstName: '',lastName:'',subjects:'',passDate:new Date()};
  }
}
